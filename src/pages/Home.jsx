import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { contentData } from '../data/content';
import { socialIcons, activityIcons, donationIcons } from '../components/Icons';
import DonationModal from '../components/DonationModal';

function Home() {
  const [activeMethod, setActiveMethod] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo ACSBEP-DEMUNIES" className="logo-img" />
          <div className="logo-text">ACSBEP-DEMUNIES</div>
        </div>
        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          <a href="#histoire" onClick={closeMenu}>HISTOIRE</a>
          <a href="#actions" onClick={closeMenu}>ACTIONS</a>
          <a href="#aider" onClick={closeMenu}>AIDER</a>
          <a href="#reseaux" onClick={closeMenu}>RÉSEAUX</a>
          <a href="#contact" onClick={closeMenu}>CONTACT</a>
          <a href="proposition.html" className="nav-highlight" onClick={closeMenu}>PROPOSITION</a>
        </div>
        <div className="navbar-actions">
          <a href="#aider" className="btn-donate">SOUTENIR</a>
          <button
            type="button"
            className={`nav-toggle${menuOpen ? ' open' : ''}`}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-tag">{contentData.hero.tag}</div>
          <h1 className="hero-title">
            {contentData.hero.title} <span className="accent">{contentData.hero.titleAccent}</span> {contentData.hero.titleEnd}
          </h1>
          <p className="hero-text">{contentData.hero.description}</p>
          <div className="hero-actions">
            <a href="#aider" className="btn-donate" style={{ padding: '1rem 2.2rem', fontSize: '1rem' }}>
              Comment aider
            </a>
            <a href="#reseaux" className="btn-outline">Voir nos vidéos</a>
          </div>
        </div>
      </section>

      <section id="histoire" className="section">
        <span className="section-tag">Depuis le début</span>
        <h2 className="section-title">{contentData.history.title}</h2>
        <div className="history-grid">
          <div>
            <p className="history-text">{contentData.history.text}</p>
            <p className="history-highlight">{contentData.history.highlight}</p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1747889268735-31192c2a6df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Distribution d'aide humanitaire à Bamako"
              className="history-img"
            />
          </div>
        </div>
      </section>

      <section id="actions" className="section projects-section">
        <span className="section-tag">Notre travail</span>
        <h2 className="section-title">Nos Piliers d'Action</h2>
        <div className="cards">
          {contentData.activities.map(act => {
            const Icon = activityIcons[act.icon];
            return (
              <div key={act.id} className="card">
                <div className="card-icon"><Icon /></div>
                <h3 className="card-title">{act.title}</h3>
                <p className="card-desc">{act.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section impact-section">
        <div className="impact-content">
          <span className="section-tag" style={{ color: 'var(--color-ochre)' }}>Preuves à l'appui</span>
          <h2 className="section-title" style={{ color: 'white' }}>{contentData.impact.title}</h2>
          <p className="impact-text">{contentData.impact.text}</p>
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

      <section id="reseaux" className="section social-section">
        <span className="section-tag">Suivez le terrain, en direct</span>
        <h2 className="section-title">Nos Réseaux Sociaux</h2>
        <div className="social-grid">
          {contentData.social.map((net, idx) => {
            const Icon = socialIcons[net.icon];
            return (
              <a key={idx} href={net.url} target="_blank" rel="noopener noreferrer" className="social-card">
                <div className="social-icon"><Icon /></div>
                <div>
                  <div className="social-name">{net.name}</div>
                  <div className="social-handle">{net.handle}</div>
                </div>
                <p className="social-desc">{net.description}</p>
              </a>
            );
          })}
        </div>
      </section>

      <section id="aider" className="section donate-section">
        <span className="section-tag">Passez à l'action</span>
        <h2 className="section-title">Comment Aider</h2>
        <div className="donate-grid">
          {contentData.donationMethods.map((method) => {
            const Icon = donationIcons[method.icon];
            return (
              <button
                key={method.id}
                type="button"
                className="donate-card donate-card-clickable"
                onClick={() => setActiveMethod(method)}
              >
                <div className="card-icon"><Icon /></div>
                <h3 className="card-title">{method.title}</h3>
                <p className="card-desc">{method.description}</p>
                <div className="donate-details">
                  {method.details.map((d, i) => (
                    <div key={i} className="donate-detail-row">
                      <span className="donate-detail-label">{d.label}</span>
                      <span className={`donate-detail-value${d.value.startsWith('[EN ATTENTE') ? ' pending' : ''}`}>
                        {d.value}
                      </span>
                    </div>
                  ))}
                </div>
                <span className="donate-card-cta">Je veux aider ainsi →</span>
              </button>
            );
          })}
        </div>
        <p className="donate-note">{contentData.donationNote}</p>
      </section>

      {activeMethod && (
        <DonationModal method={activeMethod} onClose={() => setActiveMethod(null)} />
      )}

      <section id="contact" className="section contact-section">
        <div className="contact-box">
          <span className="section-tag">Nous trouver</span>
          <h2 className="section-title">Contact</h2>
          <p className="contact-text">
            {contentData.contact.address}<br />
            Zone d'intervention : {contentData.contact.scope}<br />
            Téléphone : <a href={`tel:${contentData.contact.phone.replace(/\s/g, '')}`}>{contentData.contact.phone}</a>
          </p>
          <div className="contact-actions">
            <a
              href={`https://wa.me/${contentData.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-donate"
            >
              Écrire sur WhatsApp
            </a>
            <a href={contentData.social[0].url} target="_blank" rel="noopener noreferrer" className="btn-outline btn-outline-dark">
              Nous contacter sur les réseaux
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <img src={logo} alt="Logo" />
          <strong>ACSBEP-DEMUNIES</strong>
        </div>
        <p>© 2026 Association Cœur Solidaire pour le Bien-Être des Personnes Démunies.</p>
        <p>Transparence et action pour le Mali.</p>
      </footer>
    </>
  );
}

export default Home;
