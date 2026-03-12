import "../styles/footer.css";

export default function renderFooter() {
    return {
        html: `
            <footer class="qx-footer" id="footer">
                <div class="qx-footer-glow-line"></div>

                <div class="qx-container">
                    <div class="qx-footer-grid">

                        <div class="qx-footer-brand">
                            <h3 class="qx-footer-logo">Qodix<span class="qx-accent-dot">.</span></h3>
                            <p class="qx-footer-desc">Elite academic infrastructure and technical execution. Designed for absolute precision and 100% confidentiality.</p>
                        </div>

                        <div class="qx-footer-links-group">
                            <h4 class="qx-footer-heading">System Navigation</h4>
                            <div class="qx-footer-links">
                                <a href="#hero" class="qx-footer-link">Overview</a>
                                <a href="#about" class="qx-footer-link">The Agency</a>
                                <a href="#services" class="qx-footer-link">Disciplines</a>
                                <a href="#process" class="qx-footer-link">How it Works</a>
                            </div>
                        </div>

                        <div class="qx-footer-links-group">
                            <h4 class="qx-footer-heading">Compliance</h4>
                            <div class="qx-footer-links">
                                <a href="#" class="qx-footer-link">Privacy Protocol</a>
                                <a href="#" class="qx-footer-link">Terms of Service</a>
                                <a href="#" class="qx-footer-link">Confidentiality Guarantee</a>
                                <a href="#" class="qx-footer-link">Plagiarism Policy</a>
                            </div>
                        </div>

                    </div>

                    <div class="qx-footer-bottom">
                        <div class="qx-copyright">
                            &copy; ${new Date().getFullYear()} Qodix Academic. Engineered by Salah Attar.
                        </div>

                        <div class="qx-footer-socials">
                            <a href="https://wa.me/YOUR_PHONE" target="_blank" class="qx-social-mini whatsapp" aria-label="WhatsApp">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                            </a>
                            <a href="https://t.me/YOUR_TELEGRAM" target="_blank" class="qx-social-mini telegram" aria-label="Telegram">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </a>
                            <a href="https://instagram.com/YOUR_HANDLE" target="_blank" class="qx-social-mini instagram" aria-label="Instagram">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        `,
        mount: () => {
            return () => { };
        }
    };
}
