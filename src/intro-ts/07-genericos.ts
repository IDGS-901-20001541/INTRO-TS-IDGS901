
class PilaEnteros{
    private vec:number[]=[];
    insertar(x:number){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
            return this.vec.pop();
        else
            return null;
    }
}

class PilaString{
    private vec:string[]=[];
    insertar(x:string){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
            return this.vec.pop();
        else
            return null;
    }
}

let pila1 = new PilaEnteros();
pila1.insertar(23)
pila1.insertar(28)
pila1.insertar(2)
console.log(pila1.extraer());

let pila2 = new PilaString()
pila2.insertar('23')
pila2.insertar('28')
pila2.insertar('2')
console.log(pila2.extraer());

// * Clases Genericas 
class  PilaGenerica<T> {
    private vec:T[]=[];
    insertar (x:T){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
            return this.vec.pop();
        else
            return null;
    }
}

let pila3 = new PilaGenerica<number>();
pila3.insertar(23)
pila3.insertar(28)
pila3.insertar(2)
console.log(pila3.extraer());

let pila4 = new PilaGenerica<string>()
pila4.insertar('23')
pila4.insertar('28')
pila4.insertar('2')
console.log(pila4.extraer());

//--------
interface Animal{
    nombre:string;
    edad:number;
}

class Contenedor<T extends Animal> {
    private elementos:T[]=[];
    agregar( elemento: T){
        this.elementos.push(elemento);
    }
    obtenerDatos():T[]{
        return this.elementos;
    }
}

const contenedor = new Contenedor<Animal> ();
contenedor.agregar({nombre:'Perro', edad:3});
contenedor.agregar({nombre:'Gato', edad:4});

const animales = contenedor.obtenerDatos();
console.log(animales)
contenedor.agregar({nombre:'Perro', edad:3});