import React from 'react';
import './index.css';

function App() {
  return (
    <>
      <nav className="navbar">
        <a href="#" className="logo">ACSBEP</a>
        <div className="nav-links">
          <a href="#about">Sobre Nosotros</a>
          <a href="#projects">Proyectos</a>
          <a href="#transparency">Transparencia</a>
        </div>
        <button className="btn-donate">Haz una donación</button>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Ayudando a los más vulnerables en Malí y toda África</h1>
          <p className="hero-subtitle">Association Cœur Solidaire pour le Bien-Être des Personnes Démunies. Juntos podemos cambiar vidas, paso a paso.</p>
          <button className="btn-donate" style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>Dona Ahora</button>
        </div>
      </section>

      <section id="about" className="about">
        <h2 className="section-title">Quiénes <span>Somos</span></h2>
        <p className="about-text">
          Somos una organización humanitaria sin fines de lucro con sede en Bamako (Tournant de Baco Djicoroni ACI). Nuestra misión es brindar asistencia a personas vulnerables y familias en situación de precariedad extrema, con total transparencia y dedicación.
        </p>

        <div className="figures-grid">
          <div className="figure-card">
            <h3>Minkoro Bagayoko</h3>
            <p>Conocido como <strong>"Mah Ka Sam"</strong>, es el motor principal y rostro de nuestra asociación. Filántropo e influencer maliense que moviliza a la comunidad para apoyar causas solidarias a través de redes sociales.</p>
          </div>
          <div className="figure-card">
            <h3>Transparencia Total</h3>
            <p>No ocultamos nada. A través de nuestros canales en YouTube y TikTok, documentamos casos reales y mostramos con total claridad la entrega de cada donación a quienes más lo necesitan.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="projects-header">
          <h2 className="section-title">Nuestros <span>Proyectos</span></h2>
          <p>Tus donaciones se transforman en acciones reales en el terreno.</p>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <img src="https://images.unsplash.com/photo-1593113514214-41d3ccb0c793?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Distribución" className="project-img" />
            <div className="project-content">
              <h3 className="project-title">Alimentos y Ropa</h3>
              <p className="project-desc">Kits de primera necesidad y asistencia financiera directa para familias que no pueden cubrir sus necesidades básicas.</p>
              <div className="progress-container"><div className="progress-bar" style={{ width: '85%' }}></div></div>
              <button className="btn-donate" style={{ width: '100%' }}>Apoyar este proyecto</button>
            </div>
          </div>

          <div className="project-card">
            <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Paneles Solares" className="project-img" />
            <div className="project-content">
              <h3 className="project-title">Desarrollo Local</h3>
              <p className="project-desc">Instalación de paneles solares y mejoras de infraestructura en zonas desfavorecidas para una mejor calidad de vida.</p>
              <div className="progress-container"><div className="progress-bar" style={{ width: '60%' }}></div></div>
              <button className="btn-donate" style={{ width: '100%' }}>Apoyar este proyecto</button>
            </div>
          </div>

          <div className="project-card">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Viviendas" className="project-img" />
            <div className="project-content">
              <h3 className="project-title">Viviendas Dignas</h3>
              <p className="project-desc">Renovación y construcción de hogares seguros para personas viviendo en situaciones de extrema pobreza.</p>
              <div className="progress-container"><div className="progress-bar" style={{ width: '40%' }}></div></div>
              <button className="btn-donate" style={{ width: '100%' }}>Apoyar este proyecto</button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <h2>ACSBEP-DEMUNIES</h2>
        <p>Tournant de Baco Djicoroni ACI près de la BNDA - Bamako, Mali</p>
        <div className="social-links">
          <a href="#">YouTube (@mah_ka_sam)</a>
          <a href="#">TikTok</a>
          <a href="#">Facebook</a>
        </div>
        <p style={{ marginTop: '2rem', fontSize: '0.9rem', opacity: 0.7 }}>
          © 2026 Association Cœur Solidaire pour le Bien-Être des Personnes Démunies.
        </p>
      </footer>
    </>
  );
}

export default App;
