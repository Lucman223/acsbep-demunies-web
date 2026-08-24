import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Option2.module.css';
import logo from '../assets/logo.png';

function Option2() {
  return (
    <div style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="ACSBEP-DEMUNIES Logo" className={styles.logoImg} />
          <strong style={{ color: '#fff', letterSpacing: '2px' }}>ACSBEP</strong>
        </div>
        <div className={styles.navLinks}>
          <a href="#">IMPACTO</a>
          <a href="#">EQUIPO</a>
          <Link to="/" style={{ color: '#10b981' }}>← VOLVER</Link>
        </div>
        <button className={styles.btnDonate}>DONAR</button>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Menos palabras.<br/>Más acción.</h1>
          <p className={styles.heroText}>Transformando la realidad de las personas vulnerables en África con transparencia absoluta.</p>
          <button className={styles.btnDonate} style={{ padding: '1.2rem 3rem', fontSize: '1.2rem' }}>COLABORAR</button>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.grid}>
          <div>
            <h2 className={styles.largeText}>Minkoro Bagayoko.<br/>Mah Ka Sam.</h2>
          </div>
          <div>
            <p className={styles.smallText}>
              Nuestra misión es clara: llegar donde otros no llegan. 
              A través de nuestras redes sociales demostramos que cada donación se traduce en alimentos, ropa e infraestructura para quienes más lo necesitan. 
              Sin intermediarios innecesarios. Transparencia total.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Option2;
