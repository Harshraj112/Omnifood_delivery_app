const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener("click", function () {
    header.classList.toggle("nav-open");
});

// Smooth Scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");

        // Scroll back to top
        if (href === "#")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        // Scroll to other links
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        }

        // Close mobile navigation
        if (link.classList.contains("main-nav-link"))
            header.classList.toggle("nav-open");
    });
});

// STICK navigator

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(function(entries){
    const ent = entries[0];
    if(ent.isIntersecting === false) {
        document.body.classList.add("sticky");
    }
    if(ent.isIntersecting === true) {
        document.body.classList.remove("sticky");
    }
}, {
    //In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px'
});
obs.observe(sectionHeroEl);