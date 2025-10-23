document.addEventListener('DOMContentLoaded', () => {
  const tocLinks = Array.from(document.querySelectorAll('.md-nav__link[href^="#"]'));
  if (!tocLinks.length) return;

  const headings = tocLinks
    .map(link => {
      const id = link.getAttribute('href').substring(1);
      const el = document.getElementById(id);
      return el ? { link, el } : null;
    })
    .filter(Boolean);

  function updateActiveHeading() {
    const viewportMiddle = window.scrollY + window.innerHeight / 2;
    let current = null;

    for (const { link, el } of headings) {
      const rect = el.getBoundingClientRect();
      const elementMiddle = rect.top + window.scrollY + rect.height / 2;

      // Find the section whose middle is just above the viewport middle
      if (elementMiddle < viewportMiddle) {
        current = link;
      } else {
        break;
      }
    }

    // Update active link styling
    tocLinks.forEach(link => link.classList.remove('md-nav__link--active'));
    if (current) {
      current.classList.add('md-nav__link--active');
    }
  }

  window.addEventListener('scroll', updateActiveHeading, { passive: true });
  updateActiveHeading(); // Run once on load
});
