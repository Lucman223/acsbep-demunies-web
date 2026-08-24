import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Option2.module.css';
import logo from '../assets/logo.png';
import { contentData } from '../data/content';

function Option2() {
  return (
    <div style={{ fontFamily: 'Helvetica, Arial, sans-serif', backgroundColor: '#f9fafb' }}>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="ACSBEP-DEMUNIES Logo" className={styles.logoImg} />
          <strong style={{ color: '#fff', letterSpacing: '2px' }}>ACSBEP</strong>
        </div>
        <div className={styles.navLinks}>
          <a href="#historia">HISTORIA</a>
          <a href="#acciones">ACCIONES</a>
          <a href="#transparencia">TRANSPARENCIA</a>
          <Link to="/" style={{ color: '#10b981' }}>← VOLVER</Link>
        </div>
        <button className={styles.btnDonate}>DONAR</button>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Menos palabras.<br/>Más acción.</h1>
          <p className={styles.heroText}>{contentData.hero.description}</p>
          <button className={styles.btnDonate} style={{ padding: '1.2rem 3rem', fontSize: '1.2rem' }}>COLABORAR</button>
        </div>
      </section>

      <section id="historia" className={styles.section}>
        <div className={styles.grid}>
          <div>
            <h2 className={styles.largeText}>Minkoro Bagayoko.<br/><span style={{ color: '#047857' }}>Mah Ka Sam.</span></h2>
          </div>
          <div>
            <p className={styles.smallText}>{contentData.history.text}</p>
          </div>
        </div>
      </section>

      <section id="acciones" className={styles.section} style={{ backgroundColor: '#111827', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 className={styles.largeText} style={{ color: 'white', marginBottom: '4rem', textAlign: 'center' }}>NUESTRO IMPACTO DIRECTO</h2>
          <div className={styles.actionGrid}>
            {contentData.activities.map(act => (
              <div key={act.id} className={styles.actionCard}>
                <img src={act.image} alt={act.title} className={styles.actionImg} />
                <div className={styles.actionContent}>
                  <h3 className={styles.actionTitle}>{act.title}</h3>
                  <p className={styles.actionDesc}>{act.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="transparencia" className={styles.section}>
        <div className={styles.grid} style={{ alignItems: 'flex-start' }}>
          <div>
            <h2 className={styles.largeText} style={{ marginBottom: '2rem' }}>{contentData.impact.title}</h2>
            <p className={styles.smallText}>{contentData.impact.text}</p>
          </div>
          <div className={styles.statsWrapper}>
            {contentData.stats.map((stat, idx) => (
              <div key={idx} className={styles.statLine}>
                <span className={styles.sValue}>{stat.value}</span>
                <span className={styles.sLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p style={{ letterSpacing: '1px', textTransform: 'uppercase' }}>ACSBEP-DEMUNIES © 2026</p>
      </footer>
    </div>
  );
}

export default Option2;
