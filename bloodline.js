document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');

    // Hide the splash screen after 3 seconds
    setTimeout(() => {
        splashScreen.style.display = 'none';
    }, 3000);
});


function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

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
