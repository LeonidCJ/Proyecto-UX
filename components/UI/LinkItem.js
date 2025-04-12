export function LinkItem({ link }) {
  return `
    <li>
      <a 
        class="flex px-2 py-1 rounded gap-2 transition-colors hover:bg-white hover:text-black"
        href="${link.link}"
      >
        ${link.icon}
        <span class="text-nowrap">${link.name}</span>
      </a>
    </li>
  `;
}
