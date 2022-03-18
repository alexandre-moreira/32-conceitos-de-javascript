/*
    No Javascript apenas 6 tipos primitivos, que são
    boolean, string, number, null, undefined, symbol tipo no es6
    Todos os restantes alem desses tipos são objetos como objetos, funções, arrays.
    Então podemos dizer que os tipos primitivos são valores unicos, pois eles não tem
    propriedades comos os objetos tem.

*/

// console.log(typeof true); //Boolean
// console.log(typeof Boolean(true)); //Boolean
// console.log(typeof new Boolean(true)); //object
// console.log(typeof 'Alexandre'); // string
// console.log(typeof 30); //number

var doze = new Number(12);
var quinze = doze + 3;

console.log(quinze);

console.log(typeof doze) // object
console.log(typeof quinze) // number