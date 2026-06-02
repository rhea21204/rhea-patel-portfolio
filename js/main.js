/* =============================================================
   js/main.js — Loaded on every page

   Handles: custom cursor, nav hamburger, scroll reveal,
            active nav link, footer year
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Footer year ─────────────────────────────────────────── */
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();


  /* ── Custom cursor ───────────────────────────────────────── */
  /* ✏️ CURSOR: Change cursorChar to any symbol you prefer     */
  const cursorChar = '✦';

  const isTouchDevice = () =>
    window.matchMedia('(pointer: coarse)').matches ||
    'ontouchstart' in window;

  if (!isTouchDevice()) {
    // Create star element
    const star = document.createElement('div');
    star.className = 'cursor cursor-star';
    star.textContent = cursorChar;
    document.body.appendChild(star);

    let mouseX = -100, mouseY = -100;
    let starX   = -100, starY   = -100;
    let rot = 0;

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Smooth lag follow
    function animateCursor() {
      // Lerp toward mouse
      starX += (mouseX - starX) * 0.14;
      starY += (mouseY - starY) * 0.14;
      rot += 0.6; // slow continuous rotation

      star.style.left      = starX + 'px';
      star.style.top       = starY + 'px';
      star.style.transform = `translate(-50%, -50%) rotate(${rot}deg)`;

      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Scale up on interactive elements
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });

    // Hide when leaving window
    document.addEventListener('mouseleave', () => { star.style.opacity = '0'; });
    document.addEventListener('mouseenter', () => { star.style.opacity = '1'; });
  }


  /* ── Nav scroll shadow ───────────────────────────────────── */
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.borderBottomColor =
        window.scrollY > 10 ? 'rgba(0,0,0,0.12)' : '';
    }, { passive: true });
  }


  /* ── Hamburger menu ──────────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const menuOverlay = document.getElementById('menuOverlay');

  if (hamburger && menuOverlay) {
    hamburger.addEventListener('click', () => {
      const isOpen = menuOverlay.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      // Prevent body scroll when menu open
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu on any link click
    menuOverlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuOverlay.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        menuOverlay.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }


  /* ── Active nav link ─────────────────────────────────────── */
  // Highlights the nav link matching the current page filename
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[data-page]').forEach(link => {
    if (link.dataset.page === currentFile) link.classList.add('active');
  });


  /* ── Scroll reveal ───────────────────────────────────────── */
  // Add data-reveal to any element to get the fade-up animation
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length) {
    revealEls.forEach(el => el.classList.add('reveal'));

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger siblings
          const siblings = Array.from(
            entry.target.parentElement?.querySelectorAll('[data-reveal]') || []
          );
          const idx = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = `${idx * 0.07}s`;
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    revealEls.forEach(el => obs.observe(el));
  }

});