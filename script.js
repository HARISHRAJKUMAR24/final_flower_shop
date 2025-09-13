// Mobile menu functionality
const menuBtn = document.querySelector('.mobile-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
});

closeMenuBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close menu when clicking outside of it
document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') &&
        !e.target.closest('.nav-links') &&
        !e.target.closest('.mobile-menu-btn')) {
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Simple animations for elements when they come into view
document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Observe product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        observer.observe(card);
    });

    // Observe categories
    document.querySelectorAll('.category').forEach(cat => {
        cat.style.opacity = 0;
        cat.style.transform = 'translateY(30px)';
        cat.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        observer.observe(cat);
    });

    // Observe testimonials
    document.querySelectorAll('.testimonial').forEach(test => {
        test.style.opacity = 0;
        test.style.transform = 'translateX(50px)';
        test.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        observer.observe(test);
    });

    // Observe gallery items
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        observer.observe(item);
    });

    // Season tabs functionality
    const seasonTabs = document.querySelectorAll('.season-tab');
    const seasonContents = document.querySelectorAll('.season-content');

    seasonTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            seasonTabs.forEach(t => t.classList.remove('active'));
            seasonContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            document.getElementById(tab.dataset.season).classList.add('active');
        });
    });
});

// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
    for (let el of reveals) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    }
});