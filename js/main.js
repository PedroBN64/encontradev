/* ============================================
   PEDRO DEV — MAIN SCRIPT
   Autor: Pedro Augusto
   Versão: 1.0.0
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Navbar scroll effect ──────────────── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('navbar-scroll', window.scrollY > 50);
  });

  /* ── Mobile menu toggle ────────────────── */
  const menuBtn    = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  /* ── Scroll reveal (IntersectionObserver) ─ */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ── FAQ accordion icon toggle ─────────── */
  document.querySelectorAll('.faq-item details').forEach(details => {
    details.addEventListener('toggle', () => {
      const icon = details.querySelector('.faq-icon');
      icon.textContent = details.open ? '×' : '+';
    });
  });

});

/* ── Global helper: close mobile menu ──── */
function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
}
