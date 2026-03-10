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
                            <button class="btn-glass primary">
                                <span class="btn-text">${t('hero.btnPrimary')}</span>
                                <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                            <button class="btn-glass">
                                <span class="btn-text">${t('hero.btnSecondary')}</span>
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        `,
        mount: () => {
            // Your existing observer code remains exactly the same!
            const elements = document.querySelectorAll('#hero .fade-up');
            // ...
        }
    };
}
