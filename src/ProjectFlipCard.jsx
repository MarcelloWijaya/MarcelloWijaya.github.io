import React, { useState } from 'react';
import { ArrowUpRight, RotateCcw, Code2, Smartphone, Database, Layers, Building2 } from 'lucide-react';

const icons = {
  Software: Layers,
  Websites: Building2,
  Development: Database,
  'UI / UX': Smartphone
};

export function ProjectFlipCard({
  title,
  category,
  status,
  description,
  points = [],
  technologies = [],
  href,
  hrefLabel = 'View project',
  frontArt,
  index,
  variant = 'engineering',
  brand,
  tone = 'sage'
}) {
  const [flipped, setFlipped] = useState(false);
  const Icon = icons[category] || Code2;

  const revealOnHover = () => {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      setFlipped(true);
    }
  };

  return (
    <article
      className={`soft-project-card ${variant === 'archive' ? 'is-archive' : 'is-engineering'} ${flipped ? 'is-flipped' : ''}`}
      onMouseEnter={revealOnHover}
      onMouseLeave={() => setFlipped(false)}
      onKeyDown={(event) => { if (event.key === 'Escape' && flipped) { setFlipped(false); event.preventDefault(); } }}
    >
      <div className="soft-project-scene">
        <div className="soft-project-rotator">
          <div className="soft-project-face soft-project-front" aria-hidden={flipped} inert={flipped}>
            {frontArt ? (
              <div className="soft-project-visual">{frontArt}</div>
            ) : (
              <div className={`soft-project-illustration ${brand ? 'has-company-brand tone-' + tone : ''}`} aria-hidden="true">
                {brand && <div className="soft-company-brand"><strong>{brand}</strong><span>{title}</span></div>}
                <div className="soft-project-symbol">
                  <Icon size={31} strokeWidth={1.5}/>
                </div>
                <div className="soft-project-window">
                  <span className="soft-window-dots"><i/><i/><i/></span>
                  <div className="soft-window-row wide"/>
                  <div className="soft-window-row"/>
                  <div className="soft-window-row short"/>
                </div>
                <span className="soft-project-number">{index}</span>
              </div>
            )}
            <div className="soft-project-front-info">
              <span className="soft-project-kicker">{category} <span aria-hidden="true">·</span> {status}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="soft-project-front-bottom">
                <div className="soft-technology-list">
                  {technologies.slice(0, 3).map(tech => <span key={tech}>{tech}</span>)}
                </div>
                <span className="soft-project-hint">Flip for details <ArrowUpRight size={15} aria-hidden="true"/></span>
              </div>
            </div>
          </div>

          <div className="soft-project-face soft-project-back" aria-hidden={!flipped} inert={!flipped}>
            <span className="soft-project-back-label">About this project</span>
            <h3>{title}</h3>
            <p className="soft-project-purpose">{description}</p>
            {points.length > 0 && (
              <ul className="soft-project-points">
                {points.slice(0, 2).map(point => <li key={point}>{point}</li>)}
              </ul>
            )}
            <div className="soft-project-back-footer">
              {technologies.length > 0 && (
                <p className="soft-project-stack">{technologies.slice(0, 4).join(' · ')}</p>
              )}
              {href ? (
                <a className="soft-project-visit" href={href} target={href.startsWith('#') ? undefined : '_blank'} rel={href.startsWith('#') ? undefined : 'noopener noreferrer'}>
                  {hrefLabel} <ArrowUpRight size={17} aria-hidden="true"/>
                </a>
              ) : (
                <span className="soft-project-unavailable">Work in progress</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <button
        className="soft-project-flip-toggle"
        type="button"
        onClick={() => setFlipped(current => !current)}
        aria-pressed={flipped}
        aria-label={flipped ? `Show the front of ${title}` : `Flip ${title} to learn what it does`}
        title={flipped ? 'Back to preview' : 'Read project summary'}
      >
        <RotateCcw size={17} strokeWidth={1.8} aria-hidden="true"/>
      </button>
    </article>
  );
}
