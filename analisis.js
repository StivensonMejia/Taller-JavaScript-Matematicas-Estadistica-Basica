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

/* ANALISIS EMPRESAS */

const empresas = {};

/* Ciclo for creado para para reformular la base de datos de salarios y reestructurarla por empresas, año y salarios de ese año en la const empresas */

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

function proyeccionPorEmpresa(nombreEmpresa) {
    if (!empresas[nombreEmpresa]) {
        console.warn('La empresa no existe.');
    }
    else {
        const empresaYears = Object.keys(empresas[nombreEmpresa]);
        const listaMedianaYears = empresaYears.map((year) => { 
            
            return medianaEmpresaYear(nombreEmpresa, year)
        });

        console.log(empresaYears);
        console.log(listaMedianaYears);

        let porcentajesCrecimiento = [];

        for (let i = 1; i < listaMedianaYears.length; i++) {

            const medianaActual = listaMedianaYears[i];
            const medianaPasada = listaMedianaYears[i - 1];
            const crecimiento = medianaActual - medianaPasada;
            const porcentajeCrecimiento = crecimiento / medianaPasada;
            porcentajesCrecimiento.push(porcentajeCrecimiento)
        }

        const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

        const ultimaMediana = listaMedianaYears[listaMedianaYears.length -1];
        const aumento = ultimaMediana * medianaPorcentajesCrecimiento;
        const nuevaMediana = ultimaMediana + aumento;

        console.log(Math.round(nuevaMediana));
        console.log('el procentaje de crecimiento es de: ' + medianaPorcentajesCrecimiento);
    }

}  

/* ANALISIS GENERAL */

function medianaGeneral() {
    const listaMedianas = salarios.map(
        persona => medianaPorPersona(persona.name)
    );

    const mediana = PlatziMath.calcularMediana(listaMedianas);
    return mediana;
}

function medianaTop10() {
    const listaMedianas = salarios.map(
        persona => medianaPorPersona(persona.name)
    );

    const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas);

    const cantidad = listaMedianas.length / 10;
    const limite = listaMedianas.length - cantidad;

    const top10 = medianasOrdenadas.slice(limite , medianasOrdenadas.length);

    const mediatop10 = PlatziMath.calcularMediana(top10);
    return mediatop10;
}