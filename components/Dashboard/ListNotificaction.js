import { CardNotification } from "./index.js";

export function ListNotification() {
  return `
      <section class="list-notification">
        ${CardNotification()}
        ${CardNotification()}
        ${CardNotification()}
      </section>
  `;
}
