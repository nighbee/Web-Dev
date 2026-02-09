// tasks

if ("0") {
  alert( 'Hello' );
}
//will show hello 

//name of js 

let name = prompt("enter the name of js", )
if (name == "ECMAScript"){ 
    alert("right")
}else { 
    alert("wrong")  
}


// number from prompt as alert 

let num = prompt("enter the number", )
if (num > 0){
    alert("1")
}else if (num < 0){
    alert("-1")
}else {
    alert("0")
}

// rewrite if into a  ? 
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
} 

//rewritten 
result = (a+b <3) ? "below" : "over" 
alert(result) 



let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}


let messag = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';