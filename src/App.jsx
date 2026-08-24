import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';

import Option1 from './components/Option1';
import Option2 from './components/Option2';
import Option3 from './components/Option3';

import imgBlue from './assets/charity_design_blue_1787590922494.png';
import imgGreen from './assets/charity_design_green_1787590932581.png';
import imgTerracotta from './assets/charity_design_terracotta_1787590943593.png';

function Chooser() {
  return (
    <div style={{ padding: '3rem 5%', backgroundColor: '#f9fafb', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', color: '#111827', marginBottom: '1rem' }}>ACSBEP-DEMUNIES</h1>
        <p style={{ fontSize: '1.2rem', color: '#4b5563', maxWidth: '800px', margin: '0 auto' }}>
          Bienvenidos. Estamos preparando la nueva plataforma web para la asociación. 
          Por favor, haz clic en el botón debajo de cada imagen para <strong>probar la versión interactiva</strong> de ese diseño.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Opción 1 */}
        <div style={{ backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
          <img src={imgBlue} alt="Opción 1" style={{ width: '100%', height: 'auto', display: 'block' }} />
          <div style={{ padding: '2rem', textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', color: '#1d4ed8', marginBottom: '0.5rem' }}>Opción 1: Institucional</h2>
              <p style={{ color: '#6b7280', marginBottom: '2rem' }}>Azul y Oro. Diseño corporativo y muy profesional, similar a UNICEF. Transmite confianza y seguridad.</p>
            </div>
            <Link to="/option-1" style={{ display: 'inline-block', backgroundColor: '#1d4ed8', color: 'white', padding: '1rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>Probar Opción 1</Link>
          </div>
        </div>

        {/* Opción 2 */}
        <div style={{ backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
          <img src={imgGreen} alt="Opción 2" style={{ width: '100%', height: 'auto', display: 'block' }} />
          <div style={{ padding: '2rem', textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', color: '#047857', marginBottom: '0.5rem' }}>Opción 2: Minimalista</h2>
              <p style={{ color: '#6b7280', marginBottom: '2rem' }}>Verde Esmeralda. Diseño moderno de alto contraste. Muy limpio, elegante y enfocado en el mensaje.</p>
            </div>
            <Link to="/option-2" style={{ display: 'inline-block', backgroundColor: '#047857', color: 'white', padding: '1rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>Probar Opción 2</Link>
          </div>
        </div>

        {/* Opción 3 */}
        <div style={{ backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
          <img src={imgTerracotta} alt="Opción 3" style={{ width: '100%', height: 'auto', display: 'block' }} />
          <div style={{ padding: '2rem', textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', color: '#b45309', marginBottom: '0.5rem' }}>Opción 3: Raíces</h2>
              <p style={{ color: '#6b7280', marginBottom: '2rem' }}>Terracota y Amarillo. Diseño cálido y vibrante. Transmite cercanía, comunidad y raíces africanas.</p>
            </div>
            <Link to="/option-3" style={{ display: 'inline-block', backgroundColor: '#b45309', color: 'white', padding: '1rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>Probar Opción 3</Link>
          </div>
        </div>

      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Chooser />} />
        <Route path="/option-1" element={<Option1 />} />
        <Route path="/option-2" element={<Option2 />} />
        <Route path="/option-3" element={<Option3 />} />
      </Routes>
    </Router>
  );
}

export default App;
