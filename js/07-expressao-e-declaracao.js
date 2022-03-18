// Expressão
// É todo pedaço de código que retorna apenas um valor único
// Uma Expressão pode se comportar como uma declaração
// Mas uma declaração não se comportar como uma expressão
// 
console.log( 1 + 1);
console.log( Math.random() + 5);

function expressao(){
    return 4 + 4
}

console.log(expressao())

// Declaração
// São pedaços de códgo que performam uma ação

var variavel = 20;

if(true){
    variavel = 30;
}

function soma(a){
    return a +10
}

console.log(soma(Math.random()))