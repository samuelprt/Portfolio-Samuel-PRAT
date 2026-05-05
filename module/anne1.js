/**
 * Module de gestion des projets - Année 1
 * Ce fichier contient les données des projets et la fonction d'injection dans le DOM.
 */

const projetsAnne1 = [
    {
        id: "01",
        categorie: "DIRECTION ARTISTIQUE",
        titre: "THERMAL VISION",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "02",
        categorie: "BRANDING",
        titre: "YELLOW POP",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "03",
        categorie: "UI-UX DESIGN",
        titre: "ACID INTERFACE",
        image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "04",
        categorie: "MOTION GRAPHICS",
        titre: "VIBRANT CORE",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800"
    }
];

/**
 * Fonction pour charger les projets dans un conteneur spécifique
 * @param {string} containerId - L'ID de l'élément HTML cible
 */
export function chargerProjets(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Génération du HTML pour chaque projet
    const htmlProjets = projetsAnne1.map(projet => `
        <div class="project-card">
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
