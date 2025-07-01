function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    menu.style.maxHeight = menu.style.maxHeight ? null : menu.scrollHeight + "px";
    const icon = document.querySelector(".hamburger-icon");
    icon.classList.toggle("open");
    menu.classList.toggle("open");

}
