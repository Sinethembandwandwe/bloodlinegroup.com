var slideIndex = {}; // Object to hold slide indices for each service

function toggleProducts(serviceId) {
    var productDetails = document.getElementById(serviceId);
    if (productDetails) {
        if (productDetails.style.display === "none") {
            productDetails.style.display = "block";
            showSlides(1, serviceId); // Show the first slide when opened
        } else {
            productDetails.style.display = "none";
        }
    } else {
        console.error("Product details not found for service ID:", serviceId); // Log error if ID not found
    }
}

function plusSlides(n, serviceId) {
    if (!slideIndex[serviceId]) slideIndex[serviceId] = 1; // Initialize if not set
    showSlides(slideIndex[serviceId] += n, serviceId);
}

function showSlides(n, serviceId) {
    // Check if slideIndex is initialized for this serviceId
    if (!slideIndex[serviceId]) {
        slideIndex[serviceId] = 1; // Initialize if not set
    }

    var slides = document.getElementById(serviceId).getElementsByClassName("mySlides");
    
    // Log the slides and current index for debugging
    console.log("Slides:", slides);
    console.log("Current slide index:", slideIndex[serviceId]);

    // Exit if no slides found
    if (!slides.length) {
        console.error("No slides found for service ID:", serviceId);
        return;
    }

    // Wrap around logic for slide index
    if (n > slides.length) {
        slideIndex[serviceId] = 1; // Reset to first slide
    }    
    if (n < 1) {
        slideIndex[serviceId] = slides.length; // Reset to last slide
    }

    // Hide all slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Show the current slide
    slides[slideIndex[serviceId] - 1].style.display = "block";  
}

