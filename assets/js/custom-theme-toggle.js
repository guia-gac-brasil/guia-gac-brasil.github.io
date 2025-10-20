document.getElementById('theme-toggle').addEventListener('click', function() {
  let defaultTheme = document.getElementById('theme_source');
  let secondaryTheme = document.getElementById('theme_source_2');
  let isDark = secondaryTheme.getAttribute('rel') === 'stylesheet';

  if (isDark) {
    // Switch to Light
    defaultTheme.setAttribute('rel', 'stylesheet');
    secondaryTheme.setAttribute('rel', 'stylesheet alternate');
    sessionStorage.setItem('theme', 'light');
  } else {
    // Switch to Dark
    defaultTheme.setAttribute('rel', 'stylesheet alternate');
    secondaryTheme.setAttribute('rel', 'stylesheet');
    sessionStorage.setItem('theme', 'dark');
  }
});
