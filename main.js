import { Navbar } from "./components/UI/index.js";
import {
  Dashboard,
  Pacientes,
  CitasMedicas,
  Recetas,
  NotFound,
} from "./pages/index.js";

function navigate() {
  const root = document.getElementById("root");

  const page = window.location.hash || "#dashboard";

  root.innerHTML = `
    ${Navbar()}
    ${getPageContent(page)}
  `;
}

function getPageContent(page) {
  switch (page) {
    case "#dashboard":
      return Dashboard();
    case "#pacientes":
      return Pacientes();
    case "#citas-medicas":
      return CitasMedicas();
    case "#recetas":
      return Recetas();
    default:
      return NotFound();
  }
}

window.addEventListener("hashchange", navigate);

navigate();
