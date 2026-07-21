/* =============================================
   MAIN.JS - ELIATAN GABRIEL
   ============================================= */

// ─── NAVBAR ATIVA NO SCROLL ───────────────────
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main > section[id], header[id]');

const observerNav = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, {
  rootMargin: '-40% 0px -55% 0px'
});

sections.forEach(section => observerNav.observe(section));

// ─── ANIMAÇÃO DE ENTRADA (FADE IN) ───────────────
const fadeElements = document.querySelectorAll(
  'header, .home-content, .sobre, .skill-card, .card, .contatos ul li'
);

fadeElements.forEach(el => el.classList.add('fade-in'));

const observerFade = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      
      // Stagger: cada elemento entra 80ms depois do anterior
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observerFade.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

fadeElements.forEach(el => observerFade.observe(el));