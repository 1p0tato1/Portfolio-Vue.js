import { reactive, watch } from 'vue';

// 1. On essaie de récupérer la langue sauvegardée, sinon on met 'fr' par défaut
const savedLang = localStorage.getItem('user-lang') || 'fr';

export const globalState = reactive({
  lang: savedLang
});

// 2. On surveille les changements. Dès que 'lang' change, on sauvegarde dans le navigateur.
watch(
  () => globalState.lang,
  (newLang) => {
    localStorage.setItem('user-lang', newLang);
    // Optionnel : Changer l'attribut lang de la balise <html> pour le référencement (SEO)
    document.documentElement.setAttribute('lang', newLang);
  }
);