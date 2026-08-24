import { useState, useEffect } from 'react';

const FACEBOOK_PAGE_ID = '61568603560493';

function buildMessage(method, name, details) {
  const lines = [
    `Bonjour ACSBEP-DEMUNIES,`,
    `Je souhaite proposer une aide : ${method.title}.`,
  ];
  if (name.trim()) lines.push(`Mon nom : ${name.trim()}`);
  if (details.trim()) lines.push(`Détails : ${details.trim()}`);
  lines.push(`Merci de me recontacter pour organiser cela.`);
  return lines.join('\n');
}

export default function DonationModal({ method, onClose }) {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!method) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = buildMessage(method, name, details);
    const url = `https://m.me/${FACEBOOK_PAGE_ID}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fermer">×</button>
        <h3 className="modal-title">{method.title}</h3>
        <p className="modal-subtitle">{method.description}</p>

        <form onSubmit={handleSubmit} className="modal-form">
          <label className="modal-label">
            Votre nom
            <input
              type="text"
              className="modal-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex : Fatoumata Traoré"
              required
            />
          </label>
          <label className="modal-label">
            Détails de votre don ou de votre aide
            <textarea
              className="modal-textarea"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Ex : je peux fournir 20 kg de riz, disponible cette semaine à Bamako..."
              rows={4}
            />
          </label>

          <button type="submit" className="btn-donate modal-submit">
            Envoyer via Messenger
          </button>
          <p className="modal-hint">
            Ce message ouvrira une conversation Facebook Messenger avec la page officielle
            MahkaSam Officiel pour organiser votre aide directement avec l'association.
          </p>
        </form>
      </div>
    </div>
  );
}
