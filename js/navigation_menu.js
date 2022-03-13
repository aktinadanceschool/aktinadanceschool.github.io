const navigationMenuToggleButton = document.querySelector(".navigation_bar_menu_toggle_button");
const navigationBarLogo = document.querySelector(".navigation_bar_logo");
let menuToggle = false;

let navigatinMenuLeftAttribute = window.getComputedStyle(document.querySelector(".navigation_menu_container")).getPropertyValue("left");

navigationMenuToggleButton.addEventListener("click", () => {
   
    // Check if menu is closed
    if(!menuToggle) {

        navigatinMenuLeftAttribute = window.getComputedStyle(document.querySelector(".navigation_menu_container")).getPropertyValue("left");
        
        // Disables scrolling on document body
        document.body.classList.add("noscroll");

        // Animates navigation menu toggle button
        navigationMenuToggleButton.classList.add("open");

        // Shows Menu
        gsap.to(".navigation_menu_container", {
            left: "0vw",
            duration: 1,
            ease: "expo.inOut"
        });

        // Fades Out Navigation Logo
        gsap.to(navigationBarLogo, {
            opacity: 0.5,
            delay: 0.3,
            ease: "expo.inOut"
        });

        // Displays Navigation Menu Content
        gsap.to(".navigation_menu_content", {
            display: "flex",
            opacity: 1,
            delay: 0.4,
            duration: 0.7,
            ease: "expo.inOut"
        });

    } else {

        // Animates Navigation Menu Button
        navigationMenuToggleButton.classList.remove("open");

        // Enables scrolling on document body
        document.body.classList.remove("noscroll");

        // Hides Content
        gsap.to(".navigation_menu_content", {
            display: "none",
            opacity: 0,
            duration: 0.7,
            ease: "expo.inOut"
        });

        // Hides Menu
        gsap.to(".navigation_menu_container", {
            left: navigatinMenuLeftAttribute,
            delay: 0.2,
            duration: 1,
            ease: "expo.inOut"
        });

        // Fade In Navigation Bar Logo
        gsap.to(navigationBarLogo, {
            opacity: 1,
            delay: 0.4,
            ease: "expo.inOut"
        });

    }

    // Changes menu toggler
    menuToggle = !menuToggle;

});