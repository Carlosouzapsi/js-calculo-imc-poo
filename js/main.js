// programa principal
// POO = PROGRAMAÇÃO ORIENTADA A OBJETOS
// classes = são modelos ou modelos de objetos
// objetos = são abstrações ou representações de 'coisas' que exite no mundo
// objeto = instância ou objeto do tipo | objeto é um tipo de dados

class Pessoa {
  //Atributos = variáveis ou características
  nome; // String
  idade; // Integer
  peso; // tipo Float ou Real
  altura; // tipo Float ou Real
  //Métodos = funções ou comportamentos
}

// Criar novo objeto a partir de uma classe
const pessoa1 = new Pessoa(); // instância de uma pessoa
const pessoa2 = new Pessoa();

// Atribuir valores para os atributos de um objeto
pessoa1.nome = "Edson";
pessoa1.idade = 40;
pessoa1.peso = 84.5;

pessoa2.nome = "Maria";
pessoa2.idade = 66;
pessoa2.peso = 63.2;

console.log(pessoa1);
console.log(pessoa2);
