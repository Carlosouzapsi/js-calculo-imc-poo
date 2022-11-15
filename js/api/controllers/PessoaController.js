import { Pessoa } from "../models/Pessoa.js";

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
  }
  ///////////////
  // metodos ///
  //////////////
  // adicionar pessoa (método privado "_" )
  _adiciona(event) {
    event.preventDefault();
    // criar uma pessoa
    this._criaPessoa();
    console.log(this._criaPessoa());
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