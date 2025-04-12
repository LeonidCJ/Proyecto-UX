import { CardCita } from "./index.js";

export function ListCitas() {
  return `
    <section class="overflow-y-auto w-full  max-h-[calc(100vh-400px)]">
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
