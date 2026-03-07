import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Textandlogo from "./components/Textandlogo";
import logo01 from "../src/assets/Personicon";
import App from "./App.tsx";
import "./style/animation.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="w-[90%]">
      <div className="sticky top-0 z-10  slide-in-blurred-top basecolor">
        <Textandlogo Icon={logo01} title="Good Morning, Ahmed !" />
      </div>
      <div className="pt-3 slide-in-blurred-top">
        <App />
      </div>
    </div>
  </StrictMode>,
);
