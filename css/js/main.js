document.addEventListener("DOMContentLoaded", () => {

    const boton = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".main-nav");

    if (boton && menu) {
        boton.addEventListener("click", () => {
            const abierto = menu.classList.toggle("open");

            boton.setAttribute(
                "aria-expanded",
                String(abierto)
            );
        });
    }

    document.querySelectorAll("[data-year]")
        .forEach(elemento => {
            elemento.textContent = new Date().getFullYear();
        });

});
