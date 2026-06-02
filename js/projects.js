/* js/projects.js — Project filter logic */
document.addEventListener('DOMContentLoaded', () => {

  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards      = document.querySelectorAll('.project-card');
  const noResults  = document.getElementById('noResults');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state on buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      let visibleCount = 0;

      // Show/hide cards based on their data-categories
      cards.forEach(card => {
        const cats  = card.dataset.categories || '';
        const show  = (filter === 'all') || cats.split(' ').includes(filter);
        card.style.display = show ? '' : 'none';
        if (show) visibleCount++;
      });

      // Show "no results" message if nothing matches
      noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    });
  });

});
