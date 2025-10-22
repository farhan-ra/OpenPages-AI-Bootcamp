(function () {
  const toggleClass = 'md-sidebar--hidden';

  function toggleSidebar() {
    document.body.classList.toggle(toggleClass);
  }

  function init() {
    const button = document.getElementById('sidebar-toggle');
    if (button) {
      button.addEventListener('click', toggleSidebar);
    } else {
      console.warn('Sidebar toggle button not found.');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
