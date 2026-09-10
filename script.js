// Side Navbar Toggle for Mobile screens
var sideNavbar = document.getElementById("sideNavbar");
var menuToggle = document.getElementById("menuToggle");
var closeNav = document.getElementById("closeNav");

if (menuToggle) {
    menuToggle.addEventListener("click", function() {
        sideNavbar.style.left = "0%";
    });
}

if (closeNav) {
    closeNav.addEventListener("click", function() {
        sideNavbar.style.left = "-60%";
    });
}

// Close Offer Notification Bar
var closeOffer = document.getElementById("close-offer");
var offerBar = document.querySelector(".offer-bar");

if (closeOffer && offerBar) {
    closeOffer.addEventListener("click", function() {
        offerBar.style.display = "none";
    });
}