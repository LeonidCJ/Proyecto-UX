export function LinkItem({ link }) {
  return `
    <li>
      <a class="link-item" href="${link.link}">
        ${link.icon}
        <span>${link.name}</span>
      </a>
    </li>
  `;
}
