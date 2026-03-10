import { translations } from './locales.js';

// Default to English if no preference is saved
let currentLang = localStorage.getItem('qodix_lang') || 'en';

export function setLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        localStorage.setItem('qodix_lang', lang);

        // Handle RTL layout for Arabic
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', lang);

        // Dispatch a custom event so our engine knows to re-render
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
            return key; // Fallback to the key name if missing
        }
    }
    return value;
}

// Initialize direction on first load
document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
document.documentElement.setAttribute('lang', currentLang);
