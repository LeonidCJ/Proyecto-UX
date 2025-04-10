import {
  CalendarIcon,
  DashboardIcon,
  ReceiptIcon,
  UsersGroupIcon,
  ClipboardIcon,
} from "../icons/index.js";

export const links = [
  {
    link: "#/dashboard",
    name: "Dashboard",
    icon: DashboardIcon(),
  },
  {
    link: "#/pacientes",
    name: "Pacientes",
    icon: UsersGroupIcon(),
  },
  {
    link: "#/historia-clinica",
    name: "Historia Clinica",
    icon: ClipboardIcon(),
  },
  {
    link: "#/citas-medicas",
    name: "Citas Médicas",
    icon: CalendarIcon(),
  },
  {
    link: "#/recetas",
    name: "Recetas",
    icon: ReceiptIcon(),
  },
];
