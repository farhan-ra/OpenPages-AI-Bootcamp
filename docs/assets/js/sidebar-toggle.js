document.addEventListener('DOMContentLoaded', function () {
  // Show the hidden Material hamburger menu icon on desktop (optional)
  const navToggle = document.querySelector('.md-header__button.md-icon--menu');
  if (navToggle) {
    navToggle.style.display = 'block';
  }

  // Custom sidebar toggle button logic
  const btn = document.getElementById('sidebarToggle');
  const sidebar = document.querySelector('.md-sidebar');
  const main = document.querySelector('.md-main');

  if (btn && sidebar && main) {
    btn.addEventListener('click', function () {
      const isVisible = sidebar.style.display !== 'none';
      sidebar.style.display = isVisible ? 'none' : 'block';
      main.style.marginLeft = isVisible ? '0' : '280px';
    });
  }
});
