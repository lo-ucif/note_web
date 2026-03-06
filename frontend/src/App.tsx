import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Detailepage from "./pages/Detailepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/info" element={<Detailepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
