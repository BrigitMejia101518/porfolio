function setTheme(theme) {
    const isDark = theme === 'dark';
    document.documentElement.classList.toggle('dark-theme', isDark);
    const button = document.getElementById('theme-toggle');
    if (button) {
        button.textContent = isDark ? 'Modo claro' : 'Modo oscuro';
    }
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const current = document.documentElement.classList.contains('dark-theme') ? 'dark' : 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
}

function toggleMobileMenu() {
    const nav = document.getElementById('menu-principal');
    if (nav) {
        nav.classList.toggle('mobile-open');
    }
}

(function () {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

    
    document.querySelectorAll('#menu-principal a').forEach((link) => {
        link.addEventListener('click', () => {
            const nav = document.getElementById('menu-principal');
            if (nav && nav.classList.contains('mobile-open')) {
                nav.classList.remove('mobile-open');
            }
        });
    });
})();