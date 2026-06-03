/* ================================================================
   js/main.js  —  loaded on every page
   Handles: theme toggle + localStorage, custom cursor,
            hamburger menu, active nav link, scroll reveal
================================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Footer year ─────────────────────────────────────────── */
  document.querySelectorAll('.js-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });


  /* ── THEME TOGGLE ────────────────────────────────────────── */
  /* ✏️ THEME: Reads from localStorage on load, saves on toggle */
  const DARK_KEY  = 'rp-dark-mode';
  const toggleBtns = document.querySelectorAll('.theme-toggle');

  // Apply saved preference on load
  const savedDark = localStorage.getItem(DARK_KEY) === 'true';
  if (savedDark) applyDark(true);

  function applyDark(isDark) {
    document.body.classList.toggle('dark', isDark);
    toggleBtns.forEach(btn => {
      btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      btn.textContent = isDark ? '☀️' : '🌙';
    });
  }

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const nowDark = !document.body.classList.contains('dark');
      localStorage.setItem(DARK_KEY, nowDark);
      applyDark(nowDark);
    });
  });


  /* ── CUSTOM CURSOR ───────────────────────────────────────── */
  /* ✏️ CURSOR: Change the symbol here */
  const CURSOR_CHAR = '✦';

  const isTouchOnly = () => window.matchMedia('(pointer: coarse)').matches;

  if (!isTouchOnly()) {
    const star = document.createElement('div');
    star.className = 'cursor-star';
    star.textContent = CURSOR_CHAR;
    document.body.appendChild(star);

    let mx = -100, my = -100;   // actual mouse
    let sx = -100, sy = -100;   // smoothed star
    let rot = 0;

    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

    (function animateStar() {
      sx += (mx - sx) * 0.15;
      sy += (my - sy) * 0.15;
      rot += 0.5;   // slow continuous spin
      star.style.left      = sx + 'px';
      star.style.top       = sy + 'px';
      star.style.transform = `translate(-50%,-50%) rotate(${rot}deg)`;
      requestAnimationFrame(animateStar);
    })();

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => star.classList.add('hover-active'));
      el.addEventListener('mouseleave', () => star.classList.remove('hover-active'));
    });

    document.addEventListener('mouseleave', () => star.style.opacity = '0');
    document.addEventListener('mouseenter', () => star.style.opacity = '1');
  }


  /* ── NAV SCROLL SHADOW ────────────────────────────────────── */
  const nav = document.querySelector('.nav');
  if (nav) {
    const updateNav = () => {
      nav.style.boxShadow = window.scrollY > 8
        ? '0 1px 20px rgba(0,0,0,0.07)' : 'none';
    };
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }


  /* ── HAMBURGER MENU ──────────────────────────────────────── */
  const hamburgers   = document.querySelectorAll('.nav-hamburger');
  const menuOverlays = document.querySelectorAll('.menu-overlay');

  hamburgers.forEach(btn => {
    btn.addEventListener('click', () => {
      const isOpen = !btn.classList.contains('open');
      hamburgers.forEach(b => b.classList.toggle('open', isOpen));
      menuOverlays.forEach(m => m.classList.toggle('open', isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  });

  // Close on link click inside menu
  document.querySelectorAll('.menu-overlay a').forEach(link => {
    link.addEventListener('click', () => {
      hamburgers.forEach(b => b.classList.remove('open'));
      menuOverlays.forEach(m => m.classList.remove('open'));
      document.body.style.overflow = '';
    });
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      hamburgers.forEach(b => b.classList.remove('open'));
      menuOverlays.forEach(m => m.classList.remove('open'));
      document.body.style.overflow = '';
    }
  });


  /* ── ACTIVE NAV LINK ─────────────────────────────────────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    a.classList.toggle('active', a.dataset.page === currentPage);
  });


  /* ── SCROLL REVEAL ───────────────────────────────────────── */
  // Any element with data-reveal gets the fade-up-on-scroll effect
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length) {
    revealEls.forEach(el => el.classList.add('reveal'));
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const siblings = Array.from(
            entry.target.parentElement?.querySelectorAll('[data-reveal]') || []
          );
          entry.target.style.transitionDelay = `${siblings.indexOf(entry.target) * 0.07}s`;
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -28px 0px' });
    revealEls.forEach(el => obs.observe(el));
  }


  /* ── HERO HEADLINE TYPING (homepage only) ──────────────── */
  /* Types "I'm Rhea Patel." one character at a time on load.  */
  /* ✏️ EDIT: Change the text by updating data-text on         */
  /*   .typed-headline in index.html, not here.                */
  const typedEl  = document.querySelector('.typed-headline');
  const cursorEl = document.querySelector('.typing-cursor');

  if (typedEl && cursorEl) {
    const text     = typedEl.dataset.text || '';
    const CHAR_MS  = 90;   // ms between characters — lower = faster
    const START_MS = 400;  // ms before typing begins

    let i = 0;
    function tick() {
      if (i < text.length) {
        typedEl.textContent += text[i];
        i++;
        setTimeout(tick, CHAR_MS);
      }
      // Typing done — cursor keeps blinking (CSS handles it)
    }

    setTimeout(tick, START_MS);
  }


  /* ── PROJECT FILTER (projects.html only) ────────────────── */
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card[data-cats]');
  const noResults    = document.getElementById('noResults');

  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const f = btn.dataset.filter;
        let count = 0;
        projectCards.forEach(card => {
          const show = f === 'all' || card.dataset.cats.split(',').map(s=>s.trim()).includes(f);
          card.style.display = show ? '' : 'none';
          if (show) count++;
        });
        if (noResults) noResults.style.display = count === 0 ? 'block' : 'none';
      });
    });
  }

});