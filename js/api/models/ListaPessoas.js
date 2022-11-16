export class ListaPessoas {
  constructor(lista = []) {
    this._pessoas = lista;
  }
  adiciona(pessoa) {
    this._pessoas.push(pessoa);
  }
  remove(id) {
    this._pessoas.splice(id, 1);
  }
  atualiza(id, pessoaAtualizada) {
    this._pessoas[id] = pessoaAtualizada;
  }
  // programacao defensiva retornar umaa copia de array
  // usando o concat, passando o nosso array como parametro
  get pessoas() {
    // return this._pessoas
    return [].concat(this._pessoas);
  }
}
