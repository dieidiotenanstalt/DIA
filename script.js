// Mobile Menü
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Dropdown-Menüs
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', e => {
    e.preventDefault();
    toggle.parentElement.classList.toggle('open');
  });
});

// Fade-In beim Laden
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
});

// Fade-Out bei Link-Klick (flackerfrei, kein Overlay nötig)
document.querySelectorAll('.fade-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const url = link.href;

    // Fade-Out starten
    document.body.classList.remove('loaded');

    // Neue Seite nach CSS-Transition laden
    setTimeout(() => {
      window.location.href = url;
    }, 500); // Dauer = CSS transition
  });
});
