import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Option1.module.css';
import logo from '../assets/logo.png';

function Option1() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="ACSBEP-DEMUNIES Logo" className={styles.logoImg} />
          <strong style={{ color: '#1e3a8a' }}>ACSBEP-DEMUNIES</strong>
        </div>
        <div className={styles.navLinks}>
          <a href="#">Sobre Nosotros</a>
          <a href="#">Proyectos</a>
          <Link to="/" style={{ color: '#f59e0b' }}>← Volver</Link>
        </div>
        <button className={styles.btnDonate}>Hacer Donación</button>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Solidaridad para un Malí mejor</h1>
          <p className={styles.heroText}>Institución oficial humanitaria para el bienestar de las personas desfavorecidas. Tu aportación transparente salva vidas.</p>
          <button className={styles.btnDonate} style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>Dona Ahora</button>
        </div>
      </section>

      <section className={styles.section}>
        <h2 style={{ fontSize: '2.5rem', color: '#1e3a8a' }}>Transparencia y Acción</h2>
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <h3>Minkoro Bagayoko</h3>
            <p>Conocido como Mah Ka Sam, dirige nuestras acciones comunitarias asegurando que toda ayuda llegue a su destino.</p>
          </div>
          <div className={styles.card}>
            <h3>Kits de Alimentos</h3>
            <p>Distribución directa a familias en extrema necesidad en Bamako y alrededores.</p>
          </div>
          <div className={styles.card}>
            <h3>Infraestructura</h3>
            <p>Instalación de paneles solares y renovación de viviendas dignas.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Option1;
