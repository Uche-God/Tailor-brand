// Hamburger Menu Toggle
function toggleMenu() {
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.getElementById('nav-links');

  menuBtn.classList.toggle('active');  // Animate the bars
  navLinks.classList.toggle('active'); // Show/hide the menu
}
