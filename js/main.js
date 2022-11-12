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

  //Métodos = funções ou comportamentos

  // Método construtor
  constructor(nome, idade, peso, altura) {
    this._nome = nome;
    this._idade = idade;
    this._peso = peso;
    this._altura = altura;
    // Caso queira já queira o resultado no objeto pode ser asism:
    this._imc = this._peso / (this._altura * this._altura);
  }
  // ou dá pra criar um Método para calcular o Imc
  calculaImc() {
    return (this._peso / (this._altura * this._altura)).toFixed(2);
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
  // set = configurar, editar, alterar
  set nome(novoNome) {
    this._nome = novoNome;
  }
  set idade(novaIdade) {
    this._idade = novaIdade;
  }
}
// Criar novo objeto a partir de uma classe
const pessoa1 = new Pessoa("Edson Maia", 40, 84.5, 1.76); // instância de uma pessoa
const pessoa2 = new Pessoa("Maria", 66, 73.4, 1.63);
const pessoa3 = new Pessoa("Ana", 20, 42.3, 1.41);
const pessoa4 = new Pessoa("Bia", 50, 98.7, 1.52);

// Imprimindo somente os objetos
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);

// Imprimindo os objetos só que usando o calc do Imc junto com o metodo
console.log(pessoa1.calculaImc());
console.log(pessoa2.calculaImc());
console.log(pessoa3.calculaImc());
console.log(pessoa4.calculaImc());

// Usando os métodos getters e setters
console.log("Nome " + pessoa1.nome);

