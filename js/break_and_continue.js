var bAndC = function(){
    var userInput = prompt('please enter an odd number between 1 and 50:');
    if ((isNaN(userInput)) || (userInput%2===0)){
        console.log('that is not an odd number');
        return;
    }

    for (var i = 1; i <=50; i++){
        if (i === parseFloat(userInput) || i%2===0){
            continue;
        }
        console.log('here is and odd number: '+i);
    }

};

bAndC();