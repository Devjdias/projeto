function toggleMenu() {
    const menu = document.querySelector("nav .home");
    const icon = document.querySelector(".menu-hamburguer ion-icon");

    // Alternar visibilidade do menu
    menu.classList.toggle("active");

    // Alternar ícone entre "menu" e "close"
    if (menu.classList.contains("active")) {
        icon.setAttribute("name", "close-outline");
    } else {
        icon.setAttribute("name", "menu-outline");
    }
}

// Fechar o menu quando um link for clicado
function closeMenu() {
    const menu = document.querySelector("nav .home");
    const icon = document.querySelector(".menu-hamburguer ion-icon");

    menu.classList.remove("active");
    icon.setAttribute("name", "menu-outline");
}

// Fechar o menu ao clicar fora dele
document.addEventListener("click", function(event) {
    const menu = document.querySelector("nav .home");
    const menuButton = document.querySelector(".menu-hamburguer");

    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        closeMenu();
    }
});