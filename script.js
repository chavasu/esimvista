
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  const keywordFilter = document.getElementById('keywordFilter');
  if (keywordFilter) {
    keywordFilter.addEventListener('input', () => {
      const q = keywordFilter.value.toLowerCase().trim();
      document.querySelectorAll('[data-keyword-card]').forEach(card => {
        card.style.display = card.dataset.keywordCard.includes(q) ? '' : 'none';
      });
    });
  }
  const countryFilter = document.getElementById('countryFilter');
  if (countryFilter) {
    countryFilter.addEventListener('input', () => {
      const q = countryFilter.value.toLowerCase().trim();
      document.querySelectorAll('[data-country-card]').forEach(card => {
        card.style.display = card.dataset.countryCard.includes(q) ? '' : 'none';
      });
    });
  }
});
