let num = 1;
while (num < 5) {
    if (num == 3) {
        break;
    }
    console.log("I'm counting! the number is ", num);
    num = num + 1;
}
console.log("===========================")

for (let number = 1; number < 5; number += 1) {
    if (number == 3) {
        continue;
    }
    console.log("I'm counting the number is ", number)
}
console.log("=================================")
//arrays
let x = [1,3,5];
x[1] = 10;
x.push(77)
console.log(x) 

console.log("=================================")
//Combining Arrays and FOR Loops
let numbers = [1,3,5,7];//setup our loop
for (idx = 0;idx < numbers.length;idx++){
    console.log(numbers[idx]);
}
console.log("=================================")
//What if we wanted an array with multiples of 3 up to 99?, using a FOR loop that iterates once for each array value. 
let array = [];
for (val = 3; val <= 99; val = val + 3){
    array.push(val);
}
console.log(array)
console.log("=================================")

//Functions
function printMyName(){
    console.log("My name is Alex")
}
printMyName()
console.log("=================================")

//Parameters
function greetSomeone(person){
    if (person == "Alex"){
        console.log("Yo dawg, howz it going?");
    }
    else {
        console.log("Greetings Earthling!");
    }
}
greetSomeone("Alex")
greetSomeone("Biscuit")
console.log("=================================")

//Return Values 
//let joke = tellMeAGoodJoke();
//console.log(joke);