/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "particlesjs-config.json", function () {
    console.log("callback - particles.js config loaded");
});

function scrollTo(hash) {
    const element = document.getElementsByName(`#${hash}`);
    const topPos = element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
        top: topPos, // scroll so that the element is at the top of the view
        behavior: "smooth", // smooth scroll
    });
}
