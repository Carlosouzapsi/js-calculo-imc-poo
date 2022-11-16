export class Mensagem {
  constructor(texto = "") {
    // javascript entende que esse atributo está criado mesmo declarado somente aqui
    this._texto = texto;
  }
  get texto() {
    return this._texto;
  }
  set texto(texto) {
    this._texto = texto;
  }
}
