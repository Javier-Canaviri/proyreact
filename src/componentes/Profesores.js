import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Profesores.module.css';
import imagen from '../imagenes-vid/m1.jpg'; 
import imagen1 from '../imagenes-vid/m2.png'; 
import imagen2 from '../imagenes-vid/m3.jpg'; 
import imagen3 from '../imagenes-vid/m4.jpg'; 
import imagen4 from '../imagenes-vid/m5.webp'; 
import imagen5 from '../imagenes-vid/m6.jpg'; 


const SeisTarjetas = () => {
  return (
    <div style={{background: 'linear-gradient(180deg, #040e07, #34774a)',}}>
        <br/><h2 style={{color:"white", textAlign:"center"}}>PROFESORES</h2><br/>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                
      <div style={{ width: '45%', margin: '10px', borderRadius: '7px', background: 'white' }}>
        {/* Tarjeta 1 */}
        <img
          src={imagen}
          alt="Foto 1"
          style={{ width: '100%', objectFit: 'cover', borderRadius: '7px 7px 0 0' }}
        />
        <div style={{ padding: '10px' }}>
          <p>Profesora María García:
Descripción: María García, experta en enseñanza de español, combina su pasión por la lengua con dinámicas actividades que involucran a los estudiantes en la cultura hispana. Su enfoque interactivo y amable crea un ambiente propicio para el aprendizaje.</p>
        </div>
      </div>

      <div style={{ width: '45%', margin: '10px', borderRadius: '7px', background: 'white' }}>
        {/* Tarjeta 2 */}
        <img
          src={imagen1}
          alt="Foto 2"
          style={{ width: '100%',  objectFit: 'cover', borderRadius: '7px 7px 0 0' }}
        />
        <div style={{ padding: '10px' }}>
          <p>Profesora Isabella Rossi:
Descripción: Isabella Rossi, especializada en italiano, es conocida por su entusiasmo y dedicación. Sus clases no solo enseñan el idioma, sino que también sumergen a los estudiantes en la rica historia, arte y gastronomía italiana.</p>
        </div>
      </div>

      <div style={{ width: '45%', margin: '10px', borderRadius: '7px', background: 'white' }}>
        {/* Tarjeta 3 */}
        <img
          src={imagen2}
          alt="Foto 3"
          style={{ width: '100%',  objectFit: 'cover', borderRadius: '7px 7px 0 0' }}
        />
        <div style={{ padding: '10px' }}>
          <p>Profesor Yoni Sins:
Descripción: yoni Sins, apasionado por la enseñanza del francés, combina su amor por el idioma con actividades artísticas y culturales. Sus clases fomentan la creatividad y la expresión, haciendo que aprender francés sea una experiencia enriquecedora.</p>
        </div>
      </div>

      <div style={{ width: '45%', margin: '10px', borderRadius: '7px', background: 'white' }}>
        {/* Tarjeta 4 */}
        <img
          src={imagen3}
          alt="Foto 4"
          style={{ width: '100%', objectFit: 'cover', borderRadius: '7px 7px 0 0' }}
        />
        <div style={{ padding: '10px' }}>
          <p>Profesora Aisha Khan:
Descripción: Aisha Khan, profesora de árabe, aporta su experiencia y conocimiento cultural de la región del Medio Oriente. Sus clases no solo se centran en la gramática, sino también en las expresiones cotidianas y las costumbres árabes.</p>
        </div>
      </div>

      <div style={{ width: '45%', margin: '10px', borderRadius: '7px', background: 'white' }}>
        {/* Tarjeta 5 */}
        <img
          src={imagen4}
          alt="Foto 5"
          style={{ width: '100%',objectFit: 'cover', borderRadius: '7px 7px 0 0' }}
        />
        <div style={{ padding: '10px' }}>
          <p>Profesor David Anderson:
Descripción: David Anderson, instructor de inglés, es conocido por su enfoque relajado y divertido. Utiliza técnicas modernas para enseñar inglés de manera práctica y efectiva, brindando a los estudiantes las habilidades necesarias para la comunicación fluida.</p>
        </div>
      </div>

      <div style={{ width: '45%', margin: '10px', borderRadius: '7px', background: 'white' }}>
        {/* Tarjeta 6 */}
        <img
          src={imagen5}
          alt="Foto 6"
          style={{ width: '100%',  objectFit: 'cover', borderRadius: '7px 7px 0 0' }}
        />
        <div style={{ padding: '10px' }}>
          <p>Profesora Mei Ling Chen:
Descripción: Mei Ling Chen, profesora de mandarín, ofrece clases que van más allá de la lengua china. Integra aspectos culturales, tradiciones y la historia china para proporcionar a los estudiantes una experiencia completa de inmersión en el idioma.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

function Profesores() {
  return (
    <div>
      {/* Agrega las tarjetas aquí */}
      <SeisTarjetas />

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

export default Profesores;
