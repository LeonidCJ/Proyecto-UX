import { Navbar } from "./components/index.js";
import { Dashboard } from "./pages/index.js";

document.getElementById("root").innerHTML = `
  ${Navbar()}
  ${Dashboard()}
`;
