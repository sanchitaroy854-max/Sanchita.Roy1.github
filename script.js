// Toggle Mobile Menu
const menuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId && targetId !== '#') {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        if (navLinks && navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
        }
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});

// Contact Form Submission Handler
function handleFormSubmission(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const feedback = document.getElementById('form-feedback');

  feedback.style.display = 'block';
  feedback.style.color = '#38bdf8';
  feedback.innerText = `Transmission received! Thank you, ${name}. I will get back to you shortly.`;

  document.getElementById('contact-form').reset();

  setTimeout(() => {
    feedback.style.display = 'none';
  }, 5000);
}
