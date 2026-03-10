import "../styles/capabilities.css";
import { t } from "../utils/i18n.js";

export default function renderCapabilities() {
    return {
        html: `
            <section class="tech-ledger-section" id="capabilities">
                <div class="ledger-container">

                    <div class="ledger-left">
                        <div class="sticky-header fade-up">
                            <div class="system-status">
                                <span class="status-dot pulsing"></span>
                                <span class="status-text">${t('disciplines.status')}</span>
                            </div>
                            <h2 class="ledger-title">${t('disciplines.title')}</h2>
                            <p class="ledger-subtitle">${t('disciplines.subtitle')}</p>
                        </div>
                    </div>

                    <div class="ledger-right" id="cards-container">

                        <div class="system-card" data-index="0">
                            <div class="card-inner">
                                <div class="card-header-flex">
                                    <span class="mono-tag">SYS.01 // FRONTEND</span>
                                    <div class="live-icon-container">
                                        <div class="ring ring-1"></div>
                                        <div class="ring ring-2"></div>
                                        <div class="core-dot"></div>
                                    </div>
                                </div>
                                <div class="card-content">
                                    <h3>${t('disciplines.software')}</h3>
                                    <p>${t('disciplines.softwareDesc')}</p>
                                    <div class="tech-stack">
                                        <span class="tech-badge">Vanilla JS</span>
                                        <span class="tech-badge">React.js</span>
                                        <span class="tech-badge">Node.js</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="system-card" data-index="1">
                            <div class="card-inner">
                                <div class="card-header-flex">
                                    <span class="mono-tag">SYS.02 // COMMUNICATION</span>
                                    <div class="live-icon-container scanner-icon">
                                        <div class="scanner-line"></div>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    </div>
                                </div>
                                <div class="card-content">
                                    <h3>${t('disciplines.comm')}</h3>
                                    <p>${t('disciplines.commDesc')}</p>
                                    <div class="tech-stack">
                                        <span class="tech-badge">LaTeX</span>
                                        <span class="tech-badge">IEEE Std.</span>
                                        <span class="tech-badge">Markdown</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="system-card" data-index="2">
                            <div class="card-inner">
                                <div class="card-header-flex">
                                    <span class="mono-tag">SYS.03 // AUTOMATION</span>
                                    <div class="live-icon-container pulse-icon">
                                        <div class="node node-1"></div>
                                        <div class="node node-2"></div>
                                        <div class="node node-3"></div>
                                        <div class="connection-line"></div>
                                    </div>
                                </div>
                                <div class="card-content">
                                    <h3>${t('disciplines.auto')}</h3>
                                    <p>${t('disciplines.autoDesc')}</p>
                                    <div class="tech-stack">
                                        <span class="tech-badge">Python</span>
                                        <span class="tech-badge">MATLAB</span>
                                        <span class="tech-badge">R-Project</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        `,
        mount: () => {
            const container = document.getElementById('cards-container');
            if (!container) return;
            const cards = container.querySelectorAll('.system-card');

            const handleMouseMove = (e) => {
                cards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                });
            };

            const handleCardMove = (e, card, inner) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -4;
                const rotateY = ((x - centerX) / centerX) * 4;
                inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            };

            container.addEventListener('mousemove', handleMouseMove);

            cards.forEach(card => {
                const inner = card.querySelector('.card-inner');
                card.addEventListener('mousemove', (e) => handleCardMove(e, card, inner));
                card.addEventListener('mouseleave', () => {
                    inner.style.transform = `rotateX(0deg) rotateY(0deg)`;
                });
            });

            return () => {
                container.removeEventListener('mousemove', handleMouseMove);
            };
        }
    };
}
