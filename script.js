// FRASES ALEATORIAS

const frases = [
    "🍪 Hechas con amor",
    "🍪 Recién horneadas",
    "🍪 Endulzando tu día",
    "🍪 Sabor casero garantizado",
    "🍪 La felicidad en cada mordida"
];

window.addEventListener("load", () => {

    // FRASE ALEATORIA
    const frase = document.getElementById("frase");

    if(frase){
        let numero = Math.floor(Math.random() * frases.length);
        frase.textContent = frases[numero];
    }

    // AÑO AUTOMÁTICO
    const anio = document.getElementById("anio");

    if(anio){
        anio.textContent = new Date().getFullYear();
    }

    // BOTÓN VOLVER ARRIBA
    const botonArriba = document.getElementById("arriba");

    if(botonArriba){

        botonArriba.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

});

// PROMOCIÓN

function mostrarPromo(){

    const promo = document.getElementById("promoEspecial");

    if(promo){

        promo.innerHTML =
        "🎉 Promoción especial: Compra 5 galletas y recibe 1 GRATIS.";

    }

}