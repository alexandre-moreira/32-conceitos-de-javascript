//Tipos de valor

    var x = 10 // mem.0001 = nome é x, o valor é 10
    var y = x;
    x = 20;

    console.log(x,y)

// Tipos referencia
    var x = {valor: 10};
    var y = x;

    x.valor = 20;
    x.valor = 40;

    /*
        local mem.0002 = {valor: 10};
        variavel x = mem.0002;
        variavel y = x = mem.0002;
    */
    
    console.log(x)
    console.log(y)