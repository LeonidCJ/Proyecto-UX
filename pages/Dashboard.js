import { CardCita, CardNotification, CardAccess } from "../components/index.js";

export function Dashboard() {
  return `
    <section class="flex flex-col w-full gap-6 py-6 pr-12 pl-3">
      <header class="flex gap-2 items-center ">
        <div class="size-12 rounded-full bg-gray-400"></div>
        <span class="text-2xl font-semibold"> Giovanni el kchudo del Año</span>
      </header>
      
      <main class="w-full">
        <div class="flex justify-between">
          <div>
            <h3 class="text-2xl font-bold">Citas del dia jueves 10 de Abril del 2025</h3>
            <section>
              ${CardCita()}
              ${CardCita()}
              ${CardCita()}
              ${CardCita()}
              ${CardCita()}
              ${CardCita()}
              ${CardCita()}
            </section>
          </div>
          <aside class="flex flex-col gap-3">
            <h3 class="text-2xl font-bold">Notificaciones</h3>
            <section class="flex flex-col gap-2">
              ${CardNotification()}
              ${CardNotification()}
              ${CardNotification()}
            </section>
          </aside>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-2xl font-bold">Accesos rápidos</h3>
          <div class="flex gap-8">
            ${CardAccess()}
            ${CardAccess()}
            ${CardAccess()}
          </div>
        </div>
      </main>
    </section>
  `;
}
