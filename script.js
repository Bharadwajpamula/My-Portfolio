// Mobile Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarItems = document.querySelector('.navbar_items');
    const navLinks = document.querySelectorAll('.navbar_items ul li a');
    
    // Toggle mobile menu when burger icon is clicked
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navbarItems.classList.toggle('active');
        
        // Toggle animation on menu bars
        const bars = mobileMenu.querySelectorAll('.bar');
        if (mobileMenu.classList.contains('active')) {
            bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });
    
    // Close menu when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            navbarItems.classList.remove('active');
            
            // Reset menu bars
            const bars = mobileMenu.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            mobileMenu.classList.remove('active');
            navbarItems.classList.remove('active');
            
            // Reset menu bars
            const bars = mobileMenu.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });
    
    // Handle scroll animations for better performance on mobile
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    // Observe sections for scroll animations
    document.querySelectorAll('.class_skills section, .pj1, .pj2').forEach(section => {
        observer.observe(section);
    });
});