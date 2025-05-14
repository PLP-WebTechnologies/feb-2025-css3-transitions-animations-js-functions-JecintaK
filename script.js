// Get elements
const startAnimationBtn = document.getElementById('startAnimationBtn');
const saveColorBtn = document.getElementById('saveColorBtn');
const animatedBox = document.getElementById('animatedBox');
const displayColor = document.getElementById('displayColor');

// Function to start animation
startAnimationBtn.addEventListener('click', () => {
  // Restart animation by removing and re-adding the class
  animatedBox.classList.remove('animate');
  void animatedBox.offsetWidth; // trigger reflow
  animatedBox.classList.add('animate');
});

// Save user color preference
saveColorBtn.addEventListener('click', () => {
  const color = prompt("Enter your favorite color (name or hex):");
  if (color) {
    localStorage.setItem('favoriteColor', color);
    updateColorDisplay(color);
  }
});

// Display color from localStorage if available
function updateColorDisplay(color) {
  displayColor.textContent = color;
  displayColor.style.color = color;
}

// Load saved color on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedColor = localStorage.getItem('favoriteColor');
  if (savedColor) {
    updateColorDisplay(savedColor);
  }
});
