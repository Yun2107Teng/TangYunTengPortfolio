window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.sticky-float');

    function checkVisibility() {
        const windowHeight = window.innerHeight;
        elements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            // If the element is in view, add the class
            if (elementTop < windowHeight - 100 && elementBottom > 0) {
                element.classList.add('visible');
                element.style.animationDelay = `${index * 0.2}s`;
            } else {
                // Remove the class when out of view to re-trigger animation
                element.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
});

function scrollToNextSection() {
    // Find the next section after the landing page
    const nextSection = document.querySelector('#about'); // Replace with your section's ID
  
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth' // Smooth scrolling
      });
    }
  }