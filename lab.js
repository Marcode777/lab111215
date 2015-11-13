var firstValue = prompt("Pick a number");

firstValue = parseInt(firstValue); 
 if (isNaN(firstValue)) {
    alert("This is a string");
  } else {
    alert("This is a number");
}

var secondValue = prompt("Pick a number, 9 0r 10");
secondValue = parseInt(secondValue);
if(secondValue >9){
  alert("This is greater than 9");
} else{
  alert("This is less than 10");
}


var concantenation = prompt("Give me a number and it shall be multipled 7 times");
alert(concantenation * 7);


