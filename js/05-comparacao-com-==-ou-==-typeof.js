// == e ===

// ==

console.log( 3 == '3');

// 1º Se ambos são do mesmo tipo
// null == undefined, se for, ele retorna true
// number == string, se for, ele vai converter a string em número
// boolean == number, se for, ele converte o boolean num número
// boolean == string, se for, ele converte a string pra boolean
// objeto == primitivo, se for, ele converte o objeto numa string

// ===
// É necessário que os valores e os tipos sejam iguais para ser true.
    console.log(3 === '3');
    console.log(3 === 3);

// typeof
// É ótimo para validação de tipos
    console.log(typeof 'Alexandre' === 'string');
