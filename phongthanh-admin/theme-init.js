// Loaded as a static file, not inline, so the CSP's script-src stays 'self'.
// Apply persisted theme synchronously before hydration to avoid a flash.
;(function () {
  try {
    var raw = localStorage.getItem('pt-app')
    var theme = raw ? JSON.parse(raw)?.state?.theme : null
    var dark =
      theme === 'dark' ||
      ((!theme || theme === 'system') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    if (dark) document.documentElement.classList.add('dark')
  } catch {}
})()
