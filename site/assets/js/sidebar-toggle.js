document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.md-sidebar--primary');
  if (!sidebar) return;

  // Create header container
  const header = document.createElement('div');
  header.className = 'custom-sidebar-header';
  header.style.cssText = `
    background-color: #f4f4f4;
    color: #161616;
    padding: 0.75rem 0.3rem 0.75rem 1rem;
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 200;
    border-bottom: 1px solid #f4f4f4;
    justify-content: space-between; 
  `;

  // Create toggle button
  const toggleBtn = document.createElement('button');
  toggleBtn.id = 'sidebar-toggle';
  toggleBtn.setAttribute('aria-label', 'Toggle sidebar');
  toggleBtn.style.cssText = `
    background: none;
    border: none;
    color: #161616;
    cursor: pointer;
    font-size: 1.5rem;
    margin-left: 1rem;
    transition: transform 0.3s ease;
  `;

  // Create arrow inside button
  const arrow = document.createElement('span');
  arrow.id = 'sidebar-arrow';
  arrow.textContent = '‹';
  arrow.style.transition = 'transform 0.3s ease';

  toggleBtn.appendChild(arrow);

  // Create title span
  const titleSpan = document.createElement('span');
  titleSpan.className = 'sidebar-title';
  titleSpan.textContent = 'IBM OpenPages AI Bootcamp';
  titleSpan.style.flexGrow = '1';
  titleSpan.style.userSelect = 'none'; 

  // Append toggle and title to header
  header.appendChild(titleSpan);
  header.appendChild(toggleBtn);

  // Insert header as first child of sidebar
  sidebar.insertBefore(header, sidebar.firstChild);

  // Function to update toggle arrow rotation
  function updateArrow() {
    if (document.body.classList.contains('md-sidebar--hidden')) {
      arrow.style.transform = 'rotate(180deg)';
    } else {
      arrow.style.transform = '';
    }
  }

  // Initialize arrow state on load
  updateArrow();

  // Toggle sidebar visibility on button click
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('md-sidebar--hidden');
    updateArrow();
  });
});
