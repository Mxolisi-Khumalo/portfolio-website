document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for Navigation Links
    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetID = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetID);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Fade-in effect for sections on scroll
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.2,
        rootMargin: "0px"
    };

    const observer= new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting){
                entry.target.classList.add("fade-in-visible");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add("fade-in");
        observer.observe(section);
    });

    // Button hover effect with smooth scalling
    document.querySelectorAll(".btn").forEach(button=> {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1.05)";
            button.style.transition = "transform 0.3s ease-in-out";
        });
        button.addEventListener("mouseenter", () => {
            button.style.transform = "scale(1)";
        });
    });
});