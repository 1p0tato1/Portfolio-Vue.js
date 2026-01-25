<script setup>
import { computed } from 'vue';
import { globalState } from '../state.js'; // Assure-toi d'avoir créé state.js comme vu précédemment

const props = defineProps({
  isOpen: Boolean
});

// Émet un événement vers le parent pour fermer le menu sur mobile
const emit = defineEmits(['close']);

// Textes du menu (Bilingue)
const t = computed(() => {
  const isEn = globalState.lang === 'en';
  return {
    role: isEn ? 'Student' : 'Étudiant',
    home: isEn ? 'Welcome' : 'Accueil',
    exp: isEn ? 'Education & Exp.' : 'Éducation & Exp.',
    skills: isEn ? 'Skills' : 'Compétences',
    certs: isEn ? 'Diplomas & Certifs' : 'Diplômes & Certifs',
    projects: isEn ? 'Projects' : 'Projets',
    contact: isEn ? 'Contact' : 'Contact'
  };
});

// Fonction de navigation (simple défilement ou changement de vue)
const navigate = (page) => {
  emit('change-page', page); // On dit à App.vue de changer la page
  if (window.innerWidth <= 900) emit('close'); // On ferme le menu sur mobile
};
</script>

<template>
  <nav class="sidebar" :class="{ active: isOpen }">
    <div class="profile">
      <img src="/images/profile-picture.png" alt="Fayala Hakim" class="profile-img">
      <h1>Fayala Hakim</h1>
      <p class="job-title">{{ t.role }}</p>
    </div>

    <ul class="nav-menu">
      <li><a href="#" @click.prevent="navigate('Home')">{{ t.home }}</a></li>
      <li><a href="#" @click.prevent="navigate('Experience')">{{ t.exp }}</a></li>
      <li><a href="#" @click.prevent="navigate('Skills')">{{ t.skills }}</a></li>
      <li><a href="#" @click.prevent="navigate('Certifications')">{{ t.certs }}</a></li>
      <li><a href="#" @click.prevent="navigate('Projects')">{{ t.projects }}</a></li>
      <li><a href="#" @click.prevent="navigate('Contact')">{{ t.contact }}</a></li>
    </ul>
  </nav>
</template>

<style scoped>
/* Le style de la sidebar est déjà géré par main.css, 
   mais on peut garder quelques ajustements ici si besoin */
</style>