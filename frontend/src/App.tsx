import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Detailepage from "./pages/Detailepage";
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
        </Routes>
      </BrowserRouter>
    </NoteProvider>
  );
}

export default App;
