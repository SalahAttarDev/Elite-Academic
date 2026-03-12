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
                            </div>
                        </div>

                        <div class="qx-form-wrapper fade-up" style="transition-delay: 0.1s;">
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

                                <div class="qx-input-block">
                                    <label>Deadline</label>
                                    <input type="text" placeholder="e.g., Tomorrow at 10 AM" required />
                                </div>

                                <div class="qx-input-block">
                                    <label>Task Details</label>
                                    <textarea rows="4" placeholder="Explain what you need help with..." required></textarea>
                                </div>

                                <div class="qx-input-block">
                                    <label>Project Files & Rubric (PDF, ZIP)</label>
                                    <div class="qx-file-dropzone" id="file-dropzone">
                                        <input type="file" id="file-input" class="hidden-file-input" multiple />
                                        <div class="dropzone-content">
                                            <svg class="drop-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                                            <span class="drop-text" id="drop-text">Drag files here or click to browse</span>
                                        </div>
                                    </div>
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
            // Fade Up Logic
            const elements = document.querySelectorAll('#contact .fade-up');
            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) entry.target.classList.add('is-visible');
                    });
                }, { threshold: 0.1 });
                elements.forEach(el => observer.observe(el));
            }

            // File Drag & Drop Logic
            const dropzone = document.getElementById('file-dropzone');
            const fileInput = document.getElementById('file-input');
            const dropText = document.getElementById('drop-text');

            if (dropzone && fileInput) {
                dropzone.addEventListener('click', () => fileInput.click());

                dropzone.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    dropzone.classList.add('drag-active');
                });

                dropzone.addEventListener('dragleave', () => {
                    dropzone.classList.remove('drag-active');
                });

                dropzone.addEventListener('drop', (e) => {
                    e.preventDefault();
                    dropzone.classList.remove('drag-active');
                    if (e.dataTransfer.files.length) {
                        fileInput.files = e.dataTransfer.files;
                        updateFileText(e.dataTransfer.files);
                    }
                });

                fileInput.addEventListener('change', (e) => {
                    if (e.target.files.length) {
                        updateFileText(e.target.files);
                    }
                });

                function updateFileText(files) {
                    if (files.length === 1) {
                        dropText.textContent = `Attached: ${files[0].name}`;
                        dropzone.style.borderColor = '#8b5cf6';
                        dropzone.style.background = 'rgba(139, 92, 246, 0.05)';
                    } else if (files.length > 1) {
                        dropText.textContent = `Attached: ${files.length} files`;
                        dropzone.style.borderColor = '#8b5cf6';
                        dropzone.style.background = 'rgba(139, 92, 246, 0.05)';
                    }
                }
            }

            return () => { };
        }
    };
}
