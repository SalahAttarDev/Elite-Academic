import "../styles/about.css";
import { t } from "../utils/i18n.js";

export default function renderAbout() {
    return {
        html: `
            <section class="about-editorial" id="about">
                <div class="editorial-container">
                    <div class="editorial-grid">

                        <div class="editorial-image-wrapper fade-up">
                            <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop" alt="Student Workspace and Notes" class="editorial-img" />
                        </div>

                        <div class="editorial-content fade-up" style="transition-delay: 0.1s;">
                            <h2 class="editorial-title">${t('about.title')}</h2>

                            <div class="editorial-text">
                                <p>${t('about.lead')}</p>
                                <p>${t('about.body1')}</p>
                                <p>${t('about.body2')}</p>
                            </div>

                            <div class="editorial-signature">
                                <span>${t('about.signature')}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        `,
        mount: () => {
            const aboutSection = document.getElementById('about');
            if (!aboutSection) return;
            const elements = aboutSection.querySelectorAll('.fade-up');
            let observer;

            if (!('IntersectionObserver' in window)) {
                elements.forEach(el => el.classList.add('is-visible'));
            } else {
                observer = new IntersectionObserver((entries, obs) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setTimeout(() => {
                                entry.target.classList.add('is-visible');
                            }, 50);
                            obs.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.15 });

                elements.forEach(el => observer.observe(el));
            }

            return () => {
                if (observer) observer.disconnect();
            };
        }
    };
}
