import "../styles/process.css";
import { t } from "../utils/i18n.js";

export default function renderProcess() {
    return {
        html: `
            <section class="protocol-section" id="process">

                <div class="proto-ambient-icon proto-icon-1">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                </div>
                <div class="proto-ambient-icon proto-icon-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>

                <div class="protocol-header fade-up">
                    <span class="neon-eyebrow">${t('process.status') || 'HOW IT WORKS'}</span>
                    <h2 class="protocol-title">${t('process.title') || 'Zero-Friction Process.'}</h2>
                    <p class="protocol-subtitle">${t('process.subtitle') || 'Getting expert help should not be complicated. Here is how we guarantee results.'}</p>
                </div>

                <div class="protocol-timeline" id="timeline-container">

                    <div class="fiber-line">
                        <div class="fiber-glow" id="fiber-glow"></div>
                    </div>

                    <div class="timeline-item left">
                        <div class="timeline-node"></div>
                        <div class="protocol-card">
                            <div class="protocol-glare"></div>

                            <span class="step-number" aria-hidden="true">01</span>

                            <div class="step-content">
                                <div class="step-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                </div>
                                <h3 class="step-title">${t('process.step1Title') || '1. Submit Prompt'}</h3>
                                <p class="step-desc">${t('process.step1Desc') || 'Drop your assignment rubric, broken code, or deadline.'}</p>
                            </div>
                        </div>
                    </div>

                    <div class="timeline-item right">
                        <div class="timeline-node"></div>
                        <div class="protocol-card">
                            <div class="protocol-glare"></div>

                            <span class="step-number" aria-hidden="true">02</span>

                            <div class="step-content">
                                <div class="step-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                                </div>
                                <h3 class="step-title">${t('process.step2Title') || '2. Get a Quote'}</h3>
                                <p class="step-desc">${t('process.step2Desc') || 'Receive a clear, upfront price and guaranteed delivery timeline.'}</p>
                            </div>
                        </div>
                    </div>

                    <div class="timeline-item left">
                        <div class="timeline-node"></div>
                        <div class="protocol-card">
                            <div class="protocol-glare"></div>

                            <span class="step-number" aria-hidden="true">03</span>

                            <div class="step-content">
                                <div class="step-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                </div>
                                <h3 class="step-title">${t('process.step3Title') || '3. Secure Delivery'}</h3>
                                <p class="step-desc">${t('process.step3Desc') || 'Get completely original work formatted perfectly for your professor.'}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        `,
        mount: () => {
            // 1. Initial Section Fade Up
            const elements = document.querySelectorAll('#process .fade-up');
            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) entry.target.classList.add('is-visible');
                    });
                }, { threshold: 0.1 });
                elements.forEach(el => observer.observe(el));
            }

            const container = document.getElementById('timeline-container');
            const glow = document.getElementById('fiber-glow');
            const nodes = document.querySelectorAll('.timeline-node');
            const cards = document.querySelectorAll('.protocol-card');

            if (!container || !glow) return;

            // --- OPTIMIZATION 1: Use IntersectionObserver for Timeline Nodes ---
            // This replaces the expensive getBoundingClientRect() loop inside the scroll event
            const nodeObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    } else {
                        entry.target.classList.remove('active');
                    }
                });
            }, {
                // Triggers exactly when the element crosses the middle 40% of the viewport
                rootMargin: "-40% 0px -40% 0px"
            });

            nodes.forEach(node => nodeObserver.observe(node));

            // --- OPTIMIZATION 2: Throttle the Glow Line Scroll with requestAnimationFrame ---
            let ticking = false;
            const handleScroll = () => {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        const containerRect = container.getBoundingClientRect();
                        const containerTop = containerRect.top;
                        const containerHeight = containerRect.height;
                        const windowHeight = window.innerHeight;

                        let scrollProgress = (windowHeight / 2 - containerTop) / containerHeight;
                        scrollProgress = Math.max(0, Math.min(1, scrollProgress));
                        glow.style.height = `${scrollProgress * 100}%`;

                        ticking = false;
                    });
                    ticking = true;
                }
            };

            window.addEventListener('scroll', handleScroll, { passive: true });
            handleScroll(); // Trigger once on load

            // --- OPTIMIZATION 3: Block 3D Mouse Calculations on Touch Devices ---
            if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
                cards.forEach(card => {
                    const glare = card.querySelector('.protocol-glare');
                    card.addEventListener('mousemove', (e) => {
                        // Also wrap mouse calculations in rAF for desktop smoothness
                        window.requestAnimationFrame(() => {
                            const rect = card.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;
                            const cx = rect.width / 2;
                            const cy = rect.height / 2;

                            const rotateX = ((y - cy) / cy) * -10;
                            const rotateY = ((x - cx) / cx) * 10;

                            card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

                            if (glare) {
                                glare.style.setProperty('--mouse-x', `${x}px`);
                                glare.style.setProperty('--mouse-y', `${y}px`);
                            }
                        });
                    });

                    card.addEventListener('mouseleave', () => {
                        card.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg)`;
                    });
                });
            }

            return () => {
                window.removeEventListener('scroll', handleScroll);
                if (nodeObserver) nodeObserver.disconnect();
            };
        }
    };
}
