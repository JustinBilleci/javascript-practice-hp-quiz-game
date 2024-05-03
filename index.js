const prompt = require("prompt-sync") ()
// we are able to grab user input with the const 'prompt'

console.log("welcome to the Harry Potter Quiz! you will be graded for accuracy.")

const totalQuestions = 4;
let correctAnswers = 0;
let incorrectAnswers = 0;

const answer1 = prompt("What is Harry Potter's wand core? Phoenix Feather, Dragon Heartstring, or Unicorn Hair "); 
const correctAnswer1 = "Phoenix Feather";

if (answer1 === correctAnswer1) {
    console.log("Brilliant!");
    correctAnswers++;
} else {
    console.log("Incorrect, you need to study more.");
    incorrectAnswers++;
}

const answer2 = prompt("True or False, Harry Potter lived underneath a staircase for 11 years. "); 
const correctAnswer2 = "True";

if (answer2 === correctAnswer2) {
    console.log("Brilliant!");
    correctAnswers++;
} else {
    console.log("Incorrect, have you even seen the movies?");
    incorrectAnswers++;
}

const answer3 = prompt("True or False, there is a house-elf named 'Winky' that works in the Hogwarts kitchens. "); 
const correctAnswer3 = "True";

if (answer3 === correctAnswer3) {
    console.log("Brilliant!");
    correctAnswers++;
} else {
    console.log("Someone clearly hasn't read the books.");
    incorrectAnswers++;
}

const answer4 = prompt("Which one of these is one of Albus Dumbeldore's middle names? Cornelius, Severus, Percy, or Brian. "); 
const correctAnswer4 = "Brian";

if (answer4 === correctAnswer4) {
    console.log("Brilliant!");
    correctAnswers++;
} else {
    console.log("incorrect, it confused me too.");
    incorrectAnswers++;
}

const percent = Math.round((correctAnswers / totalQuestions) * 100);

console.log("Your score is", percent.toString() +  "%");
console.log("You got", correctAnswers, "questions correct!")