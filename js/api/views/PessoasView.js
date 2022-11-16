import { View } from "../views/View.js";

export class PessoasView extends View {
  constructor(elemento) {
    super(elemento);
  }
  template(model) {
    return `<table>
                 <thead>
                    <tr>
                        <th>Nome</th><th>Idade</th><th>Peso</th><th>Altura</th>
                        <th>IMC</th><th>Situação</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.pessoas
                      .map((pessoa) => {
                        return `
                        <tr>
                            <td>${pessoa._nome}</td>
                            <td>${pessoa._idade}</td>
                            <td>${pessoa._peso}</td>
                            <td>${pessoa._altura}</td>
                            <td>${pessoa._imc.toFixed(2)}</td>
                            <td>${pessoa._classificacao}</td>
                        </tr>`;
                      })
                      .join("")}
                </tbody>
            </table>
                    `;
  }
}
