let vector1:Array<number> = [9,8,7,6]
vector1.push(10) // agregar un elemento 
vector1[1] = 22

for (let tem of vector1)
    console.log(tem)

let tem:(number|string)[] =[]
tem.push(111)
tem.push('Daniela')

//console.log(tem)

// Definir objeto
//manejo de interfaz es una clase donde se puede moldear 
interface Alumno{
    matricula?:string; //? crear una variable opcional 
    nombre:string;
    edad:number;
    correo:string;
} 

const alumno:Alumno = {
    matricula: '20001541',
    nombre:'Daniela',
    edad: 20,
    correo: 'ddaniela@gmail.com'
}

console.table(alumno)