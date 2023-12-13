import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import  Actividades  from "./componentes/Actividades";
import  Sede  from "./componentes/Sede";
import  Contacto  from "./componentes/Contacto";
import  Inscripcion  from "./componentes/Inscripcion";
import  Calendario  from "./componentes/Calendario";
import  Credito from "./componentes/Credito";
import Inicio from "./componentes/Inicio";
import Profesores from "./componentes/Profesores";

import  Layout  from "./componentes/comp/Cabecera";
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/" element={<Inicio/>}/>
        <Route path="actividades" element={<Actividades/>}/>
        <Route path="calendario" element={<Calendario/>}/>
        <Route path="inscripcion" element={<Inscripcion/>}/>
        <Route path="contacto" element={<Contacto/>}/>
        <Route path="sede" element={<Sede/>}/>
        <Route path="profesores" element={<Profesores/>}/>
        <Route path="credito" element={<Credito/>}/>

      </Route>
        
      </Routes>
        

      </Router>
      
    </div>
  );
}

export default App;
