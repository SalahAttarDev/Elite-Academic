import { translations } from './locales.js';

let currentLang = 'en'; // Default fallback

// Helper to check if the URL hash is a valid language
function getLangFromHash() {
    const hash = window.location.hash.slice(1);
    return (hash === 'en' || hash === 'ar') ? hash : null;
}

// --- INITIALIZATION ---
const hashLang = getLangFromHash();
const storedLang = localStorage.getItem('qodix_lang');

if (hashLang) {
    currentLang = hashLang;
    localStorage.setItem('qodix_lang', currentLang); // Sync URL hash to storage
} else if (storedLang && (storedLang === 'en' || storedLang === 'ar')) {
    currentLang = storedLang;
}

console.log("Current Language Loaded:", currentLang);

// Set HTML attributes on first load
document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
document.documentElement.setAttribute('lang', currentLang);


// --- EXPORTED FUNCTIONS ---

export function setLanguage(lang) {
    // Make sure the requested language actually exists in your translations
    if (translations[lang]) {

        // FIX: Actually update the internal variable to the new language!
        currentLang = lang;

        // Save to local storage
        localStorage.setItem('qodix_lang', lang);

        // Optional: Update the URL hash to match the new language
        if (getLangFromHash()) {
            window.location.hash = lang;
        }

        // Handle RTL layout for Arabic
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', lang);

        // Dispatch a custom event so the UI knows to re-render
        window.dispatchEvent(new Event('languageChanged'));
    }
}

export function getLanguage() {
    return currentLang;
}

// A helper function to grab the correct string based on a dot-notation key (e.g., "hero.title")
export function t(key) {
    const keys = key.split('.');
    let value = translations[currentLang];

    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            // Fallback to the key name if missing (helps catch missing translations)
            console.warn(`Missing translation for key: ${key}`);
            return key;
        }
    }
    return value;
}
