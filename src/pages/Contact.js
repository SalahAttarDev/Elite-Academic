import "../styles/contact.css";
import { t } from "../utils/i18n.js";

export default function renderContact() {
    return {
        html: `
            <section class="contact-section" id="contact">
                <div class="contact-container">

                    <div class="contact-grid">

                        <div class="contact-info fade-up">
                            <div class="system-status">
                                <span class="status-dot pulsing"></span>
                                <span class="status-text">${t('contact.status')}</span>
                            </div>
                            <h2 class="contact-title">${t('contact.title')}</h2>
                            <p class="contact-subtitle">${t('contact.subtitle')}</p>

                            <div class="research-specs">
                                <div class="spec-item">
                                    <span class="spec-code">REQ.01</span>
                                    <div class="spec-data">
                                        <label>${t('contact.labelSpecs')}</label>
                                        <span>${t('contact.valSpecs')}</span>
                                    </div>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-code">REQ.02</span>
                                    <div class="spec-data">
                                        <label>${t('contact.labelStandard')}</label>
                                        <span>${t('contact.valStandard')}</span>
                                    </div>
                                </div>
                                <div class="spec-item">
                                    <span class="spec-code">REQ.03</span>
                                    <div class="spec-data">
                                        <label>${t('contact.labelReach')}</label>
                                        <span>${t('contact.valReach')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="contact-form-wrapper fade-up" style="transition-delay: 0.1s;">
                            <form class="academic-form" id="inquiry-form">
                                <div class="form-header">
                                    <span class="form-meta">${t('contact.formMeta')}</span>
                                </div>

                                <div class="form-row">
                                    <div class="input-group">
                                        <label>${t('contact.labelName')}</label>
                                        <input type="text" id="name" placeholder="${t('contact.placeholderName')}" required />
                                    </div>
                                    <div class="input-group">
                                        <label>${t('contact.labelEmail')}</label>
                                        <input type="email" id="email" placeholder="email@uni.edu" required />
                                    </div>
                                </div>

                                <div class="input-group">
                                    <label>${t('contact.labelDomain')}</label>
                                    <select id="domain">
                                        <option value="cs">${t('disciplines.software')}</option>
                                        <option value="math">${t('contact.optionMath')}</option>
                                        <option value="physics">${t('disciplines.physics')}</option>
                                        <option value="report">${t('disciplines.reports')}</option>
                                    </select>
                                </div>

                                <div class="input-group">
                                    <label>${t('contact.labelMessage')}</label>
                                    <textarea id="message" rows="5" placeholder="${t('contact.placeholderMessage')}"></textarea>
                                </div>

                                <button type="submit" class="btn-prime">
                                    <span>${t('contact.btnSubmit')}</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                </button>
                            </form>
                        </div>
                    </div>

                    <footer class="minimal-footer fade-up">
                        <div class="footer-brand">${t('nav.brand')}</div>
                        <div class="footer-links">
                            <a href="#">${t('contact.footerSpecs')}</a>
                            <a href="#">${t('contact.footerPrivacy')}</a>
                            <a href="#">${t('nav.projects')}</a>
                        </div>
                    </footer>
                </div>
            </section>
        `,
        mount: () => {
            const elements = document.querySelectorAll('#contact .fade-up');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            }, { threshold: 0.1 });

            elements.forEach(el => observer.observe(el));
            return () => observer.disconnect();
        }
    };
}
