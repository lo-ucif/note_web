import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Detailepage from "./pages/Detailepage";
import Creatnote from "./pages/Creatnote";
// import { LastIdProvider } from "./context/notecontext";
import { NoteProvider } from "./context/notecontext";

import "./App.css";
function App() {
  return (
    <NoteProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/info" element={<Detailepage />} />
          <Route path="/creat" element={<Creatnote />} />
        </Routes>
      </BrowserRouter>
    </NoteProvider>
  );
}

export default App;
