export class PessoasRepository {
  _getLocalStorage;
  _setLocalStorage;

  constructor() {
    this._getLocalStorage = () => JSON.parse(localStorage.getItem("db")) ?? [];
    this._setLocalStorage = (db) =>
      localStorage.setItem("db", JSON.stringify(db));
    console.log("Local Storage");
  }
  // Dentro do repository fica o CRUD
  // Create = Criar
  criar(pessoa) {
    const dbPessoa = this._getLocalStorage();
    console.log(pessoa);
    dbPessoa.push(pessoa);
    this._setLocalStorage(dbPessoa);
  }
  // Read = Ler
  ler() {
    return this._getLocalStorage();
  }
  // update = atualizar, editar
  atualizar(id, pessoaAtualizada) {
    const dbPessoa = this.ler();

    dbPessoa[id] = pessoaAtualizada;
    this._setLocalStorage(dbPessoa);
  }
  // delete - Apagar
  apagar(id) {
    const dbPessoa = this.ler();
    dbPessoa.splice(id, 1);
    this._setLocalStorage(dbPessoa);
  }
  // ler por id
  lerPorId(id) {
    const dbPessoa = this.ler();
    return dbPessoa[id];
  }
}
