document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');

    // Hide the splash screen after 3 seconds
    setTimeout(() => {
        splashScreen.style.display = 'none';
    }, 3000);
});

// Toggle Sidebar visibility
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Close Sidebar when a navigation link is clicked
function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('active');
}

// Dropdown menu handling for "Our Services"
document.addEventListener('DOMContentLoaded', () => {
    const servicesMenu = document.querySelector('nav ul li a[href="#services"]');
    const dropdown = servicesMenu.nextElementSibling;

    // Show dropdown when hovering over "Our Services"
    servicesMenu.addEventListener('mouseover', () => {
        dropdown.style.display = 'block';
    });

    // Hide dropdown when mouse leaves
    servicesMenu.addEventListener('mouseout', () => {
        setTimeout(() => {
            dropdown.style.display = 'none';
        }, 300);
    });

    dropdown.addEventListener('mouseover', () => {
        dropdown.style.display = 'block';
    });

    dropdown.addEventListener('mouseout', () => {
        setTimeout(() => {
            dropdown.style.display = 'none';
        }, 300);
    });
});

// Show the "Back to Top" button when scrolling down
window.addEventListener('scroll', () => {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 300) { // Show button when scrolled 300px down
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll smoothly to the top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll
    });
}
