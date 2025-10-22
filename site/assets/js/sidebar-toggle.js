document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('sidebar-toggle');
  if (!toggleButton) return;

  toggleButton.addEventListener('click', function () {
    document.body.classList.toggle('md-sidebar--hidden');
  });
});
