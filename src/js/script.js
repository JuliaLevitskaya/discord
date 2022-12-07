const themeSwitchers = document.querySelectorAll('.changeTheme');
themeSwitchers.forEach(switcher => {
    switcher.addEventListener('click', function() {
        applyTheme(this.dataset.theme);
    });
});

function applyTheme(themeName) {
    console.log(themeName);
    let themeUrl = `css/theme-${themeName}.css`;

    document.querySelector('[title="theme"]').setAttribute('href', themeUrl);
}