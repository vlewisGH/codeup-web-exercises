"use strict";


/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
var sayHello = function(name){
    return 'hello '+ name;
};

$('#echo_user').click(function () {
   $('#greet_user').text("Hi " + $('#user_name').val());
});
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
// console.log(sayHello('Vincent'));

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
// var myName = 'Vincent';
// console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

$('#random_num').text(random);

$('#click_dice').click(function () {
   $('#random_num').text(random);
   gameResult();
});

var gameResult = function(){
    if(isTwo(parseInt($('#random_num').text()))){
        $('#game_result').text('You win!');
    }else{
        $('#game_result').text('You lose!');
    }
};


/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
var isTwo = function(input){
    return (input === 2);
};
console.log(isTwo(random));
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
var calculateTip = function(percentage,tab){
    return (percentage * tab);
};
console.log('You should tip: '+ calculateTip(0.25,50));
/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
var getUserInput = function(){
    var tipInput = (parseInt(prompt('what percentage would you like to tip?'))/100);
    var tabInput = parseInt(prompt('How much is your bill?'));

    alert( 'you should tip: ' + calculateTip(tipInput,tabInput));
};
getUserInput();
/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
var applyDiscount = function(priceInput,discountInput){
    return (priceInput * discountInput);
};
console.log('the discount is: ' + applyDiscount(40,0.20));

var add = function(x,y){
    return (x+y);
};
//
var subtract = function(x,y){
    return (x - y);
};
var multiply= function(x,y){
    return (x*y);
};
var divide = function(x,y){
    return (x/y);
};

console.log(subtract(7,3));

$('#calc_add_btn').click(function() {
    $('#output_p').text(add(parseInt($('#calc_first_input').val()), (parseInt($('#calc_second_input').val()))));
});
$('#calc_sub_btn').click(function() {
    $('#output_p').text(subtract(parseInt($('#calc_first_input').val()), (parseInt($('#calc_second_input').val()))));
});
$('#calc_mult_btn').click(function() {
    $('#output_p').text(multiply(parseInt($('#calc_first_input').val()), (parseInt($('#calc_second_input').val()))));
});
$('#calc_div_btn').click(function() {
    $('#output_p').text(divide(parseInt($('#calc_first_input').val()), (parseInt($('#calc_second_input').val()))));
});