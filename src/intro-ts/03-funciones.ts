function sumar(a:number,b:number):void{
    console.log(a+b)
}

let num= sumar(3,5)

function sumar2(a:number,b:number):number{
    return a+b 
}
// let res = sumar2 (4,5)
//console.log(res)

function operasBas(n1:number,n2?:number,n3:number=2):number{
    let tem = n1 * n3
    return tem
}
console.log(operasBas(3,5,5))

//  mandar obejetos a la función 
interface Mascota {
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;  
}

function calculaEdad(mascota:Mascota, x:number):void{
    mascota.edad += x;
    console.log(mascota)
}

const nuevaMacota:Mascota={
    nombre: "Perrito",
    edad: 4,
    mostrarEdad: function (): void {
        console.log('La edad es: ', this.edad)
    }
}

calculaEdad(nuevaMacota,2)
// nuevaMacota.mostrarEdad()

// ? funcion anonima  es aquella que se define pero no tiene nombre 
const funcSumar = function (n1:number, n2:number):number{
    return n1+n2
}
console.log(funcSumar(4,9))