// src/utils/theme.js

export function initTheme() {
    // Default to dark mode for that premium tech feel
    const savedTheme = localStorage.getItem('qodix_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

export function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('qodix_theme', newTheme);

    return newTheme;
}

export function getTheme() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
}
