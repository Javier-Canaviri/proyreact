import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Inicio.module.css';
import imagen from '../imagenes-vid/INI1.png'; 
import imagen1 from '../imagenes-vid/INI2.webp';
import imagen2 from '../imagenes-vid/INI3.jpg';
import imagen3 from '../imagenes-vid/INI4.jpg';
import imagen4 from '../imagenes-vid/INI5.png';
import imagen5 from '../imagenes-vid/INI6.png';

const SeisTarjetas = () => {
  return (
    <div style={{background: 'linear-gradient(180deg, #040e07, #34774a)',}}>
        
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                
      <div style={{ width: '45%', margin: '10px', borderRadius: '7px', background: 'white' }}>
        
        <img
          src={imagen}
          alt="Foto 1"
          style={{ width: '100%', objectFit: 'cover', borderRadius: '7px 7px 0 0' }}
        />
        <div style={{ padding: '10px' }}>
          <p>Inmersión Cultural y Lingüística:
Sumérgete en una experiencia educativa única que combina la
 enseñanza de idiomas con la inmersión cultural. Nuestra academia ofrece un enfoque 
interactivo y personalizado para que domines nuevas lenguas mientras
 exploras las riquezas culturales que ofrecen.</p>
        </div>
      </div>

      <div style={{ width: '45%', margin: '10px', borderRadius: '7px', background: 'white' }}>
        
        <img
          src={imagen1}
          alt="Foto 2"
          style={{ width: '100%', objectFit: 'cover', borderRadius: '7px 7px 0 0' }}
        />
        <div style={{ padding: '10px' }}>
          <p>Profesores Altamente Cualificados:
Contamos con un equipo de profesores altamente cualificados 
y apasionados por la enseñanza de idiomas. Con métodos pedagógicos 
innovadores, te guiaremos en tu viaje hacia la fluidez lingüística,
 brindándote las herramientas necesarias para el éxito.</p>
        </div>
      </div>

      <div style={{ width: '45%', margin: '10px', borderRadius: '7px', background: 'white' }}>
        
        <img
          src={imagen2}
          alt="Foto 3"
          style={{ width: '100%', objectFit: 'cover', borderRadius: '7px 7px 0 0' }}
        />
        <div style={{ padding: '10px' }}>
          <p>Variedad de Programas de Estudio:
Adaptamos nuestros programas de estudio para satisfacer las necesidades
 individuales de cada estudiante. Desde cursos intensivos
 hasta clases personalizadas, ofrecemos una amplia variedad de opciones
  para que encuentres la que mejor se ajuste a tu estilo de aprendizaje.</p>
        </div>
      </div>

      <div style={{ width: '45%', margin: '10px', borderRadius: '7px', background: 'white' }}>
        
        <img
          src={imagen3}
          alt="Foto 4"
          style={{ width: '100%', objectFit: 'cover', borderRadius: '7px 7px 0 0' }}
        />
        <div style={{ padding: '10px' }}>
          <p>Tecnología y Recursos Didácticos Modernos:
Utilizamos tecnología de vanguardia y recursos didácticos modernos para hacer que el aprendizaje sea estimulante y efectivo. Nuestras aulas están equipadas con las herramientas necesarias para que aproveches al máximo tu experiencia educativa.</p>
        </div>
      </div>

      <div style={{ width: '45%', margin: '10px', borderRadius: '7px', background: 'white' }}>
        
        <img
          src={imagen4}
          alt="Foto 5"
          style={{ width: '100%', objectFit: 'cover', borderRadius: '7px 7px 0 0' }}
        />
        <div style={{ padding: '10px' }}>
          <p>Comunidad Global de Estudiantes:
Únete a nuestra vibrante comunidad de estudiantes que comparten el mismo objetivo: dominar un nuevo idioma. Las actividades extracurriculares, eventos culturales y oportunidades de intercambio de idiomas te brindarán la oportunidad de practicar y perfeccionar tus habilidades lingüísticas.</p>
        </div>
      </div>

      <div style={{ width: '45%', margin: '10px', borderRadius: '7px', background: 'white' }}>
        
        <img
          src={imagen5}
          alt="Foto 6"
          style={{ width: '100%', objectFit: 'cover', borderRadius: '7px 7px 0 0' }}
        />
        <div style={{ padding: '10px' }}>
          <p>Flexibilidad Horaria y Ubicación Céntrica:
Reconocemos la importancia de la flexibilidad en tu agenda diaria. Ofrecemos horarios de clases flexibles y una ubicación céntrica para que puedas acceder fácilmente a nuestras instalaciones. Tu viaje hacia el dominio del idioma no debería comprometer tu estilo de vida.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

function Inicio() {
  return (
    <div>
      <div className={styles.inicio}>
        <div className={styles.titlecontainer}>
          <p>
            Enfocados en el <br />
            <b>Aprendizaje</b>
          </p>
          <p>
            Para los Mejores<br />
            <b>Con los Mejores</b>
          </p>
        </div>
        
        
      <br /><br /><br /><br />
      <br /><br />
      </div>

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

export default Inicio;
