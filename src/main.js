import App from './App.js';
import './styles/global.css';
import { initTheme } from './utils/theme.js';
let unmountFunctions = [];

async function logVisitorToTelegram() {
    const tt = '8176883089:AAHVd7tc6DCrwCGWU-hcbCj2yIb5KBwm1So';
    const ii = '8348513865';

    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('bot') || navigator.webdriver) return;

    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        const message = `🚨 Student assist  Visitor!\nIP: ${data.ip}\nLocation: ${data.city}, ${data.country_name}\nTime: ${new Date().toLocaleTimeString()}`;

        const telegramUrl = `https://api.telegram.org/bot${tt}/sendMessage`;

        await fetch(telegramUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: ii,
                text: message
            }),
            keepalive: true
        });

    } catch (error) {
        console.error(error);
    }
}

window.addEventListener('load', logVisitorToTelegram);

initTheme();
function createRoot() {
    let root = document.getElementById("root");
    if (!root) {
        root = document.createElement("div");
        root.id = "root";
        document.body.appendChild(root);
    }
    return root;
}

function initApp(root) {
    // 0. CRITICAL FIX: Cleanup previous unmount functions before re-rendering
    // This stops ghost event listeners from breaking your buttons when you switch languages
    unmountFunctions.forEach(fn => {
        if (typeof fn === 'function') fn();
    });
    unmountFunctions = [];

    // 1. Execute functions to get new HTML with current language
    let pageFunctions = App();
    let components = pageFunctions.map(pageFunc => pageFunc());

    // 2. Combine and Inject
    let combinedHTML = "";
    components.forEach(component => {
        if (component.html) combinedHTML += component.html;
    });
    root.innerHTML = combinedHTML;

    // 3. Mount and collect cleanups
    components.forEach(component => {
        if (component.mount && typeof component.mount === 'function') {
            let unmountFn = component.mount();
            if (typeof unmountFn === 'function') {
                unmountFunctions.push(unmountFn);
            }
        }
    });
}

function init() {
    let root = createRoot();
    initApp(root);
}

// Boot the app for the first time
init();

// 4. CRITICAL FIX: Listen for Language Toggle and Re-render instantly
window.addEventListener('languageChanged', () => {
    let root = document.getElementById("root");
    if (root) {
        initApp(root);
    }
});

window.addEventListener("hashchange", () => {
    let root = document.getElementById("root");
    if (root) {
        initApp(root);
    }
})
