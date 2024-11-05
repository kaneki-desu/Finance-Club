// JavaScript to add the 'shrink' class on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) { // Adjust scroll threshold as needed
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
}
