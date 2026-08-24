import React from 'react';
import './index.css';
import imgBlue from './assets/charity_design_blue_1787590922494.png';
import imgGreen from './assets/charity_design_green_1787590932581.png';
import imgTerracotta from './assets/charity_design_terracotta_1787590943593.png';

function App() {
  return (
    <div style={{ padding: '3rem 5%', backgroundColor: '#f9fafb', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', color: '#111827', marginBottom: '1rem' }}>ACSBEP-DEMUNIES</h1>
        <p style={{ fontSize: '1.2rem', color: '#4b5563', maxWidth: '800px', margin: '0 auto' }}>
          Bienvenidos. Estamos preparando la nueva plataforma web para la asociación. 
          Por favor, revisen las siguientes 3 propuestas de diseño visual y elijan su favorita para que podamos construirla.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Opción 1 */}
        <div style={{ backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
          <img src={imgBlue} alt="Opción 1" style={{ width: '100%', height: 'auto', display: 'block' }} />
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', color: '#1d4ed8', marginBottom: '0.5rem' }}>Opción 1: Institucional</h2>
            <p style={{ color: '#6b7280' }}>Azul y Oro. Diseño corporativo y muy profesional, similar a UNICEF. Transmite confianza y seguridad.</p>
          </div>
        </div>

        {/* Opción 2 */}
        <div style={{ backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
          <img src={imgGreen} alt="Opción 2" style={{ width: '100%', height: 'auto', display: 'block' }} />
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', color: '#047857', marginBottom: '0.5rem' }}>Opción 2: Minimalista</h2>
            <p style={{ color: '#6b7280' }}>Verde Esmeralda. Diseño moderno de alto contraste. Muy limpio, elegante y enfocado en el mensaje.</p>
          </div>
        </div>

        {/* Opción 3 */}
        <div style={{ backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
          <img src={imgTerracotta} alt="Opción 3" style={{ width: '100%', height: 'auto', display: 'block' }} />
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', color: '#b45309', marginBottom: '0.5rem' }}>Opción 3: Raíces</h2>
            <p style={{ color: '#6b7280' }}>Terracota y Amarillo. Diseño cálido y vibrante. Transmite cercanía, comunidad y raíces africanas.</p>
          </div>
        </div>

      </div>

      <div style={{ textAlign: 'center', marginTop: '5rem', padding: '2rem', borderTop: '1px solid #e5e7eb' }}>
        <p style={{ color: '#9ca3af' }}>© 2026 Association Cœur Solidaire pour le Bien-Être des Personnes Démunies.</p>
      </div>
    </div>
  );
}

export default App;
