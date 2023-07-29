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

function proyeccionPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];

    for (let i = 1; i < trabajos.length; i++) {

        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento)
    }

    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

    const ultimoSalario = trabajos[trabajos.length -1].salario;
    const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
    const nuevoSalario = ultimoSalario + aumento;

    console.log(Math.round(nuevoSalario));
    console.log(medianaPorcentajesCrecimiento);
}

const empresas = {};

for (persona of salarios) {
    for (trabajo of persona.trabajos) {
        if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {};
        }

        if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = [];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }

    
}

console.log({empresas});

function medianaEmpresaYear(nombreEmpresa, year) {
    if (!empresas[nombreEmpresa]) {
        console.warn('La empresa no existe.');
    }
    else if (!empresas[nombreEmpresa][year]) {
        console.warn('La empresa no dio salarios ese año.');
    }
    else {
        return PlatziMath.calcularMediana(empresas[nombreEmpresa][year]);
    }
}