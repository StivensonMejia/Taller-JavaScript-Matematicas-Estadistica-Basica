/* CALCULAR PRCENTAJE */

const imputPrecio = document.querySelector('#precio');
const imputDescuento = document.querySelector('#descuento');
const imputResultado = document.querySelector('.resultado');
const botonDeAccion = document.querySelector('.button');

botonDeAccion.addEventListener('click', resultadoDescuento)

function resultadoDescuento() {

    if (!imputPrecio.value || !imputDescuento.value) {
        imputResultado.innerText = "Ingresa Datos";
        return;
    }
    else if (imputDescuento.value > 100) {
        imputResultado.innerText = "😥";
        return;
    }
    else {
        const descuento = Number(imputPrecio.value) * (100 - Number(imputDescuento.value)) / 100;

        imputResultado.innerText = "$" + descuento;
    }
}

/* VALIDAR SUS CUPONES */

const imputPrecioCup = document.querySelector('#precioCup');
const imputCuponCup = document.querySelector('#cuponCup');
const imputResultadoCup = document.querySelector('.resultadoCup');
const botonDeAccionCup = document.querySelector('.buttonCup');

botonDeAccionCup.addEventListener('click', resultadoDescuentoCup)

function resultadoDescuentoCup() {

    const Cupon30Descuento = "HTML-0030";
    const Cupon50Descuento = "HTML-0050";
    const Cupon70Descuento = "HTML-0070";

    if (!imputPrecioCup.value || !imputCuponCup.value) {
        imputResultadoCup.innerText = "Ingresa Datos";
        return;
    }
    else if (Cupon30Descuento == imputCuponCup.value) {
        const descuento = Number(imputPrecioCup.value) * (100 - 30) / 100;
        imputResultadoCup.innerText = "$" + descuento;
    }
    else if (Cupon50Descuento == imputCuponCup.value) {
        const descuento = Number(imputPrecioCup.value) * (100 - 50) / 100;
        imputResultadoCup.innerText = "$" + descuento;
    }
    else if (Cupon70Descuento == imputCuponCup.value) {
        const descuento = Number(imputPrecioCup.value) * (100 - 70) / 100;
        imputResultadoCup.innerText = "$" + descuento;
    }
    else {
        imputResultadoCup.innerText = "Cupon Invalido" ;
    }
}