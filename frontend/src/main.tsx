import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Textandlogo from "./components/Textandlogo";
import logo01 from "../src/assets/Personicon";
import App from "./App.tsx";
import "./style/animation.css";
import Notification from "./components/Notification.tsx";
import { NotificationProvider } from "./context/NotificationContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NotificationProvider>
      <div className="fixed z-30">
        <Notification />
      </div>

      <div className="w-[95%] slide-in-blurred-top">
        <div className="sticky top-0 z-10 basecolor">
          <Textandlogo Icon={logo01} title="Hello, Ahmed !" />
        </div>

        <div className="pt-3">
          <App />
        </div>
      </div>
    </NotificationProvider>
  </StrictMode>,
);
