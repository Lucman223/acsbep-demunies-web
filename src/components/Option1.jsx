import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Option1.module.css';
import logo from '../assets/logo.png';
import { contentData } from '../data/content';

function Option1() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="ACSBEP-DEMUNIES Logo" className={styles.logoImg} />
          <strong style={{ color: '#1e3a8a' }}>ACSBEP-DEMUNIES</strong>
        </div>
        <div className={styles.navLinks}>
          <a href="#about">Sobre Nosotros</a>
          <a href="#projects">Nuestra Acción</a>
          <a href="#impact">Transparencia</a>
          <Link to="/" style={{ color: '#f59e0b' }}>← Volver</Link>
        </div>
        <button className={styles.btnDonate}>Hacer Donación</button>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{contentData.hero.title}</h1>
          <p className={styles.heroText}>{contentData.hero.description}</p>
          <button className={styles.btnDonate} style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>Dona Ahora</button>
        </div>
      </section>

      <section id="about" className={styles.section} style={{ backgroundColor: '#ffffff', textAlign: 'left' }}>
        <div className={styles.container}>
          <div className={styles.flexRow}>
            <div style={{ flex: 1 }}>
              <h2 className={styles.sectionTitle}>{contentData.history.title}</h2>
              <div className={styles.titleUnderline}></div>
              <p className={styles.paragraph}>{contentData.history.text}</p>
            </div>
            <div style={{ flex: 1 }}>
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Minkoro Bakayoko" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Áreas de Intervención</h2>
          <div className={styles.titleUnderline} style={{ margin: '0 auto 3rem auto' }}></div>
          <div className={styles.cardGrid}>
            {contentData.activities.map(act => (
              <div key={act.id} className={styles.card}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{act.icon}</div>
                <h3>{act.title}</h3>
                <p>{act.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className={styles.section} style={{ backgroundColor: '#1e3a8a', color: 'white' }}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle} style={{ color: 'white', textAlign: 'center' }}>{contentData.impact.title}</h2>
          <div className={styles.titleUnderline} style={{ margin: '0 auto 3rem auto', backgroundColor: '#f59e0b' }}></div>
          <p className={styles.paragraph} style={{ color: '#e5e7eb', textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
            {contentData.impact.text}
          </p>
          
          <div className={styles.statsGrid}>
            {contentData.stats.map((stat, idx) => (
              <div key={idx} className={styles.statBox}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2026 ACSBEP-DEMUNIES. Todos los derechos reservados.</p>
        <div style={{ marginTop: '1rem' }}>
          <a href="#" style={{ color: '#9ca3af', marginRight: '1rem' }}>Facebook (#acsbep)</a>
          <a href="#" style={{ color: '#9ca3af' }}>TikTok (#mahkasam)</a>
        </div>
      </footer>
    </div>
  );
}

export default Option1;
