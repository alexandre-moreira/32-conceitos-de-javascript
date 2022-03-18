/* 
    IIFE - (Expressão de função imediatamente invocada)

    é uma função JavaScript que é imediatamente invocada assim que é avaliada 
    pelo tempo de execução JavaScript. 
*/

    // IIFE
    (function (message) {
        console.log(message);
      })('Hello World');
      // LOGS: 'Hello World'
      
      // Equivalent code using named function
      function logMessage(message) {
        console.log(message);
      }
      
      logMessage('Hello World'); // LOGS: 'Hello World'
    
    /*
      você também pode usar funções de seta para IIFEs, se quiser. 
      Apenas certifique-se de lembrar as diferenças entre funções regulares 
      e setas nesse caso.
    
    */
    
    // All of these are equivalent, leading semicolon is optional
    ;(() => console.log('Hello'))();
    ;(function(){ console.log('Hello'); })();
    
    /*
        Namespace
    
        É um pedaço de código que serve para organizar seu código
        em pequenos grupos
    */
    
      var dados = (function(){
          var contador = 0;
    
          return{
              incrementar: function(){
                  contador = contador + 1;
                  return contador;
              }
          }
      }())
    
      console.log(dados.incrementar());
      console.log(dado.contador)