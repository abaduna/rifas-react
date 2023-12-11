import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
  } from "react-router-dom";

import MostrarNumeros from "../pages/MostrarNumeros";
import Numeros from "../pages/Numeros";
import Rifas from "../pages/Rifas";
import Login from "../pages/Login/Login"
// soluciones 1) hacer un renderizado condicional 2) armar un layout 3)Armar un Hoc 4) Armar un layout en una ruta privada
  const RoutesPrincial =()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<MostrarNumeros/>}/>

                <Route path="/rifas" element={<Rifas/>}/>
                <Route path="/login" element={<Login/>}/>
                
                <Route
                path="*"
                element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    )
  }

export default RoutesPrincial