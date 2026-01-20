(() => {
  // Highlight current page in nav
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('nav .menu a[data-page]').forEach(a => {
    if ((a.getAttribute('data-page') || '').toLowerCase() === path) a.classList.add('active');
  });

  // Simple year in footer
  const y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
