import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Actividades.module.css';
import imagen from '../imagenes-vid/ACT1.webp'; 
import imagen1 from '../imagenes-vid/ACT2.jpg'; 
import imagen2 from '../imagenes-vid/ACT3.jpg'; 
import imagen3 from '../imagenes-vid/ACT4.jpg'; 



const Actividades = () => {
  return (
    <div style={{ background: 'linear-gradient(180deg, #040e07, #34774a)',alignItems:"center"}}>
      <br/><br/>
      <h2 style={{color:"white", textAlign:"center"}}>ACTIVIDADES</h2>
      <br/><br/>
      <div
        style={{

          display: 'flex',
          border: '1px solid #ccc',
          borderRadius: '7px',
          padding: '10px',
          margin: '10px',
          width: '90%',
          height:'30%',
          transition: 'box-shadow 0.3s ease-in-out',
          boxShadow: '0 0 0 transparent',
          background:"white",
          marginLeft:"40px"

        }}
        onMouseOver={(e) => {
          e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.boxShadow = '0 0 0 transparent';
        }}
      >
        <img
          src={imagen}
          alt=""
          style={{
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            borderRadius: '4px',
            marginRight: '10px',
          }}
        />
        <div style={{ flex: 1 }}>
          <p>Proyectos Colaborativos:
Fomentamos proyectos colaborativos que involucran a los estudiantes en la creación de contenido relacionado con la lengua que están estudiando. Ya sea a través de blogs, vídeos o presentaciones, estos proyectos no solo mejoran las habilidades lingüísticas, sino que también promueven la creatividad y el trabajo en equipo.</p>
        </div>
      </div>
      <div
        style={{

          display: 'flex',
          border: '1px solid #ccc',
          borderRadius: '7px',
          padding: '10px',
          margin: '10px',
          width: '90%',
          height:'30%',
          transition: 'box-shadow 0.3s ease-in-out',
          boxShadow: '0 0 0 transparent',
          background:"white",
          marginLeft:"40px"
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.boxShadow = '0 0 0 transparent';
        }}
      >
        <img
          src={imagen1}
          alt=""
          style={{
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            borderRadius: '4px',
            marginRight: '10px',
          }}
        />
        <div style={{ flex: 1 }}>
          <p>Intercambio Cultural:
Organizamos intercambios culturales donde los estudiantes tienen la oportunidad de interactuar con hablantes nativos del idioma que están aprendiendo. Estas actividades fomentan la inmersión lingüística y ofrecen una experiencia auténtica para practicar las habilidades comunicativas en situaciones del día a día.</p>
        </div>
      </div>

      {/* Tarjeta 2 */}
      <div
        style={{
          display: 'flex',
          border: '1px solid #ccc',
          borderRadius: '7px',
          padding: '10px',
          margin: '10px',
          width: '90%',
          height:'30%',
          transition: 'box-shadow 0.3s ease-in-out',
          boxShadow: '0 0 0 transparent',
          background:"white",
          marginLeft:"40px"

        }}
        onMouseOver={(e) => {
          e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.boxShadow = '0 0 0 transparent';
        }}
      >
        <img
          src={imagen2}
          alt=""
          style={{
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            borderRadius: '4px',
            marginRight: '10px',
          }}
        />
        <div style={{ flex: 1 }}>
          <p>Simulaciones de Conversación:
A través de simulaciones de conversación, los estudiantes participan en escenarios de la vida real que les permiten aplicar lo aprendido en clase. Estas prácticas mejoran la fluidez, la pronunciación y la confianza al enfrentarse a situaciones cotidianas como pedir comida en un restaurante o dar direcciones.</p>
        </div>
      </div>

      {/* Tarjeta 3 */}
      <div
        style={{
          display: 'flex',
          border: '1px solid #ccc',
          borderRadius: '7px',
          padding: '10px',
          margin: '10px',
          width: '90%',
          height:'30%',
          transition: 'box-shadow 0.3s ease-in-out',
          boxShadow: '0 0 0 transparent',
          background:"white",
          marginLeft:"40px"

        }}
        onMouseOver={(e) => {
          e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.boxShadow = '0 0 0 transparent';
        }}
      >
        <img
          src={imagen3}
          alt=""
          style={{
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            borderRadius: '4px',
            marginRight: '10px',
          }}
        />
        <div style={{ flex: 1 }}>
          <p>Eventos Culturales y Gastronómicos:
Celebramos eventos culturales y gastronómicos que exploran la riqueza de la cultura asociada al idioma. Desde degustaciones de platos tradicionales hasta exhibiciones artísticas, estas actividades ofrecen una comprensión más profunda del contexto cultural y lingüístico, enriqueciendo la experiencia de aprendizaje.</p>
        </div>
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
}

export default Actividades;
