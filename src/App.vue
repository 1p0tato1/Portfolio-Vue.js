<script setup>
import { ref, watch, computed } from 'vue';
import { globalState } from './state.js';
import Sidebar from './components/Sidebar.vue';
import LanguageSwitcher from './components/LanguageSwitcher.vue';
import Footer from './components/Footer.vue';

// Importation des pages (Composants)
import Home from './components/Home.vue';
import Experience from './components/Experience.vue';
import Certifications from './components/Certifications.vue';
import Contact from './components/Contact.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';

// État de la navigation
const currentPage = ref('Home');
const isSidebarOpen = ref(false);

const toggleNav = () => isSidebarOpen.value = !isSidebarOpen.value;
const closeNav = () => isSidebarOpen.value = false;

// Fonction pour changer de page
const setPage = (pageName) => {
  currentPage.value = pageName;
  window.scrollTo(0, 0); // Remonter en haut de page
};

// Titres de pages en français et anglais
const pageTitles = {
  en: {
    Home: 'Home',
    Experience: 'Experience',
    Certifications: 'Certifications',
    Contact: 'Contact',
    Skills: 'Skills',
    Projects: 'Projects'
  },
  fr: {
    Home: 'Accueil',
    Experience: 'Expérience',
    Certifications: 'Certifications',
    Contact: 'Contact',
    Skills: 'Compétences',
    Projects: 'Projets'
  }
};

// Mise à jour dynamique du titre de la page
const updatePageTitle = () => {
  const lang = globalState.lang;
  const pageTitle = pageTitles[lang][currentPage.value] || currentPage.value;
  document.title = `${pageTitle} - Fayala`;
};

// Surveiller les changements de page et de langue
watch([currentPage, () => globalState.lang], updatePageTitle, { immediate: true });
</script>

<template>
  <div class="app-container">
    <div class="sidebar-overlay" :class="{ active: isSidebarOpen }" @click="closeNav"></div>

    <button class="nav-toggle" @click="toggleNav" aria-label="Menu">
      <i class="fas fa-bars"></i>
    </button>

    <LanguageSwitcher />

    <Sidebar 
      :isOpen="isSidebarOpen" 
      @close="closeNav" 
      @change-page="setPage" 
    />

    <div class="main-content">
      <Home v-if="currentPage === 'Home'" @change-page="setPage" />
      <Experience v-if="currentPage === 'Experience'" />
      <Certifications v-if="currentPage === 'Certifications'" />
      <Contact v-if="currentPage === 'Contact'" />
      <Skills v-if="currentPage === 'Skills'" />
      <Projects v-if="currentPage === 'Projects'" />
    </div>
    
    <Footer />
  </div>
</template>

<style>
/* Importation du CSS Global */
@import './assets/main.css';

/* App container for footer positioning */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Ajustement pour que le bouton burger reste visible au-dessus de tout */
.nav-toggle {
  z-index: 1100;
}
</style>