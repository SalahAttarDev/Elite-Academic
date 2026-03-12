import "../styles/services.css";
import { t } from "../utils/i18n.js";

export default function renderServices() {
    return {
        html: `
            <section class="qodix-wow-services" id="services">
                <div class="ambient-glow orb-1"></div>
                <div class="ambient-glow orb-2"></div>

                <div class="wow-container">
                    <div class="section-header-centered fade-up">
                        <span class="neon-eyebrow">${t('services.status') || 'CORE EXPERTISE'}</span>
                        <h2 class="massive-headline">${t('services.title') || 'Academic Focus Areas.'}</h2>
                        <p class="sub-headline">${t('services.subtitle') || 'Specialized technical support tailored strictly to university grading rubrics.'}</p>
                    </div>

                    <div class="bento-grid fade-up" style="transition-delay: 0.1s;">

                        <div class="bento-card featured-card">
                            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" alt="Computer Science" class="bento-bg-img" />
                            <div class="card-overlay"></div>
                            <div class="card-content">
                                <div class="icon-glass-container">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                                </div>
                                <h3 class="bento-title">${t('services.devTitle') || 'Computer Science & IT'}</h3>
                                <p class="bento-desc">${t('services.devDesc') || 'Code debugging, custom algorithms, web development, and lab environments (Databases, Kali Linux, etc).'}</p>
                            </div>
                        </div>

                        <div class="bento-stack">

                            <div class="bento-card secondary-card">
                                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" alt="Engineering and Math" class="bento-bg-img" />
                                <div class="card-overlay"></div>
                                <div class="card-content">
                                    <div class="icon-glass-container">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                    </div>
                                    <h3 class="bento-title">${t('services.engTitle') || 'Engineering & Math'}</h3>
                                    <p class="bento-desc">${t('services.engDesc') || 'Complex calculations, physics simulations, MATLAB projects, and detailed lab reports.'}</p>
                                </div>
                            </div>

                            <div class="bento-card secondary-card">
                                <img src="https://images.unsplash.com/photo-1455390582262-044cdead27d8?q=80&w=2073&auto=format&fit=crop" alt="Technical Reports" class="bento-bg-img" />
                                <div class="card-overlay"></div>
                                <div class="card-content">
                                    <div class="icon-glass-container">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                    </div>
                                    <h3 class="bento-title">${t('services.writeTitle') || 'Technical Reports'}</h3>
                                    <p class="bento-desc">${t('services.writeDesc') || 'IEEE-standard formatting, Final Year Projects (FYP), and structured research papers.'}</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        `,
        mount: () => {
            const elements = document.querySelectorAll('#services .fade-up');
            if (!('IntersectionObserver' in window)) return;
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('is-visible');
                });
            }, { threshold: 0.1 });
            elements.forEach(el => observer.observe(el));
            return () => observer.disconnect();
        }
    };
}
