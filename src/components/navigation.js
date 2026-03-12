import "../styles/navigation.css";
import { getLanguage, setLanguage, t } from "../utils/i18n.js";
import { getTheme, toggleTheme } from "../utils/theme.js";

export default function renderNavigation() {
    const currentLang = getLanguage();
    const oppositeLang = currentLang === 'en' ? 'ar' : 'en';

    // Premium Globe SVG
    const langIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;

    const currentTheme = getTheme();
    // Theme Icons
    const themeIcon = currentTheme === 'dark'
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

    return {
        html: `
            <header class="qx-navbar-wrapper" id="main-nav">
                <div class="qx-navbar-pill">

                    <div class="qx-nav-brand">
                        <a href="#hero" class="qx-brand-link">
                            <span class="qx-brand-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polygon points="12 2 2 22 22 22"></polygon>
                                </svg>
                            </span>
                            <span class="qx-brand-name">Qodix<span class="qx-accent-dot">.</span></span>
                        </a>
                    </div>

                    <nav class="qx-nav-menu" id="nav-menu">
                        <ul class="qx-nav-list">
                            <li><a href="#hero" class="qx-nav-item active">${t('nav.overview') || 'Overview'}</a></li>
                            <li><a href="#services" class="qx-nav-item">${t('nav.services') || 'Disciplines'}</a></li>
                            <li><a href="#process" class="qx-nav-item">Process</a></li>
                        </ul>
                    </nav>

                    <div class="qx-nav-actions">

                        <button id="theme-toggle" class="qx-icon-btn" aria-label="Toggle Theme" title="Toggle Theme">
                            ${themeIcon}
                        </button>

                        <button id="lang-toggle" class="qx-icon-btn" aria-label="Change Language" title="Change Language" data-target-lang="${oppositeLang}">
                            ${langIcon}
                        </button>

                        <a href="#contact" class="qx-nav-cta">
                            ${t('nav.cta') || 'Get a Quote'}
                        </a>

                        <button class="qx-mobile-toggle" id="mobile-toggle" aria-label="Open Menu">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
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
            const navMenu = document.getElementById('nav-menu');

            // Scroll Effect: Glass Morphism intensifies on scroll
            const handleScroll = () => {
                if (window.scrollY > 20) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            };
            window.addEventListener('scroll', handleScroll, { passive: true });
            handleScroll();

            const handleLangClick = (e) => {
                const newLang = e.currentTarget.getAttribute('data-target-lang');
                setLanguage(newLang);
            };

            const handleThemeClick = () => {
                toggleTheme();
                window.dispatchEvent(new Event('languageChanged'));
            };

            const toggleMenu = () => {
                if (navbar) navbar.classList.toggle('menu-open');
            };

            const handleToggleClick = (e) => {
                e.stopPropagation();
                toggleMenu();
            };

            const handleOutsideClick = (e) => {
                if (navbar && navbar.classList.contains('menu-open') && !navbar.contains(e.target)) {
                    navbar.classList.remove('menu-open');
                }
            };

            if (langToggle) langToggle.addEventListener('click', handleLangClick);
            if (themeToggle) themeToggle.addEventListener('click', handleThemeClick);
            if (mobileToggle) mobileToggle.addEventListener('click', handleToggleClick);
            document.addEventListener('click', handleOutsideClick);

            return () => {
                window.removeEventListener('scroll', handleScroll);
                if (langToggle) langToggle.removeEventListener('click', handleLangClick);
                if (themeToggle) themeToggle.removeEventListener('click', handleThemeClick);
                if (mobileToggle) mobileToggle.removeEventListener('click', handleToggleClick);
                document.removeEventListener('click', handleOutsideClick);
            };
        }
    };
}
