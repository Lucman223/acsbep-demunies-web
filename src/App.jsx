import React from 'react';
import './index.css';
import logo from './assets/logo.png';
import { contentData } from './data/content';

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="ACSBEP-DEMUNIES Logo" className="logo-img" />
          <div className="logo-text">ACSBEP-DEMUNIES</div>
        </div>
        <div className="nav-links">
          <a href="#historia">HISTORIA</a>
          <a href="#proyectos">ACCIÓN</a>
          <a href="#impacto">TRANSPARENCIA</a>
        </div>
        <a href="#" className="btn-donate">COLABORAR</a>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-tag">Solidaridad y Acción</div>
          <h1 className="hero-title">
            Esperanza para<br/><span>todo Malí.</span>
          </h1>
          <p className="hero-text">
            {contentData.hero.description}
          </p>
          <a href="#proyectos" className="btn-donate" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>
            Descubre Nuestro Trabajo
          </a>
        </div>
      </section>

      <section id="historia" className="section">
        <h2 className="section-title"><span>{contentData.history.title}</span></h2>
        <div className="history-grid">
          <div>
            <p className="history-text">
              {contentData.history.text}
            </p>
            <p className="history-text" style={{ marginTop: '1.5rem', fontWeight: '600', color: '#10b981' }}>
              Bajo el liderazgo de Mah Ka Sam, la ayuda llega directamente a las manos que más lo necesitan.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1593113514214-41d3ccb0c793?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Ayuda humanitaria" 
              className="history-img"
            />
          </div>
        </div>
      </section>

      <section id="proyectos" className="section projects-section">
        <h2 className="section-title"><span>Nuestros Pilares de Acción</span></h2>
        <div className="cards">
          {contentData.activities.map(act => (
            <div key={act.id} className="card">
              <img src={act.image} alt={act.title} className="card-img" />
              <div className="card-body">
                <div className="card-icon">{act.icon}</div>
                <h3 className="card-title">{act.title}</h3>
                <p style={{ color: '#6b7280' }}>{act.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="impacto" className="section impact-section">
        <div className="impact-content">
          <h2 className="section-title" style={{ color: 'white' }}><span>{contentData.impact.title}</span></h2>
          <p className="impact-text">
            {contentData.impact.text}
          </p>
          <div className="stats">
            {contentData.stats.map((stat, idx) => (
              <div key={idx} className="stat-item">
                <div className="stat-num">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <img src={logo} alt="Logo" style={{ height: '40px', filter: 'grayscale(100%) opacity(0.5)' }} />
          <strong style={{ letterSpacing: '2px' }}>ACSBEP-DEMUNIES</strong>
        </div>
        <p>© 2026 Association Cœur Solidaire pour le Bien-Être des Personnes Démunies.</p>
        <p style={{ marginTop: '0.5rem' }}>Transparencia y acción por Malí.</p>
      </footer>
    </>
  );
}

export default App;
