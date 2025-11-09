window.addEventListener('hashchange', () => {
  // Get the element referenced by the hash (without the #)
  const id = window.location.hash.substring(1);
  const offset = 20;
  if (!id) return;

  const target = document.getElementById(id);
  if (!target) return;

  // Scroll so the top of the element aligns exactly with the top of the viewport
  const elementTop = target.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({
    top: elementTop - offset,
    behavior: 'auto'  // or 'smooth' if you want animation
  });
});
