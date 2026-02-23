<script setup>
import { ref, computed } from 'vue';
import { globalState } from '../state.js';

// --- 1. NAVIGATION & LANGUE ---
const currentLang = computed(() => globalState.lang);

// --- 2. DONNÉES PROJETS ---
const projects = computed(() => {
  const isEn = currentLang.value === 'en';
  return [
  {
      id: 4,
      title: isEn ? "Student Attendance System" : "Système de Gestion d'Absences",
      desc: isEn
        ? "Full-stack web application to collect, store, and analyze student attendance data. Built with a MariaDB architecture and containerized for data consistency."
        : "Application web full-stack pour collecter, stocker et analyser les données de présence. Architecture basée sur MariaDB et conteneurisée pour la cohérence des données.",
      placeholder: "📊 Data App",
      tags: ["Python", "SQL", "Docker", "Flask"],
      status: isEn ? "COMPLETED" : "TERMINÉ",
      statusClass: "completed",

      roleLabel: isEn ? "Role:" : "Rôle :",
      role: isEn ? "Backend & Data Dev" : "Dév. Backend & Data", 
      timeLabel: isEn ? "Year:" : "Année :",
      time: "2025",
      partnerLabel: isEn ? "Stack:" : "Stack :",
      partnerName: "Flask / MariaDB",
      partnerLink: "", 
      achievements: isEn
        ? ["💾 SQL Data Modeling", "🐳 Docker Containerization", "⚙️ Python ETL Logic"]
        : ["💾 Modélisation Données SQL", "🐳 Conteneurisation Docker", "⚙️ Logique Traitement Python"],
      links: [
        { label: "GitLab", url: "https://github.com/1p0tato1/Gestion-des-appels" } 
      ]
    },

    {
      id: 6, 
      title: isEn ? "Titanic Survival Prediction" : "Prédiction de Survie du Titanic",
      desc: isEn
        ? "End-to-end Machine Learning pipeline for the Titanic disaster. Features advanced feature engineering (Title extraction), median-based statistical imputation, and a hyperparameter-tuned Random Forest model reaching a 0.77990 score."
        : "Pipeline complet de Machine Learning pour le Titanic. Inclut du feature engineering avancé (extraction de titres), de l'imputation statistique basée sur la médiane, et un modèle Random Forest optimisé atteignant un score de 0.77990.",
      placeholder: "🚢 Titanic ML",
      tags: ["Python", "Scikit-Learn", "Pandas", "Seaborn"],
      status: isEn ? "COMPLETED" : "TERMINÉ",
      statusClass: "completed",

      roleLabel: isEn ? "Role:" : "Rôle :",
      role: isEn ? "ML Engineer" : "Ingénieur ML",
      timeLabel: isEn ? "Year:" : "Année :",
      time: "2026",
      partnerLabel: isEn ? "Context:" : "Contexte :",
      partnerName: "Kaggle Competition",
      partnerLink: "https://www.kaggle.com/c/titanic", 
      achievements: isEn
        ? ["🌲 Random Forest Optimization", "🔍 Feature Engineering (Titles)", "🏆 Top 25% Leaderboard"]
        : ["🌲 Optimisation Random Forest", "🔍 Feature Engineering (Titres)", "🏆 Top 25% Classement"],
      links: [
        { label: isEn ? "View PDF" : "Voir PDF", url: "public/pdfs/titanic_analysis_pdf.pdf" },
        { label: "GitHub", url: "https://github.com/1p0tato1/titanic-survival-prediction" }
      ]
    },

    {
      id: 7, 
      title: isEn ? "Telco Customer Churn Prediction" : "Prédiction d'Attrition Client (Telco)",
      desc: isEn
        ? "End-to-end Machine Learning pipeline to predict customer churn. Features comprehensive EDA, SMOTE for imbalanced classes, and a hyperparameter-tuned XGBoost model prioritizing business revenue with an 82% Recall rate."
        : "Pipeline complet de Machine Learning pour prédire l'attrition client. Inclut une EDA approfondie, l'utilisation de SMOTE pour les données déséquilibrées, et un modèle XGBoost optimisé atteignant un taux de rappel (Recall) de 82% pour maximiser la rétention.",
      placeholder: "📉 Telco Churn ML",
      tags: ["Python", "Scikit-Learn", "XGBoost", "SMOTE", "Pandas", "Seaborn"],
      status: isEn ? "COMPLETED" : "TERMINÉ",
      statusClass: "completed",

      roleLabel: isEn ? "Role:" : "Rôle :",
      role: isEn ? "Data Scientist" : "Data Scientist",
      timeLabel: isEn ? "Year:" : "Année :",
      time: "2026",
      partnerLabel: isEn ? "Context:" : "Contexte :",
      partnerName: "Portfolio Project",
      achievements: isEn
        ? ["🚀 82% Recall with XGBoost", "⚖️ SMOTE for Imbalanced Data", "📊 Business-Driven Feature Importance"]
        : ["🚀 Taux de rappel de 82% (XGBoost)", "⚖️ Rééquilibrage des données (SMOTE)", "📊 Focus sur l'impact métier"],
      links: [
        { label: isEn ? "View PDF" : "Voir PDF", url: "public/pdfs/Telco-Analysis.pdf" },
        { label: "GitHub", url: "https://github.com/1p0tato1/Telco-Model" }
      ]
    },

    {
      id: 5, 
      title: isEn ? "Netflix Data Analysis" : "Analyse de Données Netflix",
      desc: isEn
        ? "Exploratory Data Analysis (EDA) of the Netflix catalog. Features advanced data cleaning, statistical imputation algorithms to recover missing directors/cast, and visualization of global content strategies."
        : "Analyse exploratoire (EDA) du catalogue Netflix. Inclut un nettoyage avancé, des algorithmes d'imputation statistique pour récupérer les données manquantes et une visualisation des stratégies de contenu mondiales.",
      placeholder: "🎬 Netflix EDA",
      tags: ["Python", "Pandas", "Seaborn", "Matplotlib"],
      status: isEn ? "COMPLETED" : "TERMINÉ",
      statusClass: "completed",

      roleLabel: isEn ? "Role:" : "Rôle :",
      role: isEn ? "Data Analyst" : "Data Analyst",
      timeLabel: isEn ? "Year:" : "Année :",
      time: "2026",
      partnerLabel: isEn ? "Context:" : "Contexte :",
      partnerName: "Data Science",
      partnerLink: "", 
      achievements: isEn
        ? ["🤖 Statistical Imputation", "📊 Advanced Visualization", "🌍 Strategic Insights"]
        : ["🤖 Imputation Statistique", "📊 Visualisation Avancée", "🌍 Insights Stratégiques"],
      links: [
        { label: isEn ? "See Demo" : "Voir la démo", url: "https://1p0tato1.github.io/Netflix-dataset/index.html" },
        { label: "GitHub", url: "https://github.com/1p0tato1/Netflix-dataset" }
      ]
    },
    
  
  {
      id: 1,
      title: isEn ? "Website Creation & SEO" : "Création Site Web & SEO",
      desc: isEn 
        ? "Designed a functional website and enhanced its SEO to improve search visibility with my classmate."
        : "Conception d'un site web fonctionnel et amélioration de son SEO pour améliorer la visibilité dans les résultats de recherche.",
      placeholder: "🔗 SEO",
      tags: ["HTML", "CSS", "JS", "SEO"],
      status: isEn ? "Completed" : "Terminé",
      statusClass: "completed",

      roleLabel: isEn ? "Role:" : "Rôle :",
      role: isEn ? "Dev & Designer" : "Dev & Designer",
      timeLabel: isEn ? "Timeline:" : "Durée :",
      time: isEn ? "3 months (2025)" : "3 mois (2025)",
      partnerLabel: isEn ? "Teammate:" : "Coéquipier :",
      partnerName: "Louis Farge",
      partnerLink: "https://www.linkedin.com/in/louis-farge-8a4a84295/",
      achievements: isEn 
        ? ["✨ Functional & user-friendly website", "⚡ Improved SEO visibility", "📈 Enhanced ranking", "🤝 Team collaboration"]
        : ["✨ Site fonctionnel et ergonomique", "⚡ Meilleure visibilité SEO", "📈 Classement amélioré", "🤝 Travail d'équipe"],
      links: [
        { label: isEn ? "See Website" : "Voir le site", url: "https://leklarkifou.com/" },
        { label: "GitHub", url: "https://github.com/1p0tato1/SEO-Competition" }
      ]
    },


    {
      id: 2,
      title: isEn ? "Falling Sand Game" : "Jeu Falling Sand",
      desc: isEn 
        ? "Collaborated with a classmate to develop a recreation of the classic Falling Sand game using C++ and SFML."
        : "Développement d'une recréation du jeu classique Falling Sand en utilisant C++ et SFML avec un camarade.",
      placeholder: "📱 Falling Sand",
      tags: ["C++", "SFML"],
      status: isEn ? "Completed" : "Terminé",
      statusClass: "completed",

      roleLabel: isEn ? "Role:" : "Rôle :",
      role: isEn ? "Developer" : "Développeur",
      timeLabel: isEn ? "Timeline:" : "Durée :",
      time: isEn ? "1 month (2025)" : "1 mois (2025)",
      partnerLabel: isEn ? "Teammate:" : "Coéquipier :",
      partnerName: "Noah Soler",
      partnerLink: "https://www.linkedin.com/in/noah-soler-9b0471267/",
      achievements: isEn
        ? ["🌍 Particle physics simulation", "🎮 Interactive materials", "⚡ Optimized rendering", "🤝 Pair programming"]
        : ["🌍 Simulation physique particules", "🎮 Matériaux interactifs", "⚡ Rendu optimisé", "🤝 Pair programming"],
      links: [
        { label: "GitHub", url: "https://github.com/Noanono/project_fall_sand" }
      ]
    },


    {
      id: 3,
      title: isEn ? "Pokémon Game Recreation" : "Recréation Jeu Pokémon", 
      desc: isEn
        ? "Recreation of core mechanics from the classic Pokemon game, including battles, evolutions, and a Pokedex system."
        : "Recréation des mécaniques principales du jeu Pokémon classique : combats, évolutions et système de Pokédex.",
      placeholder: "🐦 Pokémon",
      tags: ["C++"],
      status: isEn ? "SUSPENDED" : "SUSPENDU",
      statusClass: "suspended",

      roleLabel: isEn ? "Role:" : "Rôle :",
      role: isEn ? "Developer" : "Développeur",
      timeLabel: isEn ? "Year:" : "Année :",
      time: "2025",
      partnerLabel: isEn ? "Platform:" : "Plateforme :",
      partnerName: "PC",
      partnerLink: "", 
      achievements: isEn
        ? ["📖 Functional Pokedex", "⚡ Sorting algorithms"]
        : ["📖 Pokédex fonctionnel", "⚡ Algorithmes de tri"],
      links: [
        { label: "GitHub", url: "https://github.com/1p0tato1/Pokemon-Game" }
      ]
    }

    

  ];
});

// --- LOGIQUE CAROUSEL ---
const currentProjectIndex = ref(0);

const nextProject = () => {
  currentProjectIndex.value = (currentProjectIndex.value + 1) % projects.value.length;
};

const prevProject = () => {
  currentProjectIndex.value = (currentProjectIndex.value - 1 + projects.value.length) % projects.value.length;
};

const goToProject = (index) => {
  currentProjectIndex.value = index;
};

// Gestion du Swipe tactile
let touchStartX = 0;
let touchEndX = 0;

const handleTouchStart = (e) => {
  touchStartX = e.touches[0].clientX;
};

const handleTouchEnd = (e) => {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipe();
};

const handleSwipe = () => {
  const diff = touchStartX - touchEndX;
  if (Math.abs(diff) > 50) { 
    if (diff > 0) nextProject(); 
    else prevProject(); 
  }
};


const getProjectClass = (index) => {
  if (index === currentProjectIndex.value) return 'active';
  const total = projects.value.length;
  const prevIndex = (currentProjectIndex.value - 1 + total) % total;
  const nextIndex = (currentProjectIndex.value + 1) % total;
  
  if (index === prevIndex) return 'prev';
  if (index === nextIndex) return 'next';
  return '';
};

// --- TRADUCTIONS GLOBALES ---
const t = computed(() => {
  const isEn = currentLang.value === 'en';
  return {
    menu: isEn 
      ? { home: 'Welcome', exp: 'Education & Exp.', skills: 'Skills', certs: 'Diplomas & Certifs', projects: 'Projects', contact: 'Contact' }
      : { home: 'Accueil', exp: 'Éducation & Exp.', skills: 'Compétences', certs: 'Diplômes & Certifs', projects: 'Projets', contact: 'Contact' },
    role: isEn ? 'Student' : 'Étudiant',
    title: isEn ? 'My Projects' : 'Mes Projets',
    subtitle: isEn ? 'Showcasing my work and achievements' : 'Présentation de mon travail et de mes réalisations',
    featured: isEn ? 'Featured Projects' : 'Projets Phares',
    featuredDesc: isEn 
      ? 'Browse through my portfolio using the control arrows. Hover over cards for detailed insights.' 
      : 'Naviguez dans mon portfolio en utilisant les flèches de contrôle. Survolez les cartes pour obtenir des informations détaillées.'
  };
});
</script>

<template>
      <main class="projects-content">
        <div class="page-header">
          <h1 class="page-title fade-in">{{ t.title }}</h1>
          <p class="page-subtitle fade-in">{{ t.subtitle }}</p>
        </div>

        <div class="content-section fade-in">
            <h2 class="section-title">{{ t.featured }}</h2>
            <p class="desc-text">{{ t.featuredDesc }}</p>
        </div>

        <div class="carousel-container fade-in delay-1">
            <button class="carousel-nav prev" @click="prevProject" aria-label="Previous">
                <i class="fas fa-chevron-left"></i>
            </button>

            <div 
              class="projects-carousel"
              @touchstart="handleTouchStart"
              @touchend="handleTouchEnd"
            >
                <div 
                  v-for="(project, index) in projects" 
                  :key="project.id" 
                  class="project-wrapper"
                  :class="getProjectClass(index)"
                >
                    <div class="project-card-3d">
                        <div class="project-card-inner">
                            
                            <div class="project-card-front">
                                <div class="project-image">
                                    <div class="project-placeholder">{{ project.placeholder }}</div>
                                </div>
                                <div class="project-content-front">
                                    <h3>{{ project.title }}</h3>
                                    <p class="project-description-short">{{ project.desc }}</p>
                                    
                                    <div class="project-tech-front">
                                        <span v-for="tag in project.tags" :key="tag" class="tech-badge">{{ tag }}</span>
                                    </div>
                                    <div class="project-status" :class="project.statusClass">{{ project.status }}</div>
                                </div>
                            </div>

                            <div class="project-card-back">
                                <div class="project-content-back">
                                    <h3>{{ project.title }}</h3>
                                    
                                    <div class="project-details-back">
                                        <div class="detail-item">
                                            <span class="detail-label">{{ project.roleLabel }}</span>
                                            <span class="detail-value">{{ project.role }}</span>
                                        </div>
                                        <div class="detail-item">
                                            <span class="detail-label">{{ project.timeLabel }}</span>
                                            <span class="detail-value">{{ project.time }}</span>
                                        </div>
                                        <div class="detail-item">
                                            <span class="detail-label">{{ project.partnerLabel }}</span>
                                            <span class="detail-value">
                                                <a v-if="project.partnerLink" :href="project.partnerLink" target="_blank" class="detail-value-link">{{ project.partnerName }}</a>
                                                <span v-else>{{ project.partnerName }}</span>
                                            </span>
                                        </div>
                                    </div>

                                    <div class="project-achievements-back">
                                        <div v-for="(ach, i) in project.achievements" :key="i" class="achievement">{{ ach }}</div>
                                    </div>

                                    <div class="project-buttons">
                                        <a v-for="link in project.links" :key="link.label" :href="link.url" target="_blank" class="project-btn">{{ link.label }}</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <button class="carousel-nav next" @click="nextProject" aria-label="Next">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>

        <div class="carousel-indicators">
            <span 
              v-for="(proj, index) in projects" 
              :key="proj.id"
              class="indicator" 
              :class="{ active: index === currentProjectIndex }"
              @click="goToProject(index)"
            ></span>
        </div>

      </main>
</template>

<style scoped>
.projects-content {
  width: 100%;
}
.page-header { margin-bottom: 3rem; text-align: center; }
.page-title { font-size: 2.5rem; margin-bottom: 0.5rem; background: linear-gradient(90deg, #fff, #b0e8a7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.page-subtitle { color: #888; font-size: 1.1rem; }
.section-title { font-size: 1.8rem; color: #b0e8a7; margin-bottom: 1.5rem; padding-bottom: 0.5rem; border-bottom: 1px solid #2d2d2d; }
.content-section { margin-bottom: 4rem; }
.desc-text { color: #ccc; line-height: 1.6; }
.fade-in { animation: fadeIn 0.8s ease forwards; opacity: 0; transform: translateY(20px); }
.delay-1 { animation-delay: 0.2s; }
@keyframes fadeIn { to { opacity: 1; transform: translateY(0); } }


.carousel-container {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 60px;
    perspective: 1000px;
}

.projects-carousel {
    position: relative;
    height: 500px;
    width: 100%;
    transform-style: preserve-3d;
}

.carousel-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(30, 30, 30, 0.8);
    border: 1px solid #b0e8a7;
    color: #b0e8a7;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; z-index: 10;
    transition: all 0.3s ease;
    outline: none;
}
.carousel-nav:hover { background: #b0e8a7; color: #121212; box-shadow: 0 0 15px rgba(176, 232, 167, 0.4); }
.carousel-nav.prev { left: 0; }
.carousel-nav.next { right: 0; }

.carousel-indicators {
    display: flex; justify-content: center; gap: 10px; margin-top: 30px;
}
.indicator {
    width: 12px; height: 12px; border-radius: 50%; background: #333; cursor: pointer; transition: all 0.3s ease;
}
.indicator.active { background: #b0e8a7; transform: scale(1.2); box-shadow: 0 0 10px rgba(176, 232, 167, 0.5); }

.project-wrapper {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    opacity: 0;
    visibility: hidden;
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform: scale(0.8) translateX(0);
}

.project-wrapper.active {
    opacity: 1; visibility: visible; transform: scale(1) translateX(0); z-index: 2;
}

.project-wrapper.prev { opacity: 0; transform: scale(0.8) translateX(-100px); z-index: 1; }
.project-wrapper.next { opacity: 0; transform: scale(0.8) translateX(100px); z-index: 1; }

.project-card-3d {
    width: 100%; height: 100%; perspective: 1500px;
}
.project-card-inner {
    position: relative; width: 100%; height: 100%;
    text-align: center; transition: transform 0.8s; transform-style: preserve-3d;
}

.project-card-3d:hover .project-card-inner { transform: rotateY(180deg); }

.project-card-front, .project-card-back {
    position: absolute; width: 100%; height: 100%;
    -webkit-backface-visibility: hidden; backface-visibility: hidden;
    border-radius: 20px; overflow: hidden;
    box-shadow: 0 15px 35px rgba(0,0,0,0.5);
    background: #1a1a1a; border: 1px solid #333;
}


.project-card-front {
    display: flex; flex-direction: column;
}
.project-image {
    height: 200px; background: #222; display: flex; align-items: center; justify-content: center;
    border-bottom: 1px solid #333; position: relative; overflow: hidden;
}
.project-placeholder { font-size: 1.5rem; color: #666; font-weight: bold; }
.project-content-front {
    padding: 30px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;
}
.project-content-front h3 { margin: 0 0 15px 0; color: #fff; font-size: 1.5rem; }
.project-description-short { color: #ccc; font-size: 0.95rem; margin-bottom: 20px; flex: 1; }
.project-tech-front {
    display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-bottom: 20px;
}
.tech-badge {
    background: rgba(176, 232, 167, 0.1); color: #b0e8a7; padding: 4px 10px;
    border-radius: 12px; font-size: 0.75rem; border: 1px solid rgba(176, 232, 167, 0.2);
}
.project-status {
    display: inline-block; padding: 6px 15px; border-radius: 20px;
    font-size: 0.8rem; font-weight: bold; text-transform: uppercase;
}
.project-status.completed { background: rgba(76, 175, 80, 0.2); color: #4CAF50; border: 1px solid #4CAF50; }
.project-status.suspended { background: rgba(244, 67, 54, 0.2); color: #F44336; border: 1px solid #F44336; }


.project-card-back {
    transform: rotateY(180deg); background: linear-gradient(135deg, #1a1a1a, #0d0d0d);
    padding: 40px 30px; display: flex; align-items: center; justify-content: center;
    border: 1px solid #b0e8a7;
}
.project-content-back { width: 100%; }
.project-content-back h3 { color: #b0e8a7; margin-bottom: 25px; font-size: 1.6rem; }
.project-details-back {
    text-align: left; background: rgba(255,255,255,0.03); padding: 20px;
    border-radius: 12px; margin-bottom: 20px;
}
.detail-item { display: flex; justify-content: space-between; margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 5px; }
.detail-item:last-child { border-bottom: none; margin-bottom: 0; }
.detail-label { color: #888; font-size: 0.9rem; }
.detail-value { color: #fff; font-weight: 500; text-align: right; }
.detail-value-link { color: #b0e8a7; text-decoration: none; }
.detail-value-link:hover { text-decoration: underline; }

.project-achievements-back {
    text-align: left; margin-bottom: 25px; display: flex; flex-direction: column; gap: 8px;
}
.achievement { color: #ccc; font-size: 0.9rem; }

.project-buttons { display: flex; gap: 15px; justify-content: center; }
.project-btn {
    padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: bold;
    font-size: 0.9rem; transition: all 0.3s;
}
.project-btn:first-child { background: #b0e8a7; color: #121212; }
.project-btn:first-child:hover { background: #9bd692; transform: translateY(-3px); }
.project-btn:last-child { background: transparent; border: 1px solid #fff; color: #fff; }
.project-btn:last-child:hover { background: rgba(255,255,255,0.1); transform: translateY(-3px); }

/* Responsive */
@media (max-width: 900px) {
    .carousel-container { padding: 0; margin-top: 60px; }
    .carousel-nav { top: -40px; width: 40px; height: 40px; }
    .carousel-nav.prev { left: 20px; }
    .carousel-nav.next { right: 20px; left: auto; }
}
@media (max-width: 600px) {
    .projects-carousel { height: 600px; }
    .project-card-inner { transform: none !important; }
    .project-card-back { display: none; }
}
</style>