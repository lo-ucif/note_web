import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Detailepage from "./pages/Detailepage";
import Creatnote from "./pages/Creatnote";
// import { LastIdProvider } from "./context/notecontext";
import { NoteProvider } from "./context/notecontext";
import { SearchProvider } from "./context/Searchcontext";

import "./App.css";
function App() {
  return (
    <SearchProvider>
      <NoteProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/info" element={<Detailepage />} />
            <Route path="/creat" element={<Creatnote />} />
          </Routes>
        </BrowserRouter>
      </NoteProvider>
    </SearchProvider>
  );
}

export default App;
