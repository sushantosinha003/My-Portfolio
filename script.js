
/* =================================
   1. MOBILE NAVIGATION MENU
================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});

// Close menu after clicking a navigation link

const navItems = document.querySelectorAll("#nav-links a");

navItems.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");

    });

});

/* =================================
   2. TYPING ANIMATION
================================= */

const typingText = document.getElementById("typing-text");

const roles = [
    "Aspiring Developer",
    "Web Developer",
    "Game Developer"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (deleting) {

        characterIndex--;

    } else {

        characterIndex++;

    }

    typingText.textContent = currentRole.substring(0, characterIndex);

    let speed = deleting ? 60 : 100;

    if (!deleting && characterIndex === currentRole.length) {

        deleting = true;
        speed = 1200;

    } else if (deleting && characterIndex === 0) {

        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;

    }

    setTimeout(typeEffect, speed);

}

typeEffect();

/* =================================
   3. ACTIVE NAVIGATION LINK
================================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function() {

    let currentSection = "";

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navItems.forEach(function(link) {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active-link");

        }

    });

});

/* =================================
   4. BACK TO TOP BUTTON
================================= */

const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});



/* =================================
   5. CONTACT FORM
================================= */

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        // Prevent default form submission
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const formStatus = document.getElementById("form-status");

        // Validate form fields
        if (name === "" || email === "" || message === "") {

            formStatus.textContent = "Please fill in all fields.";
            formStatus.style.color = "#ff7070";

            return;
        }

        // Prepare email
        const recipient = "sushantosinha0307@gmail.com";

        const subject = encodeURIComponent(
            "New Portfolio Contact Message"
        );

        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );

        const mailtoLink =
            "mailto:" + recipient +
            "?subject=" + subject +
            "&body=" + body;

        // Display confirmation
        formStatus.textContent =
            "✓ Your email draft is ready! Please send it from your email application.";

        formStatus.style.color = "#6ee7a0";

        // Open the visitor's email application
        window.location.href = mailtoLink;

    });

}



/* =================================
   6. DYNAMIC COPYRIGHT YEAR
================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();
    
