const menu = document.querySelector('.menu');
const navOpen = document.querySelector('.hamburger');
const navClose = document.querySelector('.close');
const navBar = document.querySelector(".nav");


const navleft = menu.getBoundingClientRect.left;
navOpen.addEventListener("click", () => {
    if (navleft < 0) {
        menu.classList.add("show");
        document.body.classList.add("show");
        navBar.classList.add("show");
    }
});

navClose.addEventListener("click", () => {
    if (navleft < 0) {
        menu.classList.remove("show");
        document.body.classList.remove("show");
        navBar.classList.remove("show");
    }
});
const navHeight = navBar.getBoundingClientRect().height;
//Fix Nav
/*

window.addEventListener("scroll", () => {
    const scrollHeight = Window.pageYOffset();
    if (scrollHeight > navHeight) {
        navBar.classList.add("fix-nav");
    } else {
        navBar.classList.remove("fix-nav");
    }
});
*/
//Scroll to
const links = [...document.querySelectorAll(".scroll-link")];

links.map(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const id = e.target.gotAttribute("href").slice(1);
        const el = document.getElementById(id);
        let position = el.offsetTop - navHeight;

        window.scrollTo({
            top: position,
            left: 0,
        });
        navBar.classList.remove("show");
        menu.classList.remove("show");
        document.body.classList.remove("show");
    });

});

new TypeIt("#intro", {
        speed: 150,
        loop: true,
        waitUntilVisible: true
    })
    .type("Designer", { delay: 400 })
    .pause(500)
    .delete(8)
    .type("Developer", { delay: 400 })
    .pause(500)
    .delete(9)
    .go();


gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1.5, y: 20 });
gsap.from(".banner", { opacity: 0, duration: 1, delay: 2.5, x: 200 });
gsap.from(".hero h3", { opacity: 0, duration: 1, delay: 4.5, x: -50 });
gsap.from(".hero h1", { opacity: 0, duration: 1, delay: 5.5, x: -100 });
gsap.from(".hero h4", { opacity: 0, duration: 1, delay: 6.5, x: -30 });

gsap.from(".her o a", { opacity: 0, duration: 1.5, delay: 7, y: 50 });

gsap.from(".nav-item", { opacity: 0, duration: 1, delay: 3.5, y: -30, stagger: 0.2 });
gsap.from(".icons span", { opacity: 0, duration: 1, delay: 8.5, x: -30, stagger: .3 });




new TypeIt("#type2", {
        speed: 150,
        loop: true,
        waitUntilVisible: true
    })
    .type("Designer!", { delay: 400 })
    .pause(500)
    .delete(9)
    .type("Developer!", { delay: 400 })
    .pause(500)
    .delete(10)
    .go();

const glide = document.querySelector(".glide");
if (glide)
    new Glide(glide, {
        type: 'carousel',
        startAt: 0,
        autoplay: true,
        perView: 3,
        gap: 0,
        hoverpause: true,
        //autoplay: 2000,
        animationDuration: 800,
        animationTimingFunction: "ease-in-out",
        breakpoints: {
            996: {
                perView: 2,
            },
            768: {
                perView: 1,
            },
        },

    }).mount();

AOS.init();