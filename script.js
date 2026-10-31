/* ==========================================
   RADHE CREATION V2
   script.js
========================================== */

/* PAGE LOAD */

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

/* MOBILE MENU */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("nav-active");

        menuToggle.textContent =
            nav.classList.contains("nav-active")
                ? "✕"
                : "☰";

    });

}

/* CLOSE MOBILE MENU ON LINK CLICK */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (nav) {
            nav.classList.remove("nav-active");
        }

        if (menuToggle) {
            menuToggle.textContent = "☰";
        }

    });

});

/* HEADER SCROLL EFFECT */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add("header-scrolled");

    } else {

        header.classList.remove("header-scrolled");

    }

});

/* REVEAL ANIMATION */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(el => revealObserver.observe(el));

/* ACTIVE NAVIGATION LINKS */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        const href = link.getAttribute("href");

        if (href === "#" + current) {

            link.classList.add("active-link");

        }

    });

});

/* BACK TO TOP */

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

/* FLOATING WHATSAPP */

function openWhatsApp() {

    window.open(
        "https://wa.me/919408875525",
        "_blank"
    );

}

/* PRODUCT ORDER SYSTEM */

function orderNow(productName, price, image) {

    const phone = "919408875525";

    const imageUrl =
        new URL(image, window.location.href).href;

    const message =
`🌸 Hello RADHE CREATION

I want to order:

🛍 Product: ${productName}

💰 Price: ₹${price}

🖼 Product Image:
${imageUrl}

Please share more details about this product.

Thank you ❤️`;

    const whatsappURL =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(
        whatsappURL,
        "_blank"
    );

}

/* PREVENT IMAGE DRAGGING */

document.querySelectorAll("img").forEach(img => {

    img.setAttribute("draggable", "false");

});

/* SMOOTH INTERNAL LINKS */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (targetId.length > 1) {

            const target =
                document.querySelector(targetId);

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }

    });

});