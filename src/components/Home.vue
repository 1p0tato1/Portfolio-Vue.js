<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { globalState } from '../state.js';

const currentLang = computed(() => globalState.lang);

// --- 2. LOGIQUE CARTE 3D (TILT & FLIP) ---
const isFlipped = ref(false);
const cardWrapper = ref(null);
const cardRotator = ref(null);
const glareStyle = ref({});

const toggleCard = () => {
  isFlipped.value = !isFlipped.value;
  if (cardRotator.value) {
    // Reset tilt lors du retournement pour éviter les sauts visuels
    const baseRotation = isFlipped.value ? 'rotateY(180deg)' : 'rotateY(0deg)';
    cardRotator.value.style.transform = baseRotation;
    glareStyle.value = { background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.25), transparent 60%)' };
  }
};

const handleMouseMove = (e) => {
  if (!cardWrapper.value || !cardRotator.value) return;

  const rect = cardWrapper.value.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  // Calcul position curseur (-0.5 à 0.5)
  const px = (x / rect.width) - 0.5;
  const py = (y / rect.height) - 0.5;
  
  const MAX_TILT = 14;
  const rx = (-py * MAX_TILT).toFixed(2);
  const ry = (px * MAX_TILT).toFixed(2);
  
  const baseY = isFlipped.value ? 180 : 0;
  
  // Appliquer transformation
  cardRotator.value.style.transform = `rotateY(${baseY + parseFloat(ry)}deg) rotateX(${rx}deg)`;
  
  // Effet de reflet (Glare)
  const glareX = 50 + px * 50;
  const glareY = 50 + py * 50;
  glareStyle.value = {
    background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.25), transparent 60%)`
  };
};

const resetTilt = () => {
  if (!cardRotator.value) return;
  const baseRotation = isFlipped.value ? 'rotateY(180deg)' : 'rotateY(0deg)';
  cardRotator.value.style.transform = baseRotation;
  glareStyle.value = {
    background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.25), transparent 60%)'
  };
};

// Gestion hauteur dynamique (ResizeObserver) pour éviter les coupures
let resizeObserver = null;

onMounted(() => {
  if (cardWrapper.value) {
    resizeObserver = new ResizeObserver(() => {
      const faces = cardWrapper.value.querySelectorAll('.profile-3d-face');
      let max = 0;
      faces.forEach(f => {
        if (f.scrollHeight > max) max = f.scrollHeight;
      });
      if (max > 0) cardWrapper.value.style.height = `${max}px`;
    });
    
    resizeObserver.observe(document.body); // Observer changements globaux
    const front = cardWrapper.value.querySelector('.front');
    const back = cardWrapper.value.querySelector('.back');
    if (front) resizeObserver.observe(front);
    if (back) resizeObserver.observe(back);
  }
});

onUnmounted(() => {
  if (resizeObserver) resizeObserver.disconnect();
});

// --- 3. TEXTES & TRADUCTIONS ---
const t = computed(() => {
  const isEn = currentLang.value === 'en';
  return {
    menu: isEn 
      ? { home: 'Welcome', exp: 'Education & Job Experience', skills: 'Skills', certs: 'Diplomas & Certifications', projects: 'Projects', contact: 'Contact' }
      : { home: 'Accueil', exp: 'Éducation & Expérience Professionnelle', skills: 'Compétences', certs: 'Diplômes & Certifications', projects: 'Projets', contact: 'Contact' },
    
    // Sidebar & Header
    role: isEn ? 'Student' : 'Étudiant',
    headerTitle: isEn ? 'Welcome to My Portfolio' : 'Bienvenue dans Mon Portfolio',
    headerSub: isEn ? 'Discover my journey, skills, and passion' : 'Découvrez mon parcours, mes compétences et ma passion',
    
    // Carte Front
    btnContact: 'Contact',
    cardName: 'Fayala Hakim',
    cardRole: isEn ? 'Engineering Student' : 'Étudiant Ingénieur',
    location: isEn ? 'France' : 'Saint-Étienne, France', // Respect de ton fichier source
    aboutTitle: isEn ? 'About Me' : 'À Propos de Moi',
    aboutText: isEn 
      ? 'Curious student & self‑driven developer focused on building clean, accessible and efficient web experiences while continuously learning core CS concepts.'
      : "Étudiant curieux et développeur autodidacte, concentré sur la création d'expériences web propres, accessibles et efficaces tout en apprenant continuellement les concepts fondamentaux de l'informatique.",
    skillsTitle: isEn ? 'Key Skills' : 'Compétences Clés',
    
    // Carte Back
    btnBack: isEn ? 'Back' : 'Retour',
    contactTitle: isEn ? 'Contact Info' : 'Informations de Contact',
    contactRole: isEn ? 'Engineering Student' : 'Étudiant Ingénieur',
    contactStatus: isEn ? 'Currently in training as an engineer' : 'En cours de formation',
    stats: {
      years: isEn ? 'Years Learning' : "Années d'Apprentissage",
      projects: isEn ? 'Projects' : 'Projets',
      growth: isEn ? 'Growth' : 'Croissance'
    }
  };
});
</script>

<template>
      <main class="home-content">
        <div class="page-header">
          <h1 class="page-title fade-in">{{ t.headerTitle }}</h1>
          <p class="page-subtitle fade-in">{{ t.headerSub }}</p>
        </div>

        <div 
          class="profile-3d-wrapper fade-in delay-1" 
          ref="cardWrapper"
          @mousemove="handleMouseMove" 
          @mouseleave="resetTilt"
        >
            <div class="profile-3d-rotator" ref="cardRotator" :class="{ flipped: isFlipped }">
                
                <div class="profile-3d-face front">
                    <button class="face-btn flip" @click="toggleCard">
                        <i class="fas fa-rotate"></i> {{ t.btnContact }}
                    </button>
                    
                    <div class="front-scroll">
                        <header class="face-header">
                            <img src="/images/profile-picture.png" alt="Avatar" class="face-avatar" />
                            <div>
                                <h2 class="face-name">{{ t.cardName }}</h2>
                                <p class="face-role">{{ t.cardRole }}</p>
                                <p class="face-location"><i class="fas fa-map-marker-alt"></i> {{ t.location }}</p>
                            </div>
                        </header>

                        <section class="face-section">
                            <h3><i class="fas fa-user"></i> {{ t.aboutTitle }}</h3>
                            <p class="about-text">{{ t.aboutText }}</p>
                        </section>

                        <section class="face-section">
                            <h3><i class="fas fa-code"></i> {{ t.skillsTitle }}</h3>
                            <div class="skill-chip-grid">
                                <div class="skill-icon skill-html"><i class="fab fa-html5"></i><span class="skill-label">HTML</span></div>
                                <div class="skill-icon skill-css"><i class="fab fa-css3-alt"></i><span class="skill-label">CSS</span></div>
                                <div class="skill-icon skill-js"><i class="fab fa-js"></i><span class="skill-label">JS</span></div>
                                <div class="skill-icon skill-python"><i class="fab fa-python"></i><span class="skill-label">Python</span></div>
                                <div class="skill-icon skill-git"><i class="fab fa-git-alt"></i><span class="skill-label">Git</span></div>
                                <div class="skill-icon skill-cpp">
                                    <i class="fas fa-code"></i><span class="skill-label">C++</span>
                                </div>
                                <div class="skill-icon skill-sql"><i class="fas fa-database"></i><span class="skill-label">SQL</span></div>
                            </div>
                        </section>
                    </div>
                    <span class="glare-layer" :style="glareStyle"></span>
                </div>

                <div class="profile-3d-face back">
                    <button class="face-btn unflip" @click="toggleCard">
                        <i class="fas fa-arrow-left"></i> {{ t.btnBack }}
                    </button>
                    
                    <div class="back-scroll">
                        <h3 class="back-title"><i class="fas fa-address-card"></i> {{ t.contactTitle }}</h3>
                        
                        <div class="contact-list">
                            <div class="contact-row"><i class="fas fa-envelope"></i><span>hfayala53@gmail.com</span></div>
                            <div class="contact-row"><i class="fas fa-phone"></i><span>+33 7 58 27 13 23</span></div>
                            <div class="contact-row"><i class="fas fa-graduation-cap"></i><span>{{ t.contactRole }}</span></div>
                            <div class="contact-row"><i class="fas fa-globe"></i><span>{{ t.contactStatus }}</span></div>
                        </div>

                        <div class="stats-grid">
                            <div class="stat-box"><h4>2+</h4><p>{{ t.stats.years }}</p></div>
                            <div class="stat-box"><h4>2+</h4><p>{{ t.stats.projects }}</p></div>
                            <div class="stat-box"><h4>∞</h4><p>{{ t.stats.growth }}</p></div>
                        </div>

                        <div class="social-grid">
                            <a href="https://www.linkedin.com/in/hakim-fayala/" class="social-btn" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                            <a href="https://github.com/1p0tato1?tab=projects" class="social-btn" target="_blank"><i class="fab fa-github"></i></a>
                            <a href="#" class="social-btn"><i class="fas fa-envelope"></i></a>
                        </div>
                    </div>
                    <span class="glare-layer" :style="glareStyle"></span>
                </div>

            </div>
        </div>

      </main>
</template>

<style scoped>
/* ======================== */
/* 1. GLOBAL LAYOUT CLEANUP */
/* ======================== */
/* Styles moved to main.css */
/* Minimal specific styles for Home */
.home-content {
  width: 100%;
}
/* Re-adding necessary specific styles that might have been removed or depend on removed classes */

.page-header { margin-bottom: 3rem; text-align: center; }
.page-title { font-size: 2.5rem; margin-bottom: 0.5rem; background: linear-gradient(90deg, #fff, #b0e8a7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.page-subtitle { color: #888; font-size: 1.1rem; }
.fade-in { animation: fadeIn 0.8s ease forwards; opacity: 0; transform: translateY(20px); }
.delay-1 { animation-delay: 0.2s; }
@keyframes fadeIn { to { opacity: 1; transform: translateY(0); } }

/* =========================================
   2. STYLES 3D CARD (CARD-3D.CSS)
   ========================================= */
.profile-3d-wrapper {
    width: 26rem;
    min-height: 32rem;
    perspective: 2100px;
    position: relative;
    margin: 0 auto 2.5rem;
    font-family: system-ui, -apple-system, sans-serif;
}

.profile-3d-rotator {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.1s ease-out; /* Mouvement fluide pour le Tilt */
}
.profile-3d-rotator.flipped {
    transition: transform 0.85s cubic-bezier(.22, .68, .32, 1.05); /* Transition lente pour le Flip */
    transform: rotateY(180deg);
}

.profile-3d-face {
    position: absolute;
    inset: 0;
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    backface-visibility: hidden;
    background: linear-gradient(135deg, #1E1E1E, #121212);
    border: 1px solid #2D2D2D;
    box-shadow: 0 14px 35px -10px rgba(0, 0, 0, .6);
}

.profile-3d-face.back {
    transform: rotateY(180deg);
    background: linear-gradient(135deg, #0d0d0d, #1a1a1a);
    border: 1px solid #b0e8a7;
    box-shadow: 0 16px 40px -12px rgba(176, 232, 167, 0.35);
}

/* Glare Layer */
.glare-layer {
    position: absolute;
    inset: 0;
    pointer-events: none;
    mix-blend-mode: screen;
    opacity: 0.35;
    transition: background 0.1s;
}

/* Buttons */
.face-btn {
    position: absolute;
    top: .95rem;
    right: .95rem;
    padding: .65rem 1rem;
    border-radius: 44px;
    font-size: .8rem;
    font-weight: 600;
    color: #b0e8a7;
    background: rgba(176, 232, 167, 0.1);
    border: 1px solid #b0e8a7;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: .5rem;
    backdrop-filter: blur(4px);
    transition: all .3s;
    z-index: 10;
}
.face-btn:hover {
    background: rgba(176, 232, 167, 0.18);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px -6px rgba(176, 232, 167, 0.4);
}
.face-btn.flip { bottom: .95rem; top: auto; right: .95rem; }
.face-btn.unflip { top: .95rem; bottom: auto; right: auto; left: .95rem; }

/* Scroll Content */
.front-scroll, .back-scroll {
    flex: 1;
    padding: 1.4rem 1.3rem 1.2rem;
    /* On laisse le contenu pousser le conteneur pour le ResizeObserver */
}

/* Header */
.face-header {
    display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem;
}
.face-avatar {
    width: 105px; height: 105px; border-radius: 50%; object-fit: cover;
    border: 3px solid #b0e8a7; box-shadow: 0 0 0 4px rgba(176, 232, 167, 0.12);
    transition: transform .4s;
}
.face-avatar:hover { transform: scale(1.05) rotate(-2deg); }
.face-name { margin: 0 0 .35rem; font-size: 1.75rem; color: #fff; }
.face-role { margin: 0 0 .45rem; font-size: 1rem; color: #b0e8a7; font-style: italic; }
.face-location { margin: 0; font-size: .82rem; color: #cfcfcf; }
.face-location i { color: #b0e8a7; margin-right: .35rem; }

/* Sections */
.face-section { margin-bottom: 1.5rem; }
.face-section h3 {
    margin: 0 0 .55rem; font-size: 1.05rem; color: #b0e8a7;
    display: flex; align-items: center; gap: .5rem;
}
.about-text { font-size: .85rem; line-height: 1.55; color: #dedede; text-align: justify; margin: 0; }

/* Skills Grid */
.skill-chip-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(65px, 1fr)); gap: .75rem;
}
.skill-icon {
    position: relative; aspect-ratio: 1/1; border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px; display: flex; align-items: center; justify-content: center;
    background: rgba(255, 255, 255, 0.03); transition: all .35s; cursor: default;
}
.skill-icon i { font-size: 2rem; color: #ccc; transition: all .35s; }
.skill-label {
    position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%) translateY(10px);
    background: #1a1a1a; color: #fff; padding: 4px 8px; border-radius: 4px;
    font-size: 0.7rem; opacity: 0; pointer-events: none; transition: all 0.3s; white-space: nowrap;
}
.skill-icon:hover {
    background: rgba(255, 255, 255, 0.08); border-color: #b0e8a7; transform: translateY(-3px);
}
.skill-icon:hover i { transform: scale(1.1); color: #fff; }
.skill-icon:hover .skill-label { opacity: 1; transform: translateX(-50%) translateY(-5px); }

/* Colors */
.skill-html:hover i { color: #E44D26; }
.skill-css:hover i { color: #1572B6; }
.skill-js:hover i { color: #F7DF1E; }
.skill-python:hover i { color: #3776AB; }
.skill-git:hover i { color: #F05032; }

/* Back Content */
.back-title { color: #fff; display: flex; align-items: center; gap: .5rem; font-size: 1.15rem; margin-top: 1rem; }
.back-title i { color: #b0e8a7; }
.contact-list { margin-bottom: 1.5rem; display: grid; gap: 0.8rem; }
.contact-row {
    display: flex; gap: 0.8rem; align-items: center; color: #e0e0e0; font-size: 0.9rem;
    padding: 0.6rem; background: rgba(255,255,255,0.03); border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);
}
.contact-row i { color: #b0e8a7; width: 20px; text-align: center; }

.stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; margin-bottom: 1.5rem; }
.stat-box {
    background: rgba(176, 232, 167, 0.06); border: 1px solid rgba(176, 232, 167, 0.3);
    border-radius: 10px; padding: 0.8rem 0.5rem; text-align: center;
}
.stat-box h4 { margin: 0; font-size: 1.4rem; color: #b0e8a7; }
.stat-box p { margin: 0.3rem 0 0; font-size: 0.65rem; color: #ccc; text-transform: uppercase; letter-spacing: 1px; }

.social-grid { display: flex; justify-content: center; gap: 1rem; }
.social-btn {
    width: 40px; height: 40px; border: 1px solid #b0e8a7; color: #b0e8a7;
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    transition: all 0.3s;
}
.social-btn:hover { background: #b0e8a7; color: #121212; transform: translateY(-3px); }

/* Responsive */
@media (max-width: 620px) {
    .profile-3d-wrapper { width: 90%; }
    .face-header { flex-direction: column; text-align: center; }
    .skill-chip-grid { grid-template-columns: repeat(auto-fill, minmax(50px, 1fr)); }
}
</style>