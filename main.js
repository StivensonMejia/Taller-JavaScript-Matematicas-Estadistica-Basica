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

/* SUPER CLASE */
const PlatziMath = {};

/* CALCULAR PROMEDIO CICLO FOR*/

PlatziMath.calcularPromedio = function calcularPromedio(lista) {

    let sumaLista = 0;

    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i];
    }

    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
}

/* CALCULAR PROMEDIO METODO REDUCE*/

PlatziMath.calcularPromedioReduce = function calcularPromedioReduce(lista) {

    function sumarTodosLosElementos (valorAcumulado, nuevoValor ) {
        return valorAcumulado + nuevoValor;
    }

    const sumaListaReduce = lista.reduce(sumarTodosLosElementos);

    const promedio = sumaListaReduce / lista.length;
    console.log(promedio);
    return promedio;
}

/* CALCULAR MEDIANA  */

/* El signo % en javascript nos ayuda a saber si un numero es par o impar al hacer una operacion retornado true || False

Ejemplo:

10 % 2 = 5 : esta operacion no tiene decimal por lo tanto nos retornara un False = 0  PAR

11 % 2 = 5.5 : esta operacion tiene decimal por lo tanto nos retornara un true = 1 IMPAR*/

PlatziMath.esPar = function esPar (lista) {
    return !(lista.length % 2);
    /* esto quiere decir que si el resultado (! NO) es true
    sera Par por lo antes ya citado. */
}

PlatziMath.esImpar = function esImpar (lista) {
    return (lista.length % 2);
    /* Caso contrario la funcion esImpar ya que la funcion por si sola retornara el valor true, el cual indica que el resultado es impar */
}

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {

    const lista = PlatziMath.ordenarLista (listaDesordenada);
    const listaEsPar = PlatziMath.esPar(lista);

    if (listaEsPar) {
        const mitadIndexListaParUno = lista.length / 2 - 1;
        const mitadIndexListaParDos = lista.length / 2;

        const medianaPar = (lista[mitadIndexListaParUno] + lista[mitadIndexListaParDos]) / 2;
        
        console.log(lista[mitadIndexListaParUno] + ' Mitad 1');
        console.log(lista[mitadIndexListaParDos] + ' Mitad 2');
        return medianaPar;
    }
    else {
        const mitadIndexListaImpar = Math.floor(lista.length / 2);
        const medianaImpar = lista[mitadIndexListaImpar];
        return medianaImpar;
    }
}

/* ORDENAR UN ARRAY */

PlatziMath.ordenarLista = function ordenarLista (listaDesordenada) {
    /* El metodo SORT funciona de la siguente manera: el metodo compara en un array la posisicion del contenido ejemplo: 
    12 10 17 el metodo SORT comparara dos valores para determinar si un numeros es mayor o no, se realiza mediante una resta  
    12 - 10 = 2 el resultado fue POSITIVO por lo que se determina que el numero que esta en pirmera posicion es mayor que el segundo numero (se procede a intercambiar posiciones),
    Si el resultado es NEGATIVO tambien se intercambiaran posiciones contrario a si el resultado de la resta es 0 el metodo SORT no hara ningun cambio  */

    function ordenarListaSort(valorAcumulado, nuevoValor) {
        
        return valorAcumulado - nuevoValor;
    }

    const lista = listaDesordenada.sort(ordenarListaSort);

    return lista;
}

/* CALCULAR MODA */

PlatziMath.calcularModa = function calcularModa(lista) {
    const listaCount = {};

    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];

        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
            /* la expresion += quiere decir que se sumara el valor acumulado ejemplo: listaCount[elemento] = listaCount[elemento] + 1;  */
        } else {
            listaCount[elemento] = 1;
        }
    }

    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidimencional(listaArray)
    const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1]

    const moda = listaMaxNumber[0];
    return moda;

    /* console.log(listaCount, listaArray, listaOrdenada, listaMaxNumber); */
}

/* ORDENAR UN ARRAY BIDIMENCIONAL */
PlatziMath.ordenarListaBidimencional = function ordenarListaBidimencional (listaDesordenada) {

    function ordenarListaSort(valorAcumulado, nuevoValor) {
        
        return valorAcumulado[1] - nuevoValor[1];
    }

    const lista = listaDesordenada.sort(ordenarListaSort);

    return lista;
}


/* Ejercicio de clase que debo estudiar  */
const obj = {
    123: 'Juanito Alcachofa',
    456: 'Juanita Alcaparra',
};

function solution(obj) {

    const nuevoArrayObj = Object.entries(obj);
    const nuevoObj = [];

    for (let i of nuevoArrayObj) {
        nuevoObj.push({
            id: i[0],
            name: i[1]
        })
    }
    return nuevoObj;

}