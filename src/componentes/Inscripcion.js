import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Inscripcion.module.css';

function Inscripcion() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    fechaNacimiento: '',
  });

  const [datosEnviados, setDatosEnviados] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones con los datos si es necesario
    setDatosEnviados(true);
  };
  const handleLimpiar = () => {
    setFormData({
      nombre: '',
      apellido: '',
      telefono: '',
      fechaNacimiento: '',
    });
    setDatosEnviados(false);
  };

  const containerStyle = {
    width: '60%',
    margin: '0 auto',
    borderRadius: '7px',
  };

  const formStyle = {
    height: '60vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '20px',
    borderRadius: '7px',
    backgroundColor: 'white',
    alignItems: "center",

  };

  return (
<div style={{background: 'linear-gradient(180deg, #040e07, #34774a)',}}>
    <br/><h2 style={{color:"white", textAlign:"center"}}>INSCRIBETE!!!</h2><br/>
    <div style={containerStyle}>
    <form style={formStyle} onSubmit={handleSubmit}>
      
        <label>
          Nombre  : 
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
        </label>
        <label>
          Apellido  : 
          <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} />
        </label>
        <label>
          Teléfono  : 
          <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} />
        </label>
        <label>
          Fecha de Nacimiento  : 
          <input
            type="date"
            name="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={handleChange}
          />
        </label>
        <button type="submit" style={{ backgroundColor: 'green', color: 'white',borderRadius:"4px" }}>
          Enviar Datos
        </button>
        <button type="button" style={{borderRadius:"4px" }}onClick={handleLimpiar}>
          Limpiar Formulario
        </button>
      </form>

      {datosEnviados && <p>Datos recibidos</p>}<br/><br/>

      </div>
    <footer className={styles.footer}>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              
            </div>
            <div className="col-md-5">
              <h4>About Us</h4>
              <p style={{textAlign:"left"}}>Una escuela de idiomas es un centro educativo que ofrece programas <br/> 
              para el aprendizaje efectivo de lenguajes extranjeros. Proporciona clases <br/>
              estructuradas y recursos didácticos, facilitando la inmersión cultural y<br/>
               el dominio de habilidades lingüísticas. Profesores cualificados guían a <br/>
               los estudiantes a través de un enfoque interactivo y personalizado, fomentando<br/>
                la fluidez y la comprensión intercultural.</p>
              <p>Teléfono: +1 123 456 7890</p>
            </div>
            <div className="col-md-5">
              <h4>Síguenos</h4>
              <ul className="social-media">
                <li>
                  <Link
                    to="https://alumni.up.edu.mx/market/emprendimiento/mondo-academia-de-idiomas/2362"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="Facebook"
                      style={{ width: '40px', marginRight: '30px' }}
                      src='https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-1-2.png'
                    />
                  </Link>
                </li><br/>
                <li>
                  <Link
                    to="https://alumni.up.edu.mx/market/emprendimiento/mondo-academia-de-idiomas/2362"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="Twitter"
                      style={{
                        width: '40px',
                        marginRight: '30px',
                      }}
                      src='https://th.bing.com/th/id/R.d8db201dfd6a1a6b6b56c4446f051af1?rik=AgiJWHsAdOYsRQ&riu=http%3a%2f%2fbroadwaybradford.com%2fwp-content%2fuploads%2f2022%2f05%2fxtwitter.svg&ehk=%2bRC12KfJEquFX0pdWvWAkVGXFLImAYSQYzPDOOxxNyo%3d&risl=&pid=ImgRaw&r=0'
                    />
                  </Link>
                </li><br/>
                <li>
                  <Link
                    to="https://alumni.up.edu.mx/market/emprendimiento/mondo-academia-de-idiomas/2362"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="Instagram"
                      style={{ width: '40px', marginRight:'30px'}}
                      src='https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-6.png'
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} ACADEMIA DE IDIOMAS Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Inscripcion;
