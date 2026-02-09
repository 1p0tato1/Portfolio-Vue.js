<script setup>
import { ref, computed } from 'vue';

import { globalState } from '../state.js';

// --- 1. NAVIGATION & LANGUE ---
const currentLang = computed(() => globalState.lang);

// --- 2. DONNÉES (ÉDUCATION) ---
const educationData = computed(() => {
  const isEn = currentLang.value === 'en';
  return [
    {
      id: 1,
      title: isEn ? "Engineering Student" : "Étudiant en Ingénierie",
      school: "Télécom Saint-Étienne",
      location: "",
      date: isEn ? "2024 - Present" : "2024 - Présent",
      desc: isEn 
        ? "As an engineering student, I am developing strong skills in computer science, data science, and AI. My studies combine theoretical knowledge with practical projects."
        : "En tant qu'étudiant en ingénierie, je développe de solides compétences en informatique, science des données et intelligence artificielle. Mes études combinent connaissances théoriques et projets pratiques.",
      bullets: isEn 
        ? ["C++, Python, HTML, CSS, JS, JAVA, SQL, Git", "Cybersecurity fundamentals", "Collaborative engineering projects", "Data analysis & Mathematics"]
        : ["C++, Python, HTML, CSS, JS, JAVA, SQL, Git", "Fondamentaux de la cybersécurité", "Projets d'ingénierie collaboratifs", "Analyse de données & Mathématiques"],
      tags: ["C++", "HTML", "CSS", "JS", "JAVA", "SQL", "Git"]
    },
    {
      id: 2,
      title: isEn ? "Preparatory Class (CPGE TSI)" : "Classe préparatoire (CPGE TSI)",
      school: "Lycée Touchard Washington",
      location: "Le Mans, France",
      date: "2022 - 2024",
      desc: isEn 
        ? "Two years of intensive studies building a solid foundation in mathematics, physics, and engineering sciences."
        : "Pendant deux années d'études intensives, j'ai construit une base solide en mathématiques, physique et sciences de l'ingénieur.",
      bullets: isEn 
        ? ["Advanced Mathematics & Physics", "Analytical thinking & Problem solving"]
        : ["Mathématiques & Physique avancées", "Esprit analytique & Résolution de problèmes"],
      tags: ["Python", "Maths", "Physique", "Mécanique"]
    },
    {
      id: 3,
      title: isEn ? "Baccalaureat Degree" : "Baccalauréat",
      school: "Lycée Les Élites",
      location: "Sousse, Tunisie",
      date: "2018 - 2020",
      desc: isEn 
        ? "Obtained the Tunisian Baccalaureat in Technical Sciences with Highest Honors."
        : "J'ai obtenu le Baccalauréat tunisien en Sciences Techniques avec Mention Très Bien.",
      bullets: [],
      tags: ["Maths", "Physique", "Tech"]
    }
  ];
});

// --- 3. DONNÉES (EXPÉRIENCE PRO) ---
const experienceData = ref([
  {
    id: 1,
    roleFr: "Responsable Communication",
    roleEn: "Communication Manager",
    company: "Inspire JE",
    locationFr: "Saint-Étienne, France - Actuellement...",
    locationEn: "Saint-Étienne, France - Currently...",
    logo: "/images/inspire.png", 
    link: "https://inspire-telecom.com",
    sections: [
      {
        titleFr: "Qu'est-ce qu'une Junior Entreprise ?",
        titleEn: "What is a Junior Enterprise?",
        contentFr: "Une Junior Entreprise est une organisation à but non lucratif dirigée par des étudiants, fournissant des services professionnels aux entreprises.",
        contentEn: "A Junior Enterprise is a non-profit organization run by students, providing professional services to companies.",
        isOpen: false
      },
      {
        titleFr: "Responsabilités Principales",
        titleEn: "Main Responsibilities",
        contentListFr: [
            "Gérer la présence sur les réseaux sociaux (Instagram, LinkedIn).",
            "Développer des stratégies de communication.",
            "Créer des visuels et campagnes engageants.",
            "Surveiller les métriques d'engagement."
        ],
        contentListEn: [
            "Manage social media presence (Instagram, LinkedIn).",
            "Develop communication strategies.",
            "Create engaging visuals and campaigns.",
            "Monitor engagement metrics."
        ],
        isOpen: false
      }
    ]
  },
  {
    id: 2,
    roleFr: "Employé Polyvalent",
    roleEn: "Retail Associate",
    company: "Intermarché Bergson",
    locationFr: "Saint-Étienne, France - 2025",
    locationEn: "Saint-Étienne, France - 2025",
    logo: "/images/intermarche.png",
    link: "#",
    sections: [
      {
        titleFr: "Responsabilités Principales",
        titleEn: "Main Responsibilities",
        contentListFr: [
            "Assister les clients et fournir des conseils.",
            "Gérer le réapprovisionnement et l'étiquetage.",
            "Soutenir les opérations logistiques."
        ],
        contentListEn: [
            "Assist customers and provide advice.",
            "Manage restocking and labeling.",
            "Support logistics operations."
        ],
        isOpen: false
      }
    ]
  },
  {
    id: 3,
    roleFr: "Employé Polyvalent",
    roleEn: "Retail Associate",
    company: "Intermarché Cagnes-sur-mer",
    locationFr: "Cagnes-sur-mer, France - 2023",
    locationEn: "Cagnes-sur-mer, France - 2023",
    logo: "/images/intermarche.png",
    link: "#",
    sections: [
      {
        titleFr: "Responsabilités Principales",
        titleEn: "Main Responsibilities",
        contentListFr: [
            "Service client et orientation.",
            "Travail d'équipe dans un environnement dynamique."
        ],
        contentListEn: [
            "Customer service and guidance.",
            "Teamwork in a dynamic environment."
        ],
        isOpen: false
      }
    ]
  }
]);

const toggleSection = (expIndex, sectionIndex) => {
  experienceData.value[expIndex].sections[sectionIndex].isOpen = !experienceData.value[expIndex].sections[sectionIndex].isOpen;
};

// --- 4. TEXTES STATIQUES ---
const t = computed(() => {
  const isEn = currentLang.value === 'en';
  return {
    menu: isEn 
      ? { home: 'Welcome', exp: 'Education & Exp.', skills: 'Skills', certs: 'Diplomas & Certifs', projects: 'Projects', contact: 'Contact' }
      : { home: 'Accueil', exp: 'Éducation & Exp.', skills: 'Compétences', certs: 'Diplômes & Certifs', projects: 'Projets', contact: 'Contact' },
    role: isEn ? 'Student' : 'Étudiant',
    title: isEn ? 'Education & Experience' : 'Éducation et Expérience',
    subtitle: isEn ? 'My professional background and achievements' : 'Mon parcours professionnel et mes réalisations',
    sectionEdu: isEn ? 'Education' : 'Éducation',
    sectionExp: isEn ? 'Professional Experience' : 'Expérience Professionnelle'
  };
});
</script>

<template>
      <main class="experience-content">
        <div class="page-header">
          <h1 class="page-title fade-in">{{ t.title }}</h1>
          <p class="page-subtitle fade-in">{{ t.subtitle }}</p>
        </div>

        <div class="content-section fade-in delay-1">
            <h2 class="section-title">{{ t.sectionEdu }}</h2>
            <div class="timeline">
                
                <div v-for="edu in educationData" :key="edu.id" class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="job-header">
                            <h3>{{ edu.title }}</h3>
                            <span class="company">{{ edu.school }}</span>
                            <span class="location" v-if="edu.location"><i>{{ edu.location }}</i></span>
                            <span class="duration">{{ edu.date }}</span>
                        </div>
                        <div class="job-description">
                            <p>{{ edu.desc }}</p>
                            <ul v-if="edu.bullets && edu.bullets.length">
                                <li v-for="(bullet, i) in edu.bullets" :key="i">{{ bullet }}</li>
                            </ul>
                            <div class="tech-tags">
                                <span v-for="(tag, k) in edu.tags" :key="k" class="tech-tag">{{ tag }}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="content-section fade-in delay-2">
            <h2 class="section-title">{{ t.sectionExp }}</h2>
            <div class="cards-grid">
                
                <div v-for="(exp, expIndex) in experienceData" :key="exp.id" class="card">
                    <h3>{{ currentLang === 'en' ? exp.roleEn : exp.roleFr }}</h3>
                    <span class="company">{{ exp.company }}</span>
                    <p class="card-location">{{ currentLang === 'en' ? exp.locationEn : exp.locationFr }}</p>
                    
                    <a :href="exp.link" target="_blank" class="card-logo-link">
                        <img :src="exp.logo" :alt="'Logo ' + exp.company" class="card-logo">
                    </a>

                    <div v-for="(section, secIndex) in exp.sections" :key="secIndex" class="accordion-group">
                        <div class="toggle-btn" :class="{ active: section.isOpen }" @click="toggleSection(expIndex, secIndex)">
                            <span class="arrow">▼</span>
                            <strong>{{ currentLang === 'en' ? section.titleEn : section.titleFr }}</strong>
                        </div>
                        
                        <div class="collapsible-content" :style="{ display: section.isOpen ? 'block' : 'none' }">
                            <p v-if="section.contentFr">{{ currentLang === 'en' ? section.contentEn : section.contentFr }}</p>
                            <ul v-if="section.contentListFr">
                                <li v-for="(item, i) in (currentLang === 'en' ? section.contentListEn : section.contentListFr)" :key="i">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </div>

      </main>
</template>

<style scoped>
.experience-content {
  width: 100%;
}
.page-header { margin-bottom: 3rem; text-align: center;}
.page-title { font-size: 2.5rem; margin-bottom: 0.5rem; background: linear-gradient(90deg, #fff, #b0e8a7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.page-subtitle { color: #888; font-size: 1.1rem; }
.section-title { font-size: 1.8rem; color: #b0e8a7; margin-bottom: 1.5rem; padding-bottom: 0.5rem; border-bottom: 1px solid #2d2d2d; }
.content-section { margin-bottom: 4rem; }
.fade-in { animation: fadeIn 0.8s ease forwards; opacity: 0; transform: translateY(20px); }
.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }
@keyframes fadeIn { to { opacity: 1; transform: translateY(0); } }

.timeline {
    position: relative;
    padding-left: 20px;
    border-left: 2px solid rgba(176, 232, 167, 0.2);
}

.timeline-item {
    position: relative;
    margin-bottom: 40px;
}

.timeline-marker {
    position: absolute;
    left: -26px; 
    top: 5px;
    width: 14px;
    height: 14px;
    background: #b0e8a7;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(176, 232, 167, 0.5);
}

.timeline-content {
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
    padding: 25px;
    border-radius: 12px;
    border: 1px solid rgba(176, 232, 167, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
}

.timeline-content:hover {
    transform: translateX(5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    border-color: rgba(176, 232, 167, 0.3);
}

.job-header h3 {
    margin: 0 0 5px 0;
    color: #fff;
    font-size: 1.3rem;
}

.job-header .company {
    color: #b0e8a7;
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
}

.job-header .location {
    color: #888;
    font-size: 0.9rem;
    display: block;
    margin-bottom: 5px;
}

.job-header .duration {
    display: inline-block;
    background: rgba(176, 232, 167, 0.1);
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.8rem;
    color: #b0e8a7;
    margin-bottom: 15px;
}

.job-description p {
    color: #ccc;
    line-height: 1.6;
    margin-bottom: 10px;
}

.job-description ul {
    padding-left: 20px;
    color: #ccc;
}

.job-description li {
    margin-bottom: 5px;
}

.tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 15px;
}

.tech-tag {
    background: rgba(255, 255, 255, 0.05);
    padding: 4px 10px;
    border-radius: 15px;
    font-size: 0.75rem;
    color: #b0e8a7;
    border: 1px solid rgba(176, 232, 167, 0.2);
}

.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
}

.card {
    background: linear-gradient(135deg, #1a1a1a, #0d0d0d);
    padding: 30px;
    border-radius: 16px;
    border: 1px solid #333;
    transition: all 0.3s ease;
    text-align: center;
}

.card:hover {
    transform: translateY(-5px);
    border-color: #b0e8a7;
    box-shadow: 0 10px 30px rgba(176, 232, 167, 0.15);
}

.card h3 {
    color: #fff;
    margin: 0 0 10px 0;
}

.card .company {
    color: #b0e8a7;
    font-weight: bold;
    font-size: 1.1rem;
    display: block;
    margin-bottom: 5px;
}

.card-location {
    color: #888;
    font-size: 0.9rem;
    font-style: italic;
    margin-bottom: 20px;
}

.card-logo {
    height: 60px;
    width: auto;
    object-fit: contain;
    margin-bottom: 20px;
    background: rgba(255,255,255,0.9);
    padding: 5px;
    border-radius: 8px;
}

.accordion-group {
    margin-top: 15px;
    border-top: 1px solid #333;
    padding-top: 15px;
}

.toggle-btn {
    cursor: pointer;
    color: #b0e8a7;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px;
    border-radius: 6px;
    transition: background 0.2s;
}

.toggle-btn:hover {
    background: rgba(176, 232, 167, 0.1);
}

.toggle-btn .arrow {
    font-size: 0.8rem;
    transition: transform 0.3s;
}

.toggle-btn.active .arrow {
    transform: rotate(180deg);
}

.collapsible-content {
    text-align: left;
    margin-top: 10px;
    padding: 10px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    font-size: 0.9rem;
    color: #ccc;
    animation: fadeIn 0.3s ease;
}

.collapsible-content ul {
    padding-left: 20px;
    margin: 0;
}

.collapsible-content li {
    margin-bottom: 5px;
}

@media (max-width: 600px) {
    .timeline { padding-left: 15px; }
    .timeline-marker { left: -21px; }
    .cards-grid { grid-template-columns: 1fr; }
}
</style>