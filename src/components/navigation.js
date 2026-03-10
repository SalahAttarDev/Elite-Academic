import "../styles/navigation.css";
import { getLanguage, setLanguage, t } from "../utils/i18n.js";
import { getTheme, toggleTheme } from "../utils/theme.js"; // <-- Import theme logic

export default function renderNavigation() {
    const currentLang = getLanguage();
    const oppositeLang = currentLang === 'en' ? 'ar' : 'en';
    const langLabel = currentLang === 'en' ? 'العربية' : 'EN';

    const currentTheme = getTheme();
    // Sun icon for dark mode (click to light), Moon icon for light mode (click to dark)
    const themeIcon = currentTheme === 'dark'
        ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
        : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

    return {
        html: `
            <header class="tech-header" id="main-nav">
                <div class="header-container">

                    <div class="header-left">
                        <a href="/" class="brand-logo" data-link>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="12 2 2 22 22 22"></polygon>
                            </svg>
                            <span>${t('nav.brand')}</span>
                        </a>
                    </div>

                    <nav class="header-center">
                        <ul id="primary-menu" class="nav-links">
                            <li><a href="/" class="nav-item active" data-link>${t('nav.overview')}</a></li>
                            <li><a href="/disciplines" class="nav-item" data-link>${t('nav.services')}</a></li>
                        </ul>
                    </nav>

                    <div class="header-right">

                        <button id="theme-toggle" class="icon-btn" aria-label="Toggle Theme">
                            ${themeIcon}
                        </button>

                        <button id="lang-toggle" class="lang-btn" data-target-lang="${oppositeLang}">
                            ${langLabel}
                        </button>

                        <a href="/request" class="btn-micro" data-link>${t('nav.cta')}</a>

                        <button class="mobile-menu-btn" id="mobile-toggle" aria-label="Menu">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="4" y1="12" x2="20" y2="12"></line>
                                <line x1="4" y1="6" x2="20" y2="6"></line>
                                <line x1="4" y1="18" x2="20" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                </div>
            </header>
        `,
        mount: () => {
            const navbar = document.getElementById('main-nav');
            const langToggle = document.getElementById('lang-toggle');
            const themeToggle = document.getElementById('theme-toggle');
            const mobileToggle = document.getElementById('mobile-toggle');
            const navLinks = document.querySelector('.header-center');

            // Language Toggle Logic
            const handleLangClick = (e) => {
                const newLang = e.currentTarget.getAttribute('data-target-lang');
                setLanguage(newLang);
            };

            // Theme Toggle Logic
            const handleThemeClick = () => {
                toggleTheme();
                // Dispatch event so main.js re-renders the navbar icon
                window.dispatchEvent(new Event('languageChanged'));
            };

            // Mobile Menu Logic
            const toggleMenu = () => {
                if (navLinks) navLinks.classList.toggle('show');
            };

            const handleToggleClick = (e) => {
                e.stopPropagation();
                toggleMenu();
            };

            const handleOutsideClick = (e) => {
                if (navLinks && navLinks.classList.contains('show') && !navbar.contains(e.target)) {
                    navLinks.classList.remove('show');
                }
            };

            if (langToggle) langToggle.addEventListener('click', handleLangClick);
            if (themeToggle) themeToggle.addEventListener('click', handleThemeClick);
            if (mobileToggle) mobileToggle.addEventListener('click', handleToggleClick);
            document.addEventListener('click', handleOutsideClick);

            return () => {
                if (langToggle) langToggle.removeEventListener('click', handleLangClick);
                if (themeToggle) themeToggle.removeEventListener('click', handleThemeClick);
                if (mobileToggle) mobileToggle.removeEventListener('click', handleToggleClick);
                document.removeEventListener('click', handleOutsideClick);
            };
        }
    };
}
