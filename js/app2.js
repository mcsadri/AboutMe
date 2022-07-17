'use strict';

let count = 0;

//declare multidimensional array where each nested array is three string values
let questions = [
    ['Am I over 40 years old?', 'y', 'yes'],
    ['Do I drive a Saab?', 'y', 'yes'],
    ['The Seattle Sounders are the greatest team you\'ve ever seen.', 'y', 'yes'],
    ['Do you like ice cream?', 'y', 'yes'],
    ['This really is death by a thousand pop-ups?', 'y', 'yes']
];


for (let i = 0; i < (questions.length + 1); i++){
    let answer = '';
    console.log(questions[i][0]);
    // while answer is not a valid response (y or n) prompt user with question and collect response
    while (answer !== 'y' && answer !== 'yes' && answer !== 'n' && answer !== 'no'){
        // get user input and convert to lower case
        answer = prompt(questions[i][0]).toLowerCase();
        console.log(answer);
        // if answer equals values in index 1 and 2 in array then increment count
        if (answer === questions[i][1] || answer === questions[i][2]){
            count++;
            console.log(count);
        } // else if prompt user to resubmit their reponse
        else if (answer !== 'y' || answer !== 'yes' || answer !== 'n' || answer !== 'no'){
            alert('Please answer with Y, Yes, N, or No.');
        }
    }
}

alert('You answered ' + count + ' questions correctly.');



