import { LinkItem } from "./LinkItem.js";
import { links } from "../../constants/links.js";
import { LogoutIcon } from "../../icons/index.js";

export function Navbar() {
  return `
    <aside class="navbar">
      <section class="navbar-section">
        <div class="white-box"></div>
        <ul>
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
          icon: LogoutIcon(),
        },
      })}
    </aside>
  `;
}
