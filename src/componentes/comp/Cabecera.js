import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom

const Cabecera = () => {
    return(
        <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">ACADEMIA DE IDIOMAS</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>

          </li>
          <li className="nav-item">
            <Link className="nav-link" as={Link} to='/Actividades'>Actividades</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" as={Link} to="/Calendario">Calendario</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" as={Link} to="/Inscripcion">Inscripcion</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" as={Link} to="/Contacto">Contacto</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" as={Link} to="/Sede">Sede</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" as={Link} to="/Profesores">Profesores</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" as={Link} to="/Credito">Credito</Link>
          </li>
          
        </ul>
      </div>
    </div>
    
  </nav>
  <Outlet/>
  </div>
  
    );
  
};

export default Cabecera;