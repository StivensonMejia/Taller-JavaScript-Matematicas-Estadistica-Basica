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


/* Array de objetos el cual contiene los cupones  */
const listadoDeCupones = [];

listadoDeCupones.push ({
    nombreCup: 'HTML-0010',
    descuento: 10,
});
listadoDeCupones.push ({
    nombreCup: 'HTML-0015',
    descuento: 15,
});
listadoDeCupones.push ({
    nombreCup: 'HTML-0020',
    descuento: 20,
});
listadoDeCupones.push ({
    nombreCup: 'HTML-0030',
    descuento: 30,
});
listadoDeCupones.push ({
    nombreCup: 'HTML-0050',
    descuento: 50,
});
listadoDeCupones.push ({
    nombreCup: 'HTML-0070',
    descuento: 70,
});


/* Funcion que realiza la validacion de los cupones */
function resultadoDescuentoCup() {

    if (!imputPrecioCup.value || !imputCuponCup.value) {
        imputResultadoCup.innerText = "Ingresa Datos";
        return;
    }

    /* esta funcion valida que lo escrito por el usuario este en el listado de cupones con ayuda del metodo .find de la const existeElCupon  */
    function validarSiExisteCupon(elemtenosDelCupon) {
        return elemtenosDelCupon.nombreCup == imputCuponCup.value;
    }

    /* Metodo .find sirve para filtrar en un array sin necesidad de hacer un ciclo de validacion  */
    const existeElCupon = listadoDeCupones.find(validarSiExisteCupon)

   /*  Variables para guardar los datos como: precio de prodcuto del usuario (imput de html), valor del descuento que se obtubo por medio de .find (array con objetos) */
    const precioUsuarioCup = Number(imputPrecioCup.value);
    const valorDescuentoCuponCup = existeElCupon.descuento;
    
    if (existeElCupon) {
        const nuevoPrecio = precioUsuarioCup * (100 - valorDescuentoCuponCup) / 100;
        imputResultadoCup.innerText = "$" + nuevoPrecio;
    }
    else {
        imputResultadoCup.innerText = "Cupon Invalido" ;
    }
}

/* CALCULAR PROMEDIO CICLO FOR*/

function calcularPromedio(lista) {

    let sumaLista = 0;

    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    }

    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
}

/* CALCULAR PROMEDIO METODO REDUCE*/

function calcularPromedioReduce(lista) {

    function sumarTodosLosElementos (valorAcumulado, nuevoValor ) {
        return valorAcumulado + nuevoValor;
    }

    const sumaListaReduce = lista.reduce(sumarTodosLosElementos);

    const promedio = sumaListaReduce / lista.length;
    console.log(promedio);
    return promedio;
}