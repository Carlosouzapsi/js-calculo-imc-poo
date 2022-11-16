import { Pessoa } from "../models/Pessoa.js";
import { ListaPessoas } from "../models/ListaPessoas.js";
import { PessoasView } from "../views/PessoasView.js";
import { Mensagem } from "../models/Mensagem.js";
import { MensagemView } from "../views/MensagemView.js";

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
    console.log(this._pessoasRepository);
    const lista = this._pessoasRepository.ler();
    console.log(lista);
    ///////////////////////////////////////////////////

    // Criar a lista de pessoas
    this._listaPessoas = new ListaPessoas(lista);
    this._pessoasView = new PessoasView(document.querySelector("#dados"));
    this._pessoasView.update(this._listaPessoas);

    // mensagem
    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView(document.querySelector("#mensagem"));
    this._mensagemView.update(this._mensagem);

    this._pessoasView = new PessoasView(document.querySelector("#dados"));
    this._pessoasView.update(this._listaPessoas);
  }
  ///////////////
  // metodos ///
  //////////////
  // adicionar pessoa (método privado "_" )
  _adiciona(event) {
    event.preventDefault();
    // cria e adiciona nova pessoa na lista
    const pessoaAdd = this._criaPessoa();
    this._listaPessoas.adiciona(pessoaAdd);

    // Adicionar no repositorio base de dados
    this._pessoasRepository.criar(pessoaAdd);
    // update da tela - preenche tabela com a pessia
    this._pessoasView.update(this._listaPessoas);

    // definir e atualizar mensagem
    this._mensagem.texto = "Pessoa cadastrada com sucesso!";
    this._mensagemView.update(this._mensagem);
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
    this._inpuPeso.value = "";
    this._inputAltura.value = "";

    this._inputNome.focus();
  }
}
