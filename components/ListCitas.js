import { CardCita } from "./index.js";

export function ListCitas() {
  return `
    <section>
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
