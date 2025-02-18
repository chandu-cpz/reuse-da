// Initialize Feather icons
feather.replace();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header scroll behavior
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.transform = 'translateY(0)';
        return;
    }
    
    if (currentScroll > lastScroll) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});

// Initiative details toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const detailButtons = document.querySelectorAll('.show-details-btn');
    
    detailButtons.forEach(button => {
        button.addEventListener('click', () => {
            const details = button.nextElementSibling;
            const isHidden = details.classList.contains('hidden');
            
            // Toggle button text
            button.textContent = isHidden ? 'Hide Details' : 'Show Details';
            
            // Toggle details visibility with animation
            if (isHidden) {
                details.classList.remove('hidden');
                details.style.maxHeight = details.scrollHeight + 'px';
                details.style.opacity = '1';
            } else {
                details.style.maxHeight = '0';
                details.style.opacity = '0';
                setTimeout(() => {
                    details.classList.add('hidden');
                }, 300);
            }
        });
    });
});