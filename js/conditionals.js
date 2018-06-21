"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var isOdd = function(input){
    return ((input%2) !== 0);
}
var isPos = function(input){
    return (input > 0);
};
var somebodyStopMe = function(){
    alert('goodbye');
    stopper = false;
};

var userInteract = function(){
    var userNumber = prompt('please enter a number:');
    if(isNaN(userNumber)){
        alert('that is not a number');
        return;
    }
    alert(isOdd(userNumber)? userNumber+' is an odd number': userNumber+' is an even number');
    alert(isPos(userNumber)? userNumber+' is a positive number': userNumber+' is a negative number');
    alert(parseInt(userNumber) + 100);
};

do{
    var stopper = true;
    confirm('would you like to enter a number?') ? userInteract():somebodyStopMe();
}while(stopper === true );


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

var analyzeColor =function(color){
    if (color === 'red'){
        return 'red is the color of apples';
    }else if (color === 'orange') {
        return 'orange is the color of his shirt';
    }else if (color === 'yellow') {
        return 'yellow is the color of bananas';
    }else if (color === 'green') {
        return 'green is the color of grass';
    }else if (color === 'blue') {
        return 'blue is the color of the noon sky';
    }else if (color === 'indigo') {
        return 'indigo is the color of night sky';
    }else if (color === 'violet') {
        return 'violet is the color of eggplants';
    }else{
        return 'I dont know anything about '+ color;
    }
}
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
var analyzeColor2 = function(color){
   switch(color){
       case 'red':
           return'red is the color of apples';
           break;
       case 'orange':
            return 'orange is the color of his shirt';
            break;
       case 'yellow':
           return 'yellow is the color of bananas';
           break;
       case 'green':
            return 'green is the color of grass';
            break;
       case 'blue':
            return 'blue is the color of the noon sky';
            break;
       case 'indigo':
            return 'indigo is the color of night sky';
            break;
       case 'violet':
            return 'violet is the color of grapes';
            break;
        default:
            return 'I dont know anything about '+ color;
            break;
    }
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var promptInput = prompt('what color would you like to analyze?');
// alert(analyzeColor2(promptInput));

$('.color_selector').click(function(){
    var newColor = analyzeColor2($(this).text());
    $('#color_result').text(newColor);
});
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function discountConverter(randomNum){

    switch(randomNum){
        case 0:
            return 1;
            break;
        case 1:
            return 0.10;
            break;
        case 2:
            return 0.25;
            break;
        case 3:
            return 0.35;
            break;
        case 4:
            return 0.50;
            break;
        case 5:
            return 0;
            break;
        default:
            return 1;
    }
}
var calculateTotal = function(itemPrice,randoNum){
        return (itemPrice - (itemPrice * discountConverter(randoNum)));
};
console.log(calculateTotal(20,2));
console.log(calculateTotal(10,5));
console.log(calculateTotal(50,3));
console.log(calculateTotal(300,4));


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

// var userNumber = prompt('what was your total?');
function discOutput(userNumber){
    return ('your lucky number '+luckyNumber+ '! Your original total of $' +userNumber+ ' is now: $'+ calculateTotal(userNumber,luckyNumber));
}

$('#discount_btn').click(function(){
    var newDiscount = discOutput($('#price_input').val());
    $('#discount_result').text(newDiscount);
});