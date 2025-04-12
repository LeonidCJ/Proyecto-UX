import { CardNotification } from "./index.js";

export function ListNotification() {
  return `
      <section class="flex flex-col gap-2">
        ${CardNotification()}
        ${CardNotification()}
        ${CardNotification()}
      </section>
  `;
}
