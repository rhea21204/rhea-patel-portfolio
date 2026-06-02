/* js/home.js — Home page only */
document.addEventListener('DOMContentLoaded', () => {
  // Subtle parallax: the background "RHEA" text moves slightly as you scroll
  const bgWord = document.querySelector('.hero-bg-word');
  if (bgWord) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        bgWord.style.transform = `translateY(calc(-50% + ${y * 0.14}px))`;
      }
    }, { passive: true }); // passive: true = better scroll performance
  }
});
