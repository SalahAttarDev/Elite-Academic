import App from './App.js';
import './styles/global.css';
import { initTheme } from './utils/theme.js';
let unmountFunctions = [];
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
