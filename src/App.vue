<script setup>
import { ref } from 'vue';
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