import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Option3.module.css';
import logo from '../assets/logo.png';
import { contentData } from '../data/content';

function Option3() {
  return (
    <div style={{ fontFamily: 'Outfit, sans-serif', backgroundColor: '#fffaf0' }}>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="ACSBEP-DEMUNIES Logo" className={styles.logoImg} />
        </div>
        <div className={styles.navLinks}>
          <a href="#historia">Misión</a>
          <a href="#comunidad">Comunidad</a>
          <a href="#impacto">Transparencia</a>
          <Link to="/" style={{ color: '#b45309' }}>← Volver</Link>
        </div>
        <button className={styles.btnDonate}>Ayudar a la Comunidad</button>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{contentData.hero.title}</h1>
          <p className={styles.heroText}>
            Llevando alimento, hogar y luz a las familias de Malí. Únete a la familia de {contentData.hero.subtitle}.
          </p>
          <button className={styles.btnDonate} style={{ padding: '1.2rem 2.5rem', fontSize: '1.2rem' }}>Hazte Solidario</button>
        </div>
      </section>

      <section id="historia" className={styles.sectionDark}>
        <div className={styles.container}>
          <h2 style={{ fontSize: '3rem', margin: '0 0 1rem 0' }}>La chispa que inició todo</h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
            {contentData.history.text}
          </p>
        </div>
      </section>

      <section id="comunidad" className={styles.sectionLight}>
        <div className={styles.container}>
          <h2 style={{ fontSize: '3rem', color: '#78350f', textAlign: 'center', marginBottom: '3rem' }}>Nuestras Raíces</h2>
          <div className={styles.cards}>
            {contentData.activities.map(act => (
              <div key={act.id} className={styles.card}>
                <img src={act.image} alt={act.title} className={styles.cardImg} />
                <div className={styles.cardBody}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#92400e' }}>{act.icon} {act.title}</h3>
                  <p>{act.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="impacto" className={styles.sectionDark} style={{ backgroundColor: '#78350f' }}>
        <div className={styles.container}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#fef3c7' }}>{contentData.impact.title}</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#fde68a', marginBottom: '3rem' }}>
              {contentData.impact.text}
            </p>
          </div>
          <div className={styles.statsFlex}>
            {contentData.stats.map((stat, idx) => (
              <div key={idx} className={styles.statItem}>
                <div className={styles.statNum}>{stat.value}</div>
                <div className={styles.statText}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>ACSBEP-DEMUNIES. Acción real en Malí y toda África.</p>
      </footer>
    </div>
  );
}

export default Option3;
