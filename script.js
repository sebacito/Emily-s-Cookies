// ==========================
// FRASES ALEATORIAS
// ==========================

const frases = [
    "🍪 Hechas con amor",
    "🍪 Recién horneadas",
    "🍪 Endulzando tu día",
    "🍪 Sabor casero garantizado",
    "🍪 La felicidad en cada mordida"
];

// ==========================
// AL CARGAR LA PÁGINA
// ==========================

window.addEventListener("load", () => {

    // FRASE ALEATORIA
    const frase = document.getElementById("frase");

    if (frase) {
        const numero = Math.floor(Math.random() * frases.length);
        frase.textContent = frases[numero];
    }

    // AÑO AUTOMÁTICO
    const anio = document.getElementById("anio");

    if (anio) {
        anio.textContent = new Date().getFullYear();
    }

});

// ==========================
// PROMOCIÓN
// ==========================

function mostrarPromo() {

    const promo = document.getElementById("promoEspecial");

    if (promo) {

        promo.innerHTML =
            "🎉 Promoción especial: Compra 5 galletas y recibe 1 GRATIS.";

    }

}

// ==========================
// BOTÓN VOLVER ARRIBA
// ==========================

const botonArriba = document.getElementById("arriba");

if (botonArriba) {

    botonArriba.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// ==========================
// VISOR DE GALERÍA
// ==========================

const imagenes = document.querySelectorAll(".galeria img");
const visor = document.getElementById("visor");
const imgGrande = document.getElementById("imgGrande");
const cerrar = document.getElementById("cerrar");

if (visor && imgGrande && cerrar) {

    imagenes.forEach(img => {

        img.addEventListener("click", () => {

            visor.style.display = "flex";
            imgGrande.src = img.src;

        });

    });

    cerrar.addEventListener("click", () => {

        visor.style.display = "none";

    });

    visor.addEventListener("click", (e) => {

        if (e.target === visor) {
            visor.style.display = "none";
        }

    });

}

// ==========================
// MENÚ HAMBURGUESA
// ==========================

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {

    menuBtn.addEventListener("click", () => {

        menu.classList.toggle("activo");

    });

}

// ==========================
// CERRAR MENÚ AL DAR CLICK
// ==========================

const enlaces = document.querySelectorAll("#menu a");

enlaces.forEach(enlace => {

    enlace.addEventListener("click", () => {

        if (menu) {
            menu.classList.remove("activo");
        }

    });

});
