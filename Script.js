document.addEventListener('DOMContentLoaded', () => {
    // 🍔 Mobile Navigation Toggle
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = burger.querySelector('i');
        // Toggle between bars and times icons (Requires Font Awesome)
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                burger.querySelector('i').classList.add('fa-bars');
                burger.querySelector('i').classList.remove('fa-times');
            }
        });
    });

    // 📧 Contact Form Simulation
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop the default form submission

        // In a real application, you would send this data to a server here.
        // For a static site, you might use a service like Formspree or Netlify Forms.
        
        // Simulate a successful submission
        formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
        formMessage.style.backgroundColor = '#4CAF50';
        formMessage.style.display = 'block';
        contactForm.reset(); // Clear the form

        // Hide the message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    });
});