import { Routes, Route } from "react-router-dom";
import Homepagenote from "./pages/homepagenote";
import Infonote from "./pages/infonote";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepagenote />} />
      <Route path="/notes" element={<Infonote />} />
    </Routes>
  );
}
