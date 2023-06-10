interface Alumno1{
    matricula1:number;
    nombre:string;
    edad:number;
    correo:string;
    grupo:Grupo;
}

interface Grupo{
    grupo: string;
    year: number;
}

// ? asignarle valores al objeto alumno 

const alumno2:Alumno1={
    matricula1:123456,
    nombre:'Daniela',
    edad:21,
    correo:'dominguez@gmail.com',
    grupo:{
        grupo:'idgs901',
        year:2023,
    }
}

console.log(`La matricula es: ${alumno2.matricula1}`)
console.log(`Del alumno  ${alumno2.nombre}`)
console.log(`En el año  ${alumno2.grupo.year}`)

// * DESTRUCTURACION 

const {matricula1,nombre:nom, grupo:xx} = alumno2
const {grupo,year:anio}= xx

console.log(`El alumno ${nom} con la matricula ${matricula1} del grupo ${grupo} en el año ${anio} `)



// * DESTRUCTURACION DE ARREGLOS 

const gps:string[]= ['IDGS','IEVN','REDES'];
console.log(`grupo 1: ${gps[0]}`)
console.log(`grupo 2: ${gps[1]}`)
console.log(`grupo 3: ${gps[2]}`)

//? ejemplo 

const [a,,b]=gps;
console.log(`grupo: 1 ${a} grupo 3:${b} `)