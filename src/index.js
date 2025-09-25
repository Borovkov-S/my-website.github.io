const heroSection = document.querySelector(".hero");
const headerNavigation = heroSection.querySelector(".hero__header-nav");
const heroContent = heroSection.querySelector(".hero__content");
const portfolioBlock = document.querySelector(".portfolio");
const footer = document.querySelector(".footer");
const burger = document.querySelector(".burger");
const burgerButton = burger.querySelector(".burger-button");
const burgerMenu = document.querySelector(".burger-menu");
const backToTopButton = document.querySelector(".back-to-top");
const loader = document.querySelector(".loader");

const heroImage = document.createElement("img");
heroImage.setAttribute("alt", "my-photo");
heroImage.setAttribute("class", "hero__image");

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        loader.remove();
    }, 500);
});

const portfolioProjects = portfolioBlock.querySelectorAll(
    ".portfolio__project-image"
);

portfolioProjects.forEach((project) => {
    project
        .closest(".portfolio__project-item")
        .appendChild(createProjectHover(PROJECTS_DATA[project.id]));

    project.addEventListener("mouseover", ({ target }) => {
        const hovers = portfolioBlock.querySelectorAll(
            ".portfolio__project-hover"
        );
        hovers.forEach((hover) => {
            hover.style.height = "0";

            if (target.id === hover.id) {
                hover.style.height = "100%";
            }
        });
    });
});

document.addEventListener("mouseover", ({ target }) => {
    const hovers = portfolioBlock.querySelectorAll(".portfolio__project-hover");
    if (
        ![
            "portfolio__project-image",
            "portfolio__project-hover",
            "portfolio__project-description",
            "portfolio__project-btn-block",
            "portfolio__project-button",
        ].includes(target.className)
    ) {
        hovers.forEach((hover) => {
            hover.style.height = "0";
        });
    }
});

burgerButton.addEventListener("click", () => {
    burgerButton.classList.toggle("active");

    if (burgerButton.classList.contains("active")) {
        burgerMenu.style.top = "0";
    } else {
        burgerMenu.style.top = "-100vh";
    }
});

if (window.innerWidth < 768) {
    burger.classList.remove("visually-hidden");
    headerNavigation.classList.add("visually-hidden");
    heroImage.setAttribute("src", "./src/images/mobile-photo.png");
    heroImage.style.maxWidth = "400px";
} else {
    burger.classList.add("visually-hidden");
    headerNavigation.classList.remove("visually-hidden");
    heroImage.setAttribute("src", "./src/images/my-photo.png");
    heroImage.setAttribute("width", "");
}

heroContent.appendChild(heroImage);

window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
        burger.classList.remove("visually-hidden");
        headerNavigation.classList.add("visually-hidden");
        heroImage.setAttribute("src", "./src/images/mobile-photo.png");
        heroImage.style.maxWidth = "400px";
    } else {
        burger.classList.add("visually-hidden");
        headerNavigation.classList.remove("visually-hidden");
        heroImage.setAttribute("src", "./src/images/my-photo.png");
        heroImage.style.maxWidth = "";
    }
});

window.addEventListener("scroll", () => {
    const footerLocation = footer.getBoundingClientRect().top;
    const position = window.scrollY;

    if (position > 400 && footerLocation > 900) {
        backToTopButton.classList.remove("visually-hidden");
    } else {
        backToTopButton.classList.add("visually-hidden");
    }
});

window.addEventListener("click", ({ target }) => {
    if (target.classList.contains("burger-link")) {
        burgerMenu.style.top = "-100vh";
        burgerButton.classList.remove("active");
    }
});
