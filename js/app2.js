'use strict';

// let count = 0;

// // array and for loop for handling the original Code 201 Lab 02 AboutMe assignment's 5 yes/no questions

// //declare multidimensional array where each nested array has three string values. Array questions will be used in the following for loop
// let questions = [
//     ['Am I over 40 years old?', 'y', 'yes'],
//     ['Do I drive a Saab?', 'y', 'yes'],
//     ['The Seattle Sounders are the greatest team you\'ve ever seen.', 'y', 'yes'],
//     ['Do you like ice cream?', 'y', 'yes'],
//     ['This really is death by a thousand pop-ups?', 'y', 'yes']
// ];


// for (let i = 0; i < (questions.length + 1); i++){
//     let answer = '';
//     console.log(questions[i][0]);
//     // while answer is not a valid response (y or n) prompt user with question and collect response
//     while (answer !== 'y' && answer !== 'yes' && answer !== 'n' && answer !== 'no'){
//         // get user input and convert to lower case
//         answer = prompt(questions[i][0]).toLowerCase();
//         console.log(answer);
//         // if answer equals values in index 1 and 2 in array then increment count
//         if (answer === questions[i][1] || answer === questions[i][2]){
//             count++;
//             console.log(count);
//         } // else if prompt user to resubmit their reponse
//         else if (answer !== 'y' || answer !== 'yes' || answer !== 'n' || answer !== 'no'){
//             alert('Please answer with Y, Yes, N, or No.');
//         }
//     }
// }
// alert('You answered ' + count + ' questions correctly.');


// Code 201 Lab 03 requirement #2 (aka question #6, the number guessing game)
// set a random whole number (1-10) value (taken from www.w3schools.com/js/js_random.asp)
let target = Math.floor(Math.random() * 11);
//console.log('target = ' + target);
// give the user 4 guesses pick the right number
for (let i = 0; i < 4; i++){
    let userGuess = prompt('Can you guess the number (1-10) I\'m thinking of?');
    //console.log('i = ' + i);
    //console.log('userguess = ' + userGuess);
    // eslint-disable-next-line
    if (userGuess == target){
        alert('Wow, great guess!');
        break;
    } else if (i === 3) {
        alert('You\'re out of guesses. The correct answer was ' + target + '.');
    } else if (userGuess < target) {
        alert('You\'ve guessed too low.\nYou have ' + (3 - i) + ' guesses remaining.');
    } else if (userGuess > target) {
        alert('You\'ve guessed too high.\nYou have ' + (3 - i) + ' guesses remaining.');
    } else {
        alert('Please enter a valid number.\nYou have ' + (3 - i) + ' guesses remaining.');
    }
}

