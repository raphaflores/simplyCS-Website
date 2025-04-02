document.addEventListener("DOMContentLoaded", function() {
    gsap.from(".fade-in", { opacity: 0, y: 50, duration: 1, stagger: 0.3 });
    
    let controller = new ScrollMagic.Controller();
    
    document.querySelectorAll(".slide-in").forEach((section) => {
        let tween = gsap.from(section, { opacity: 0, x: -50, duration: 1 });
        new ScrollMagic.Scene({ triggerElement: section, triggerHook: 0.8, reverse: false })
            .setTween(tween)
            .addTo(controller);
    });

    document.querySelectorAll("img").forEach((img) => {
        img.addEventListener("mouseenter", () => {
            gsap.to(img, { scale: 1.1, duration: 0.3 });
        });
        img.addEventListener("mouseleave", () => {
            gsap.to(img, { scale: 1, duration: 0.3 });
        });
    });

    // Parallax effect
    window.addEventListener("scroll", function() {
        let scrolled = window.scrollY;
        document.querySelectorAll(".hero").forEach(hero => {
            hero.style.backgroundPositionY = -(scrolled * 0.3) + "px";
        });
    });
});
