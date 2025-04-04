document.addEventListener("DOMContentLoaded", function () {
    const botaoModo = document.getElementById("modo-noturno");
    const body = document.body;

    // Verifica se o usuário já ativou o modo noturno antes
    if (localStorage.getItem("modo-noturno") === "ativo") {
        body.classList.add("dark-mode");
        botaoModo.innerHTML = "🌞"; // Ícone do Sol
    }

    botaoModo.addEventListener("click", function (event) {
        event.preventDefault(); // Evita que o link recarregue a página
        body.classList.toggle("dark-mode");

        // Alternar ícone entre Lua e Sol
        if (body.classList.contains("dark-mode")) {
            botaoModo.innerHTML = "🌞"; // Ícone do Sol
            localStorage.setItem("modo-noturno", "ativo"); // Salva no LocalStorage
        } else {
            botaoModo.innerHTML = "🌙"; // Ícone da Lua
            localStorage.removeItem("modo-noturno"); // Remove do LocalStorage
        }
    });
});
