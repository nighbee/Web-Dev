let x = 1;

x = -x;
alert( x ); // -1, unary negation was applied


let x = 1, y = 3;
alert( y - x ); // 2, binary minus subtracts values

alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
alert( 8 % 4 ); // 0, the remainder of 8 divided by 4

alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16

alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)


let s = "my" + "string";
alert(s); // mystring

// the postfix and prefix 
let a = 1, b=1 
let c = ++a //prefix 
let d=b++ //postfix 

alert(c) // 2 
alert(d) // 1 

//assigment result 
let a = 2 
let x= 1+ (a*=2) // a = a*2 = 4 
alert(x) // 5 


