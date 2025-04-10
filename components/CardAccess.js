import { AddUserIcon } from "../icons/index.js";

export function CardAccess() {
  return `
    <div class="flex flex-col gap-4 border-2 rounded-2xl border-black border-dashed items-center px-6 py-4">
      <p class="font-semibold">Nuevo paciente</p>
      <span class="">${AddUserIcon({ classname: "size-20" })}</span>
    </div>
  `;
}
