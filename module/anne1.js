<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Samuel PRAT — Portfolio</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700;900&display=swap');
    /* ── RESET & VARIABLES ── */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --yellow:  #ffdf00;
      --orange:  #ff4f00;
      --red:     #ff0006;
      --blue:    #189ffe;
      --mauve:   #725580;
      --indigo:  #330c85;
      --violet:  #3800ae;
      --white:   #ffffff;
      --black:   #0a0a0a;
      --font-title: 'League Spartan', sans-serif;
      --font-body: Arial, sans-serif;
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: var(--font-body);
      background: var(--violet);
      color: var(--white);
      overflow-x: hidden;
      cursor: crosshair;
    }

    /* ── SCROLLBAR ── */
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: var(--indigo); }
    ::-webkit-scrollbar-thumb { background: var(--yellow); }

    /* ── NAV ── */
    nav {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 100;
      background: var(--black);
      border-bottom: 4px solid var(--yellow);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2rem;
      height: 60px;
    }

    .nav-logo {
      font-family: var(--font-title);
      font-weight: 900;
      font-size: 1.3rem;
      color: var(--yellow);
      letter-spacing: -0.03em;
      text-transform: uppercase;
    }

    .nav-links {
      display: flex;
      gap: 0.25rem;
      list-style: none;
    }

    .nav-links a {
      display: block;
      font-family: var(--font-title);
      font-weight: 700;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--white);
      text-decoration: none;
      padding: 0.4rem 0.8rem;
      border: 2px solid transparent;
      transition: background 0.15s, color 0.15s, border-color 0.15s;
    }

    .nav-links a:hover {
      background: var(--yellow);
      color: var(--black);
      border-color: var(--yellow);
    }

    .burger {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
    }
    .burger span {
      display: block;
      width: 24px;
      height: 3px;
      background: var(--yellow);
    }

    /* ── HERO ── */
    #hero {
      min-height: 100vh;
      padding-top: 60px;
      background: var(--indigo);
      display: grid;
      grid-template-columns: 1fr 1fr;
      position: relative;
      overflow: hidden;
    }

    .hero-bg-shapes {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }

    .hero-bg-shapes::before {
      content: '';
      position: absolute;
      width: 500px; height: 500px;
      border-radius: 50%;
      background: var(--yellow);
      opacity: 0.08;
      top: -100px; right: -100px;
    }

    .hero-bg-shapes::after {
      content: '';
      position: absolute;
      width: 300px; height: 300px;
      background: var(--red);
      opacity: 0.12;
      bottom: 50px; left: 10%;
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }

    .hero-left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 4rem 3rem 4rem 4rem;
      position: relative;
      z-index: 1;
    }

    .hero-tag {
      display: inline-block;
      background: var(--yellow);
      color: var(--black);
      font-family: var(--font-title);
      font-weight: 900;
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      padding: 0.35rem 0.9rem;
      margin-bottom: 1.5rem;
      width: fit-content;
    }

    .hero-name {
      font-family: var(--font-title);
      font-weight: 900;
      font-size: clamp(2.8rem, 6vw, 5.5rem);
      line-height: 0.92;
      text-transform: uppercase;
      color: var(--white);
      letter-spacing: -0.04em;
      margin-bottom: 0.5rem;
    }

    .hero-name span {
      color: var(--yellow);
      display: block;
    }

    .hero-subtitle {
      font-family: var(--font-title);
      font-weight: 700;
      font-size: clamp(0.9rem, 2vw, 1.2rem);
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--blue);
      margin-bottom: 2rem;
      border-left: 4px solid var(--orange);
      padding-left: 1rem;
    }

    .hero-desc {
      font-size: 0.95rem;
      line-height: 1.7;
      color: rgba(255,255,255,0.8);
      max-width: 460px;
      margin-bottom: 2.5rem;
    }

    .hero-cta {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .btn {
      font-family: var(--font-title);
      font-weight: 900;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      padding: 0.75rem 1.8rem;
      border: 3px solid;
      text-decoration: none;
      cursor: pointer;
      transition: background 0.15s, color 0.15s, transform 0.1s;
    }

    .btn:active { transform: scale(0.97); }

    .btn-primary {
      background: var(--yellow);
      color: var(--black);
      border-color: var(--yellow);
    }
    .btn-primary:hover { background: var(--orange); border-color: var(--orange); color: var(--white); }

    .btn-outline {
      background: transparent;
      color: var(--white);
      border-color: var(--white);
    }
    .btn-outline:hover { background: var(--white); color: var(--black); }

    .hero-right {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4rem 3rem;
    }

    .hero-card {
      background: var(--yellow);
      padding: 2.5rem;
      width: 100%;
      max-width: 380px;
      position: relative;
    }

    .hero-card::before {
      content: '';
      position: absolute;
      inset: 8px;
      border: 3px solid var(--black);
      pointer-events: none;
    }

    .hero-card-label {
      font-family: var(--font-title);
      font-weight: 900;
      font-size: 0.65rem;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: var(--black);
      margin-bottom: 1.5rem;
      opacity: 0.6;
    }

    .hero-card-stat {
      margin-bottom: 1.2rem;
    }

    .hero-card-stat-num {
      font-family: var(--font-title);
      font-weight: 900;
      font-size: 2.5rem;
      color: var(--black);
      line-height: 1;
    }

    .hero-card-stat-label {
      font-family: var(--font-title);
      font-weight: 700;
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--indigo);
    }

    .hero-card-divider {
      height: 3px;
      background: var(--black);
      margin: 1rem 0;
      opacity: 0.15;
    }

    /* ── SECTIONS COMMON ── */
    section { padding: 5rem 2rem; }

    .section-header {
      display: flex;
      align-items: baseline;
      gap: 1rem;
      margin-bottom: 3rem;
    }

    .section-number {
      font-family: var(--font-title);
      font-weight: 900;
      font-size: 4rem;
      line-height: 1;
      opacity: 0.2;
      color: var(--yellow);
      user-select: none;
    }

    .section-title {
      font-family: var(--font-title);
      font-weight: 900;
      font-size: clamp(1.8rem, 4vw, 3rem);
      text-transform: uppercase;
      letter-spacing: -0.03em;
      line-height: 1;
    }

    .section-title span {
      display: block;
      width: 60px;
      height: 6px;
      background: var(--yellow);
      margin-top: 0.6rem;
    }

    .container {
      max-width: 1100px;
      margin: 0 auto;
    }

    /* ── À PROPOS ── */
    #apropos {
      background: var(--black);
    }

    .apropos-grid {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 4rem;
      align-items: start;
    }

    .apropos-sidebar {}

    .apropos-identity-block {
      background: var(--violet);
      padding: 2rem;
      margin-bottom: 1.5rem;
      position: relative;
    }

    .apropos-identity-block::after {
      content: '';
      position: absolute;
      bottom: -6px; right: -6px;
      inset: auto;
      width: calc(100% - 0px);
      height: calc(100% - 0px);
      border: 3px solid var(--yellow);
      pointer-events: none;
      top: 6px; left: 6px;
    }

    .apropos-identity-name {
      font-family: var(--font-title);
      font-weight: 900;
      font-size: 1.4rem;
      text-transform: uppercase;
      letter-spacing: -0.02em;
      color: var(--yellow);
      margin-bottom: 0.3rem;
    }

    .apropos-identity-role {
      font-family: var(--font-title);
      font-weight: 700;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--blue);
    }

    .skills-block {
      margin-top: 1rem;
    }

    .skill-tag {
      display: inline-block;
      font-family: var(--font-title);
      font-weight: 700;
      font-size: 0.65rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      padding: 0.3rem 0.7rem;
      margin: 0.2rem;
      border: 2px solid;
    }

    .skill-tag:nth-child(1) { border-color: var(--yellow); color: var(--yellow); }
    .skill-tag:nth-child(2) { border-color: var(--orange); color: var(--orange); }
    .skill-tag:nth-child(3) { border-color: var(--blue); color: var(--blue); }
    .skill-tag:nth-child(4) { border-color: var(--red); color: var(--red); }
    .skill-tag:nth-child(5) { border-color: var(--mauve); color: var(--mauve); }
    .skill-tag:nth-child(6) { border-color: var(--yellow); color: var(--yellow); }

    .apropos-content p {
      font-size: 0.95rem;
      line-height: 1.8;
      color: rgba(255,255,255,0.85);
      margin-bottom: 1.2rem;
    }

    /* ── PROJETS ── */
    #projets {
      background: var(--indigo);
    }

    .projets-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .projet-card {
      background: var(--black);
      border: 3px solid transparent;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: border-color 0.2s, transform 0.15s;
      text-decoration: none;
      display: block;
      color: inherit;
    }

    .projet-card:hover {
      border-color: var(--yellow);
      transform: translate(-4px, -4px);
      box-shadow: 6px 6px 0 var(--yellow);
    }

    .projet-card-accent {
      height: 6px;
    }

    .projet-card:nth-child(1) .projet-card-accent { background: var(--yellow); }
    .projet-card:nth-child(2) .projet-card-accent { background: var(--orange); }
    .projet-card:nth-child(3) .projet-card-accent { background: var(--blue); }
    .projet-card:nth-child(4) .projet-card-accent { background: var(--red); }

    .projet-card-body {
      padding: 1.5rem;
    }

    .projet-card-year {
      font-family: var(--font-title);
      font-weight: 900;
      font-size: 0.6rem;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      opacity: 0.5;
      margin-bottom: 0.75rem;
    }

    .projet-card-title {
      font-family: var(--font-title);
      font-weight: 900;
      font-size: 1.3rem;
      text-transform: uppercase;
      letter-spacing: -0.02em;
      line-height: 1.1;
      margin-bottom: 0.75rem;
      color: var(--white);
    }

    .projet-card:nth-child(1) .projet-card-title { color: var(--yellow); }
    .projet-card:nth-child(2) .projet-card-title { color: var(--orange); }
    .projet-card:nth-child(3) .projet-card-title { color: var(--blue); }
    .projet-card:nth-child(4) .projet-card-title { color: var(--red); }

    .projet-card-desc {
      font-size: 0.85rem;
      line-height: 1.65;
      color: rgba(255,255,255,0.7);
      margin-bottom: 1.2rem;
    }

    .projet-card-link {
      font-family: var(--font-title);
      font-weight: 700;
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--yellow);
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    .projet-card:nth-child(2) .projet-card-link { color: var(--orange); }
    .projet-card:nth-child(3) .projet-card-link { color: var(--blue); }
    .projet-card:nth-child(4) .projet-card-link { color: var(--red); }

    .projet-card-link::after {
      content: '→';
      transition: transform 0.15s;
    }

    .projet-card:hover .projet-card-link::after {
      transform: translateX(4px);
    }

    .no-link-note {
      font-family: var(--font-title);
      font-weight: 700;
      font-size: 0.65rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: rgba(255,255,255,0.35);
      margin-top: 0.5rem;
    }

    /* ── EXPÉRIENCES ── */
    #experiences {
      background: var(--violet);
    }

    .timeline {
      position: relative;
      padding-left: 2.5rem;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      background: repeating-linear-gradient(
        to bottom,
        var(--yellow) 0, var(--yellow) 12px,
        transparent 12px, transparent 20px
      );
    }

    .timeline-item {
      position: relative;
      margin-bottom: 3rem;
    }

    .timeline-dot {
      position: absolute;
      left: -3.05rem;
      top: 0.2rem;
      width: 20px;
      height: 20px;
      background: var(--yellow);
      border: 3px solid var(--black);
    }

    .timeline-date {
      font-family: var(--font-title);
      font-weight: 900;
      font-size: 0.65rem;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: var(--yellow);
      margin-bottom: 0.4rem;
    }

    .timeline-title {
      font-family: var(--font-title);
      font-weight: 900;
      font-size: 1.2rem;
      text-transform: uppercase;
      letter-spacing: -0.01em;
      margin-bottom: 0.3rem;
    }

    .timeline-org {
      font-family: var(--font-title);
      font-weight: 700;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--blue);
      margin-bottom: 0.75rem;
    }

    .timeline-desc {
      font-size: 0.9rem;
      line-height: 1.7;
      color: rgba(255,255,255,0.8);
      max-width: 680px;
    }

    .timeline-tags {
      margin-top: 0.75rem;
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
    }

    .timeline-tag {
      font-family: var(--font-title);
      font-weight: 700;
      font-size: 0.6rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 0.25rem 0.6rem;
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.2);
      color: rgba(255,255,255,0.7);
    }

    /* ── CONTACT ── */
    #contact {
      background: var(--black);
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 4rem;
      align-items: start;
    }

    .contact-info {}

    .contact-info-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .contact-info-icon {
      width: 44px;
      height: 44px;
      background: var(--yellow);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 1.1rem;
    }

    .contact-info-label {
      font-family: var(--font-title);
      font-weight: 700;
      font-size: 0.65rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: rgba(255,255,255,0.5);
      margin-bottom: 0.25rem;
    }

    .contact-info-value {
      font-family: var(--font-title);
      font-weight: 900;
      font-size: 1rem;
      color: var(--white);
      word-break: break-all;
    }

    .contact-info-value a {
      color: var(--yellow);
      text-decoration: none;
    }
    .contact-info-value a:hover { text-decoration: underline; }

    /* FORM */
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }

    .form-group label {
      font-family: var(--font-title);
      font-weight: 700;
      font-size: 0.65rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: rgba(255,255,255,0.6);
    }

    .form-group input,
    .form-group textarea {
      background: rgba(255,255,255,0.06);
      border: 2px solid rgba(255,255,255,0.15);
      color: var(--white);
      font-family: var(--font-body);
      font-size: 0.9rem;
      padding: 0.75rem 1rem;
      outline: none;
      transition: border-color 0.15s;
      resize: vertical;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      border-color: var(--yellow);
    }

    .form-group input::placeholder,
    .form-group textarea::placeholder {
      color: rgba(255,255,255,0.3);
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .form-msg {
      font-family: var(--font-title);
      font-weight: 700;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      padding: 0.75rem 1rem;
      display: none;
    }

    .form-msg.success {
      display: block;
      background: rgba(24, 159, 254, 0.15);
      border: 2px solid var(--blue);
      color: var(--blue);
    }

    .form-msg.error {
      display: block;
      background: rgba(255, 0, 6, 0.15);
      border: 2px solid var(--red);
      color: var(--red);
    }

    /* ── FOOTER ── */
    footer {
      background: var(--indigo);
      border-top: 4px solid var(--yellow);
      padding: 2rem;
      text-align: center;
    }

    .footer-name {
      font-family: var(--font-title);
      font-weight: 900;
      font-size: 1.1rem;
      text-transform: uppercase;
      letter-spacing: -0.02em;
      color: var(--yellow);
      margin-bottom: 0.5rem;
    }

    .footer-sub {
      font-size: 0.8rem;
      color: rgba(255,255,255,0.5);
      font-family: var(--font-title);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
    }

    /* ── POPUP VIDEO ── */
    .video-overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.9);
      z-index: 999;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }

    .video-overlay.open {
      display: flex;
    }

    .video-wrapper {
      position: relative;
      width: 100%;
      max-width: 860px;
      background: var(--black);
      border: 4px solid var(--yellow);
    }

    .video-close {
      position: absolute;
      top: -18px;
      right: -18px;
      width: 36px;
      height: 36px;
      background: var(--yellow);
      border: none;
      cursor: pointer;
      font-family: var(--font-title);
      font-weight: 900;
      font-size: 1.1rem;
      color: var(--black);
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .video-wrapper video {
      width: 100%;
      display: block;
    }

    /* ── MOBILE NAV ── */
    @media (max-width: 768px) {
      .burger { display: flex; }

      .nav-links {
        display: none;
        position: fixed;
        top: 60px; left: 0; right: 0;
        background: var(--black);
        border-bottom: 3px solid var(--yellow);
        flex-direction: column;
        padding: 1rem;
        gap: 0;
      }

      .nav-links.open { display: flex; }
      .nav-links a { padding: 0.75rem 1rem; font-size: 0.85rem; }
      .nav-links a:hover { background: var(--yellow); color: var(--black); }

      #hero {
        grid-template-columns: 1fr;
      }

      .hero-left {
        padding: 3rem 1.5rem 2rem;
      }

      .hero-right {
        padding: 2rem 1.5rem 3rem;
      }

      .apropos-grid,
      .contact-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .form-row {
        grid-template-columns: 1fr;
      }

      .section-number { font-size: 2.5rem; }
    }

    @media (max-width: 480px) {
      nav { padding: 0 1rem; }
      section { padding: 3.5rem 1.2rem; }
      .hero-left { padding: 2.5rem 1.2rem 1.5rem; }
      .hero-right { padding: 1.5rem 1.2rem 2.5rem; }
      .timeline { padding-left: 2rem; }
    }
  </style>
</head>

<body>

<!-- ══ NAV ══ -->
<nav>
  <div class="nav-logo">S.PRAT</div>
  <button class="burger" id="burgerBtn" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
  <ul class="nav-links" id="navLinks">
    <li><a href="#hero">Accueil</a></li>
    <li><a href="#apropos">À propos</a></li>
    <li><a href="#projets">Projets</a></li>
    <li><a href="#experiences">Expériences</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<!-- ══ HERO ══ -->
<section id="hero">
  <div class="hero-bg-shapes"></div>

  <div class="hero-left">
    <div class="hero-tag">Portfolio 2024–2025</div>
    <h1 class="hero-name">
      Samuel<span>PRAT</span>
    </h1>
    <p class="hero-subtitle">Villes & Territoires Durables</p>
    <p class="hero-desc">
      Étudiant en BUT Carrières Sociales à l'IUT de Bordeaux Montaigne, passionné par l'aménagement du territoire, l'environnement et les enjeux urbains de demain.
    </p>
    <div class="hero-cta">
      <a href="#projets" class="btn btn-primary">Voir mes projets</a>
      <a href="#contact" class="btn btn-outline">Me contacter</a>
    </div>
  </div>

  <div class="hero-right">
    <div class="hero-card">
      <div class="hero-card-label">Parcours en bref</div>
      <div class="hero-card-stat">
        <div class="hero-card-stat-num">BUT</div>
        <div class="hero-card-stat-label">Carrières Sociales — VTD</div>
      </div>
      <div class="hero-card-divider"></div>
      <div class="hero-card-stat">
        <div class="hero-card-stat-num">IUT</div>
        <div class="hero-card-stat-label">Bordeaux Montaigne</div>
      </div>
      <div class="hero-card-divider"></div>
      <div class="hero-card-stat">
        <div class="hero-card-stat-num">18</div>
        <div class="hero-card-stat-label">ans · Né le 10/07/2007</div>
      </div>
    </div>
  </div>
</section>

<!-- ══ À PROPOS ══ -->
<section id="apropos">
  <div class="container">
    <div class="section-header">
      <div class="section-number">01</div>
      <h2 class="section-title">À Propos<span></span></h2>
    </div>

    <div class="apropos-grid">
      <div class="apropos-sidebar">
        <div class="apropos-identity-block">
          <div class="apropos-identity-name">Samuel PRAT</div>
          <div class="apropos-identity-role">Étudiant BUT 1ère année</div>
          <div class="apropos-identity-role" style="margin-top:0.2rem; color: rgba(255,255,255,0.5);">IUT Bordeaux Montaigne</div>
        </div>
        <div class="skills-block">
          <span class="skill-tag">Cartographie</span>
          <span class="skill-tag">Aménagement urbain</span>
          <span class="skill-tag">Territoire</span>
          <span class="skill-tag">Environnement</span>
          <span class="skill-tag">Sport & Océan</span>
          <span class="skill-tag">Humanitaire</span>
        </div>
      </div>

      <div class="apropos-content">
        <p>Je m'appelle Samuel PRAT et je suis actuellement étudiant en première année de BUT Carrières Sociales parcours Villes et Territoires Durables à l'IUT de Bordeaux Montaigne.</p>
        <p>Après un baccalauréat général, je me suis orienté vers ce cursus pour approfondir mon intérêt pour l'environnement et l'aménagement du territoire. Les expériences que j'ai pu mener au cours de ma formation m'ont confirmé mon choix d'étudier dans ce domaine.</p>
        <p>Ce qui m'a vraiment aidé à comprendre les enjeux de cette formation, c'est le stage que j'ai réalisé dans l'intercommunalité de Bordeaux Métropole, dans le service Aménagement Urbain du pôle Territoire Ouest.</p>
        <p>Aujourd'hui, je ne sais pas encore quel métier je veux faire. Cependant, je sais que je veux travailler dans l'aménagement du territoire, car les métiers que j'ai pu découvrir m'ont particulièrement plu. Je porte également un intérêt à l'environnement naturel, à l'océan et au sport.</p>
        <p>Ce portfolio présente mes projets, mes compétences et mon parcours académique. Je vous invite à parcourir mes réalisations et reste à votre disposition pour toute information supplémentaire. Merci de votre visite.</p>
      </div>
    </div>
  </div>
</section>

<!-- ══ PROJETS ══ -->
<section id="projets">
  <div class="container">
    <div class="section-header">
      <div class="section-number">02</div>
      <h2 class="section-title">Projets<span></span></h2>
    </div>

    <div class="projets-grid">

      <!-- Roman Photo -->
      <div class="projet-card">
        <div class="projet-card-accent"></div>
        <div class="projet-card-body">
          <div class="projet-card-year">Première année · Production visuelle</div>
          <h3 class="projet-card-title">Roman Photo</h3>
          <p class="projet-card-desc">Réalisation d'un roman photo sur le thème du paysage alimentaire. Ce projet a permis d'explorer les liens entre espace, territoire et alimentation à travers un format narratif visuel.</p>
          <div class="no-link-note">📄 Document disponible sur demande</div>
        </div>
      </div>

      <!-- Cartographie -->
      <div class="projet-card">
        <div class="projet-card-accent"></div>
        <div class="projet-card-body">
          <div class="projet-card-year">Première année · SIG & Représentation</div>
          <h3 class="projet-card-title">Cartographie</h3>
          <p class="projet-card-desc">Deux réalisations issues du cours de cartographie : l'une représente le territoire du stage à Bordeaux Métropole (service Aménagement Urbain, pôle Territoire Ouest), l'autre compile l'ensemble des travaux cartographiques réalisés en formation.</p>
          <div class="no-link-note">🗺️ Documents cartographiques disponibles sur demande</div>
        </div>
      </div>

      <!-- UFEP -->
      <a class="projet-card" href="#" id="ufepCard">
        <div class="projet-card-accent"></div>
        <div class="projet-card-body">
          <div class="projet-card-year">Première année · Commande externe</div>
          <h3 class="projet-card-title">Collaboration avec l'UFEP</h3>
          <p class="projet-card-desc">Dans le cadre d'une collaboration avec l'UFEP (ONG), réalisation d'une commande visant à sensibiliser un jeune public à la déforestation et à la résilience climatique. Travail alliant communication visuelle et enjeux environnementaux globaux.</p>
          <div class="projet-card-link">Voir la vidéo du projet</div>
        </div>
      </a>

      <!-- Voyage Liban -->
      <div class="projet-card">
        <div class="projet-card-accent"></div>
        <div class="projet-card-body">
          <div class="projet-card-year">Seconde · Engagement humanitaire</div>
          <h3 class="projet-card-title">Voyage humanitaire au Liban</h3>
          <p class="projet-card-desc">En avril 2023, participation à un voyage humanitaire au Liban avec l'association <em>Les Cuisines de Marie</em>. Sur place, aide à la préparation de repas pour des personnes en situation de précarité alimentaire. Une expérience humaine et citoyenne profondément enrichissante.</p>
          <div class="no-link-note">📷 Reportage photo disponible sur demande</div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ══ EXPÉRIENCES / CV ══ -->
<section id="experiences">
  <div class="container">
    <div class="section-header">
      <div class="section-number">03</div>
      <h2 class="section-title">Expériences & CV<span></span></h2>
    </div>

    <!-- CV GRID -->
    <div style="display:grid; grid-template-columns:1fr 1.6fr; gap:3rem; align-items:start;">

      <!-- COLONNE GAUCHE -->
      <div>

        <!-- Compétences -->
        <div style="margin-bottom:2.5rem;">
          <h3 style="font-family:'League Spartan',sans-serif; font-weight:900; font-size:0.75rem; text-transform:uppercase; letter-spacing:0.2em; color:var(--yellow); margin-bottom:1rem; border-bottom:3px solid var(--yellow); padding-bottom:0.4rem;">Compétences</h3>
          <div style="display:flex; flex-wrap:wrap; gap:0.4rem;">
            <span class="timeline-tag">Aisance relationnelle</span>
            <span class="timeline-tag">Sens de l'écoute</span>
            <span class="timeline-tag">Adaptabilité</span>
            <span class="timeline-tag">Communication</span>
            <span class="timeline-tag">Efficacité</span>
            <span class="timeline-tag">Maîtrise de l'informatique</span>
          </div>
        </div>

        <!-- Langues -->
        <div style="margin-bottom:2.5rem;">
          <h3 style="font-family:'League Spartan',sans-serif; font-weight:900; font-size:0.75rem; text-transform:uppercase; letter-spacing:0.2em; color:var(--yellow); margin-bottom:1rem; border-bottom:3px solid var(--yellow); padding-bottom:0.4rem;">Langues</h3>
          <div style="margin-bottom:0.8rem;">
            <div style="font-family:'League Spartan',sans-serif; font-weight:700; font-size:0.8rem; text-transform:uppercase; color:var(--white); margin-bottom:0.3rem;">Anglais</div>
            <div style="height:5px; background:rgba(255,255,255,0.15); border-radius:0; width:100%;"><div style="height:5px; background:var(--blue); width:60%;"></div></div>
          </div>
          <div>
            <div style="font-family:'League Spartan',sans-serif; font-weight:700; font-size:0.8rem; text-transform:uppercase; color:var(--white); margin-bottom:0.3rem;">Espagnol</div>
            <div style="height:5px; background:rgba(255,255,255,0.15); width:100%;"><div style="height:5px; background:var(--orange); width:30%;"></div></div>
          </div>
        </div>

        <!-- Loisirs & Maîtrises -->
        <div style="margin-bottom:2.5rem;">
          <h3 style="font-family:'League Spartan',sans-serif; font-weight:900; font-size:0.75rem; text-transform:uppercase; letter-spacing:0.2em; color:var(--yellow); margin-bottom:1rem; border-bottom:3px solid var(--yellow); padding-bottom:0.4rem;">Loisirs & Maîtrises</h3>
          <ul style="list-style:none; padding:0;">
            <li style="font-size:0.85rem; color:rgba(255,255,255,0.8); padding:0.25rem 0; border-bottom:1px solid rgba(255,255,255,0.07);">BAC avec mention</li>
            <li style="font-size:0.85rem; color:rgba(255,255,255,0.8); padding:0.25rem 0; border-bottom:1px solid rgba(255,255,255,0.07);">Diplôme PIX</li>
            <li style="font-size:0.85rem; color:rgba(255,255,255,0.8); padding:0.25rem 0; border-bottom:1px solid rgba(255,255,255,0.07);">Maîtrise de Géoportail</li>
            <li style="font-size:0.85rem; color:rgba(255,255,255,0.8); padding:0.25rem 0; border-bottom:1px solid rgba(255,255,255,0.07);">Maîtrise Word / Excel</li>
            <li style="font-size:0.85rem; color:rgba(255,255,255,0.8); padding:0.25rem 0;">Permis B</li>
          </ul>
        </div>

      </div>

      <!-- COLONNE DROITE : timeline -->
      <div>

        <!-- Formation -->
        <h3 style="font-family:'League Spartan',sans-serif; font-weight:900; font-size:0.75rem; text-transform:uppercase; letter-spacing:0.2em; color:var(--yellow); margin-bottom:1.2rem; border-bottom:3px solid var(--yellow); padding-bottom:0.4rem;">Formation</h3>
        <div class="timeline" style="margin-bottom:2.5rem;">

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">2025 · En cours</div>
            <div class="timeline-title">BUT Villes et Territoires Durables</div>
            <div class="timeline-org">IUT Bordeaux Montaigne</div>
            <ul style="margin-top:0.5rem; padding-left:1.1rem; list-style:disc;">
              <li style="font-size:0.82rem; color:rgba(255,255,255,0.75); line-height:1.6; margin-bottom:0.3rem;">Adopter une posture et une communication adaptée aux contextes et aux acteurs</li>
              <li style="font-size:0.82rem; color:rgba(255,255,255,0.75); line-height:1.6; margin-bottom:0.3rem;">Savoir privilégier la proximité avec les publics et les acteurs territoriaux</li>
              <li style="font-size:0.82rem; color:rgba(255,255,255,0.75); line-height:1.6;">Maîtrise en cartographie, diagnostic territorial et repérage des conflits entre acteurs</li>
            </ul>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">2024–2025</div>
            <div class="timeline-title">Baccalauréat général</div>
            <div class="timeline-org">Avec mention</div>
          </div>

        </div>

        <!-- Expériences professionnelles -->
        <h3 style="font-family:'League Spartan',sans-serif; font-weight:900; font-size:0.75rem; text-transform:uppercase; letter-spacing:0.2em; color:var(--yellow); margin-bottom:1.2rem; border-bottom:3px solid var(--yellow); padding-bottom:0.4rem;">Expériences professionnelles</h3>
        <div class="timeline">

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">07/2025 · 08/2025</div>
            <div class="timeline-title">Saisonnier en Grande surface</div>
            <div class="timeline-org">Leclerc · Biscarrosse</div>
            <ul style="margin-top:0.5rem; padding-left:1.1rem; list-style:disc;">
              <li style="font-size:0.82rem; color:rgba(255,255,255,0.75); line-height:1.6; margin-bottom:0.3rem;">Mise en rayon</li>
              <li style="font-size:0.82rem; color:rgba(255,255,255,0.75); line-height:1.6;">En relation avec les clients pour les aider ou les orienter</li>
            </ul>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">06/2024 · 08/2024</div>
            <div class="timeline-title">Vendeur en poissonnerie</div>
            <div class="timeline-org">Poissonnerie De La Plage Biscarrosse · Biscarrosse</div>
            <ul style="margin-top:0.5rem; padding-left:1.1rem; list-style:disc;">
              <li style="font-size:0.82rem; color:rgba(255,255,255,0.75); line-height:1.6; margin-bottom:0.3rem;">Renseignements et prise des commandes au comptoir</li>
              <li style="font-size:0.82rem; color:rgba(255,255,255,0.75); line-height:1.6;">Gestion de la caisse</li>
            </ul>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">06/2023 · 12/2023</div>
            <div class="timeline-title">Bénévole</div>
            <div class="timeline-org">Banque Alimentaire et Restos du Cœur · Biscarrosse & Parentis</div>
            <ul style="margin-top:0.5rem; padding-left:1.1rem; list-style:disc;">
              <li style="font-size:0.82rem; color:rgba(255,255,255,0.75); line-height:1.6; margin-bottom:0.3rem;">Contribution à des tâches logistiques de base pour assurer un flux de travail fluide</li>
              <li style="font-size:0.82rem; color:rgba(255,255,255,0.75); line-height:1.6; margin-bottom:0.3rem;">Réalisation de diverses tâches manuelles selon les besoins opérationnels (ménage, vente, remise en rayon)</li>
              <li style="font-size:0.82rem; color:rgba(255,255,255,0.75); line-height:1.6;">Travail en équipe de 8 personnes pour atteindre les objectifs fixés</li>
            </ul>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">07/2023 · 08/2023</div>
            <div class="timeline-title">Agent d'entretien</div>
            <div class="timeline-org">Conciergerie · Biscarrosse</div>
            <ul style="margin-top:0.5rem; padding-left:1.1rem; list-style:disc;">
              <li style="font-size:0.82rem; color:rgba(255,255,255,0.75); line-height:1.6;">Remise en état des logements entre chaque occupant, nettoyage des pièces et lavage des vitres</li>
            </ul>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-date">07/2022</div>
            <div class="timeline-title">Castreur de maïs</div>
            <div class="timeline-org">Agriculteur · Commensacq</div>
            <ul style="margin-top:0.5rem; padding-left:1.1rem; list-style:disc;">
              <li style="font-size:0.82rem; color:rgba(255,255,255,0.75); line-height:1.6;">Réalisation d'opérations manuelles destinées à entretenir les lignes de géniteurs mâles et femelles des parcelles de maïs</li>
            </ul>
          </div>

        </div>
      </div>
    </div>

  </div>
</section>

<!-- ══ CONTACT ══ -->
<section id="contact">
  <div class="container">
    <div class="section-header">
      <div class="section-number">04</div>
      <h2 class="section-title">Contact<span></span></h2>
    </div>

    <div style="display:flex; flex-direction:column; gap:1.5rem; max-width:480px;">
      <div class="contact-info-item">
        <div class="contact-info-icon">✉</div>
        <div>
          <div class="contact-info-label">Email</div>
          <div class="contact-info-value"><a href="mailto:pratsamuel@yahoo.com">pratsamuel@yahoo.com</a></div>
        </div>
      </div>
      <div class="contact-info-item">
        <div class="contact-info-icon">📞</div>
        <div>
          <div class="contact-info-label">Téléphone</div>
          <div class="contact-info-value"><a href="tel:+33699441437">06 99 44 14 37</a></div>
        </div>
      </div>
      <div class="contact-info-item">
        <div class="contact-info-icon">📍</div>
        <div>
          <div class="contact-info-label">Adresse</div>
          <div class="contact-info-value">792 av de la République</div>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- ══ FOOTER ══ -->
<footer>
  <div class="footer-name">Samuel PRAT</div>
  <div class="footer-sub">Étudiant Villes & Territoires Durables — IUT Bordeaux Montaigne · 2025</div>
</footer>

<!-- ══ VIDEO OVERLAY ══ -->
<div class="video-overlay" id="videoOverlay">
  <div class="video-wrapper">
    <button class="video-close" id="videoClose">✕</button>
    <video id="videoPlayer" controls preload="none">
      <source src="VIDEO_FINALE_TCHAD.mp4" type="video/mp4" />
      Votre navigateur ne supporte pas la lecture vidéo.
    </video>
  </div>
</div>

<!-- ══ JS ══ -->
<script>
  /* ── BURGER ── */
  const burger = document.getElementById('burgerBtn');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  /* ── VIDEO ── */
  const ufepCard = document.getElementById('ufepCard');
  const videoOverlay = document.getElementById('videoOverlay');
  const videoClose = document.getElementById('videoClose');
  const videoPlayer = document.getElementById('videoPlayer');

  ufepCard.addEventListener('click', (e) => {
    e.preventDefault();
    videoOverlay.classList.add('open');
    videoPlayer.play();
  });

  function closeVideo() {
    videoOverlay.classList.remove('open');
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
  }

  videoClose.addEventListener('click', closeVideo);
  videoOverlay.addEventListener('click', (e) => {
    if (e.target === videoOverlay) closeVideo();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeVideo();
  });

  /* ── ACTIVE NAV ── */
  const sections = document.querySelectorAll('section[id], #hero');
  const navAnchors = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => {
          a.style.background = '';
          a.style.color = '';
        });
        const id = entry.target.id;
        const active = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (active) {
          active.style.background = 'var(--yellow)';
          active.style.color = 'var(--black)';
        }
      }
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('section[id]').forEach(s => observer.observe(s));
</script>

</body>
</html>
