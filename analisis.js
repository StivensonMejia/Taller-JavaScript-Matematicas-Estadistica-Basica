console.log(salarios);

/* ANALISIS PERSONAL */

/* persona es el objeto con podpiedades como name, salario año. */


function encontrarPersona(personaEnBusqueda) {

    return salarios.find(persona => persona.name == personaEnBusqueda);

    /* const persona = salarios.find((persona) => { 
        return persona.name == personaEnBusqueda;
    });
    return persona; */
}

function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    const salarios = trabajos.map(function (elemento) {
        return elemento.salario;
    });

    const medianaSalarioPersona = PlatziMath.calcularMediana(salarios);

    return medianaSalarioPersona;
}