//Coerção, resumindo é que javascript tenta advinhar o que você está tentando fazer.

    // console.log('5' - 5); // 0
    // console.log('5' + 5); // 55
    // console.log(true + 1); // 2
    // console.log(true + true); // 2
    // console.log([] + {}); // [object object]
    // console.log([] + []); // ""

// Implicito
    // console.log(+'5'); // 5
    // console.log(5 + ''); // "5"
    // console.log(123 && 'oi'); // "oi"
    // console.log(null || true); // true

// Explicito
console.log(Number('50'));
console.log(String(50));

// Linguagem fortemente tipada
//public Integer somaNumeros( Integer a, Integer b){return a + b}

// Linguagem fracamente tipada
// function somaNumeros(a,b){a + b}

