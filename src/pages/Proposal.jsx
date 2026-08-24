import React from 'react';
import logo from '../assets/logo.png';
import heroShot from '../assets/proposal-hero.png';
import aiderShot from '../assets/proposal-aider.png';
import { proposalData } from '../data/proposal';

function Proposal() {
  return (
    <div className="proposal-page">
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo ACSBEP-DEMUNIES" className="logo-img" />
          <div className="logo-text">ACSBEP-DEMUNIES</div>
        </div>
        <div className="nav-links">
          <a href="./">ACCUEIL DU SITE</a>
        </div>
        <a href="./" className="btn-donate">RETOUR AU SITE</a>
      </nav>

      <div className="proposal-doc">
        <div className="proposal-masthead">
          <div className="proposal-eyebrow">Proposition · ACSBEP-DEMUNIES</div>
          <h1>Un site web ne remplace pas vos réseaux sociaux. <em>Il les renforce.</em></h1>
          <p className="proposal-lede">
            TikTok, Facebook et Instagram restent le cœur battant de l'association — c'est là que vit
            la transparence, la preuve en vidéo, la communauté. Un site web ajoute ce que les réseaux
            sociaux ne peuvent pas offrir&nbsp;: une adresse permanente, une image institutionnelle, et
            un lieu où un donateur, un partenaire ou une institution peut vérifier qui vous êtes en
            quelques secondes.
          </p>
          <div className="proposal-meta">
            <span>Préparé par&nbsp;<strong>Lucman</strong>, développeur</span>
            <span>Pour&nbsp;<strong>les dirigeants d'ACSBEP-DEMUNIES</strong></span>
          </div>
        </div>

        <section className="proposal-section">
          <div className="proposal-section-eyebrow">Pourquoi les deux ensemble</div>
          <h2>Réseaux sociaux et site web ne jouent pas le même rôle</h2>
          <p className="proposal-section-lede">
            Vos réseaux sociaux excellent pour toucher, émouvoir et prouver en temps réel. Mais ils
            ont des limites structurelles qu'un site web comble naturellement.
          </p>

          <div className="proposal-compare">
            <div className="head">{proposalData.comparison.headers[0]}</div>
            <div className="head accent">{proposalData.comparison.headers[1]}</div>
            <div className="head accent">{proposalData.comparison.headers[2]}</div>

            {proposalData.comparison.rows.map((row, i) => (
              <React.Fragment key={i}>
                <div className="row-label" data-label="Besoin">{row.need}</div>
                <div className={row.social.tone} data-label="Réseaux">{row.social.text}</div>
                <div className={row.site.tone} data-label="Site">{row.site.text}</div>
              </React.Fragment>
            ))}
          </div>

          <p className="proposal-footnote">
            Le site actuel renvoie activement vers les quatre réseaux sociaux à chaque section — il ne
            cherche jamais à capter l'audience qui doit rester sur TikTok et Facebook.
          </p>
        </section>

        <section className="proposal-section">
          <div className="proposal-section-eyebrow">Ce qui existe déjà</div>
          <h2>La plateforme est construite et en ligne aujourd'hui</h2>
          <p className="proposal-section-lede">
            Ce n'est pas une maquette — c'est un site fonctionnel, déployé, que n'importe qui peut
            visiter dès maintenant à cette même adresse.
          </p>

          <div className="proposal-evidence">
            <figure>
              <img src={heroShot} alt="Page d'accueil du site ACSBEP-DEMUNIES avec photo d'un village malien" />
              <figcaption>Page d'accueil — identité visuelle inspirée du Mali (terracotta, ocre), photo authentique d'Afrique de l'Ouest</figcaption>
            </figure>
            <figure>
              <img src={aiderShot} alt="Section Comment Aider avec quatre types de dons" />
              <figcaption>Section "Comment Aider" — chaque carte ouvre un formulaire qui envoie un message pré-rempli sur WhatsApp ou Messenger</figcaption>
            </figure>
          </div>

          <ul className="proposal-feature-list">
            {proposalData.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </section>

        <section className="proposal-section">
          <div className="proposal-section-eyebrow">Ce que ça vaut sur le marché</div>
          <h2>Budget de référence si ce travail avait été facturé</h2>
          <p className="proposal-section-lede">
            Voici une estimation honnête de ce que coûterait ce même site s'il avait été commandé à
            un freelance ou une agence — pour que la valeur du don soit claire, pas supposée.
          </p>

          <table className="proposal-budget-table">
            <thead>
              <tr><th>Poste</th><th>Détail</th><th>Estimation</th></tr>
            </thead>
            <tbody>
              {proposalData.budget.items.map((row, i) => (
                <tr key={i}>
                  <td className="item">{row.item}</td>
                  <td className="desc">{row.desc}</td>
                  <td className="price">{row.price}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="item">Total estimé au prix du marché</td>
                <td className="desc"></td>
                <td className="price">{proposalData.budget.total}</td>
              </tr>
            </tfoot>
          </table>

          <p className="proposal-footnote">
            Fourchette basée sur des tarifs freelance standards en 2026 pour un site vitrine associatif
            sur mesure. Une agence facturerait généralement 1,5 à 2&nbsp;fois plus.
          </p>
        </section>

        <section className="proposal-section">
          <div className="proposal-section-eyebrow">Mon engagement</div>
          <h2>Le développement ne vous coûtera rien</h2>
          <p className="proposal-section-lede">
            C'est ma contribution personnelle à la cause — mon métier mis au service de ce que fait
            déjà Mah Ka Sam sur le terrain.
          </p>

          <div className="proposal-pledge">
            <div className="proposal-section-eyebrow">Ce que je propose</div>
            <h2>Développement, design, maintenance du code</h2>
            <div className="proposal-pledge-figure">
              <span className="strike">{proposalData.budget.total}</span>
              <span className="final">0 €</span>
            </div>
            <p>
              Je conçois, développe et fais évoluer le site gratuitement, aussi longtemps que
              l'association en a besoin. La seule chose que je demande à l'association de prendre en
              charge, c'est le coût réel et minime de l'hébergement en ligne — détaillé ci-dessous —
              pour que le site reste actif si vous choisissez l'option avec nom de domaine propre.
            </p>
          </div>
        </section>

        <section className="proposal-section">
          <div className="proposal-section-eyebrow">Coût réel restant</div>
          <h2>La seule dépense possible : l'hébergement</h2>
          <p className="proposal-section-lede">
            Deux options honnêtes, sans coûts cachés. La première ne coûte rien du tout.
          </p>

          <div className="proposal-cost-box">
            {proposalData.hosting.map((h, i) => (
              <div key={i} className={`proposal-cost-card${h.recommended ? ' recommended' : ''}`}>
                <span className="tag" style={!h.recommended ? { color: 'var(--color-ochre)' } : undefined}>{h.tag}</span>
                <h3>{h.title}</h3>
                <div className="price">{h.price}<small> {h.period}</small></div>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>

          <p className="proposal-footnote">
            En clair&nbsp;: l'association peut faire fonctionner ce site indéfiniment sans dépenser un
            seul franc. Le nom de domaine propre est une amélioration de crédibilité, pas une nécessité.
          </p>
        </section>

        <div className="proposal-footer">
          <p className="proposal-signature">Avec respect pour le travail déjà accompli sur le terrain,</p>
          <p>Lucman — développeur bénévole du projet</p>
        </div>
      </div>
    </div>
  );
}

export default Proposal;
