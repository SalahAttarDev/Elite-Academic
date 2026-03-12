import "../styles/about.css";
import { t } from "../utils/i18n.js";

export default function renderAbout() {
    return {
        html: `
            <section class="about-editorial" id="about">
                <div class="editorial-container">
                    <div class="editorial-grid">

                        <div class="editorial-image-wrapper fade-up">
                            <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop" alt="Student Workspace and Notes" class="editorial-img" />
                        </div>

                        <div class="editorial-content fade-up" style="transition-delay: 0.1s;">
                            <h2 class="editorial-title">${t('about.title')}</h2>

                            <div class="editorial-text">
                                <p>${t('about.lead')}</p>
                                <p>${t('about.body1')}</p>
                                <p>${t('about.body2')}</p>
                            </div>

                            <div class="editorial-signature fade-up" style="transition-delay: 0.3s;">
                                <svg class="autograph-svg" viewBox="160 0 130 170" preserveAspectRatio="xMidYMid meet">
                                    <g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                        <path class="signature-path" pathLength="1" d="M 170.000,70.750 C 174.804,68.049 175.000,68.750 180.000,66.750 C 188.953,64.905 188.804,64.549 198.000,63.750 C 212.474,61.912 212.453,61.905 227.000,60.750 C 237.500,59.750 237.474,59.912 248.000,59.750 C 258.538,59.945 258.500,59.750 269.000,60.750 C 274.000,60.493 271.538,60.945 274.000,61.750 C 272.257,65.664 274.000,63.493 269.000,66.750 C 256.557,69.577 257.257,70.664 244.000,71.750 C 230.453,73.470 230.557,74.077 217.000,75.750 C 200.795,77.959 200.953,78.470 185.000,81.750 C 173.838,83.192 175.795,83.959 167.000,87.750 C 164.709,92.500 164.838,89.192 167.000,93.750 C 177.902,97.189 175.709,98.500 189.000,99.750 C 197.463,101.485 197.402,101.689 206.000,102.750 C 224.589,104.732 224.463,105.485 243.000,107.750 C 255.172,109.637 255.089,109.732 267.000,112.750 C 278.899,114.148 274.172,114.637 281.000,117.750 C 278.322,122.786 282.399,120.148 274.000,124.750 C 266.515,126.328 267.322,127.786 259.000,127.750 C 247.939,129.487 248.015,129.828 237.000,131.750 C 233.136,132.061 233.439,132.487 230.000,133.750 C 223.449,135.995 226.636,135.561 224.000,138.750 C 228.004,144.341 224.949,143.495 233.000,148.750 C 237.739,150.489 236.504,151.841 241.000,153.750 C 247.299,160.658 244.739,157.489 247.000,162.750 C 242.389,163.139 246.799,164.158 240.000,160.750 C 236.128,155.601 235.889,156.639 234.000,149.750 C 230.369,138.886 230.128,139.101 228.000,127.750 C 225.619,115.301 225.369,115.386 224.000,102.750 C 221.519,84.286 221.619,84.301 220.000,65.750 C 219.734,53.736 219.019,53.786 219.000,41.750 C 217.987,29.251 218.234,29.236 217.000,16.750 C 215.421,4.908 216.487,10.251 216.000,3.750 C 218.076,8.130 216.421,2.908 219.000,12.750" />
                                        <path class="signature-path" pathLength="1" d="M 190.000,129.750 C 192.575,128.367 192.500,128.250 195.000,126.750 C 203.018,121.276 203.075,121.367 211.000,115.750 C 222.586,107.871 222.518,107.776 234.000,99.750" />
                                    </g>
                                </svg>
                                <span class="signature-name">${t('about.signature')}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        `,
        mount: () => {
            const aboutSection = document.getElementById('about');
            if (!aboutSection) return;
            const elements = aboutSection.querySelectorAll('.fade-up');
            let observer;

            if (!('IntersectionObserver' in window)) {
                elements.forEach(el => el.classList.add('is-visible'));
            } else {
                observer = new IntersectionObserver((entries, obs) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setTimeout(() => {
                                entry.target.classList.add('is-visible');
                            }, 50);
                            obs.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.15 });

                elements.forEach(el => observer.observe(el));
            }

            return () => {
                if (observer) observer.disconnect();
            };
        }
    };
}
