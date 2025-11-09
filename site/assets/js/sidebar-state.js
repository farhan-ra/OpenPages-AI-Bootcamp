// document.addEventListener('DOMContentLoaded', () => {
//   // Select all expandable nav items (usually links with children)
//   const expandableLinks = document.querySelectorAll('.md-nav__link--expandable');

//   // Save expanded state in localStorage
//   function saveExpanded() {
//     const expandedIndexes = [];
//     expandableLinks.forEach((link, i) => {
//       if (link.getAttribute('aria-expanded') === 'true') {
//         expandedIndexes.push(i);
//       }
//     });
//     localStorage.setItem('expandedNav', JSON.stringify(expandedIndexes));
//   }

//   // Restore expanded state on page load
//   function restoreExpanded() {
//     const expandedIndexes = JSON.parse(localStorage.getItem('expandedNav') || '[]');
//     expandableLinks.forEach((link, i) => {
//       if (expandedIndexes.includes(i)) {
//         link.setAttribute('aria-expanded', 'true');
//         // Show its nested list
//         const nestedList = link.nextElementSibling;
//         if (nestedList && nestedList.classList.contains('md-nav__list')) {
//           nestedList.style.display = 'block';
//         }
//       } else {
//         link.setAttribute('aria-expanded', 'false');
//         const nestedList = link.nextElementSibling;
//         if (nestedList && nestedList.classList.contains('md-nav__list')) {
//           nestedList.style.display = 'none';
//         }
//       }
//     });
//   }

//   // Attach click listeners to toggle expandable nav items
//   expandableLinks.forEach(link => {
//     link.addEventListener('click', e => {
//       // Only toggle if clicked on the expand icon (arrow), not the link itself
//       // Usually there's an icon inside link with class 'md-nav__icon'
//       if (e.target.classList.contains('md-nav__icon')) {
//         e.preventDefault();
//         const expanded = link.getAttribute('aria-expanded') === 'true';
//         link.setAttribute('aria-expanded', expanded ? 'false' : 'true');
//         const nestedList = link.nextElementSibling;
//         if (nestedList && nestedList.classList.contains('md-nav__list')) {
//           nestedList.style.display = expanded ? 'none' : 'block';
//         }
//         saveExpanded();
//       }
//     });
//   });

//   restoreExpanded();
// });
