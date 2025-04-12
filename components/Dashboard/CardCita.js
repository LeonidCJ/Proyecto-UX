export function CardCita() {
  return `
    <div class="flex gap-8">
      <div class="relative flex items-center border-r-2 border-black px-8">
        <span>8:00 AM</span>
        <div class="absolute -right-3 button-1/2 size-5 bg-black rounded-full"></div>
      </div>
      <article class="flex flex-col gap-2 py-4">
        <header class="flex gap-4 justify-between items-center">
          <p class="text-xl">Diego Salazar Garcia</p>
          <span class="bg-zinc-500 text-white rounded px-3 ">Pendiente</span>
        </header>
        <main>
          <p>Detalles de  la cita...</p>
        </main>
      </article>
    </div>
  `;
}
