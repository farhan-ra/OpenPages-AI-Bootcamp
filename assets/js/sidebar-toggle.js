document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('sidebarToggle');
  const body = document.body;

  if (btn && body) {
    btn.addEventListener('click', function () {
      body.classList.toggle('md-sidebar--hidden');
    });
  }
});
