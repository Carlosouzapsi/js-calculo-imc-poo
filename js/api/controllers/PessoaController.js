import { Pessoa } from "../models/Pessoa.js";
import { ListaPessoas } from "../models/ListaPessoas.js";
import { PessoasView } from "../views/PessoasView.js";
import { Modal } from "../models/Modal.js";
import { ModalView } from "../views/ModalView.js";
import { PessoasRepository } from "../../repositories/PessoasRepository.js";

// Controle é uma classe de ações (neste caso, o crud)
export class PessoaController {
  // Atributos, propriedades
  _inputNome;
  _inputIdade;
  _inputPeso;
  _inputAltura;

  //construtor
  constructor() {
    this._inputNome = document.querySelector("#nome");
    this._inputIdade = document.querySelector("#idade");
    this._inputPeso = document.querySelector("#peso");
    this._inputAltura = document.querySelector("#altura");

    /////////////////////////////////////////
    // Repositorio - Operações de dados
    ////////////////////////////////////////
    this._pessoasRepository = new PessoasRepository();
    // console.log(this._pessoasRepository);
    const lista = this._pessoasRepository.ler();
    console.log(lista);
    ///////////////////////////////////////////////////

    // Criar a lista de pessoas
    this._listaPessoas = new ListaPessoas(lista);
    this._pessoasView = new PessoasView(document.querySelector("#dados"));
    this._pessoasView.update(this._listaPessoas);

    // mensagem
    // this._mensagem = new Mensagem();
    // this._mensagemView = new MensagemView(document.querySelector("#mensagem"));
    // this._mensagemView.update(this._mensagem);

    // Modal
    this._modal = new Modal();
    this._modalView = new ModalView(document.querySelector("#mensagemModal"));
    this._modalView.update(this._modal);
  }
  ///////////////
  // metodos ///
  //////////////
  // adicionar pessoa (método privado "_" )
  adiciona(event) {
    event.preventDefault();
    // cria e adiciona nova pessoa na lista
    const id = document.querySelector("#idPessoa").value;
    // Se n"ao tiver id adiciona senao atualiza
    if (!id) {
      console.log("Não tem id" + id);
      // adiciona nova pessoa na lista e atualizar a tela
      const pessoaAdd = this._criaPessoa();
      this._listaPessoas.adiciona(pessoaAdd);

      // Adicionar no repositorio base de dados
      this._pessoasRepository.criar(pessoaAdd);
      // update da tela - preenche tabela com a pessoa
      this._pessoasView.update(this._listaPessoas);

      // definir e atualizar mensagem
      // this._mensagem.texto = "Pessoa cadastrada com sucesso!";
      // this._mensagemView.update(this._mensagem);
      this._modalView.update(this._modal);
    } else {
      console.log("ID => " + id);
      this.atualiza(id); // atualiza do controller
    }
  }
  // criar pessoa método privado "_" )
  _criaPessoa() {
    return new Pessoa(
      this._inputNome.value,
      this._inputIdade.value,
      this._inputPeso.value,
      this._inputAltura.value
    );
  }
  // limpar formulario
  _limpaFormulario() {
    this._inputNome.value = "";
    this._inputIdade.value = "";
    this._inputPeso.value = "";
    this._inputAltura.value = "";

    this._inputNome.focus();
  }

  preencheFormulario(nome, idade, peso, altura) {
    this._inputNome.value = nome;
    this._inputIdade.value = idade;
    this._inputPeso.value = peso;
    this._inputAltura.value = altura;
  }
  apaga(id) {
    console.log("Id a ser apagado " + id);
    if (!id) {
      console.log("ID não foi informado");
      return;
    }
    console.log("ID " + id);
    this._listaPessoas.remove(id); // remove da view
    this._pessoasView.update(this._listaPessoas); // atualiza a view

    this._pessoasRepository.apagar(id); // remove do repository
    console.log("PessoaControlar Apagou");
  }
  atualiza(id) {
    const pessoaAtualizada = this._criaPessoa();
    console.log(pessoaAtualizada);

    // Atualizar repositorio
    this._pessoasRepository.atualizar(id, pessoaAtualizada);
    console.log("Atualizou repositório");
    // Atualizar lista
    this._listaPessoas.atualiza(id, pessoaAtualizada);
    console.log("Atualizou lista");

    // Atualizar a view
    this._pessoasView.update(this._listaPessoas);
    document.querySelector("#idPessoa").value = null;
  }
  buscaPorId(id) {
    let pessoaEncontrada = this._pessoasRepository.lerPorId(id);
    return pessoaEncontrada;
  }
}
