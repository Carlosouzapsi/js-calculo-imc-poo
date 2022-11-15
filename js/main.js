// programa principal
// POO = PROGRAMAÇÃO ORIENTADA A OBJETOS
// classes = são modelos ou modelos de objetos
// objetos = são abstrações ou representações de 'coisas' que exite no mundo
// objeto = instância ou objeto do tipo | objeto é um tipo de dados

class Pessoa {
  //Atributos = variáveis ou características
  _nome; //  String esse atributo é protegido por causa do _
  _idade; // Integer
  _peso; // tipo Float ou Real
  _altura; // tipo Float ou Real
  _imc;
  // Atributo estático ou de classe
  static totalPessoas = 0;

  //Métodos = funções ou comportamentos

  // Método construtor
  constructor(nome, idade, peso, altura) {
    this._nome = nome;
    this._idade = idade;
    this._peso = peso;
    this._altura = altura;
    // Caso queira já queira o resultado no objeto pode ser asism:
    this._imc = this._peso / (this._altura * this._altura);
    Pessoa.totalPessoas += 1; // contador de n de pessoas
  }
  // O método calcula imc, na pratica funciona com um "set"
  // ou dá pra criar um Método para calcular o Imc
  calculaImc() {
    return (this._peso / (this._altura * this._altura)).toFixed(2);
  }

  // classificar
  classificaImc(valorImc) {
    // pegar o
    valorImc = this.imc.toFixed(2);
    console.log("valorImc " + valorImc);
    let classificacao = "";
    if (valorImc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (valorImc <= 24.9) {
      classificacao = "Peso normal";
    } else if (valorImc <= 29.9) {
      classificacao = "Sobrepeso";
    } else if (valorImc <= 34.9) {
      classificacao = "Obesidade grau I";
    } else if (valorImc <= 39.9) {
      classificacao = "Obesidade grau 2";
    } else if (valorImc >= 40) {
      classificacao = "Obesidade grau 3 ou Mórbida";
    } else {
      classificacao = "Peso inválido";
    }
    return classificacao;
  }
  // get = pegar informação
  get nome() {
    return this._nome;
  }
  get imc() {
    return this._imc;
  }

  get idade() {
    return this._idade;
  }

  get peso() {
    return this._peso;
  }

  get altura() {
    return this._altura;
  }

  get totalPessoas() {
    return Pessoa.totalPessoas;
  }

  // set = configurar, editar, alterar
  set nome(novoNome) {
    this._nome = novoNome;
  }
  set idade(novaIdade) {
    this._idade = novaIdade;
  }

  set peso(novoPeso) {
    this._peso = novoPeso;
  }

  //Não precisa de um método set IMC, ver o motivo no calculaImc()!
}
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
