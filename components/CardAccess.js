export function CardAccess({ name, icon }) {
  return `
    <div class="flex min-w-48 max-w-48 w-48 flex-col gap-4 border-2 rounded-2xl border-black border-dashed items-center p-4 transition-colors hover:cursor-pointer hover:bg-zinc-200">
      <p class="font-semibold">${name}</p>
      <span class="">${icon}</span>
    </div>
  `;
}
