console.log('hello from external JavaScript');
alert('Welcome to my Website!');
var favColor = prompt('what is your favorite color?');

console.log("Great, "+favColor+ " is my favorite color too!");

var movielist = [];
var movieTotal = 0;
var stopper = true;

function addNewMovie(title,noOfDays){
    var movie = {
        movTitle: title,
        days: noOfDays
    };
    movielist.push(movie);
//     console.log(movielist.length);
//     console.log(movielist[0].movTitle);
//     console.log(movielist[0].days);
}

function totaler(){
    for(var i=0;i < movielist.length; i++){
        var rentalcost = (movielist[i].days * 3);
    }
    movieTotal+= rentalcost;
    // console.log(movieTotal);
}
function inputOutput() {
    var movieTitle = prompt('what is the name of the movie? ');
    var daysRented = prompt('how many days have you had the movie?');

    addNewMovie(movieTitle,daysRented);
    totaler();
    alert(movieTotal);
}
do {
    inputOutput();
    console.log('current movies:');
    for(var i=0;i<movielist.length;i++){
        console.log(movielist[i].movTitle);
    }
    stopper = confirm('would you like to add more movies?');
}while(stopper === true);

var contractorAry=[];
var totalPay = 0;
var contractStop = true;

function addCompany(compName,rate,hours){
    var company = {
        companyName: compName,
        payRate: rate,
        hoursWorked: hours
    };
    contractorAry.push(company);
}
function payTotaler(){
    for(var i=0;i < contractorAry.length; i++){
        var weekPay = (contractorAry[i].payRate * contractorAry[i].hoursWorked);
    }
    totalPay+= weekPay;
}
function payInputOutput() {
    var companyNameInput = prompt('what company did you work for?');
    var payRateInput = prompt('what is your pay rate? ');
    var hoursWorkedInput = prompt('How many hours did you work this week?');

    addCompany(companyNameInput,payRateInput,hoursWorkedInput);
    payTotaler();
    alert(totalPay);
}
do {
    payInputOutput();
    console.log('You are currently working for:');
    for(var i=0;i<contractorAry.length;i++){
        console.log(contractorAry[i].companyName);
    }
    contractStop = confirm('would you like to add another company?');
}while(contractStop === true);

// var mathClass = {full:true,classDay:'Monday'};
// var englishClass = {full:false,classDay:'Thursday'};
// var spanishClass = {full:true,classDay:'Tuesday'};
// var physicsClass = {full:false,classDay:'Wednesday'};
// var schedule = ['Monday','Tuesday','Thursday'];
//
// function checkSchedule(classChoice){
//     for(var i=0;i < schedule.length; i++) {
//         if (schedule[i] === classChoice.classDay) {
//             alert('this class conflicts with your current schedule, please choose another');
//             enrollMe();
//             break;
//         }
//     }
// }
// function validator(toValidate){
//     switch (toValidate) {
//         case 'Math':
//             checkSchedule(mathClass);
//         case 'English':
//             checkSchedule(englishClass);
//         case 'Spanish':
//             checkSchedule(spanishClass);
//         case 'Physics':
//             checkSchedule(physicsClass);
//         case false:
//             break;
//         default:
//             alert('That class is not offered here');
//             enrollMe();
//     }
// }
// function enrollMe() {
//     var classInput = prompt('what class would you like to take? Math, English, Spanish, Physics');
//     validator(classInput);
//     alert('you are sucessfully enrolled;');
// }
//
// enrollMe();