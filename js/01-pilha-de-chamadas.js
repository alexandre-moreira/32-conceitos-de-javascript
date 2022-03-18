// First In First Out = FIFO -> O primeiro que entrou é o primeiro a sair -> Fila
// Last In First Out  = LIFO -> O Ultimo que entrou será o primeiro a sair -> Pilha

function funcao1(){
    funcao2()
    console.log('Executou função 1');
}

function funcao2(){
    funcao3()
    console.log('Executou função 2');
}

function funcao3(){
    console.log('Executou função 3');
}

funcao1();