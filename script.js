const age = parseInt(prompt("How old are you?")); // return type is number!!!

if (isNaN(age)) {
  alert("You entered incorrect data!");
} else if (age >= 18) {
  alert("You are adult!");
} else {
  alert("You are not adult!");
}
