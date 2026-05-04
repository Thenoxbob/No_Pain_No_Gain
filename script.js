/* =============================================
   NO PAIN NO GAIN — script.js
   Gestion du sommaire (highlight au scroll)
   ============================================= */

/**
 * Met en surbrillance le lien du sommaire correspondant
 * à la section actuellement visible à l'écran.
 */
function initSommaire() {
  const liens = document.querySelectorAll('.sidebar-nav a[href^="#"]');
  if (liens.length === 0) return;

  const sections = Array.from(liens).map(a => document.querySelector(a.getAttribute('href')));

  function onScroll() {
    let current = sections[0];
    sections.forEach(s => {
      if (s && window.scrollY >= s.offsetTop - 120) current = s;
    });
    liens.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current?.id);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // état initial
}

document.addEventListener('DOMContentLoaded', initSommaire);
