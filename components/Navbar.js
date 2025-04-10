import { LinkItem } from "./index.js";
import { links } from "../constants/link.js";
import { DashboardIcon } from "../icons/index.js";

export function Navbar() {
  return `
    <aside class="flex flex-col justify-between rounded-r-xl bg-gray-800 text-white px-3 py-4 h-screen ">
      <section class="flex flex-col gap-6">
        <div class="w-full bg-white h-16 rounded-lg"></div>
        <ul class="flex flex-col gap-2">
          ${links
            .map(
              (link) => `
                ${LinkItem({ link })}
          `,
            )
            .join("")}
        </ul>
      </section>
      ${LinkItem({
        link: {
          link: "#",
          name: "Cerrar Sesión",
          icon: DashboardIcon(),
        },
      })}
    </aside>
  `;
}
