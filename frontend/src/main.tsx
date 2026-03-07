import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Textandlogo from "./components/Textandlogo";
import logo01 from "../src/assets/Personicon";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="fixed z-10 w-[95%]">
      <Textandlogo Icon={logo01} title="Good Morning, Ahmed !" />
    </div>
    <div className="pt-22 w-[95%]">
      <App />
    </div>
  </StrictMode>,
);
