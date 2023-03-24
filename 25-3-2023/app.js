//------------------------------------Assignment--------------------------------------------//
//Question 1:
//Answer:
// var num = prompt("Enter a positive integer:");
// document.write("<p>Number: " + num + "</p>");
// document.write("<p>Round off value: " + Math.round(num) + "</p>");
// document.write("<p>Floor value: " + Math.floor(num) + "</p>");
// document.write("<p>Ceil value: " + Math.ceil(num) + "</p>");
//Question 2:
//Answer:
// var num = prompt("Enter a negative floating-point number:");
// document.write("<p>Number: " + num + "</p>");
// document.write("<p>Round off value: " + Math.round(num) + "</p>");
// document.write("<p>Floor value: " + Math.floor(num) + "</p>");
// document.write("<p>Ceil value: " + Math.ceil(num) + "</p>");
//Question 3:
//Answer:
// var num = prompt("Enter a number:");
// var absValue = Math.abs(num);
// document.write("The absolute value of " + num + " is " + absValue);
//Question 4:
//Answer:
// var diceValue = Math.floor(Math.random() * 6) + 1;
// document.write("The dice value is: " + diceValue);
//Question 5:
//Answer:
// var coinToss = Math.floor(Math.random() * 2) + 1;
// if (coinToss === 1) {
//   document.write("The coin shows: Heads");
// } else {
//   document.write("The coin shows: Tails");
// }
//Question 6:
//Answer:
// var randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write("The random number is: " + randomNumber);
//Question 7:
//Answer:
// var weight = prompt("Enter your weight:");
// weight = parseFloat(weight);

// if (isNaN(weight)) {
//   if (weight.slice(-3) === "kgs" || weight.slice(-3) === "KGS") {
//     weight = parseFloat(weight.slice(0, -3));
//   } else if (weight.slice(-10) === "kilograms" || weight.slice(-10) === "KILOGRAMS") {
//     weight = parseFloat(weight.slice(0, -10));
//   } else {
//     document.write("Invalid input!");
//     // exit the program
//     throw new Error("Invalid input!");
//   }
// }

// document.write("Your weight is: " + weight + " kgs");
//Question 8:
//Answer:
// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userNumber = parseInt(prompt("Enter a number between 1 and 10:"));

// if (userNumber === secretNumber) {
//   document.write("Congratulations! You guessed the secret number: " + secretNumber);
// } else {
//   document.write("Sorry, the secret number was: " + secretNumber + ". Please try again.");
// }

