import { PessoaController } from "./api/controllers/PessoaController.js";
import { ModalHelper } from "../js/api/helpers/ModalHelper.js";

const pessoaController = new PessoaController();

// Controlar envio de formulário e sua exibição na tabela:
// pega a TAG form.
const formulario = document.querySelector("#formulario");

// escutador de evento no formulário
formulario.addEventListener("submit", (event) => {
  // adiciona pessoa
  pessoaController.adiciona(event);

  ModalHelper.ocultarBotoes();
  ModalHelper.modal("Cadastro", "Pessoa cadastrada ou atualizada!");
  // limpar formulario
  pessoaController._limpaFormulario();
});

/// formulario formApagar
const formApagarEditar = document.querySelector("#formApagarEditar");
const btnApagar = document.querySelector("#btnApagar");
const btnEditar = document.querySelector("#btnEditar");

formApagarEditar.addEventListener("submit", (event) => {
  event.preventDefault();
});

btnApagar.addEventListener("click", () => {
  let id = document.querySelector("#id").value;
  console.log("Apagar registro " + id);

  document.querySelector("#id").value = null;

  ModalHelper.mostrarBotoes();
  // Abrir janela modal
  ModalHelper.modal("Apagar registro", `Deseja apagar o registro ${id}?`);
  // se clicar no botão sim
  document.querySelector("#sim").addEventListener("click", () => {
    pessoaController.apaga(id);
    id = null;
    ModalHelper.closeModal();
  });
});

btnEditar.addEventListener("click", () => {
  console.log("Editar");
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  document.querySelector("#nome").focus();
  const id = document.querySelector("#id").value;
  console.log("Editar registro " + id);

  document.querySelector("#idPessoa").value = id;
  document.querySelector("#id").value = null;

  const pessoa = pessoaController.buscaPorId(id);
  // console.log(pessoa);

  if (pessoa) {
    const { _nome, _idade, _peso, _altura } = pessoa;
    // Preenche o formulário com dados
    pessoaController.preencheFormulario(_nome, _idade, _peso, _altura);
  }
});

ModalHelper.fecharJanela();

/////////////////////////////
//// Conceitos das aulas ////
////////////////////////////

// programa principal
// POO = PROGRAMAÇÃO ORIENTADA A OBJETOS
// classes = são modelos ou modelos de objetos
// objetos = são abstrações ou representações de 'coisas' que exite no mundo
// objeto = instância ou objeto do tipo | objeto é um tipo de dados
/*
import { Pessoa } from "./Pessoa.js";

// Criar novo objeto a partir de uma classe
const pessoa1 = new Pessoa("Edson Maia", 40, 84.5, 1.76); // instância de uma pessoa
const pessoa2 = new Pessoa("Maria", 66, 73.4, 1.63);
const pessoa3 = new Pessoa("Ana", 20, 42.3, 1.41);
const pessoa4 = new Pessoa("Bia", 50, 98.7, 1.52);
const pessoa5 = new Pessoa("Paula", 50, 110, 1.98);

// Atributo de classe, vai imprimir o total de pessoas criadas a partir da classe
console.log(Pessoa.totalPessoas);

// Usando método classifica Imc:
console.log("Situação " + pessoa1.classificaImc());
console.log("Situação " + pessoa2.classificaImc());
console.log("Situação " + pessoa3.classificaImc());
console.log("Situação " + pessoa4.classificaImc());
console.log("Situação " + pessoa5.classificaImc());

// Imprimindo somente os objetos
// console.log(pessoa1);
// console.log(pessoa2);
// console.log(pessoa3);
// console.log(pessoa4);
// Comitando!
// Imprimindo os objetos só que usando o calc do Imc junto com o metodo
console.log(pessoa1.calculaImc());
console.log(pessoa2.calculaImc());
console.log(pessoa3.calculaImc());
console.log(pessoa4.calculaImc());

// Usando os métodos getters e setters

// Printando os gets:
console.log("Nome " + pessoa1.nome);
console.log("Idade " + pessoa1.idade);
console.log("IMC " + pessoa1.imc);
console.log("");
// Setando novos valores com o set e printando no console
pessoa1.nome = "Edson Lopes";
pessoa1.idade = 39;
pessoa1.peso = 80.0;

console.log("Nome " + pessoa1.nome);
console.log("Idade " + pessoa1.idade);
console.log("Peso " + pessoa1.peso);
console.log("IMC " + pessoa1.imc);
*/
