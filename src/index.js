const backToTopButton = document.querySelector(".back-to-top");
const portfolioBlock = document.querySelector(".portfolio");
const footer = document.querySelector(".footer");
const burger = document.querySelector(".burger");
const burgerButton = burger.querySelector(".burger-button");
const burgerMenu = document.querySelector(".burger-menu");
const heroSection = document.querySelector(".hero");
const headerNavigation = heroSection.querySelector(".hero__header-nav");
const heroContent = heroSection.querySelector(".hero__content");
const loader = document.querySelector(".loader");

const heroImage = document.createElement("img");
heroImage.setAttribute("alt", "my-photo");
heroImage.setAttribute("class", "hero__image");

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        loader.remove();
    }, 100);
});

burgerButton.addEventListener("click", () => {
    burgerButton.classList.toggle("active");

    if (burgerButton.classList.contains("active")) {
        burgerMenu.style.top = "0";
    } else {
        burgerMenu.style.top = "-100vh";
    }
});

if (window.innerWidth > 1980) {
    portfolioBlock.style.background = "var(--color-light-gray)";
}

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
