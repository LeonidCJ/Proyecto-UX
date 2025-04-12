import {
  ListAccess,
  ListNotification,
  ListCitas,
} from "../components/Dashboard/index.js";

export function Dashboard() {
  return `
    <section class="flex flex-col w-full gap-6 py-6 pr-12 pl-3">
      <header class="flex gap-2 items-center ">
        <div class="size-12 rounded-full bg-gray-400"></div>
        <span class="text-2xl font-semibold"> Diego Alberto Salazar Garcia</span>
      </header>
      
      <main class="w-full h-full flex flex-col gap-6 justify-between">
        <div class="flex justify-between">
          <div>
            <h3 class="text-2xl font-bold">Citas del dia jueves 10 de Abril del 2025</h3>
            ${ListCitas()}
          </div>
          <aside class="flex flex-col gap-3 border-l-2 border-black pl-4">
            <h3 class="text-2xl font-bold">Notificaciones</h3>
            ${ListNotification()}
          </aside>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-2xl font-bold">Accesos rápidos</h3>
            ${ListAccess()}
        </div>
      </main>
    </section>
  `;
}
