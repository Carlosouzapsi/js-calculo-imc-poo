export class Pessoa {
  //Atributos = variáveis ou características
  _nome; //  String esse atributo é protegido por causa do _
  _idade; // Integer
  _peso; // tipo Float ou Real
  _altura; // tipo Float ou Real
  _imc;
  _classificacao; // string
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
    this._imc = this._peso / (this._altura * this._altura).toFixed(2); // set imc
    Pessoa.totalPessoas += 1; // contador de n de pessoas
    this._classificacao = this.classificaImc();
  }
  // O método calcula imc, na pratica funciona com um "set"
  // ou dá pra criar um Método para calcular o Imc
  calculaImc() {
    return (this._peso / (this._altura * this._altura)).toFixed(2);
  }

  // classificar
  classificaImc() {
    // pegar o
    const valorImc = this.imc.toFixed(2);
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
