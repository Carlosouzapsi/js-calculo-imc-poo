export class ListaPessoas {
  constructor(lista = []) {
    this._pessoas = lista;
  }
  adiciona(pessoa) {
    this._pessoas.push(pessoa);
  }
  // programacao defensiva retornar umaa copia de array
  // usando o concat, passando o nosso array como parametro
  get pessoas() {
    // return this._pessoas
    return [].concat(this._pessoas);
  }
}
