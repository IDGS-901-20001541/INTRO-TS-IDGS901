
class Persona5{
    protected nombre:string;
    protected edad:number;
    constructor(nombre:string,edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }
    imprimir(){
        console.log(`Nombre ${this.nombre} edad ${this.edad}`)
      
    }
}

class Empleado extends Persona5{
    private sueldo: number;
    constructor(nom:string, edad:number,sueldo:number){
        super(nom,edad); // ? con la funcion super se asisgnan los valores de la clase que hereda 
        this.sueldo= sueldo;
    }
    imprimir(): void {
    super.imprimir() //? en este caso super  define que esta detro de la funcion padre 
    console.log(`Sueldo ${this.sueldo}`)     
    }
}

const persona6 = new Persona5( 'Alan', 20)
persona6.imprimir();
const empleado= new Empleado('Ana',22,2000 )
empleado.imprimir();