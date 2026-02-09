<script setup>
import { ref, computed, onMounted } from 'vue';
import { globalState } from '../state.js';

// --- 1. CONFIGURATION ---
const showProgress = ref(false); 

onMounted(() => {
  setTimeout(() => {
    showProgress.value = true;
  }, 300);
});

// --- 2. TRADUCTIONS & DONNÉES ---
const t = computed(() => {
  const isEn = globalState.lang === 'en';
  return {
    title: isEn ? 'Skills' : 'Compétences',
    subtitle: isEn ? 'Discover the skills I have acquired throughout my journey' : 'Découvrez les compétences que j\'ai acquises tout au long de mon parcours',
    
    // Values
    valTitle: isEn ? 'My Values' : 'Mes Valeurs',
    values: [
      { 
        icon: '🎯', 
        title: isEn ? 'Excellence' : 'Excellence', 
        desc: isEn ? 'I aim for excellence in everything I do, continuously learning and improving to deliver the best possible results.' : 'Je vise l\'excellence dans tout ce que je fais, apprenant continuellement et m\'améliorant pour fournir les meilleurs résultats possibles.' 
      },
      { 
        icon: '🌟', 
        title: isEn ? 'Innovation' : 'Innovation', 
        desc: isEn ? 'I adopt new technologies and creative approaches to solve complex problems and stay ahead of industry trends.' : 'J\'adopte de nouvelles technologies et des approches créatives pour résoudre des problèmes complexes et rester à la pointe des tendances.' 
      },
      { 
        icon: '🤝', 
        title: isEn ? 'Integrity' : 'Intégrité', 
        desc: isEn ? 'I believe in honest communication, ethical practices, and building trust through transparency and reliability.' : 'Je crois en une communication honnête, des pratiques éthiques, et la construction de la confiance par la transparence.' 
      },
      { 
        icon: '📚', 
        title: isEn ? 'Growth' : 'Croissance', 
        desc: isEn ? 'I am committed to continuous learning and personal development, always seeking new challenges.' : 'Je m\'engage dans l\'apprentissage continu et le développement personnel, cherchant toujours de nouveaux défis.' 
      }
    ],

    // Expertise Lists
    expTitle: isEn ? 'Skills & Expertise' : 'Compétences & Expertise',
    techTitle: isEn ? 'Technical Skills' : 'Compétences Techniques',
    softTitle: isEn ? 'Soft Skills' : 'Compétences Humaines',
    cats: {
        lang: isEn ? 'Programming Languages' : 'Langages de Programmation',
        tools: isEn ? 'Tools & Technologies' : 'Outils & Technologies',
        db: isEn ? 'Databases & Analytics' : 'Bases de Données & Analytique',
        design: isEn ? 'Design Software' : 'Logiciels de Design'
    },
    softList: isEn 
        ? ['Teamwork & Collaboration', 'Adaptability & Versatility', 'Agile Method', 'Creativity & Innovation', 'Continuous Learning', 'Problem Solving', 'Communication Skills']
        : ['Travail d\'Équipe & Collaboration', 'Adaptabilité & Polyvalence', 'Méthode Agile', 'Créativité & Innovation', 'Apprentissage Continu', 'Résolution de Problèmes', 'Compétences en Communication'],

    // Progress Bars Categories
    evalTitle: isEn ? 'Personal Assessment' : 'Évaluation Personnelle',
    progCats: {
        web: isEn ? 'Web Development' : 'Développement Web',
        ml: 'Machine Learning',
        prog: isEn ? 'Programming' : 'Programmation',
        lang: isEn ? 'Languages' : 'Langues'
    },
    levels: {
        native: isEn ? 'Native' : 'Langue Maternelle',
        bilingual: isEn ? 'Bilingual' : 'Bilingue',
        pro: isEn ? 'Professional Proficiency' : 'Maîtrise Professionnelle',
        elem: isEn ? 'Elementary' : 'Élémentaire'
    }
  };
});

const techSkills = {
    langs: ['Python', 'C++', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'JAVA'],
    tools: ['Git & GitHub', 'VSCode', 'Linux'],
    db: ['MySQL', 'Python for ML', 'Data Analysis'],
    design: ['Canva', 'Adobe Illustrator', 'Adobe Photoshop']
};

</script>

<template>
      <main class="skills-content">
        <div class="page-header">
            <h1 class="page-title fade-in">{{ t.title }}</h1>
            <p class="page-subtitle fade-in">{{ t.subtitle }}</p>
        </div>

        <div class="content-section fade-in delay-1">
            <h2 class="section-title">{{ t.valTitle }}</h2>
            <div class="cards-grid">
                <div v-for="(val, index) in t.values" :key="index" class="card value-card">
                    <h3>{{ val.icon }} {{ val.title }}</h3>
                    <p>{{ val.desc }}</p>
                </div>
            </div>
        </div>

        <div class="content-section fade-in delay-2">
            <h2 class="section-title">{{ t.expTitle }}</h2>
            <div class="enhanced-cards-grid">
                
                <div class="enhanced-card">
                    <h3><i class="fas fa-code"></i> {{ t.techTitle }}</h3>
                    
                    <div class="skill-category-group">
                        <h4>{{ t.cats.lang }}</h4>
                        <ul class="skill-list">
                            <li v-for="item in techSkills.langs" :key="item">{{ item }}</li>
                        </ul>
                    </div>
                    <div class="skill-category-group">
                        <h4>{{ t.cats.tools }}</h4>
                        <ul class="skill-list">
                            <li v-for="item in techSkills.tools" :key="item">{{ item }}</li>
                        </ul>
                    </div>
                    <div class="skill-category-group">
                        <h4>{{ t.cats.db }}</h4>
                        <ul class="skill-list">
                            <li v-for="item in techSkills.db" :key="item">{{ item }}</li>
                        </ul>
                    </div>
                    <div class="skill-category-group">
                        <h4>{{ t.cats.design }}</h4>
                        <ul class="skill-list">
                            <li v-for="item in techSkills.design" :key="item">{{ item }}</li>
                        </ul>
                    </div>
                </div>

                <div class="enhanced-card">
                    <h3><i class="fas fa-users"></i> {{ t.softTitle }}</h3>
                    <ul class="soft-skill-list">
                        <li v-for="skill in t.softList" :key="skill">
                            <span class="bullet">•</span> {{ skill }}
                        </li>
                    </ul>
                </div>

            </div>
        </div>

        <div class="content-section fade-in delay-3">
            <h2 class="section-title">{{ t.evalTitle }}</h2>
            <div class="skills-container">
                
                <div class="skill-category">
                    <h3>{{ t.progCats.web }}</h3>
                    <div class="skill-bar">
                        <span class="skill-name">HTML</span>
                        <div class="skill-track">
                            <div class="skill-progress" :style="{ width: showProgress ? '90%' : '0%' }"></div>
                        </div>
                    </div>
                    <div class="skill-bar">
                        <span class="skill-name">CSS</span>
                        <div class="skill-track">
                            <div class="skill-progress" :style="{ width: showProgress ? '65%' : '0%' }"></div>
                        </div>
                    </div>
                    <div class="skill-bar">
                        <span class="skill-name">JavaScript</span>
                        <div class="skill-track">
                            <div class="skill-progress" :style="{ width: showProgress ? '40%' : '0%' }"></div>
                        </div>
                    </div>
                    <div class="skill-bar">
                        <span class="skill-name">TypeScript</span>
                        <div class="skill-track">
                            <div class="skill-progress" :style="{ width: showProgress ? '5%' : '0%' }"></div>
                        </div>
                    </div>
                </div>

                <div class="skill-category">
                    <h3>{{ t.progCats.ml }}</h3>
                    <div class="skill-bar">
                        <span class="skill-name">Python <i>(Pandas, Scikit-learn...)</i></span>
                        <div class="skill-track">
                            <div class="skill-progress" :style="{ width: showProgress ? '60%' : '0%' }"></div>
                        </div>
                    </div>
                    <div class="skill-bar">
                        <span class="skill-name">SQL</span>
                        <div class="skill-track">
                            <div class="skill-progress" :style="{ width: showProgress ? '40%' : '0%' }"></div>
                        </div>
                    </div>
                </div>

                <div class="skill-category">
                    <h3>{{ t.progCats.prog }}</h3>
                    <div class="skill-bar">
                        <span class="skill-name">Python</span>
                        <div class="skill-track">
                            <div class="skill-progress" :style="{ width: showProgress ? '80%' : '0%' }"></div>
                        </div>
                    </div>
                    <div class="skill-bar">
                        <span class="skill-name">C++</span>
                        <div class="skill-track">
                            <div class="skill-progress" :style="{ width: showProgress ? '50%' : '0%' }"></div>
                        </div>
                    </div>
                    <div class="skill-bar">
                        <span class="skill-name">Java</span>
                        <div class="skill-track">
                            <div class="skill-progress" :style="{ width: showProgress ? '20%' : '0%' }"></div>
                        </div>
                    </div>
                </div>

                <div class="skill-category">
                    <h3>{{ t.progCats.lang }}</h3>
                    <div class="skill-bar">
                        <span class="skill-name">Arabe <span class="language-level">{{ t.levels.native }}</span></span>
                        <div class="skill-track">
                            <div class="skill-progress" :style="{ width: showProgress ? '100%' : '0%' }"></div>
                        </div>
                    </div>
                    <div class="skill-bar">
                        <span class="skill-name">Français <span class="language-level">{{ t.levels.bilingual }}</span></span>
                        <div class="skill-track">
                            <div class="skill-progress" :style="{ width: showProgress ? '95%' : '0%' }"></div>
                        </div>
                    </div>
                    <div class="skill-bar">
                        <span class="skill-name">Anglais <span class="language-level">{{ t.levels.pro }}</span></span>
                        <div class="skill-track">
                            <div class="skill-progress" :style="{ width: showProgress ? '95%' : '0%' }"></div>
                        </div>
                    </div>
                    <div class="skill-bar">
                        <span class="skill-name">Allemand <span class="language-level">{{ t.levels.elem }}</span></span>
                        <div class="skill-track">
                            <div class="skill-progress" :style="{ width: showProgress ? '30%' : '0%' }"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

      </main>
</template>

<style scoped>
.skills-content { width: 100%; }
.page-header { margin-bottom: 3rem; text-align: center; }
.page-title { font-size: 2.5rem; margin-bottom: 0.5rem; background: linear-gradient(90deg, #fff, #b0e8a7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.page-subtitle { color: #888; font-size: 1.1rem; }
.section-title { font-size: 1.8rem; color: #b0e8a7; margin-bottom: 1.5rem; padding-bottom: 0.5rem; border-bottom: 1px solid #2d2d2d; }
.content-section { margin-bottom: 4rem; }
.fade-in { animation: fadeIn 0.8s ease forwards; opacity: 0; transform: translateY(20px); }
.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }
.delay-3 { animation-delay: 0.6s; }
@keyframes fadeIn { to { opacity: 1; transform: translateY(0); } }


.cards-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 25px;
}
.card {
    background: #1a1a1a; padding: 25px; border-radius: 12px; border: 1px solid #333;
    transition: transform 0.3s, border-color 0.3s;
}
.card:hover { transform: translateY(-5px); border-color: #b0e8a7; box-shadow: 0 5px 15px rgba(176,232,167,0.1); }
.card h3 { color: #fff; margin-bottom: 15px; font-size: 1.3rem; display: flex; align-items: center; gap: 10px; }
.card p { color: #ccc; line-height: 1.6; }

.enhanced-cards-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px;
}
.enhanced-card {
    background: linear-gradient(135deg, #1E1E1E 0%, #121212 100%);
    border: 1px solid #2d2d2d; border-radius: 16px; padding: 30px;
}
.enhanced-card h3 {
    color: #b0e8a7; margin-bottom: 25px; border-bottom: 1px solid rgba(176,232,167,0.2);
    padding-bottom: 15px; font-size: 1.5rem; text-align: center;
}

.skill-category-group { margin-bottom: 25px; }
.skill-category-group h4 { color: #fff; margin-bottom: 10px; font-size: 1.1rem; }
.skill-list {
    list-style: none; padding: 0; display: flex; flex-wrap: wrap; gap: 10px;
}
.skill-list li {
    background: rgba(255,255,255,0.05); padding: 5px 12px; border-radius: 15px;
    font-size: 0.9rem; color: #ccc; border: 1px solid rgba(255,255,255,0.1);
    transition: all 0.3s;
    user-select: none;
}
.skill-list li:hover { background: rgba(176,232,167,0.1); border-color: #b0e8a7; color: #fff; }

.soft-skill-list { list-style: none; padding: 0; }
.soft-skill-list li {
    margin-bottom: 12px; color: #ccc; font-size: 1rem; display: flex; align-items: center; gap: 10px;
}
.bullet { color: #b0e8a7; font-size: 1.2rem; }


.skills-container {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 40px;
}
.skill-category {
    background: #1a1a1a; padding: 25px; border-radius: 12px; border: 1px solid #333;
}
.skill-category h3 { color: #b0e8a7; margin-bottom: 20px; text-align: center; }

.skill-bar { margin-bottom: 20px; }
.skill-name {
    display: flex; justify-content: space-between; color: #fff; margin-bottom: 8px; font-weight: 500; font-size: 0.95rem;
}
.language-level { font-size: 0.8rem; color: #888; font-style: italic; }

.skill-track {
    width: 100%; height: 8px; background: #333; border-radius: 4px; overflow: hidden; position: relative;
}
.skill-progress {
    height: 100%; background: linear-gradient(90deg, #b0e8a7, #8ac582);
    border-radius: 4px; width: 0; transition: width 1.5s cubic-bezier(0.22, 1, 0.36, 1);
    position: relative;
}


.skill-progress::after {
    content: ''; position: absolute; top: 0; left: 0; bottom: 0; right: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    transform: translateX(-100%); animation: shimmer 2s infinite;
}

@keyframes shimmer {
    100% { transform: translateX(100%); }
}

@media (max-width: 768px) {
    .enhanced-cards-grid, .skills-container { grid-template-columns: 1fr; }
}
</style>