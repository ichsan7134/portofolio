const burgerMenu = document.querySelector('.burger-menu');
const navList = document.querySelector('.nav-list');

// Toggle the menu when the hamburger is clicked
burgerMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!burgerMenu.contains(event.target) && !navList.contains(event.target)) {
        navList.classList.remove('active');
    }
});

// Smooth scrolling to anchor links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// penutup scrolling
