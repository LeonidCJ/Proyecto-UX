import { AddUserIcon, ClipboardIcon, ReceiptIcon } from "../icons/index.js";
import { CardAccess } from "./index.js";

const access = [
  {
    name: "Nuevo paciente",
    icon: AddUserIcon({ classname: "size-20" }),
  },
  {
    name: "Agregar nota clínica",
    icon: ClipboardIcon({ classname: "size-20" }),
  },
  {
    name: "Crear receta",
    icon: ReceiptIcon({ classname: "size-20" }),
  },
];

export function ListAccess() {
  return `
      <div class="flex gap-8">
        ${access.map((item) =>
          CardAccess({
            name: item.name,
            icon: item.icon,
          }),
        )}
      </div>
  `;
}
