'use strict';

// get user's name & provide greeting
let userName = prompt('What\'s your first name?');
console.log(userName);
alert('Hi, ' + userName + '! Welcome to my page. Ready for some questions?');

// question 1: how old am I?
let q1 = 'Am I over 40 years old?';
let a1 = getInput(q1);
if (a1 === 'y' || a1 === 'yes'){
  console.log('That\'s right! I\'m 48 years old.');
  alert('That\'s right! I\'m 48 years old.');
} else {
  console.log('Aren\'t you sweet.');
  alert('Aren\'t you sweet.');
}

// question 2: what kind of car do I drive?
let q2 = 'Do I drive a Honda?';
let a2 = getInput(q2);
if (a2 === 'y' || a2 === 'yes'){
  console.log('Nope, I drive a Saab.');
  alert('Nope, I drive a Saab.');
} else {
  console.log('Black Saab rules!');
  alert('Black Saab rules!');
}

// question 3: who's the greatest team?
let q3 = 'The Seattle Sounders are the greatest team you\'ve ever seen.';
let a3 = getInput(q3);
if (a3 === 'y' || a3 === 'yes'){
  console.log('Eternal blue, forver green!');
  alert('Eternal blue, forver green!');
} else {
  console.log('You\'re wrong, and you should feel bad.');
  alert('You\'re wrong, and you should feel bad.');
}

// question 4: How do I like my Scotch?
let q4 = 'Do I like my Scotch whisky unpeated?';
let a4 = getInput(q4);
if (a4 === 'y' || a4 === 'yes'){
  console.log('Nah, that\'s boring. Give me the smoke.');
  alert('Nah, that\'s boring. Give me the smoke.');
} else {
  console.log('I wasn\'t always so enlighted, but I got better.');
  alert('I wasn\'t always so enlighted, but I got better.');
}

// question 5: ice cream?
let q5 = 'Do you like ice cream?';
let a5 = getInput(q5);
if (a5 === 'y' || a5 === 'yes'){
  console.log('Me too. I like Mint Chocolate Chip.');
  alert('Me too. I like Mint Chocolate Chip.');
} else {
  console.log('Bummer. I feel sad for you.');
  alert('Bummer. I feel sad for you.');
}

// get user input and validate/normalize it
function getInput(question){
  let userInput = prompt(question).toLowerCase();
  console.log(userInput);
  if (userInput === 'y' || userInput === 'yes' || userInput === 'n' || userInput === 'no' ){
    return userInput;
  } else {
    alert('Please answer with Y, Yes, N, or No.');
    getInput(question + ' (Y/N or Yes/No)');
  }
}
