const teacherBios = {
    betty: `She was born in Patras in 1976. He graduated from the National School Of Dance (KSOT) in 1997. He has collaborated with various dance groups and since 2002 he has been a permanent member of the Sinequanon group. From 1998 until today he teaches modern dance technique and improvisation to children and adults ("Hill" School, "Child's Smile", "Isidora Raymond Duncan" Dance Study Center, K.Th.B.E., Vocational Dance School "Rallou Manou "," Fix Dance Studio "," Horokinisi "," Kratiras "," DAN.C.CE "," Baile de Barrio "etc.). At the same time, she works in the theater as a kinesiologist having collaborated with S. Hatzakis, A. Aza, St. Fasouli, A. Riga, etc., while since 2008 she has been collaborating permanently with Roula Pateraki. In 2013 she founded the Higher Private Vocational School of Dance "AKTINA".`,
    mpaka: `She graduated in 1992 from the State School of Orchestral Art with honors. With a scholarship from the Koulas Pratsika Foundation, she continued her studies in New York for a year, studying modern dance techniques - Alexander Technique, contact improvisation, release technique. She is a founding member of the contemporary dance group "SINE QUA NON", with which she has collaborated as a dancer and choreographer since 1992. She has taught contemporary dance and movement to amateur, children, professional dancers and actors, giving special weight to body use by studying its anatomy. She works in theater as a choreographer - kinesiologist.`,
    rouka: `She was born and raised in Athens. In 1998 she graduated from the "Higher Vocational School of Dance of Despina Grigoriadou" and from 1999 to 2005 she collaborated as a dancer with the National Opera. At the same time she participates in performances of Isidoros Sideris, Maro Grigoriou, Giannis Bagourdis and other choreographers while she assists choreographer Kyriakos Kosmidis in TV shows and theatrical performances. At the same time she attends ballet and musical jazz seminars in Greece and abroad. From 2004 until today she teaches ballet, pointes and musical jazz in state-recognized dance schools such as "Horokinisi", "Modulor Dance Space", the school of P.M.T.P and "Studio Fix". Since 2013, she teaches ballet and pointes at the Higher Vocational School of Dance "AKTINA".`,
    topalidou: `She graduated from the National School of Dance (KSOT). She has collaborated with the dance theater "OKTANA", by Konstantinos Rigos, the "Omada Edafous", by Dimitris Papaioannou, the State Theater of Northern Greece, the National Theater, the Cyclades Street Theater, the Theater of the South, etc. She has taught ballet at "Horokinisi", at the dance school of Michalis Nalbantis "Fix Dance Studio", at the dance studio "Baile de Barrio" and at the Higher Professional School "Rallou Manou".`,
    korfia: `She was born in Athens where she started dancing and at the age of 9 she was admitted to the Nursery of the National School of Dance. At the age of 16 she was admitted to the National Dance Academy in Budapest where she continued her studies. Shortly afterwards she danced with the Ballet of the Hungarian National Theater in Petz with director and choreographer Istvan Herczog and soon became the first dancer. As the first dancer of the National Ballet, she danced many classical and neoclassical roles such as Swanilda in the Coppelia ballet, Juliet in the Romeo and Juliet ballet and others. Since 2001 she has been teaching Ballet for professionals and Bare a terre at DANCCE and Ballet at the Nikis Kontaxakis-Nikolettas Bakali Higher School of Dance until 2020. Since 2019 he has been teaching in the professional departments of KSOT. She teaches seminars in groups and schools in Greece and abroad such as the Roes Dance Theater, the State Contemporary Dance Group of Wales Diversions, the DV8 Physical Dance Theater, the Dance Center of the Municipality of Limassol in Cyprus, the State Contemporary Dance Group of Denmark ( Danish Dance Theater), the Primary Dance School of Kalamata etc.`,
    stellatou: `She was born in Athens in 1963. He graduated with honors from the State School of Orchestral Art. With a scholarship of the Onassis Foundation continued her studies in New York, at Merce Cunningham Dance Studios. At the same time she attended Contact Improvisation and Release Techniques seminars with K.J. Holmes, Jeremy Nelson, Daniel Lepkoff, Sarah Pearsons, Sarah Rudner and others. In 1987, together with Dimitris Papaioannou, they founded "Omada Edafous, from which she left in 2001. She was honored with the award for best dancer for her solo "Skalopatia", from the performance "Anthropini Dipsa". In 2008 she was honored with the "Koula Pratsika" award of the Center for the Study and Research of the Greek Theater for the editing of the movement in the play Motortown (Theater of the New World). She has collaborated with various dance groups: Sine Qua Non, Analia, Chorika by Z. Nikoloudi, amorphy.org etc.`,
}

const horizontalLine = document.querySelector(".hor_line");

gsap.to(horizontalLine, {
    width: "28vw",
    duration: 1.2,
    ease: "expo.inOut"
});

const teachersDetailsContainers = document.querySelectorAll(".teacher_details_container");
const teacherBioContainer = document.querySelector(".teacher_bio_container");
const teacherBioHeadar = document.querySelector(".teacher_bio_header");
const teacherBioDetails = document.querySelector(".teacher_bio_details");

for(let teacherDetailsContainer of teachersDetailsContainers) {
    
    teacherDetailsContainer.addEventListener("mouseenter", teacherDetailsContainerMouseEnterListener);

    teacherDetailsContainer.addEventListener("mouseleave", teacherDetailsContainerMouseLeaveListener);

    teacherDetailsContainer.children[0].addEventListener("click", (e) => {

        const selectedTeacherImage = e.target;
        const selectedTeacherDetailsContainer = e.target.parentElement;

        const selectedTeacherDetailsContainerPosition = {
            left: window.getComputedStyle(selectedTeacherDetailsContainer).getPropertyValue("left"),
            top: window.getComputedStyle(selectedTeacherDetailsContainer).getPropertyValue("top")
        }

        const selectedTeacherImageDimensions = {
            width: window.getComputedStyle(selectedTeacherImage).getPropertyValue("width"),
            height: window.getComputedStyle(selectedTeacherImage).getPropertyValue("height"),
            zIndex: window.getComputedStyle(selectedTeacherImage).getPropertyValue("z-index")
        }
       
        selectedTeacherImage.style.zIndex = 4;

        teacherBioHeadar.innerHTML = teacherDetailsContainer.children[1].innerHTML.toUpperCase();

        if(teacherDetailsContainer.id == "teacher_details_container_1") {
            teacherBioDetails.innerHTML = teacherBios.betty;
        } else if (teacherDetailsContainer.id == "teacher_details_container_2") {
            teacherBioDetails.innerHTML = teacherBios.mpaka;
        } else if (teacherDetailsContainer.id == "teacher_details_container_3") {
            teacherBioDetails.innerHTML = teacherBios.rouka;
        } else if (teacherDetailsContainer.id == "teacher_details_container_4") {
            teacherBioDetails.innerHTML = teacherBios.topalidou;
        } else if (teacherDetailsContainer.id == "teacher_details_container_5") {
            teacherBioDetails.innerHTML = teacherBios.korfia;
        } else if (teacherDetailsContainer.id == "teacher_details_container_6") {
            teacherBioDetails.innerHTML = teacherBios.stellatou;
        }

        teacherDetailsContainer.removeEventListener("mouseenter", teacherDetailsContainerMouseEnterListener);
        teacherDetailsContainer.removeEventListener("mouseleave", teacherDetailsContainerMouseLeaveListener);

        document.body.classList.add("noscroll");

        gsap.to(teacherBioContainer, {
            left: "0%",
            opacity: 1,
            display: "block",
            duration: 1,
            ease: "expo.inOut"
        });

        gsap.to(selectedTeacherDetailsContainer, {
            left: 0,
            top: 0,
            delay: 1,
            duration: 1,
            ease: "expo.inOut"
        });

        gsap.to(selectedTeacherImage, {
            width: "45vw",
            height: "100vh",
            delay: 1,
            duration: 1,
            ease: "expo.inOut"
        });

        gsap.to(teacherBioHeadar, {
            display: "block",
            opacity: 1,
            delay: 1.5,
            duration: 0.3,
            ease: "expo.inOut"
        });

        gsap.to(teacherBioDetails, {
            display: "block",
            opacity: 1,
            delay: 1.5,
            duration: 0.3,
            ease: "expo.inOut"
        });

        teacherBioContainer.addEventListener("click", () => {

            teacherBioHeadar.innerHTML = "";
            teacherBioDetails.innerHTML = "";

            teacherDetailsContainer.addEventListener("mouseenter", teacherDetailsContainerMouseEnterListener);
            teacherDetailsContainer.addEventListener("mouseleave", teacherDetailsContainerMouseLeaveListener);

            document.body.classList.remove("noscroll");

            gsap.to(teacherBioHeadar, {
                display: "none",
                opacity: 0,
                duration: 0.3,
                ease: "expo.inOut"
            });
    
            gsap.to(teacherBioDetails, {
                display: "none",
                opacity: 0,
                duration: 0.3,
                ease: "expo.inOut"
            });

            gsap.to(selectedTeacherDetailsContainer, {
                left: selectedTeacherDetailsContainerPosition.left,
                top: selectedTeacherDetailsContainerPosition.top,
                delay: 0.3,
                duration: 1,
                ease: "expo.inOut"
            });
    
            gsap.to(selectedTeacherImage, {
                width: selectedTeacherImageDimensions.width,
                height: selectedTeacherImageDimensions.height,
                zIndex: selectedTeacherImageDimensions.zIndex,
                delay: 1,
                duration: 1,
                ease: "expo.inOut"
            });

            gsap.to(selectedTeacherDetailsContainer.children[1], {
                opacity: 1,
                display: "block",
                duration: 0.3,
                delay: 1,
                ease: "expo.inOut"
            });

            gsap.to(teacherBioContainer, {
                left: "100%",
                opacity: 0,
                display: "none",
                duration: 1,
                delay: 0.8,
                ease: "expo.inOut"
            });

        });

    });

}

var teacherImageZindex;

function teacherDetailsContainerMouseEnterListener(e) {

    teacherImageZindex = window.getComputedStyle(e.target).getPropertyValue("z-index");
    // e.target.children[0].style.zIndex = 4;
    
    gsap.to(e.target.children[0], {
        x: -20,
        y: -20,
        scale: 1.1,
        duration: 0.3
    });

    gsap.to(e.target.children[1], {
        scale: 1.1,
        y: -10,
        duration: 0.3
    });

}

function teacherDetailsContainerMouseLeaveListener(e) {

    // e.target.children[0].style.zIndex = teacherImageZindex;

    gsap.to(e.target.children[0], {
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.3
    });

    gsap.to(e.target.children[1], {
        scale: 1,
        y: 0,
        duration: 0.3
    });

}