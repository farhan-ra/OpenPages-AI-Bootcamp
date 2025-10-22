document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("sidebar-toggle");
  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("md-sidebar--visible");
    });
  }
});
