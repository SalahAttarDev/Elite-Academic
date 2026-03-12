import "../styles/chat-widget.css";
import { t } from "../utils/i18n.js";

export default function renderChatWidget() {
    return {
        html: `
            <div class="qx-chat-widget" id="qx-chat-widget">

                <div class="qx-chat-panel" id="qx-chat-panel">
                    <div class="qx-chat-header">
                        <div class="qx-chat-status">
                            <span class="qx-pulse-dot"></span>
                            ${t('widget.status') || 'Online'}
                        </div>
                        <button class="qx-chat-close" id="qx-chat-close" aria-label="Close Chat">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>

                    <div class="qx-chat-body">
                        <h4 class="qx-chat-title">${t('widget.title') || 'Emergency Comms'}</h4>
                        <p class="qx-chat-subtitle">${t('widget.subtitle') || 'Deadline approaching? Ping us directly for an immediate response.'}</p>

                        <a href="https://wa.me/60173446329?text=Hi%20Qodix,%20I%20have%20an%20urgent%20assignment%20deadline%20and%20need%20help." target="_blank" class="qx-chat-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                            ${t('widget.btnText') || 'Chat on WhatsApp'}
                        </a>
                    </div>
                </div>

                <button class="qx-chat-toggle" id="qx-chat-toggle" aria-label="Open Chat">
                    <svg class="icon-chat" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </button>

            </div>
        `,
        mount: () => {
            const widget = document.getElementById('qx-chat-widget');
            const toggleBtn = document.getElementById('qx-chat-toggle');
            const closeBtn = document.getElementById('qx-chat-close');

            if (widget && toggleBtn && closeBtn) {
                // Toggle open/close classes
                const toggleChat = () => {
                    widget.classList.toggle('is-open');
                };

                toggleBtn.addEventListener('click', toggleChat);
                closeBtn.addEventListener('click', toggleChat);

                // Optional: Auto-pop open after 15 seconds to grab attention
                setTimeout(() => {
                    if (!widget.classList.contains('is-open')) {
                        widget.classList.add('is-open');
                    }
                }, 15000);
            }

            return () => { };
        }
    };
}
