import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Homepagenote from "./pages/homepagenote";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Homepagenote />
  </StrictMode>,
);
