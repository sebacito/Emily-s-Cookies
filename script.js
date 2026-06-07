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
// TODO DENTRO DE DOMContentLoaded
// ==========================
 
document.addEventListener("DOMContentLoaded", () => {
 
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
 
    // BOTÓN VOLVER ARRIBA
    const botonArriba = document.getElementById("arriba");
    if (botonArriba) {
        botonArriba.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
 
    // VISOR DE GALERÍA
    const imagenes = document.querySelectorAll(".galeria img");
    const visor = document.getElementById("visor");
    const imgGrande = document.getElementById("imgGrande");
    const cerrarVisor = document.getElementById("cerrar-visor");
 
    if (visor && imgGrande && cerrarVisor) {
 
        imagenes.forEach(img => {
            img.addEventListener("click", () => {
                visor.style.display = "flex";
                imgGrande.src = img.src;
            });
        });
 
        cerrarVisor.addEventListener("click", () => {
            visor.style.display = "none";
        });
 
        visor.addEventListener("click", (e) => {
            if (e.target === visor) {
                visor.style.display = "none";
            }
        });
 
    }
 
    // HEADER COMPACTO AL HACER SCROLL
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 80) {
            header.classList.add("compacto");
        } else {
            header.classList.remove("compacto");
        }
    });
 
    // MENÚ HAMBURGUESA
    const nav = document.getElementById("nav");
    const abrir = document.getElementById("abrir");
    const cerrarMenu = document.getElementById("cerrar-menu");
 
    if (abrir && cerrarMenu && nav) {
 
        abrir.addEventListener("click", () => {
            nav.classList.add("visible");
        });
 
        cerrarMenu.addEventListener("click", () => {
            nav.classList.remove("visible");
        });
 
        // Cerrar menú al tocar un enlace
        const enlaces = nav.querySelectorAll("a");
        enlaces.forEach(enlace => {
            enlace.addEventListener("click", () => {
                nav.classList.remove("visible");
            });
        });
 
    }
 
});
 
// ==========================
// PROMOCIÓN (global para onclick en HTML)
// ==========================
 
function mostrarPromo() {
    const promo = document.getElementById("promoEspecial");
    if (promo) {
        promo.innerHTML = "🎉 Promoción especial: Compra 5 galletas y recibe 1 GRATIS.";
    }
}
