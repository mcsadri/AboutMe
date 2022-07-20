'use strict';

function getName(){
// get user's name & provide greeting
    let userName = prompt('What\'s your first name?');
    //console.log(userName);
    document.write('<h2>Hi, ' + userName + '!</h2>');
}
getName();

// global variable to count user's correct guesses
// let count = 0;

// refactor the original Code 201 Lab 02 AboutMe assignment's 5 yes/no questions using loops and arrays
// declare multidimensional array where each nested array has two string values: [question, answer]
function fiveQuestions() {
    let questions = [
        ['Am I over 40 years old?', 'y'],
        ['Do I drive a Saab?', 'y'],
        ['The Seattle Sounders are the greatest team you\'ve ever seen.', 'y'],
        ['Do you like ice cream?', 'y'],
        ['This really is death by a thousand pop-ups?', 'y']
    ];
    // loop to ask and evaluate each nested array question
    for (let i = 0; i < questions.length; i++){
        let answer = '';
        //console.log(questions[i][0]);
        // while answer is not a valid response (y or n) prompt user with question and collect response
        while (answer !== 'y' && answer !== 'n'){
        // get user input and convert to lower case
            answer = prompt(questions[i][0]).toLowerCase();
            //console.log('answer ' + i + ' = ' + answer);
            // get substring 1st character of user's input to simplify validation (as a result any input staring with y or n will pass validation)
            answer = answer.substring(0, 1);
            //console.log('answer substring' + i + ' = ' + answer);
            // if answer equals values in index [i][1] then increment count
            if (answer === questions[i][1]){
                // count++;
            //console.log('count = ' +count);
            }
        }
    }
}
fiveQuestions();

// Code 201 Lab 03 user story #2 (aka question #6, give the user 4 chances to guess a random number between 1-10)
// set a random whole number (1-10) value (taken from www.w3schools.com/js/js_random.asp)
function guessNumber(){
    let target = Math.floor(Math.random() * 11);
    //console.log('target = ' + target);
    // give the user 4 guesses pick the right number
    for (let i = 0; i < 4; i++){
        let userGuess1 = prompt('Can you guess the number (1-10) I\'m thinking of?');
        //console.log('i = ' + i);
        //console.log('userguess = ' + userGuess);
        // evaluate if user guess matches the random number
        // eslint-disable-next-line
    if (userGuess1 == target){
            alert('Wow, great guess!');
            // count++; // if correct guess increment correct guesses count
            break;
        } else if (i === 3) {
            alert('You\'re out of guesses. The correct answer was ' + target + '.');
        } else if (userGuess1 < target) {
            alert('You\'ve guessed too low. You have ' + (3 - i) + ' guesses remaining.');
        } else if (userGuess1 > target) {
            alert('You\'ve guessed too high. You have ' + (3 - i) + ' guesses remaining.');
        } else {
            alert('Please enter a valid number. You have ' + (3 - i) + ' guesses remaining.');
        }
    }
}
guessNumber();

// Code 201 Lab 03 user story #3 (aka question #7, guessing game using an array to hold multiple possible correct answers)
// decalre an array of US state abbreviations as possible correct answers for the user to guess
function guessState() {
    let states = ['CO', 'KS', 'MO', 'WA'];
    // read states array elements into a single string for use later in user alerts
    let stateList = '';
    for (let i = 0; i < states.length; i++){
        stateList = stateList + states[i];
        if (i < states.length - 1){
            stateList = stateList + ', ';
        }
    //console.log('i = ' + i + ' stateList = ' + stateList);
    }
    // give the user 6 chances to guess a correct answer
    for (let i = 0; i < 6; i++){
    //console.log('i = ' + i);
    // prompt user for guess and convert to upper case
        let userGuess2 = prompt('Can you guess one of the US states I\'ve lived in?\nUse 2-character abbreviatons only').toUpperCase();
        //console.log('userGuess2 = ' + userGuess2);
        let found = false; // array checker flag
        // check is userGuess2 matches an array element
        for (let j = 0; j < states.length; j++){
            if (userGuess2 === states[j]){
                found = true; // if found set flag true
            }
        }
        if (found === true){
            alert('Wow, great guess! \nThe full list of correct answers is: ' + stateList + '.');
            // count++; // increment correct guesses count
            break;
        } else if (i === 5){
            alert('You\'re out of guesses. \nThe list of correct answers is: ' + stateList + '.');
        } else {
            alert('That\'s incorrect. You have ' + (5 - i) + ' guesses remaining.');
        }
    }
}
guessState();
// Code 201 Lab 03 user story #4 (provide user with their guessing game score)
// alert( userName + ', you guessed ' + count + ' of 7 questions correctly.');
