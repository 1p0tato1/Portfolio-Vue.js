<script setup>
import { ref, computed } from 'vue';

// --- 1. NAVIGATION & LANGUE ---
import { globalState } from '../state.js';

// --- 1. NAVIGATION & LANGUE ---
const currentLang = computed(() => globalState.lang);

// --- 2. DONNÉES DU FORMULAIRE ---
const formData = ref({
  name: '',
  email: '',
  company: '',
  subject: '',
  message: ''
});

const formStatus = ref({
  loading: false,
  success: false,
  error: false
});

// Compteur de caractères pour le message
const maxChar = 1000;
const charCount = computed(() => formData.value.message.length);
const isCharLimitWarning = computed(() => charCount.value > maxChar * 0.9);

// --- 3. DICTIONNAIRE DE TRADUCTION ---
const translations = {
  fr: {
    // Nav
    menu: { home: 'Accueil', exp: 'Éducation & Exp.', skills: 'Compétences', certs: 'Diplômes & Certifs', projects: 'Projets', contact: 'Contact' },
    role: 'Étudiant',
    // Header
    title: 'Me Contacter',
    subtitle: "N'hésitez pas à me contacter en utilisant le formulaire ci-dessous.",
    // Cards
    contactInfo: 'Informations de Contact',
    emailLabel: 'Email',
    emailAction: 'Envoyer un Email',
    locLabel: 'Localisation',
    locValue: 'Saint-Étienne, France',
    respLabel: 'Temps de Réponse',
    respValue: 'Dans les 24 heures',
    respAction: 'Réponse rapide',
    availLabel: 'Disponibilité',
    availValue: 'Ouvert aux opportunités',
    availAction: 'Collaborons ensemble',
    // Form
    formTitle: 'Envoyez-moi un Message',
    formDesc: "Vous avez un projet en tête ou souhaitez discuter d'opportunités ? J'aimerais beaucoup vous entendre !",
    lblDetails: "Nom Complet *",
    lblEmail: "Adresse Email *",
    lblCompany: "Entreprise/Organisation",
    lblSubject: "Sujet *",
    lblMessage: "Message *",
    phMessage: "Parlez-moi de votre projet, vos idées, ou comment je peux vous aider...",
    btnSend: "Envoyer le Message",
    btnLoading: "Envoi en cours...",
    btnReset: "Effacer le Formulaire",
    // Options Sujet
    subjects: {
      def: 'Sélectionnez un sujet',
      project: 'Demande de Projet',
      job: "Opportunité d'Emploi",
      collab: 'Collaboration',
      consult: 'Consultation',
      general: 'Question Générale',
      other: 'Autre'
    },
    // Messages
    successTitle: "Client Email Ouvert !",
    successText: "Votre client email devrait s'être ouvert avec le message pré-rempli. Veuillez envoyer l'email depuis votre client pour terminer.",
    errorTitle: "Champs manquants",
    errorText: "Veuillez remplir tous les champs obligatoires avant de soumettre.",
    socialTitle: "Connectez-vous avec Moi"
  },
  en: {
    // Nav
    menu: { home: 'Welcome', exp: 'Education & Exp.', skills: 'Skills', certs: 'Diplomas & Certifs', projects: 'Projects', contact: 'Contact' },
    role: 'Student',
    // Header
    title: 'Get In Touch',
    subtitle: "Feel free to reach out using the form below.",
    // Cards
    contactInfo: 'Contact Information',
    emailLabel: 'Email',
    emailAction: 'Send an Email',
    locLabel: 'Location',
    locValue: 'Saint-Étienne, France',
    respLabel: 'Response Time',
    respValue: 'Within 24 hours',
    respAction: 'Quick turnaround',
    availLabel: 'Availability',
    availValue: 'Open for opportunities',
    availAction: "Let's collaborate",
    // Form
    formTitle: 'Send Me a Message',
    formDesc: "Have a project in mind or want to discuss opportunities? I'd love to hear from you!",
    lblDetails: "Full Name *",
    lblEmail: "Email Address *",
    lblCompany: "Company/Organization",
    lblSubject: "Subject *",
    lblMessage: "Message *",
    phMessage: "Tell me about your project, your ideas, or how I can help you...",
    btnSend: "Send Message",
    btnLoading: "Sending...",
    btnReset: "Clear Form",
    // Options Sujet
    subjects: {
      def: 'Select a subject',
      project: 'Project Inquiry',
      job: "Job Opportunity",
      collab: 'Collaboration',
      consult: 'Consultation',
      general: 'General Question',
      other: 'Other'
    },
    // Messages
    successTitle: "Email Client Opened!",
    successText: "Your email client should have opened with the message pre-filled. Please send the email from your email client to complete the process.",
    errorTitle: "Please Fill Required Fields",
    errorText: "Please make sure to fill in all required fields (Name, Email, Subject, and Message) before submitting the form.",
    socialTitle: "Connect With Me"
  }
};

const t = computed(() => translations[currentLang.value]);

// --- 4. LOGIQUE DE SOUMISSION (MAILTO) ---
const handleSubmit = () => {
  // Validation simple
  if (!formData.value.name || !formData.value.email || !formData.value.subject || !formData.value.message) {
    formStatus.value.error = true;
    formStatus.value.success = false;
    setTimeout(() => formStatus.value.error = false, 4000);
    return;
  }

  formStatus.value.loading = true;
  formStatus.value.error = false;

  // Création du corps de l'email
  const emailSubject = `Contact Portfolio: ${formData.value.subject}`;
  const emailBody = `Bonjour Hakim,

Je vous contacte via le formulaire de contact de votre portfolio.

Nom: ${formData.value.name}
Email: ${formData.value.email}
${formData.value.company ? `Entreprise: ${formData.value.company}` : ''}

Sujet: ${formData.value.subject}

Message:
${formData.value.message}

Cordialement,
${formData.value.name}`;

  // Construction du lien mailto
  const mailtoLink = `mailto:hfayala53@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  // Simulation d'un petit délai pour l'UX
  setTimeout(() => {
    window.location.href = mailtoLink;
    formStatus.value.loading = false;
    formStatus.value.success = true;
    
    // Reset du formulaire après succès
    formData.value = { name: '', email: '', company: '', subject: '', message: '' };
    
    setTimeout(() => formStatus.value.success = false, 5000);
  }, 1000);
};

const handleReset = () => {
  formData.value = { name: '', email: '', company: '', subject: '', message: '' };
  formStatus.value.success = false;
  formStatus.value.error = false;
};
</script>

<template>
      <main class="contact-content">
        <div class="page-header">
          <h1 class="page-title fade-in">{{ t.title }}</h1>
          <p class="page-subtitle fade-in">{{ t.subtitle }}</p>
        </div>

        <div class="contact-container">
            
            <div class="contact-info fade-in">
                <h2 class="section-title">{{ t.contactInfo }}</h2>
                <div class="contact-cards">
                    <div class="contact-card">
                        <div class="contact-icon"><i class="fas fa-envelope"></i></div>
                        <h3>{{ t.emailLabel }}</h3>
                        <p>hfayala53@gmail.com</p>
                        <a href="mailto:hfayala53@gmail.com" class="contact-link">{{ t.emailAction }}</a>
                    </div>
                    <div class="contact-card">
                        <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
                        <h3>{{ t.locLabel }}</h3>
                        <p>{{ t.locValue }}</p>
                    </div>
                    <div class="contact-card">
                        <div class="contact-icon"><i class="fas fa-clock"></i></div>
                        <h3>{{ t.respLabel }}</h3>
                        <p>{{ t.respValue }}</p>
                        <span class="contact-link">{{ t.respAction }}</span>
                    </div>
                    <div class="contact-card">
                        <div class="contact-icon"><i class="fas fa-briefcase"></i></div>
                        <h3>{{ t.availLabel }}</h3>
                        <p>{{ t.availValue }}</p>
                        <span class="contact-link">{{ t.availAction }}</span>
                    </div>
                </div>
            </div>

            <div class="form-column">
              <div class="contact-form-section fade-in">
                <h2 class="section-title">{{ t.formTitle }}</h2>
                <p class="form-description">{{ t.formDesc }}</p>

                <form @submit.prevent="handleSubmit" class="contact-form">
                    <div class="form-group" :class="{ 'has-value': formData.name }">
                        <label>{{ t.lblDetails }}</label>
                        <input type="text" v-model="formData.name" required>
                        <span class="form-focus-line"></span>
                    </div>

                    <div class="form-group" :class="{ 'has-value': formData.email }">
                        <label>{{ t.lblEmail }}</label>
                        <input type="email" v-model="formData.email" required>
                        <span class="form-focus-line"></span>
                    </div>

                    <div class="form-group" :class="{ 'has-value': formData.company }">
                        <label>{{ t.lblCompany }}</label>
                        <input type="text" v-model="formData.company">
                        <span class="form-focus-line"></span>
                    </div>

                    <div class="form-group" :class="{ 'has-value': formData.subject }">
                        <label>{{ t.lblSubject }}</label>
                        <select v-model="formData.subject" required>
                            <option value="" disabled selected>{{ t.subjects.def }}</option>
                            <option value="Project Inquiry">{{ t.subjects.project }}</option>
                            <option value="Job Opportunity">{{ t.subjects.job }}</option>
                            <option value="Collaboration">{{ t.subjects.collab }}</option>
                            <option value="Consultation">{{ t.subjects.consult }}</option>
                            <option value="General Question">{{ t.subjects.general }}</option>
                            <option value="Other">{{ t.subjects.other }}</option>
                        </select>
                        <span class="form-focus-line"></span>
                    </div>

                    <div class="form-group form-group-full" :class="{ 'has-value': formData.message }">
                        <label>{{ t.lblMessage }}</label>
                        <textarea v-model="formData.message" rows="6" required :placeholder="t.phMessage" :maxlength="maxChar"></textarea>
                        <span class="form-focus-line"></span>
                        <div class="char-counter" :class="{ warning: isCharLimitWarning }">{{ charCount }}/{{ maxChar }}</div>
                    </div>

                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary" :class="{ loading: formStatus.loading }" :disabled="formStatus.loading">
                            <span class="btn-text">{{ t.btnSend }} <i class="fas fa-paper-plane"></i></span>
                            <span class="btn-loading">{{ t.btnLoading }}</span>
                        </button>
                        <button type="button" @click="handleReset" class="btn btn-secondary">{{ t.btnReset }}</button>
                    </div>
                </form>

                <div class="success-message" :class="{ show: formStatus.success }">
                    <div class="success-icon"><i class="fas fa-check"></i></div>
                    <div class="success-content">
                        <h3>{{ t.successTitle }}</h3>
                        <p>{{ t.successText }}</p>
                    </div>
                </div>

                <div class="error-message" :class="{ show: formStatus.error }">
                    <div class="error-icon"><i class="fas fa-times"></i></div>
                    <div class="error-content">
                        <h3>{{ t.errorTitle }}</h3>
                        <p>{{ t.errorText }}</p>
                    </div>
                </div>
            </div>

            <div class="content-section fade-in">
                <h2 class="section-title">{{ t.socialTitle }}</h2>
                <div class="social-links">
                    <a href="https://www.linkedin.com/in/hakim-fayala/" target="_blank" class="social-link">
                        <div class="social-icon"><i class="fab fa-linkedin-in"></i></div>
                        <span>LinkedIn</span>
                    </a>
                     <a href="https://github.com/hfayala" target="_blank" class="social-link">
                        <div class="social-icon"><i class="fab fa-github"></i></div>
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </div>
        </div>
      </main>
</template>

<style scoped>
/* ======================== */
/* 1. GLOBAL LAYOUT (Standard) */
/* ======================== */
/* ======================== */
/* 1. GLOBAL LAYOUT CLEANUP */
/* ======================== */
/* Styles moved to main.css */
/* Minimal specific styles for Contact */
.contact-content {
  width: 100%;
}
.page-header { margin-bottom: 3rem; text-align: center; }
.page-title {
  font-size: 2.5rem; margin-bottom: 0.5rem;
  background: linear-gradient(90deg, #fff, #b0e8a7); -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.page-subtitle { color: #888; font-size: 1.1rem; }
.section-title {
  font-size: 1.8rem; color: #b0e8a7; margin-bottom: 1.5rem; padding-bottom: 0.5rem; border-bottom: 1px solid #2d2d2d;
}
.fade-in { animation: fadeIn 0.8s ease forwards; opacity: 0; transform: translateY(20px); }
@keyframes fadeIn { to { opacity: 1; transform: translateY(0); } }

/* ======================== */
/* 2. STYLE CONTACT SPÉCIFIQUE (Fusion de ton CSS) */
/* ======================== */
.contact-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 50px;
    margin: 40px 0;
    align-items: start;
}
.form-column {
    grid-column: 2;
    display: flex; flex-direction: column; gap: 40px;
}

/* --- Cards --- */
.contact-info { position: sticky; top: 20px; }
.contact-cards { display: grid; gap: 20px; margin-top: 30px; }

.contact-card {
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
    backdrop-filter: blur(15px);
    border-radius: 20px;
    padding: 30px;
    border: 1px solid rgba(176, 232, 167, 0.15);
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    text-align: center;
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}
.contact-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, #b0e8a7, #7dd3fc, #b0e8a7);
    opacity: 0; transition: opacity 0.4s ease;
}
.contact-card:hover::before { opacity: 1; }
.contact-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(176, 232, 167, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15);
    border-color: rgba(176, 232, 167, 0.3);
}

.contact-icon {
    width: 60px; height: 60px;
    background: linear-gradient(135deg, #b0e8a7, #8ac582);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 20px; color: #000; transition: all 0.3s ease;
    font-size: 1.5rem;
}
.contact-card:hover .contact-icon {
    transform: rotateY(180deg) scale(1.1);
    box-shadow: 0 8px 25px rgba(176, 232, 167, 0.15);
}
.contact-card h3 { color: #b0e8a7; margin-bottom: 0.5rem; font-size: 1.3rem; }
.contact-card p { color: #fff; font-size: 1rem; margin-bottom: 1rem; font-weight: bold; }
.contact-link {
    color: #ccc; font-size: 0.9rem; text-decoration: none; transition: color 0.3s ease;
}
.contact-link:hover { color: #b0e8a7; }

/* --- Form --- */
.contact-form-section {
    background: linear-gradient(135deg, #1a1a1a, #0d0d0d);
    border-radius: 20px; padding: 40px; border: 1px solid #333;
    position: relative; overflow: hidden;
}
.contact-form-section::after {
    content: ''; position: absolute; top: -50%; right: -50%; width: 200%; height: 200%;
    background: radial-gradient(circle, rgba(176, 232, 167, 0.02) 0%, transparent 50%); pointer-events: none;
}
.form-description { margin-bottom: 2rem; color: #ccc; font-size: 1.1rem; line-height: 1.6; }

.contact-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    position: relative; z-index: 1;
}
.form-group { position: relative; margin-bottom: 10px; }
.form-group-full { grid-column: 1 / -1; margin-bottom: 30px; }

.form-group label {
    display: block; font-size: 0.95rem; color: #b0e8a7; margin-bottom: 8px; font-weight: bold; transition: all 0.3s ease;
}
.form-group input, .form-group select, .form-group textarea {
    width: 100%; padding: 15px 0; background: transparent; border: none;
    border-bottom: 2px solid #333; color: #fff; font-family: inherit; font-size: 1rem;
    outline: none; transition: all 0.3s ease;
}
.form-group input:focus, .form-group select:focus, .form-group textarea:focus {
    border-bottom-color: #b0e8a7;
}

/* Animated focus line */
.form-focus-line {
    position: absolute; bottom: 0; left: 50%; width: 0; height: 2px;
    background: linear-gradient(135deg, #b0e8a7, #8ac582);
    transition: all 0.3s ease; transform: translateX(-50%);
}
.form-group.has-value .form-focus-line, 
.form-group input:focus ~ .form-focus-line, 
.form-group select:focus ~ .form-focus-line, 
.form-group textarea:focus ~ .form-focus-line { width: 100%; }

.form-group.has-value label {
    color: #b0e8a7; transform: translateY(-5px); font-size: 0.9rem;
}

/* Select Arrow */
.form-group select {
    cursor: pointer; appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23b0e8a7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat; background-position: right 10px center; background-size: 16px; padding-right: 40px;
}
.form-group select option { background: #1a1a1a; color: #fff; padding: 10px; }

/* Textarea */
.form-group textarea { resize: vertical; min-height: 120px; padding-top: 15px; line-height: 1.6; }

.char-counter {
    position: absolute; bottom: -20px; right: 0; font-size: 0.8rem; color: #666; transition: color 0.3s ease;
}
.char-counter.warning { color: #FF9800; }

/* Form Actions */
.form-actions {
    grid-column: 1 / -1; display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; margin-top: 30px;
}
.btn {
    position: relative; display: flex; align-items: center; gap: 10px; justify-content: center;
    cursor: pointer; outline: none; border: 0; vertical-align: middle; text-decoration: none;
    font-family: inherit; font-size: 15px; min-width: 160px;
}

/* 3D Primary Button */
/* 3D Primary Button REMOVED - Flat Style */
.btn-primary {
    font-weight: 600; color: #121212; text-transform: uppercase; padding: 1.25em 2em;
    background: #b0e8a7; border: 2px solid #b0e8a7;
    border-radius: 0.75em;
    transition: all 0.3s ease;
}
.btn-primary:hover {
    background: #9bd690; border-color: #9bd690;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(176, 232, 167, 0.3);
}
.btn-primary:active {
    transform: translateY(0);
}

/* Secondary Button */
.btn-secondary {
    font-weight: 600; color: #b0e8a7; text-transform: uppercase; padding: 1.25em 2em;
    background: transparent; border: 2px solid #8ac582; border-radius: 0.75em;
    transform-style: preserve-3d; transition: all 150ms cubic-bezier(0, 0, 0.58, 1);
}
.btn-secondary:hover { background: rgba(0, 0, 0, 0); transform: translate(0, 0.25em); }

/* Loading */
.btn.loading .btn-text { opacity: 0; }
.btn-loading { position: absolute; opacity: 0; transition: opacity 0.3s ease; }
.btn.loading .btn-loading { opacity: 1; }
@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
.btn.loading::after {
    content: ''; position: absolute; width: 16px; height: 16px; border: 2px solid transparent;
    border-top: 2px solid currentColor; border-radius: 50%; animation: spin 1s linear infinite; right: 20px;
}

/* Messages */
.success-message, .error-message {
    position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.8);
    background: linear-gradient(135deg, #1a1a1a, #0d0d0d); border-radius: 20px; padding: 40px;
    border: 2px solid; max-width: 500px; width: 90%; text-align: center;
    opacity: 0; visibility: hidden; transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: 2000; backdrop-filter: blur(10px);
}
.success-message { border-color: #4CAF50; }
.error-message { border-color: #f44336; }
.success-message.show, .error-message.show { opacity: 1; visibility: visible; transform: translate(-50%, -50%) scale(1); }
.success-message::before, .error-message::before {
    content: ''; position: fixed; top: -50vh; left: -50vw; width: 200vw; height: 200vh;
    background: rgba(0, 0, 0, 0.7); z-index: -1;
}
.success-icon, .error-icon {
    width: 60px; height: 60px; margin: 0 auto 20px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: white;
}
.success-icon { background: linear-gradient(135deg, #4CAF50, #45a049); }
.error-icon { background: linear-gradient(135deg, #f44336, #d32f2f); }
.success-content h3, .error-content h3 { color: #b0e8a7; font-size: 1.5rem; margin-bottom: 15px; }
.success-content p, .error-content p { color: #ccc; font-size: 1.1rem; line-height: 1.6; }

/* Social */
.social-links { display: flex; justify-content: center; gap: 30px; margin-top: 30px; flex-wrap: wrap; }
.social-link {
    display: flex; flex-direction: column; align-items: center; gap: 10px; padding: 20px;
    background: linear-gradient(135deg, #1a1a1a, #0d0d0d); border-radius: 15px; border: 1px solid #333;
    color: #ccc; text-decoration: none; transition: all 0.3s ease; min-width: 120px;
}
.social-link:hover {
    transform: translateY(-8px); border-color: #b0e8a7; color: #b0e8a7;
    box-shadow: 0 12px 35px rgba(176, 232, 167, 0.15);
}
.social-icon {
    width: 50px; height: 50px;
    background: linear-gradient(135deg, rgba(176, 232, 167, 0.1), rgba(138, 197, 130, 0.1));
    border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease;
    font-size: 1.3rem;
}
.social-link:hover .social-icon {
    background: linear-gradient(135deg, #b0e8a7, #8ac582); color: #000; transform: rotateY(360deg);
}
.social-link span { font-weight: bold; font-size: 0.95rem; }

@media (max-width: 1024px) {
    .contact-container { grid-template-columns: 1fr; gap: 40px; }
    .contact-info { position: static; }
    .contact-cards { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
    .contact-cards { grid-template-columns: 1fr; }
    .contact-form { grid-template-columns: 1fr; gap: 20px; }
    .contact-form-section { padding: 30px 20px; }
    .form-actions { flex-direction: column; align-items: center; }
    .btn { width: 100%; max-width: 300px; }
}
</style>