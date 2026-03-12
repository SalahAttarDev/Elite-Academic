import "../styles/hero.css";
import { t } from "../utils/i18n.js";

export default function renderHome() {
    return {
        html: `
            <section class="hero-section" id="hero">
                <div class="hero-container">
                    <div class="hero-content">

                        <div class="trust-badge fade-up">
                            <div class="trust-badge-dot"></div>
                            ${t('hero.badge')}
                        </div>

                        <h1 class="hero-headline fade-up">
                            ${t('hero.title')}
                        </h1>

                        <div class="hero-subheading fade-up">
                            <p class="subtitle-main">${t('hero.subtitle')}</p>
                        </div>

                        <div class="hero-buttons fade-up">
                            <button class="btn-glass primary" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">
                                <span class="btn-text">${t('hero.btnPrimary')}</span>
                                <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                            <button class="btn-glass" onclick="document.getElementById('services').scrollIntoView({behavior: 'smooth'})">
                                <span class="btn-text">${t('hero.btnSecondary')}</span>
                            </button>
                        </div>

                        <div class="hero-guarantees-wrapper fade-up" style="transition-delay: 0.2s;">
                            <p class="language-support-text">${t('hero.supportText')}</p>

                            <div class="hero-guarantees-grid">
                                <div class="guarantee-item">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    <span>${t('hero.guarantee1')}</span>
                                </div>
                                <div class="guarantee-item">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                    <span>${t('hero.guarantee2')}</span>
                                </div>
                                <div class="guarantee-item">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    <span>${t('hero.guarantee3')}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        `,
        mount: () => {
            const elements = document.querySelectorAll('#hero .fade-up');
            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) entry.target.classList.add('is-visible');
                    });
                }, { threshold: 0.1 });
                elements.forEach(el => observer.observe(el));
            } else {
                elements.forEach(el => el.classList.add('is-visible'));
            }
            return () => { };
        }
    };
}
