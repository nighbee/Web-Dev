let string =" string "
let number = 1 //can be a int or float 
let bigInt = 1n // for integers larger than 2^53 - 1 
let boolean = true 

let undefined = undefined 
let symbol = Symbol("symbol") 
let object = { key: "value" } 



alert('hello, ${string}') // calling the datatype 


typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)


// TASKS: 
let name = "Ilya" 
alert("hello, ${1}")  // hello 1 
alert('hello, ${"name"}') // hello name 
alert( `hello ${name}` ); // hello ilya 