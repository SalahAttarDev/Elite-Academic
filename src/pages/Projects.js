import "../styles/projects.css";
import { t } from "../utils/i18n.js";

export default function renderProjects() {
    return {
        html: `
            <section class="projects-section" id="projects">
                <div class="projects-container">

                    <div class="projects-header fade-up">
                        <div class="system-status">
                            <span class="status-dot pulsing"></span>
                            <span class="status-text">${t('projects.status')}</span>
                        </div>
                        <h2 class="section-title">${t('projects.title')}</h2>
                    </div>

                    <div class="projects-split">

                        <div class="projects-list fade-up" style="transition-delay: 0.1s;">

                            <div class="project-row active" data-target="img-1">
                                <div class="row-content">
                                    <span class="row-num">01</span>
                                    <div>
                                        <h3>${t('projects.atlasTitle')}</h3>
                                        <p>${t('projects.atlasDesc')}</p>
                                    </div>
                                </div>
                                <div class="row-tech">
                                    <span>Algorithmic</span>
                                    <span>Infrastructure</span>
                                </div>
                                <div class="row-arrow">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </div>
                            </div>

                            <div class="project-row" data-target="img-2">
                                <div class="row-content">
                                    <span class="row-num">02</span>
                                    <div>
                                        <h3>${t('projects.luminaTitle')}</h3>
                                        <p>${t('projects.luminaDesc')}</p>
                                    </div>
                                </div>
                                <div class="row-tech">
                                    <span>Data Sci</span>
                                    <span>Automation</span>
                                </div>
                                <div class="row-arrow">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </div>
                            </div>

                            <div class="project-row" data-target="img-3">
                                <div class="row-content">
                                    <span class="row-num">03</span>
                                    <div>
                                        <h3>${t('projects.auraTitle')}</h3>
                                        <p>${t('projects.auraDesc')}</p>
                                    </div>
                                </div>
                                <div class="row-tech">
                                    <span>Engineering</span>
                                    <span>Templates</span>
                                </div>
                                <div class="row-arrow">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line><polyline points=\"12 5 19 12 12 19\"></polyline></svg>
                                </div>
                            </div>

                        </div>

                        <div class="projects-preview fade-up" style="transition-delay: 0.2s;">
                            <div class="preview-glass-frame">
                                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" id="img-1" class="preview-img active" alt="Atlas Engine" />
                                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2059&auto=format&fit=crop" id="img-2" class="preview-img" alt=\"Lumina Roasters\" />
                                <img src=\"https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2053&auto=format&fit=crop\" id=\"img-3\" class=\"preview-img\" alt=\"Aura Home\" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        `,
        mount: () => {
            const elements = document.querySelectorAll('#projects .fade-up');
            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            elements.forEach(el => observer.observe(el));

            const rows = document.querySelectorAll('.project-row');
            const images = document.querySelectorAll('.preview-img');

            rows.forEach(row => {
                row.addEventListener('mouseenter', () => {
                    rows.forEach(r => r.classList.remove('active'));
                    images.forEach(img => img.classList.remove('active'));
                    row.classList.add('active');
                    const targetId = row.getAttribute('data-target');
                    const targetImg = document.getElementById(targetId);
                    if (targetImg) targetImg.classList.add('active');
                });
            });

            return () => observer.disconnect();
        }
    };
}
