<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio | Samuel PRAT</title>
    <!-- Importation de League Spartan pour les titres -->
    <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@700;900&display=swap" rel="stylesheet">
    <style>
        :root {
            --yellow: #ffdf00;
            --orange: #ff4f00;
            --red: #ff0006;
            --blue: #189ffe;
            --purple-light: #725580;
            --purple-mid: #330c85;
            --purple-deep: #3800ae;
            --black: #000000;
            --white: #ffffff;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: var(--purple-deep);
            color: var(--white);
            font-family: 'Arial MT Pro', Arial, sans-serif;
            line-height: 1.6;
            overflow-x: hidden;
            transition: background-color 0.5s ease;
        }

        h1, h2, h3, .subtitle, .nav-link {
            font-family: 'League Spartan', sans-serif;
            text-transform: uppercase;
            font-weight: 900;
        }

        .noise {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none;
            opacity: 0.05;
            z-index: 9999;
            background-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23n)"/></svg>');
        }

        /* --- Header --- */
        header {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: var(--purple-light);
            color: var(--white);
            border-bottom: 15px solid var(--black);
            padding: 20px;
            position: relative;
            text-align: center;
        }

        .hero-title {
            font-size: clamp(4rem, 15vw, 10rem);
            line-height: 0.85;
            letter-spacing: -5px;
            transform: skew(-2deg);
            margin-bottom: 30px;
            color: var(--yellow);
            -webkit-text-stroke: 2px var(--black);
            text-shadow: 8px 8px 0px var(--black);
        }

        .hero-subtitle {
            background-color: var(--black);
            color: var(--white);
            padding: 12px 30px;
            font-size: clamp(1rem, 3vw, 1.8rem);
            transform: rotate(-1deg);
            display: inline-block;
            border: 2px solid var(--yellow);
        }

        .hero-name {
            color: var(--yellow);
            font-weight: bold;
        }

        /* --- Marquee --- */
        .marquee {
            background-color: var(--blue);
            color: var(--black);
            padding: 15px 0;
            font-weight: bold;
            border-bottom: 8px solid var(--black);
            white-space: nowrap;
            overflow: hidden;
            display: flex;
        }

        .marquee span {
            display: inline-block;
            padding-left: 50px;
            font-size: 2rem;
            animation: scroll 25s linear infinite;
        }

        @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
        }

        /* --- Grille de Projets --- */
        .container {
            padding: 80px 5vw;
        }

        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-bottom: 60px;
            border-bottom: 4px solid var(--yellow);
            padding-bottom: 20px;
        }

        .section-title {
            font-size: clamp(3rem, 8vw, 6rem);
            color: var(--yellow);
        }

        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 40px;
            min-height: 400px;
        }

        .project-card {
            background-color: var(--black);
            border: 4px solid var(--black);
            position: relative;
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            cursor: pointer;
            overflow: hidden;
        }

        .project-card:hover {
            transform: translateY(-10px) rotate(1deg);
            z-index: 10;
        }

        .project-img-wrapper {
            aspect-ratio: 4/5;
            overflow: hidden;
            background-color: var(--purple-light);
            position: relative;
        }

        .project-img-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: grayscale(1) contrast(1.2);
            mix-blend-mode: screen;
            transition: filter 0.5s ease;
        }

        .project-card:hover img {
            filter: grayscale(0) saturate(2) contrast(1.5) hue-rotate(45deg);
        }

        /* Couleurs dynamiques basées sur l'index de la carte */
        .project-card.alt-1 .project-img-wrapper { background-color: var(--blue); }
        .project-card.alt-2 .project-img-wrapper { background-color: var(--red); }
        .project-card.alt-0 .project-img-wrapper { background-color: var(--orange); }

        .project-info {
            padding: 20px;
            background-color: var(--white);
            color: var(--black);
            border-top: 4px solid var(--black);
        }

        .project-tag {
            font-size: 0.8rem;
            font-weight: bold;
            color: var(--purple-deep);
            margin-bottom: 5px;
            display: block;
        }

        /* --- Footer --- */
        .footer-section {
            background-color: var(--red);
            color: var(--white);
            padding: 100px 5vw;
            border-top: 15px solid var(--black);
            text-align: center;
        }

        .contact-btn {
            font-family: 'League Spartan', sans-serif;
            font-size: clamp(2rem, 10vw, 5rem);
            color: var(--yellow);
            text-decoration: none;
            display: block;
            margin-top: 30px;
            transition: all 0.3s ease;
        }

        .contact-btn:hover {
            letter-spacing: 10px;
            color: var(--black);
            transform: scale(1.05);
        }

        @media (max-width: 768px) {
            .hero-title { font-size: 4rem; }
            .projects-grid { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>

    <div class="noise"></div>

    <header>
        <h1 class="hero-title">MON<br>PORTFOLIO</h1>
        <div class="hero-subtitle">
            <span class="hero-name">Samuel PRAT</span>, Étudiant en Villes et Territoires Durables
        </div>
    </header>

    <div class="marquee">
        <span>VILLES DURABLES • TERRITOIRES • DESIGN • CRÉATIVITÉ • ANNÉE 1 • ROMAN PHOTO • BRANDING • URBANISME • </span>
        <span>VILLES DURABLES • TERRITOIRES • DESIGN • CRÉATIVITÉ • ANNÉE 1 • ROMAN PHOTO • BRANDING • URBANISME • </span>
    </div>

    <section class="container" id="projects-section">
        <div class="section-header">
            <h2 class="section-title">TRAVAUX</h2>
            <p style="color: var(--yellow)">SÉLECTION ANNÉE 1</p>
        </div>

        <div class="projects-grid" id="grid-anne1">
            <!-- Les projets seront injectés ici -->
        </div>
    </section>

    <footer class="footer-section">
        <h2 style="font-size: 3rem;">UNE IDÉE ?<br>UN PROJET ?</h2>
        <a href="mailto:contact@votremail.com" class="contact-btn">CONTACTEZ-MOI</a>
        <div style="margin-top: 60px; font-weight: bold; color: var(--black);">
            © 2024 • Samuel PRAT • TOUS DROITS RÉSERVÉS
        </div>
    </footer>

    <script>
        /**
         * Données des projets intégrées pour éviter les erreurs de résolution de module
         */
        const projetsAnne1 = [
            {
                id: "01",
                categorie: "DIRECTION ARTISTIQUE",
                titre: "ROMAN PHOTO",
                image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
                lien: "projets/roman-photo.pdf" 
            },
            {
                id: "02",
                categorie: "BRANDING",
                titre: "YELLOW POP",
                image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
                lien: "#"
            },
            {
                id: "03",
                categorie: "UI-UX DESIGN",
                titre: "ACID INTERFACE",
                image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=800",
                lien: "#"
            },
            {
                id: "04",
                categorie: "MOTION GRAPHICS",
                titre: "VIBRANT CORE",
                image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800",
                lien: "#"
            }
        ];

        /**
         * Fonction pour charger les projets dans la grille
         */
        function chargerProjets(containerId) {
            const container = document.getElementById(containerId);
            if (!container) return;

            const htmlProjets = projetsAnne1.map((projet, index) => `
                <div class="project-card alt-${index % 3}" onclick="window.open('${projet.lien}', '_blank')">
                    <div class="project-img-wrapper">
                        <img src="${projet.image}" alt="${projet.titre}">
                    </div>
                    <div class="project-info">
                        <span class="project-tag">${projet.id} / ${projet.categorie}</span>
                        <h3>${projet.titre}</h3>
                    </div>
                </div>
            `).join('');

            container.innerHTML = htmlProjets;
        }

        // Initialisation au chargement
        window.addEventListener('DOMContentLoaded', () => {
            chargerProjets('grid-anne1');

            // Effet de scroll
            window.addEventListener('scroll', () => {
                const scrollPercent = window.scrollY / (document.body.offsetHeight - window.innerHeight);
                const body = document.body;
                
                if (scrollPercent > 0.8) {
                    body.style.backgroundColor = 'var(--black)';
                } else {
                    body.style.backgroundColor = 'var(--purple-deep)';
                }
            });
        });
    </script>
</body>
</html>
