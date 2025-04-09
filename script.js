// // Typewriter Effect
// const changingText = document.getElementById("changing-text");
// const words = ["Developer", "Designer", "Thinker", "Innovator"];
// let wordIndex = 0;
// let letterIndex = 0;

// function typeEffect() {
//     if (letterIndex < words[wordIndex].length) {
//         changingText.innerHTML += words[wordIndex].charAt(letterIndex);
//         letterIndex++;
//         setTimeout(typeEffect, 100);
//     } else {
//         setTimeout(eraseEffect, 1500);
//     }
// }

// function eraseEffect() {
//     if (letterIndex > 0) {
//         changingText.innerHTML = words[wordIndex].substring(0, letterIndex - 1);
//         letterIndex--;
//         setTimeout(eraseEffect, 50);
//     } else {
//         wordIndex = (wordIndex + 1) % words.length;
//         setTimeout(typeEffect, 500);
//     }
// }

// document.addEventListener("DOMContentLoaded", () => {
//     typeEffect();
// });

// // Project Modal Simulation
// function openProject(projectName) {
//     const message = `More details about "${projectName}" coming soon!`;
//     const modal = document.createElement("div");
//     modal.style.position = "fixed";
//     modal.style.top = "50%";
//     modal.style.left = "50%";
//     modal.style.transform = "translate(-50%, -50%)";
//     modal.style.backgroundColor = "#222";
//     modal.style.padding = "30px";
//     modal.style.borderRadius = "10px";
//     modal.style.color = "#fff";
//     modal.style.boxShadow = "0 5px 25px rgba(0,0,0,0.5)";
//     modal.innerHTML = `<p>${message}</p><button style='margin-top:20px;padding:10px 20px;border:none;border-radius:5px;background:#00c3ff;color:#000;cursor:pointer;'>Close</button>`;

//     const overlay = document.createElement("div");
//     overlay.style.position = "fixed";
//     overlay.style.top = "0";
//     overlay.style.left = "0";
//     overlay.style.width = "100vw";
//     overlay.style.height = "100vh";
//     overlay.style.backgroundColor = "rgba(0,0,0,0.6)";
//     overlay.appendChild(modal);

//     overlay.querySelector("button").addEventListener("click", () => {
//         document.body.removeChild(overlay);
//     });

//     document.body.appendChild(overlay);
// }

// Typewriter Effect
const changingText = document.getElementById("changing-text");
const words = ["Developer", "Designer", "Problem Solver", "Innovator"];
let wordIndex = 0;
let letterIndex = 0;

function typeEffect() {
    if (letterIndex < words[wordIndex].length) {
        changingText.innerHTML += words[wordIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (letterIndex > 0) {
        changingText.innerHTML = words[wordIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();

    // Subtle scroll reveal
    const revealElements = document.querySelectorAll(".text-content, .image-content, .section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal");
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => observer.observe(el));

    // Active Nav Highlight
    const sections = document.querySelectorAll("section, header");
    const navLinks = document.querySelectorAll(".nav-links li a");

    const navObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === entry.target.id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, {
        threshold: 0.5
    });

    sections.forEach(section => {
        if (section.id) navObserver.observe(section);
    });
});

// Project Modal Simulation
function openProject(projectName) {
    const message = `More details about "${projectName}" coming soon!`;
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.backgroundColor = "#222";
    modal.style.padding = "30px";
    modal.style.borderRadius = "10px";
    modal.style.color = "#fff";
    modal.style.boxShadow = "0 5px 25px rgba(0,0,0,0.5)";
    modal.innerHTML = `<p>${message}</p><button style='margin-top:20px;padding:10px 20px;border:none;border-radius:5px;background:#00c3ff;color:#000;cursor:pointer;'>Close</button>`;

    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.backgroundColor = "rgba(0,0,0,0.6)";
    overlay.appendChild(modal);

    overlay.querySelector("button").addEventListener("click", () => {
        document.body.removeChild(overlay);
    });

    document.body.appendChild(overlay);
}