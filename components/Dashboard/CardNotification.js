import { AlertIcon } from "../../icons/index.js";
import { NewPrimaryButton } from "../UI/index.js";

export function CardNotification() {
  return `
    <article class="card-notification">
      <aside>
        ${AlertIcon()}
      </aside>
      <main class="card-notification-main">
        <h4>Titulo de la Notificacion</h4>
        <p>Lorem viverra urna. elit. tortor. ex ipsum sollicitudin. nec elit. tincidunt lorem. ex placerat. Ut id ... </p>
        <div class="button-container">
          ${NewPrimaryButton()}
        </div>
      </main>
    </article>
  `;
}
