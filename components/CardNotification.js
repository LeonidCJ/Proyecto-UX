import { AlertIcon } from "../icons/index.js";

export function CardNotification() {
  return `
    <article class="flex gap-2 bg-[#323232] p-3 rounded drop-shadow-2xl w-80 text-white">
      <aside>
        ${AlertIcon()}
      </aside>
      <main class="flex flex-col gap-2">
        <h4 class="leading-none text-lg font-bold">Titulo de la Notificacion</h4>
        <p class="text-pretty text-sm ">Lorem viverra urna. elit. tortor. ex ipsum sollicitudin. nec elit. tincidunt lorem. ex placerat. Ut id ... </small>
        <div class="flex justify-end">
          <button class="bg-white text-black font-semibold rounded-md px-3 py-2">Aceptar</button>
        </div>
      </main>
    </article>
  `;
}
