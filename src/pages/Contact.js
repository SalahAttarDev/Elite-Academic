import "../styles/contact.css";
import { t } from "../utils/i18n.js";

export default function renderContact() {
    return {
        html: `
            <section class="qx-contact-section" id="contact">
                <div class="qx-ambient-glow"></div>

                <div class="qx-container">
                    <div class="qx-contact-grid">

                        <div class="qx-contact-info fade-up">
                            <div class="qx-status-badge">
                                <span class="qx-pulse-dot"></span>
                                ${t('contact.status') || 'AVAILABLE FOR NEW PROJECTS'}
                            </div>

                            <h2 class="qx-contact-title">${t('contact.title') || "Let's solve this."}</h2>
                            <p class="qx-contact-subtitle">${t('contact.subtitle') || "Need help fast? Reach out directly via WhatsApp, Telegram, Instagram, or submit your project details below."}</p>

                            <div class="qx-social-stack">
                                <a href="https://wa.me/YOUR_PHONE" target="_blank" class="qx-social-row whatsapp">
                                    <div class="qx-social-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                    </div>
                                    <div class="qx-social-text">
                                        <span class="qx-social-name">WhatsApp</span>
                                        <span class="qx-social-desc">Fastest response time</span>
                                    </div>
                                    <svg class="qx-social-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                </a>

                                <a href="https://t.me/YOUR_TELEGRAM" target="_blank" class="qx-social-row telegram">
                                    <div class="qx-social-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                    </div>
                                    <div class="qx-social-text">
                                        <span class="qx-social-name">Telegram</span>
                                        <span class="qx-social-desc">Direct messaging</span>
                                    </div>
                                    <svg class="qx-social-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                </a>

                                <a href="https://instagram.com/YOUR_HANDLE" target="_blank" class="qx-social-row instagram">
                                    <div class="qx-social-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                    </div>
                                    <div class="qx-social-text">
                                        <span class="qx-social-name">Instagram</span>
                                        <span class="qx-social-desc">Send voice notes & images</span>
                                    </div>
                                    <svg class="qx-social-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                </a>
                            </div>
                        </div>

                        <div class="qx-form-wrapper fade-up" style="transition-delay: 0.1s;">
                            <div class="qx-form-spotlight"></div>

                            <form id="qx-contact-form" class="qx-form-inner">
                                <div class="qx-input-group">
                                    <div class="qx-input-block">
                                        <label>Name / Nickname</label>
                                        <input type="text" placeholder="How should I call you?" required />
                                    </div>
                                    <div class="qx-input-block">
                                        <label>Course / Subject</label>
                                        <input type="text" placeholder="e.g. Intro to Java" required />
                                    </div>
                                </div>

                                <div class="qx-input-group">
                                    <div class="qx-input-block">
                                        <label>Region</label>
                                        <select required>
                                            <option value="" disabled selected>Select Region</option>
                                            <option value="Middle East">Middle East & Arab Region</option>
                                            <option value="Europe">Europe / UK</option>
                                            <option value="North America">North America</option>
                                            <option value="Asia">Asia / Pacific</option>
                                        </select>
                                    </div>
                                    <div class="qx-input-block">
                                        <label>Est. Budget (USD)</label>
                                        <select required>
                                            <option value="" disabled selected>Select Budget</option>
                                            <option value="Under $50">Under $50 (Minor fixes)</option>
                                            <option value="$50 - $100">$50 - $100 (Standard task)</option>
                                            <option value="$100 - $300">$100 - $300 (Projects)</option>
                                            <option value="$300+">$300+ (Full reports/apps)</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="qx-input-block">
                                    <label>Deadline</label>
                                    <input type="text" placeholder="e.g., Tomorrow at 10 AM" required />
                                </div>

                                <div class="qx-input-block">
                                    <label>Task Details</label>
                                    <textarea rows="4" placeholder="Paste your rubric, requirements, or explain what you need help with..." required></textarea>
                                </div>

                                <button type="submit" class="qx-submit-btn">
                                    <span class="btn-text">${t('contact.btnSubmit') || 'Submit Details'}</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        `,
        mount: () => {
            // General Fade Up Logic
            const elements = document.querySelectorAll('#contact .fade-up');
            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) entry.target.classList.add('is-visible');
                    });
                }, { threshold: 0.1 });
                elements.forEach(el => observer.observe(el));
            }

            // Smooth Spotlight Logic (No layout breaking 3D tilts)
            const formWrapper = document.querySelector('.qx-form-wrapper');
            const spotlight = document.querySelector('.qx-form-spotlight');

            if (formWrapper && spotlight) {
                formWrapper.addEventListener('mousemove', (e) => {
                    const rect = formWrapper.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    spotlight.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(139, 92, 246, 0.08), transparent 40%)`;
                });

                formWrapper.addEventListener('mouseleave', () => {
                    spotlight.style.background = `none`;
                });
            }

            return () => { };
        }
    };
}
