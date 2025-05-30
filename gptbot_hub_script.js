AOS.init({
  duration: 900,
  offset: 200, // 👈 distanza dal bottom (in pixel)
});

// Menù hamburger
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Non far propagare il click al document
    navLinks.classList.toggle('show');
    toggle.setAttribute('aria-expanded', navLinks.classList.contains('show'));
  });

  // Chiudi il menu se clicchi fuori
  document.addEventListener('click', (e) => {
    const isClickInsideMenu = navLinks.contains(e.target) || toggle.contains(e.target);
    if (!isClickInsideMenu && navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Chiudi il menu quando clicchi un link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
});