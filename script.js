// Get the navbar element
const navbar = document.getElementById('navbar');

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
    // Check if the window is scrolled down 50px or more
    if (window.scrollY > 50) {
        // Add the "scrolled" class to change the background color
        navbar.classList.add('scrolled');
    } else {
        // Remove the "scrolled" class when scrolled back up
        navbar.classList.remove('scrolled');
    }
});
