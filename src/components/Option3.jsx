import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Option3.module.css';
import logo from '../assets/logo.png';

function Option3() {
  return (
    <div style={{ fontFamily: 'Outfit, sans-serif' }}>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="ACSBEP-DEMUNIES Logo" className={styles.logoImg} />
        </div>
        <div className={styles.navLinks}>
          <a href="#">Misión</a>
          <a href="#">Comunidad</a>
          <a href="#">Videos</a>
          <Link to="/" style={{ color: '#b45309' }}>← Volver</Link>
        </div>
        <button className={styles.btnDonate}>Ayudar a la Comunidad</button>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Juntos creamos esperanza</h1>
          <p className={styles.heroText}>
            Llevando alimento, hogar y luz a las familias de Malí. Únete a la familia de Association Cœur Solidaire.
          </p>
          <button className={styles.btnDonate} style={{ padding: '1.2rem 2.5rem', fontSize: '1.2rem' }}>Hazte Solidario</button>
        </div>
      </section>

      <section className={styles.section}>
        <h2 style={{ fontSize: '3rem', margin: 0 }}>Nuestras Raíces</h2>
        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '1rem auto 0', opacity: 0.9 }}>
          Bajo el liderazgo de Minkoro Bagayoko, llevamos la ayuda directamente a las manos que más lo necesitan.
        </p>
        
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Comida y Ropa</h3>
            <p>Distribución de necesidades básicas para familias sin recursos.</p>
          </div>
          <div className={styles.card}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Hogares</h3>
            <p>Construcción y reparación de viviendas para dar un techo seguro.</p>
          </div>
          <div className={styles.card}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Energía</h3>
            <p>Instalación de paneles solares en comunidades apartadas.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Option3;
