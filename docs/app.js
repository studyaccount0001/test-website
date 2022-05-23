/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
function particlesJSLoad() {
    particlesJS.load("particles-js", "particlesjs-config.json", function () {
        console.log("callback - particles.js config loaded");
    });
}

function setupPage() {
    let sections = document.querySelectorAll("section");
    const navLink = document.querySelectorAll("header a");
    const parentSection = document.getElementById("sections");

    parentSection.addEventListener("scroll", () => {
        /* highlight section nav link when on section */
        for (let i = 0; i < sections.length; i++) {
            if (
                sections[i].offsetTop - parentSection.scrollTop <=
                parentSection.clientHeight
            ) {
                for (let j = 0; j < navLink.length; j++) {
                    navLink[j].classList.remove("active");
                    if (
                        sections[i].getAttribute("id") ===
                        navLink[j].getAttribute("href").substring(1)
                    ) {
                        navLink[j].classList.add("active");
                    } else {
                        navLink[j].classList.remove("active");
                    }
                }
            }
        }
    });
}

particlesJSLoad();
setupPage();
