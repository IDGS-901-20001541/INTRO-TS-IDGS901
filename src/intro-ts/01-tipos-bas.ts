/*
    TypeScript: Lenguaje con tipos estaticos que 
    permiten detectar errores de asignacion en tiempo de desarrollo  
*/
//js
var num0 = 0
let num1 = 'rcr'
const num2 = 34

// para la definicion de variables variable:tipodedato  
let version:number = 2.2
version = 2.3
let nombre:string = 'Daniela'
let activo:boolean = true
let matricula:number|string|boolean = 1234 // '| ->' type la variale pueda permitir mas de un tipo de dato 
matricula ='1234e'
//arreglo 
let vector:number[] = [1,2,3,4] 
console.log(vector)
