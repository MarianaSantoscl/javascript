// o que são vetores ou arrays

// como declarar um array
/* let array - ['string', 1, true] */

// pode guardar vários tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array[3])

// métodos
array.forEach(function(item, index){console.log(item, index)}) // o console.log está dentro da função parâmetro que percorrerá cada item.

