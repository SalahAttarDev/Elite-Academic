import "../styles/faq.css";
import { t } from "../utils/i18n.js";

export default function renderFAQ() {
    return {
        html: `
            <section class="qx-faq-section" id="faq">
                <div class="qx-ambient-glow faq-glow"></div>

                <div class="qx-container">

                    <div class="faq-header fade-up">
                        <span class="neon-eyebrow">${t('faq.status') || 'CLIENT INQUIRIES'}</span>
                        <h2 class="faq-title">${t('faq.title') || 'Frequently Asked Questions.'}</h2>
                        <p class="faq-subtitle">${t('faq.subtitle')}</p>
                    </div>

                    <div class="faq-accordion fade-up" style="transition-delay: 0.1s;">

                        <div class="faq-item">
                            <button class="faq-question">
                                <span>${t('faq.q1')}</span>
                                <div class="faq-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                </div>
                            </button>
                            <div class="faq-answer-wrapper">
                                <div class="faq-answer-inner">
                                    <p>${t('faq.a1')}</p>
                                </div>
                            </div>
                        </div>

                        <div class="faq-item">
                            <button class="faq-question">
                                <span>${t('faq.q2')}</span>
                                <div class="faq-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                </div>
                            </button>
                            <div class="faq-answer-wrapper">
                                <div class="faq-answer-inner">
                                    <p>${t('faq.a2')}</p>
                                </div>
                            </div>
                        </div>

                        <div class="faq-item">
                            <button class="faq-question">
                                <span>${t('faq.q3')}</span>
                                <div class="faq-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                </div>
                            </button>
                            <div class="faq-answer-wrapper">
                                <div class="faq-answer-inner">
                                    <p>${t('faq.a3')}</p>
                                </div>
                            </div>
                        </div>

                        <div class="faq-item">
                            <button class="faq-question">
                                <span>${t('faq.q4')}</span>
                                <div class="faq-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                </div>
                            </button>
                            <div class="faq-answer-wrapper">
                                <div class="faq-answer-inner">
                                    <p>${t('faq.a4')}</p>
                                </div>
                            </div>
                        </div>

                        <div class="faq-item">
                            <button class="faq-question">
                                <span>${t('faq.q5')}</span>
                                <div class="faq-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                </div>
                            </button>
                            <div class="faq-answer-wrapper">
                                <div class="faq-answer-inner">
                                    <p>${t('faq.a5')}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        `,
        mount: () => {
            // 1. Fade Up Observer
            const elements = document.querySelectorAll('#faq .fade-up');
            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) entry.target.classList.add('is-visible');
                    });
                }, { threshold: 0.1 });
                elements.forEach(el => observer.observe(el));
            }

            // 2. Accordion Logic
            const faqItems = document.querySelectorAll('.faq-item');

            faqItems.forEach(item => {
                const button = item.querySelector('.faq-question');
                button.addEventListener('click', () => {
                    const isActive = item.classList.contains('active');

                    // Close all other items (Optional: remove this if you want multiple open at once)
                    faqItems.forEach(otherItem => {
                        otherItem.classList.remove('active');
                    });

                    // Toggle current item
                    if (!isActive) {
                        item.classList.add('active');
                    }
                });
            });

            return () => { };
        }
    };
}
