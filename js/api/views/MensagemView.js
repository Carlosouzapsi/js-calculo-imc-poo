import { View } from "../views/View.js";

export class MensagemView extends View {
  constructor(elemento) {
    super(elemento);
  }
  template(model) {
    return model.texto
      ? `<p class="alert alert-success">${model.texto}</p>`
      : "<pq></pq>";
  }
  // não dá pra usar o método implementado só na classe mãe, aqui rolou polimorfismo
  // O método tem a mesma assinatura do método mãe, contudo precisa de outras ações
  // neste contexto
  update(model) {
    this._elemento.innerHTML = this.template(model);
    // após 3 segundos limpa a mensagem de sucesso de cadastro
    setTimeout(() => (this._elemento.innerHTML = ""), 3000);
  }
}
