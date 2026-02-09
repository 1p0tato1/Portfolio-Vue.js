<script setup>
import { ref, computed } from 'vue';

import { globalState } from '../state.js';

// --- 1. LOGIQUE DE LANGUE (TRADUCTION) ---
const currentLang = computed(() => globalState.lang);

// --- 3. DICTIONNAIRE DE TEXTES ---
const translations = {
  en: {
    pageTitle: "Diplomas & Certifications",
    pageSubtitle: "My educational background and professional certifications",
    section1: "Educational Diplomas",
    bacTitle: "Baccalaureat's Degree",
    institution: "Les Elites High School",
    bacDesc: `I obtained the Tunisian Baccalaureat in Technological Sciences with Mention Très Bien (Highest Honors). 
              This diploma focuses on applied sciences and engineering-related disciplines, with main subjects including:`,
    bacSubjects: [
      "<strong>Mathematics –</strong> algebra, calculus, and applied mathematics for engineering.",
      "<strong>Physics –</strong> mechanics, electricity, and electromagnetism.",
      "<strong>Mechanics –</strong> study of materials, kinematics, and applied mechanical systems.",
      "<strong>Electrical Engineering –</strong> circuits, electronics, and energy systems.",
      "<strong>Computer Science –</strong> introduction to algorithms and programming."
    ],
    bacDownload: "Download French Version",
    section2: "Online Learning",
    kaggleTitle: "Kaggle's Online Courses Certifications",
    kaggleDate: "Issued: Summer 2025",
    kaggleDesc: `I completed several Kaggle online course certifications, which gave me hands-on experience in data science, 
                 machine learning, and AI. They’re very practical, with interactive coding exercises and real-world projects 
                 that helped me strengthen my skills.`,
    kaggleDownload: "Download Kaggle Certificates",
    section3: "Continuous Learning",
    learnText: `I have a strong passion for continuous learning, and I make it a part of my daily routine. I enjoy expanding my knowledge by watching educational videos, taking free online courses on various platforms, and exploring new resources whenever possible. Whether it’s through structured learning or simply discovering new ideas on my own, I see every opportunity as a chance to grow and improve my skills. This curiosity and commitment to self-development allow me to stay motivated, adaptable, and always open to new perspectives.`
  },
  fr: {
    pageTitle: "Diplômes & Certifications",
    pageSubtitle: "Mon parcours éducatif et mes certifications professionnelles",
    section1: "Diplômes Éducatifs",
    bacTitle: "Diplôme de Baccalauréat",
    institution: "Lycée Les Élites",
    bacDesc: `J'ai obtenu le Baccalauréat tunisien en Sciences Technologiques avec Mention Très Bien.
              Ce diplôme se concentre sur les sciences appliquées et les disciplines liées à l'ingénierie, avec comme matières principales :`,
    bacSubjects: [
      "<strong>Mathématiques –</strong> algèbre, calcul et mathématiques appliquées.",
      "<strong>Physique –</strong> mécanique, électricité et électromagnétisme.",
      "<strong>Mécanique –</strong> étude des matériaux et systèmes mécaniques.",
      "<strong>Génie Électrique –</strong> circuits, électronique et systèmes énergétiques.",
      "<strong>Informatique –</strong> introduction aux algorithmes et à la programmation."
    ],
    bacDownload: "Télécharger Version Française",
    section2: "Apprentissage en Ligne",
    kaggleTitle: "Certifications des Cours en Ligne Kaggle",
    kaggleDate: "Délivré : Été 2025",
    kaggleDesc: `J'ai complété plusieurs certifications Kaggle, acquérant une expérience pratique en science des données, 
                 machine learning et IA grâce à des exercices de codage interactifs et des projets concrets.`,
    kaggleDownload: "Télécharger Certificats",
    section3: "Apprentissage Continu",
    learnText: `J'ai une forte passion pour l'apprentissage continu. J'aime élargir mes connaissances en regardant des vidéos éducatives, en suivant des cours gratuits en ligne et en explorant de nouvelles ressources. Cette curiosité me permet de rester motivé et adaptable aux nouvelles technologies.`
  }
};

const t = computed(() => translations[currentLang.value]);

</script>

<template>
      <main class="certifications-content">
        <div class="page-header">
          <h1 class="page-title fade-in">{{ t.pageTitle }}</h1>
          <p class="page-subtitle fade-in">{{ t.pageSubtitle }}</p>
        </div>

        <div class="content-section fade-in delay-1">
          <h2 class="section-title">{{ t.section1 }}</h2>
          
          <div class="education-grid">
            <div class="education-card">
              <div class="education-icon">🎓</div>
              <div class="education-content">
                <h3>{{ t.bacTitle }}</h3>
                <p class="institution">{{ t.institution }}</p>
                <p class="year">2022</p>
                <div class="description">
                  <p>{{ t.bacDesc }}</p>
                  <p v-for="(subject, index) in t.bacSubjects" :key="index" v-html="subject"></p>
                </div>
                
                <div class="downloads">
                  <a class="download-tag" href="/documents/Diplome-bac-fr.pdf" download>
                    <i class="fas fa-download"></i> {{ t.bacDownload }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="content-section fade-in delay-2">
          <h2 class="section-title">{{ t.section2 }}</h2>
          
          <div class="certifications-grid">
            <div class="cert-card">
              <div class="cert-badge">
                <div class="cert-icon">
                  <img src="/images/kaggle.png" alt="Kaggle Logo" class="cert-logo-img">
                </div>
              </div>
              <div class="cert-content">
                <h3>{{ t.kaggleTitle }}</h3>
                <p class="cert-issuer">Kaggle</p>
                <p class="cert-date">{{ t.kaggleDate }}</p>
                <p class="cert-description">{{ t.kaggleDesc }}</p>
                
                <div class="cert-skills">
                  <span class="skill-tag">Machine Learning</span>
                  <span class="skill-tag">Data Science</span>
                </div>
                
                <div class="downloads">
                  <a class="download-tag" href="/documents/Kaggle-certifs.pdf" download>
                    <i class="fas fa-download"></i> {{ t.kaggleDownload }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="content-section fade-in delay-3">
          <h2 class="section-title">{{ t.section3 }}</h2>
          <div class="learning-text">
            <p>{{ t.learnText }}</p>
          </div>
        </div>

      </main>
</template>

<style scoped>
.certifications-content { width: 100%; }
.page-header { margin-bottom: 3rem; text-align: center; }
.page-title {
  font-size: 2.5rem; margin-bottom: 0.5rem;
  background: linear-gradient(90deg, #fff, #b0e8a7);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.page-subtitle { color: #888; margin-bottom: 3rem; font-size: 1.1rem; }
.section-title {
  font-size: 1.8rem; color: #b0e8a7; margin-bottom: 1.5rem;
  padding-bottom: 0.5rem; border-bottom: 1px solid #2d2d2d;
}
.content-section { margin-bottom: 4rem; }
.learning-text {
  color: #ccc; line-height: 1.6; background: #1a1a1a; padding: 2rem;
  border-radius: 12px; border-left: 3px solid #b0e8a7;
}


.fade-in { animation: fadeIn 0.8s ease forwards; opacity: 0; transform: translateY(20px); }
.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }
.delay-3 { animation-delay: 0.6s; }
@keyframes fadeIn { to { opacity: 1; transform: translateY(0); } }



@media (max-width: 900px) {
    .education-grid { gap: 15px; }
    .education-card { flex-direction: column; padding: 15px; }
    .education-icon { font-size: 2rem; margin-right: 10px; }
}

@media (max-width: 600px) {
    .education-grid { gap: 6px; padding: 0 2px; }
    .education-card { padding: 12px 8px; border-radius: 14px; box-shadow: 0 4px 18px rgba(0,0,0,0.18); }
    .education-icon { font-size: 1.08rem; margin-right: 4px; }
}

.education-grid { display: grid; gap: 30px; margin-top: 30px; }
.education-card {
    display: flex;
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
    backdrop-filter: blur(15px);
    border-radius: 20px;
    padding: 30px;
    border: 1px solid rgba(176, 232, 167, 0.15);
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}
.education-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(176, 232, 167, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15);
    border-color: rgba(176, 232, 167, 0.3);
}
.education-icon { font-size: 3rem; margin-right: 25px; display: flex; align-items: flex-start; padding-top: 5px; }
.education-content { flex: 1; }
.education-content h3 { color: #b0e8a7; font-size: 1.5rem; margin-bottom: 10px; }
.institution { color: #fff; font-size: 1.1rem; font-weight: bold; margin-bottom: 5px; }
.year { color: #ccc; font-style: italic; margin-bottom: 15px; }
.description { color: #ccc; line-height: 1.6; margin-bottom: 20px; }
.downloads { display: flex; flex-wrap: wrap; gap: 8px; }
.download-tag {
    background: rgba(176,232,167,0.1); color: #b0e8a7; border: 1px solid #b0e8a7;
    padding: 4px 12px; border-radius: 15px; font-size: 0.8rem; font-weight: bold;
    margin-top: 15px; position: relative; text-align: center; text-decoration: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.certifications-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px; margin-top: 30px; }
.cert-card {
    background: linear-gradient(135deg, #1a1a1a, #0d0d0d); border-radius: 12px;
    padding: 25px; border: 1px solid #333; transition: all 0.3s ease; position: relative; overflow: hidden;
}
.cert-card:hover { transform: translateY(-8px); box-shadow: 0 15px 40px rgba(176,232,167,0.15); border-color: #b0e8a7; }
.cert-badge { text-align: center; margin-bottom: 20px; }
.cert-icon {
    width: 80px; height: 80px; margin: 0 auto; background: #ffffff; border-radius: 50%;
    display: flex; align-items: center; justify-content: center; font-weight: bold; color: #000;
    font-size: 1.2rem; box-shadow: 0 8px 25px rgba(176,232,167,0.3); transition: transform 0.3s ease;
    animation: pulse 3s infinite;
    overflow: hidden;
}
.cert-logo-img {
    width: 60%;
    height: 60%;
    object-fit: contain;
}
.cert-card:hover .cert-icon { transform: scale(1.1) rotate(5deg); }
.cert-content h3 { color: #b0e8a7; font-size: 1.3rem; margin-bottom: 10px; text-align: center; }
.cert-issuer { color: #fff; font-weight: bold; text-align: center; margin-bottom: 8px; }
.cert-date { color: #ccc; font-size: 0.9rem; text-align: center; margin-bottom: 5px; }
.cert-description { color: #ccc; line-height: 1.6; margin: 15px 0; text-align: justify; }
.cert-skills { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-top: 15px; }
.skill-tag {
    background: #b0e8a7; color: #000; padding: 4px 12px; border-radius: 15px;
    font-size: 0.8rem; font-weight: bold; transition: all 0.3s ease;
}
.skill-tag:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(176,232,167,0.4); }
@keyframes pulse {
    50% { box-shadow: 0 8px 35px rgba(255, 255, 255, 0.5); }
}
.download-tag:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(176, 232, 167, 0.4); }

.cert-content .downloads {
    justify-content: center;
}
</style>