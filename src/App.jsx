import logo from './logo.svg';
import './App.css';

//

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Inicio from "./pages/Inicio";
import Personajes from "./pages/Personajes";
  // import FichaPersonaje from "./pages/Ficha-personaje";
  // import Protagonistas from "./pages/Protagonistas";
import Contacto from "./pages/Contacto";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/personajes" element={<Personajes />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  </BrowserRouter>
   );
}

export default App;
