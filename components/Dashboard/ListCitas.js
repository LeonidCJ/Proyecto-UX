import { CardCita } from "./index.js";

export function ListCitas() {
  return `
    <section class="list-citas">
      ${CardCita()}
      ${CardCita()}
      ${CardCita()}
      ${CardCita()}
      ${CardCita()}
      ${CardCita()}
      ${CardCita()}
    </section>
  `;
}
