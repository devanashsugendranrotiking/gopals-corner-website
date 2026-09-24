// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  toggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
  nav.classList.toggle('open', !open);
});

// Close the menu after picking a section
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    nav.classList.remove('open');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
