import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Credito.module.css';

function Credito() {
  return (
    <div>
      <div className={styles.inicio}>
        <div className={styles.titlecontainer}>
        <br/><h2 style={{color:"white", textAlign:"center"}}>CREDITOS</h2><br/>
          <p>
            Nombre :<br />
            <b>Carlos Javier<br /> Canaviri Huaranca</b>
          </p>
          <p>
            CI :<br />
            <b>10063795 LP</b>
          </p>
        </div>
        
        
      <br /><br /><br /><br />
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
                </li>
                <br />
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
                </li>
                <br />
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
}

export default Credito;
