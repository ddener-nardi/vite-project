import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/navbar/navbar";
import { Home } from "./pages/home/home";
// import { CorpoDocentePage } from "./pages/corpo-docente/corpo-docente-page";
import { CorpoDocentePage } from "./pages/corpo-docente/corpo-docente-page";

function App() {
  return (
    <>
      <BrowserRouter> 
        <NavBar/> 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/corpo-docente" element={<CorpoDocentePage/>} />
          <Route path="/contato" element={<></>} />
          <Route path="/contact" element={<></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
