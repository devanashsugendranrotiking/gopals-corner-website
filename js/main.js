// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
}

toggle.addEventListener('click', () => {
  setMenu(toggle.getAttribute('aria-expanded') !== 'true');
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav.classList.contains('open')) {
    setMenu(false);
    toggle.focus();
  }
});

// Pause / play the scrolling band
const band = document.querySelector('.band');
const bandToggle = document.querySelector('.band-toggle');

bandToggle.addEventListener('click', () => {
  const paused = bandToggle.getAttribute('aria-pressed') !== 'true';
  bandToggle.setAttribute('aria-pressed', String(paused));
  bandToggle.querySelector('.sr-only').textContent = paused ? 'Play scrolling text' : 'Pause scrolling text';
  band.classList.toggle('paused', paused);
});

document.getElementById('year').textContent = new Date().getFullYear();
