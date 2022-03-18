/*
    Escopo global

    Tudo que é criando ou declarando no escopo global, está disponível
    na totalidade do seu código, porque não tem como algo estar mais
    acima do que isso.
*/
var a = 0;

function alterar(){
    a=10;
}
console.log('======Escopo Global======')
console.log(a)
alterar();
console.log(a)

/*
Escopo de Lexico

O que eu criar dentro de uma função, só estará disponível dentro dela
e não está disponível fora dela.

*/
var nome = 'Alexandre';

function teste(){
    function teste2(){
        var variavel = 'meu nome'
    }
}

teste();

/*
Escopo de função

O que eu criar dentro de uma função, só estará disponível dentro dela

*/

// Bloco
function bloco(){
    let teste;
    if(true){
        teste = 'teste';
        var teste2 = 'teste2'
    }
    console.log('teste', teste)
    console.log('teste2', teste2)
}
bloco();

// Hoisting
function bloco(){
var teste;
var teste2;
if(true){
    teste = 'teste';
    var teste2 = 'teste2'
}
console.log('teste', teste)
console.log('teste2', teste2)
}
bloco();
