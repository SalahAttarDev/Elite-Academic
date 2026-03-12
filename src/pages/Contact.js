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
                                        <label>${t('contact.form.name') || 'Name / Nickname'}</label>
                                        <input type="text" id="qx-in-name" placeholder="${t('contact.form.namePlace') || 'How should I call you?'}" required />
                                    </div>
                                    <div class="qx-input-block">
                                        <label>${t('contact.form.contact') || 'Email / Phone'}</label>
                                        <input type="text" id="qx-in-contact" placeholder="${t('contact.form.contactPlace') || 'How to reach you'}" required />
                                    </div>
                                </div>

                                <div class="qx-input-group">
                                    <div class="qx-input-block">
                                        <label>${t('contact.form.subject') || 'Subject'}</label>
                                        <input type="text" id="qx-in-subject" placeholder="${t('contact.form.subjectPlace') || 'e.g. Java'}" required />
                                    </div>
                                    <div class="qx-input-block">
                                        <label>${t('contact.form.deadline') || 'Deadline'}</label>
                                        <input type="text" id="qx-in-deadline" placeholder="${t('contact.form.deadlinePlace') || 'e.g. Tomorrow'}" required />
                                    </div>
                                </div>

                                <div class="qx-input-block">
                                    <label>${t('contact.form.country') || 'Country'}</label>
                                    <input type="text" id="qx-in-country" placeholder="${t('contact.form.countryPlace') || 'e.g. KSA, UAE, UK...'}" required />
                                </div>

                                <div class="qx-input-block">
                                    <label>${t('contact.form.budget') || 'Estimated Budget'}</label>
                                    <div class="qx-budget-row">
                                        <label class="qx-budget-option">
                                            <input type="radio" name="budget" value="< $10" required>
                                            <span class="qx-budget-pill">&lt; $10</span>
                                        </label>
                                        <label class="qx-budget-option">
                                            <input type="radio" name="budget" value="$10 - $25">
                                            <span class="qx-budget-pill">$10 - $25</span>
                                        </label>
                                        <label class="qx-budget-option">
                                            <input type="radio" name="budget" value="$25 - $50">
                                            <span class="qx-budget-pill">$25 - $50</span>
                                        </label>
                                        <label class="qx-budget-option">
                                            <input type="radio" name="budget" value="$50 - $100">
                                            <span class="qx-budget-pill">$50 - $100</span>
                                        </label>
                                        <label class="qx-budget-option">
                                            <input type="radio" name="budget" value="$100+">
                                            <span class="qx-budget-pill">$100+</span>
                                        </label>
                                    </div>
                                </div>

                                <div class="qx-input-block">
                                    <label>${t('contact.form.details') || 'Task Details'}</label>
                                    <textarea id="qx-in-details" rows="4" placeholder="${t('contact.form.detailsPlace') || 'Explain what you need help with...'}" required></textarea>
                                </div>

                                <div class="qx-input-block">
                                    <label>${t('contact.form.files') || 'Project Files (PDF, ZIP)'}</label>
                                    <div class="qx-file-dropzone" id="file-dropzone">
                                        <input type="file" id="file-input" class="hidden-file-input" multiple />
                                        <div class="dropzone-content">
                                            <svg class="drop-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                                            <span class="drop-text" id="drop-text">${t('contact.form.dropzone') || 'Drag files here'}</span>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" class="qx-submit-btn" id="qx-submit-btn">
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
            // Intersection Observer for animations
            const elements = document.querySelectorAll('#contact .fade-up');
            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) entry.target.classList.add('is-visible');
                    });
                }, { threshold: 0.1 });
                elements.forEach(el => observer.observe(el));
            }

            // Drag and Drop Logic
            const dropzone = document.getElementById('file-dropzone');
            const fileInput = document.getElementById('file-input');
            const dropText = document.getElementById('drop-text');

            if (dropzone && fileInput) {
                dropzone.addEventListener('click', () => fileInput.click());
                dropzone.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    dropzone.classList.add('drag-active');
                });
                dropzone.addEventListener('dragleave', () => dropzone.classList.remove('drag-active'));
                dropzone.addEventListener('drop', (e) => {
                    e.preventDefault();
                    dropzone.classList.remove('drag-active');
                    if (e.dataTransfer.files.length) {
                        fileInput.files = e.dataTransfer.files;
                        updateFileText(e.dataTransfer.files);
                    }
                });
                fileInput.addEventListener('change', (e) => {
                    if (e.target.files.length) updateFileText(e.target.files);
                });

                function updateFileText(files) {
                    if (files.length === 1) {
                        dropText.textContent = `Attached: ${files[0].name}`;
                    } else if (files.length > 1) {
                        dropText.textContent = `Attached: ${files.length} files`;
                    }
                    dropzone.style.borderColor = '#8b5cf6';
                    dropzone.style.background = 'rgba(139, 92, 246, 0.05)';
                }
            }

            // TELEGRAM FORM SUBMISSION LOGIC
            const form = document.getElementById('qx-contact-form');
            const submitBtn = document.getElementById('qx-submit-btn');

            if (form) {
                form.addEventListener('submit', async (e) => {
                    e.preventDefault(); // Prevent page reload

                    // Your Telegram Credentials
                    const BOT_TOKEN = '8176883089:AAHVd7tc6DCrwCGWU-hcbCj2yIb5KBwm1So';
                    const CHAT_ID = '8348513865';

                    // Change Button State to Loading
                    const btnText = submitBtn.querySelector('.btn-text');
                    const originalBtnText = btnText.innerText;
                    submitBtn.disabled = true;
                    submitBtn.style.opacity = "0.7";
                    btnText.innerText = "SENDING...";

                    // 1. Gather all form data
                    const name = document.getElementById('qx-in-name').value;
                    const contactInfo = document.getElementById('qx-in-contact').value;
                    const subject = document.getElementById('qx-in-subject').value;
                    const deadline = document.getElementById('qx-in-deadline').value;
                    const country = document.getElementById('qx-in-country').value;
                    const details = document.getElementById('qx-in-details').value;

                    // Get selected budget
                    const budgetRadio = document.querySelector('input[name="budget"]:checked');
                    const budget = budgetRadio ? budgetRadio.value : "Not specified";

                    // The files to upload
                    const files = fileInput.files;

                    // 2. Format the Text Message
                    const messageText = `🚨 *NEW ACADEMIC REQUEST*\n\n👤 *Name:* ${name}\n📞 *Contact:* ${contactInfo}\n🌍 *Country:* ${country}\n📚 *Subject:* ${subject}\n⏰ *Deadline:* ${deadline}\n💰 *Budget:* ${budget}\n\n📝 *Details:*\n${details}`;

                    try {
                        // 3. Send Text Message first (using sendMessage)
                        const textResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                chat_id: CHAT_ID,
                                text: messageText,
                                parse_mode: "Markdown"
                            })
                        });

                        if (!textResponse.ok) throw new Error("Failed to send text data");

                        // 4. Send Files one by one (if any exist)
                        if (files.length > 0) {
                            btnText.innerText = "UPLOADING FILES...";

                            for (let i = 0; i < files.length; i++) {
                                const formData = new FormData();
                                formData.append('chat_id', CHAT_ID);
                                formData.append('document', files[i]);

                                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`, {
                                    method: 'POST',
                                    body: formData // No headers required for FormData, browser handles it
                                });
                            }
                        }

                        // 5. Success State
                        btnText.innerText = "REQUEST SENT!";
                        submitBtn.style.background = "#25D366"; // Success Green
                        submitBtn.style.color = "#ffffff";
                        submitBtn.style.borderColor = "#25D366";

                        // Reset Form and Dropzone
                        form.reset();
                        dropText.textContent = t('contact.form.dropzone') || 'Drag files here';
                        dropzone.style.borderColor = '';
                        dropzone.style.background = '';

                    } catch (error) {
                        console.error("Telegram Error:", error);
                        btnText.innerText = "ERROR - TRY WHATSAPP";
                        submitBtn.style.background = "#ef4444"; // Error Red
                    }

                    // Reset button after 4 seconds
                    setTimeout(() => {
                        submitBtn.disabled = false;
                        submitBtn.style.opacity = "1";
                        submitBtn.style.background = "";
                        submitBtn.style.color = "";
                        submitBtn.style.borderColor = "";
                        btnText.innerText = originalBtnText;
                    }, 4000);
                });
            }

            return () => { };
        }
    };
}
