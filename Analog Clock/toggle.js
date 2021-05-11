let theme;
if (theme === null) {
	setTheme('light');
} else {
	setTheme(theme);
}

function validate() {
	let toggler = document.querySelector('.checked');
	toggler.addEventListener('click', function () {
		if (toggler.checked) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	});
}

validate();

function setTheme(mode) {
	if (mode === 'light') {
		document.getElementById('theme-style').href = 'css/main.css';
	}
	if (mode === 'dark') {
		document.getElementById('theme-style').href = 'css/dark.css';
	}
}
