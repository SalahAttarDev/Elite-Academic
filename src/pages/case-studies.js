import "../styles/case-studies.css";
import { t } from "../utils/i18n.js";

export default function renderCaseStudies() {
    return {
        html: `
            <section class="qx-cases-section" id="projects">
                <div class="qx-ambient-glow cases-glow"></div>

                <div class="qx-container">
                    <div class="section-header-centered fade-up">
                        <span class="neon-eyebrow">${t('cases.status')}</span>
                        <h2 class="massive-headline">${t('cases.title')}</h2>
                        <p class="sub-headline">${t('cases.subtitle')}</p>
                    </div>

                    <div class="qx-cases-stack fade-up" style="transition-delay: 0.1s;">

                        <div class="qx-case-bento">
                            <div class="case-info">
                                <span class="qx-case-tag">${t('cases.case1Tags')}</span>
                                <h3 class="qx-case-title">${t('cases.case1Title')}</h3>
                                <div class="case-text-block">
                                    <p class="case-text crisis"><strong>[ CRITICAL ]</strong> ${t('cases.case1Problem')}</p>
                                    <p class="case-text execution"><strong>[ RESOLVED ]</strong> ${t('cases.case1Solution')}</p>
                                </div>
                                <div class="qx-case-result">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    ${t('cases.case1Result')}
                                </div>
                            </div>

                            <div class="case-ide-split">
                                <div class="ide-top">
                                    <div class="ide-header">
                                        <div class="ide-mac-btns"><span></span><span></span><span></span></div>
                                        <div class="ide-tab">Matcher.java</div>
                                    </div>
                                    <div class="ide-body">
                                        <div class="ide-code">
                                            <pre><code>${t('cases.case1Code').replace(/public|void|new/g, match => `<span class="c-keyword">${match}</span>`).replace(/processOrder|computeIfAbsent|add|runAsync|resolve/g, match => `<span class="c-method">${match}</span>`).replace(/\/\/.*$/gm, match => `<span class="c-comment">${match}</span>`)}</code></pre>
                                        </div>
                                    </div>
                                </div>
                                <div class="ide-bottom-terminal">
                                    <div class="terminal-header-mini">TERMINAL: Local Execution</div>
                                    <div class="terminal-body-mini">
                                        <pre><code>${t('cases.case1Terminal').replace(/\[SUCCESS\]/g, match => `<span class="c-term-success">${match}</span>`).replace(/\[INFO\]/g, match => `<span class="c-term-info">${match}</span>`).replace(/>/g, match => `<span class="c-term-prompt">${match}</span>`)}</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="qx-case-bento reverse">
                            <div class="case-pdf-viewer">
                                <div class="pdf-header">
                                    <div class="pdf-tab">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                                        ${t('cases.case2PdfTitle')}
                                    </div>
                                </div>
                                <div class="pdf-body">
                                    <div class="pdf-paper">
                                        <h4 class="pdf-paper-title">3.1 Gradient Descent & Hessian</h4>
                                        <div class="pdf-math-block">
                                            <i>&nabla;f(x, y)</i> = [ 2x - 4, 2y - 6 ]<sup>T</sup> = 0 <br/>
                                            <i>H</i> = &nabla;<sup>2</sup>f = <span class="matrix">[ 2  0 ]<br/>[ 0  2 ]</span> &gt; 0 (Minimum)
                                        </div>
                                        <p class="pdf-paper-text" style="font-size: 0.8rem;"><strong>Fig 1:</strong> 3D Surface Plot of Non-Convex Loss Function <i>f(x,y)</i>.</p>

                                        <div class="pdf-graph-box">
                                            <svg viewBox="0 0 300 150" class="pdf-3d-graph">
                                                <g stroke="#8b5cf6" stroke-width="1.5" fill="none" opacity="0.8">
                                                    <path d="M 20 75 Q 75 120 150 75 T 280 75" />
                                                    <path d="M 30 85 Q 75 130 150 85 T 270 85" />
                                                    <path d="M 40 95 Q 75 140 150 95 T 260 95" />
                                                    <path d="M 50 105 Q 75 150 150 105 T 250 105" />

                                                    <path d="M 20 75 Q 75 30 150 75 T 280 75" />
                                                    <path d="M 30 65 Q 75 20 150 65 T 270 65" />
                                                    <path d="M 40 55 Q 75 10 150 55 T 260 55" />
                                                    <path d="M 50 45 Q 75 0 150 45 T 250 45" />

                                                    <path d="M 150 0 C 120 50 120 100 150 150" stroke="#c084fc" opacity="0.5"/>
                                                    <path d="M 130 5 C 100 50 100 100 130 145" stroke="#c084fc" opacity="0.5"/>
                                                    <path d="M 170 5 C 200 50 200 100 170 145" stroke="#c084fc" opacity="0.5"/>

                                                    <circle cx="150" cy="75" r="4" fill="#ef4444" stroke="none" />
                                                    <path d="M 250 45 Q 200 80 150 75" stroke="#ef4444" stroke-width="2" stroke-dasharray="4" marker-end="url(#arrow)" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="case-info">
                                <span class="qx-case-tag">${t('cases.case2Tags')}</span>
                                <h3 class="qx-case-title">${t('cases.case2Title')}</h3>
                                <div class="case-text-block">
                                    <p class="case-text crisis"><strong>[ CRITICAL ]</strong> ${t('cases.case2Problem')}</p>
                                    <p class="case-text execution"><strong>[ RESOLVED ]</strong> ${t('cases.case2Solution')}</p>
                                </div>
                                <div class="qx-case-result">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    ${t('cases.case2Result')}
                                </div>
                            </div>
                        </div>

                        <div class="qx-case-bento">
                            <div class="case-info">
                                <span class="qx-case-tag">${t('cases.case3Tags')}</span>
                                <h3 class="qx-case-title">${t('cases.case3Title')}</h3>
                                <div class="case-text-block">
                                    <p class="case-text crisis"><strong>[ CRITICAL ]</strong> ${t('cases.case3Problem')}</p>
                                    <p class="case-text execution"><strong>[ RESOLVED ]</strong> ${t('cases.case3Solution')}</p>
                                </div>
                                <div class="qx-case-result">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                    ${t('cases.case3Result')}
                                </div>
                            </div>

                            <div class="case-ide-split">
                                <div class="ide-top">
                                    <div class="ide-header">
                                        <div class="ide-mac-btns"><span></span><span></span><span></span></div>
                                        <div class="ide-tab">resnet_custom.py</div>
                                    </div>
                                    <div class="ide-body">
                                        <div class="ide-code">
                                            <pre><code>${t('cases.case3Code').replace(/class|def|super|return/g, match => `<span class="c-keyword">${match}</span>`).replace(/__init__|forward|relu|max_pool2d/g, match => `<span class="c-method">${match}</span>`)}</code></pre>
                                        </div>
                                    </div>
                                </div>
                                <div class="ide-bottom-terminal">
                                    <div class="terminal-header-mini">TERMINAL: Training Logs</div>
                                    <div class="terminal-body-mini">
                                        <pre><code>${t('cases.case3Terminal').replace(/\[SUCCESS\]/g, match => `<span class="c-term-success">${match}</span>`).replace(/Epoch/g, match => `<span class="c-term-info">Epoch</span>`).replace(/>/g, match => `<span class="c-term-prompt">${match}</span>`)}</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        `,
        mount: () => {
            const elements = document.querySelectorAll('#projects .fade-up');
            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) entry.target.classList.add('is-visible');
                    });
                }, { threshold: 0.1 });
                elements.forEach(el => observer.observe(el));
            }
            return () => { };
        }
    };
}
