document.addEventListener('DOMContentLoaded', function () {
    
    const navbar = document.querySelector('.navbar');

    // --- Navbar Style on Scroll ---
    const handleNavbarScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    // --- Animate on Scroll (Fade-in & Counters) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');

                // Handle counters
                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(counter => {
                    if (counter.dataset.animated) return;
                    counter.dataset.animated = 'true';

                    const target = +counter.getAttribute('data-target');
                    const duration = 2000; // Animate over 2 seconds

                    let start = 0;
                    const step = (timestamp) => {
                        if (!start) start = timestamp;
                        const progress = Math.min((timestamp - start) / duration, 1);
                        counter.innerText = Math.floor(progress * target).toLocaleString();
                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        } else {
                             counter.innerText = target.toLocaleString();
                        }
                    };
                    window.requestAnimationFrame(step);
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
    });

    // --- Event Listeners ---
    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll(); // Initial check
});

// Add this code to your script.js file

// Get the Bootstrap Collapse element and the toggler button
const navbarCollapse = document.getElementById('navbarNav');
const navbarToggler = document.querySelector('.navbar-toggler');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
    // Check if the navbar is currently expanded (open)
    if (navbarCollapse.classList.contains('show')) {
        // If the user has scrolled and the navbar is open, click the toggler to close it.
        // The getBoundingClientRect().top check is a simple way to see if we've scrolled past the top.
        if (window.scrollY > 50) {
            navbarToggler.click();
        }
    }
});