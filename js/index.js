const aboutTitleTopText1 = document.querySelector(".text-top").children[0].children[0];
const aboutTitleTopText2 = document.querySelector(".text-top").children[0].children[1];
const aboutTitleBottomText = document.querySelector(".text-bottom").children[0];

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions: "play reverse restart reverse",
});

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#about_section",
        start: '49% center',
        end: '101% bottom',
    }
});

tl.from(aboutTitleTopText1, {
    y: "200%",
    delay: 0.3,
    duration: 0.7,
    ease: "Power3.easeOut"
});

tl.from(aboutTitleTopText2, {
    y: "100%",
    duration: 0.5,
    ease: "Power3.easeOut"
});

tl.from(aboutTitleBottomText, {
    y: "-100%",
    duration: 0.5,
    ease: "Power3.easeOut"
});

const rightArrow = document.querySelector(".right_arrow_container");
const aboutDetailsText1 = document.querySelector("#details_text_paragraph_1");
const aboutDetailsText2 = document.querySelector("#details_text_paragraph_2");

let detailsTextToggle = false;

rightArrow.addEventListener("click", () => {

    if(!detailsTextToggle) {

        gsap.to(".details_text_upper_border", {
            width: "25vw",
            duration: 0.7,
            ease: "expo.inOut"
        });
        gsap.to(".details_text_right_border", {
            height: "7vh",
            duration: 0.7,
            delay: 0.2,
            ease: "expo.inOut"
        });

        gsap.to(aboutDetailsText1, {
            opacity: 1,
            x: -10,
            display: "block",
            duration: 1,
            delay: 0.6,
            ease: "expo.inOut"
        });
        gsap.to(aboutDetailsText2, {
            opacity: 1,
            x: -10,
            display: "block",
            duration: 1,
            delay: 0.9,
            ease: "expo.inOut"
        });

    } else {

        gsap.to(aboutDetailsText2, {
            x: 10,
            opacity: 0,
            display: "none",
            duration: 1,
            ease: "expo.inOut"
        });
        gsap.to(aboutDetailsText1, {
            x: 10,
            opacity: 0,
            display: "none",
            duration: 1,
            delay: 0.3,
            ease: "expo.inOut"
        });

        gsap.to(".details_text_right_border", {
            height: "0vh",
            duration: 0.7,
            delay: 0.6,
            ease: "expo.inOut"
        });

        gsap.to(".details_text_upper_border", {
            width: "0vw",
            duration: 0.7,
            delay: 1,
            ease: "expo.inOut"
        });
    }

    detailsTextToggle = !detailsTextToggle;

});
