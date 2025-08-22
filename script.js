// Space-themed Profile Page JavaScript

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the space background
    initStars();
    initShootingStars();
    
    // Add scroll animations
    initScrollAnimations();
});

// Function to create stars in the background
function initStars() {
    const starsContainer = document.querySelector('.stars-container');
    const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 1000);
    
    for (let i = 0; i < numberOfStars; i++) {
        createStar(starsContainer);
    }
}

// Create a single star element
function createStar(container) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Random position
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    
    // Random size (0.5px to 3px)
    const size = Math.random() * 2.5 + 0.5;
    
    // Random twinkle duration (3s to 8s)
    const twinkleDuration = Math.random() * 5 + 3 + 's';
    
    // Apply styles
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.setProperty('--twinkle-duration', twinkleDuration);
    
    // Add to container
    container.appendChild(star);
}

// Function to create shooting stars
function initShootingStars() {
    const starsContainer = document.querySelector('.stars-container');
    
    // Create a shooting star every 3-8 seconds
    setInterval(() => {
        createShootingStar(starsContainer);
    }, Math.random() * 5000 + 3000);
}

// Create a single shooting star
function createShootingStar(container) {
    const shootingStar = document.createElement('div');
    shootingStar.classList.add('shooting-star');
    
    // Random starting position (top half of the screen)
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * (window.innerHeight / 2);
    
    // Apply styles
    shootingStar.style.left = `${x}px`;
    shootingStar.style.top = `${y}px`;
    
    // Add to container
    container.appendChild(shootingStar);
    
    // Remove after animation completes
    setTimeout(() => {
        shootingStar.remove();
    }, 3000);
}

// Initialize scroll animations
function initScrollAnimations() {
    // Get all elements that should animate on scroll
    const sections = document.querySelectorAll('.profile-section');
    
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Resize event to adjust stars when window size changes
window.addEventListener('resize', () => {
    // Clear existing stars
    const starsContainer = document.querySelector('.stars-container');
    starsContainer.innerHTML = '';
    
    // Recreate stars for new window size
    initStars();
});