<script setup>
import { computed } from 'vue';
import { globalState } from '../state.js';

const currentLang = computed(() => globalState.lang);
const currentYear = new Date().getFullYear();

const t = computed(() => {
  const isEn = currentLang.value === 'en';
  return {
    copyright: isEn ? 'All rights reserved' : 'Tous droits réservés',
    lastUpdate: isEn ? 'Last updated' : 'Dernière mise à jour',
    lastUpdatedDate: isEn ? 'February 2026' : 'Février 2026'
  };
});
</script>

<template>
  <footer class="site-footer">
    <div class="footer-content">
      <p class="copyright">
        © {{ currentYear }} Hakim Fayala. {{ t.copyright }}.
      </p>
      <p class="last-updated">
        {{ t.lastUpdate }}: {{ t.lastUpdatedDate }}
      </p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  width: 100%;
  background: linear-gradient(135deg, #0d0d0d, #1a1a1a);
  border-top: 1px solid rgba(176, 232, 167, 0.2);
  padding: 2rem 1.5rem;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.copyright,
.last-updated {
  margin: 0;
  color: #888;
  font-size: 0.9rem;
  letter-spacing: 0.3px;
}

.copyright {
  font-weight: 500;
  color: #aaa;
}

.last-updated {
  font-size: 0.85rem;
  color: #777;
}

@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

@media (max-width: 767px) {
  .site-footer {
    padding: 1.5rem 1rem;
  }
  
  .copyright,
  .last-updated {
    font-size: 0.85rem;
  }
}
</style>
