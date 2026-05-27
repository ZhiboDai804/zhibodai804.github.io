const themeToggleBtn = document.getElementById('theme-toggle-btn');

const themeIcons = {
    light: '<svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 14.4A7.4 7.4 0 0 1 9.6 3.8 8.8 8.8 0 1 0 20.2 14.4Z"/></svg>',
    dark: '<svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.5"/><path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"/></svg>'
};

function setThemeIcon(theme) {
    themeToggleBtn.innerHTML = theme === 'dark' ? themeIcons.dark : themeIcons.light;
}

const currentTheme = document.documentElement.getAttribute('data-theme');
setThemeIcon(currentTheme);

themeToggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'light');
        setThemeIcon('light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        setThemeIcon('dark');
        localStorage.setItem('theme', 'dark');
    }
});
