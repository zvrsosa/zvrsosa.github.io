// Get elements
const portfolioLink = document.getElementById('portfolio-link');
const resumeLink = document.getElementById('resume-link');
const contactLink = document.getElementById('contact-link');

const portfolioSection = document.getElementById('portfolio');
const resumeSection = document.getElementById('resume');
const contactSection = document.getElementById('contact');

// Get the portfolio content container
const portfolioContent = document.getElementById('portfolio-content');

// Reset animations by removing the 'visible' class
function resetAnimations() {
  portfolioSection.classList.remove('visible');
  resumeSection.classList.remove('visible');
  contactSection.classList.remove('visible');
}

// Show the selected section with animation
function showSection(section) {
  resetAnimations();
  
  // Hide all sections
  portfolioSection.style.display = 'none';
  resumeSection.style.display = 'none';
  contactSection.style.display = 'none';

  // Show the selected section and apply animation
  section.style.display = 'block';
  setTimeout(() => {
    section.classList.add('visible');  // Start the fade-in and slide-up animation
  }, 10); // Short delay to allow the display to be updated before applying animation
}

// Event listeners for menu links
portfolioLink.addEventListener('click', () => showSection(portfolioSection));
resumeLink.addEventListener('click', () => showSection(resumeSection));
contactLink.addEventListener('click', () => showSection(contactSection));

// Initially show the Portfolio section when the page loads
window.onload = () => showSection(portfolioSection);

// Function to display content for clicked category
function showPortfolioCategory(category) {
  // Example content for each category
  const categoryContent = {
    "3d-models": "<p>Here are some of my 3D models.</p>",
    "enviroment-designs": "<p>Here are some of my environment designs.</p>",
    "illustrations": "<p>Here are some of my illustrations.</p>"
  };

  // Display content for the clicked category
  portfolioContent.innerHTML = categoryContent[category] || "<p>Click a category to view projects.</p>";
}

// Event listeners for category boxes
document.getElementById('3d-models').addEventListener('click', () => showPortfolioCategory('3d-models'));
document.getElementById('enviroment-designs').addEventListener('click', () => showPortfolioCategory('enviroment-designs'));
document.getElementById('illustrations').addEventListener('click', () => showPortfolioCategory('illustrations'));
  
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileDropdown = document.getElementById('mobile-dropdown');

// Toggle mobile menu visibility
hamburgerBtn.addEventListener('click', () => {
  const isDropdownVisible = mobileDropdown.style.display === 'flex';
  mobileDropdown.style.display = isDropdownVisible ? 'none' : 'flex';
});

// Mobile menu links
const mobilePortfolioLink = document.getElementById('mobile-portfolio-link');
const mobileResumeLink = document.getElementById('mobile-resume-link');
const mobileContactLink = document.getElementById('mobile-contact-link');

mobilePortfolioLink.addEventListener('click', () => showSection(portfolioSection));
mobileResumeLink.addEventListener('click', () => showSection(resumeSection));
mobileContactLink.addEventListener('click', () => showSection(contactSection));

