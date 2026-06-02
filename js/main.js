/* =====================================================
   js/main.js — Loaded on every page
   Handles: nav scroll, mobile toggle, active link,
            scroll-reveal animations, footer year
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ── Footer: current year ──────────────────────────────
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();


  // ── Nav: add shadow when scrolled ────────────────────
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }


  // ── Nav: mobile hamburger toggle ─────────────────────
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    // Close menu when any link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }


  // ── Nav: highlight the current page link ─────────────
  // Gets the filename from the URL, e.g. "about.html"
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentFile || (currentFile === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });


  // ── Scroll reveal: fade-up elements with data-reveal ─
  // Any element with data-reveal="true" (or just data-reveal)
  // will fade in as you scroll down to it.
  const revealEls = document.querySelectorAll('[data-reveal]');

  if (revealEls.length) {
    revealEls.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Stagger siblings slightly so groups of cards animate in sequence
          const siblings = Array.from(
            entry.target.parentElement?.querySelectorAll('[data-reveal]') || []
          );
          const idx = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = `${idx * 0.08}s`;
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  }

});
