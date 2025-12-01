document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.textContent = '🌙';
    } else {
        body.classList.remove('dark-theme');
        themeToggle.textContent = '☀️';
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            // Switch to Light
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '☀️';
        } else {
            // Switch to Dark
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '🌙';
        }
    });

    // Simple scroll spy for navigation active state (Optional)
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to the current section's link
                const targetLink = document.querySelector(`nav a[href="#${entry.target.id}"]`);
                if (targetLink) {
                    targetLink.classList.add('active');
                }
            }
        });
    }, {
        threshold: 0.5, // 50% of the section is visible
        rootMargin: "0px 0px -40% 0px" // Adjusted to make detection more reliable
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});