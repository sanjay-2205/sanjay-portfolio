document.addEventListener("DOMContentLoaded", () => {

    const navItems = document.querySelectorAll("nav a");

    function updateActiveNavigation() {

        let currentSection = "home";

        navItems.forEach(link => {

            const section = document.querySelector(
                link.getAttribute("href")
            );

            if (!section) return;

            const sectionTop = section.offsetTop - 180;

            if (window.scrollY >= sectionTop) {
                currentSection = section.id;
            }
        });

        navItems.forEach(link => {

            link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${currentSection}`
            );

        });
    }

    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );

    updateActiveNavigation();

});
// Scroll Progress

const scrollProgress =
    document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const scrollPercentage =
        (scrollTop / documentHeight) * 100;

    scrollProgress.style.width =
        scrollPercentage + "%";

});
// Scroll Reveal

const sections = document.querySelectorAll("section");

const revealSections = () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("visible");
        }

    });

};

window.addEventListener("scroll", revealSections);

revealSections();