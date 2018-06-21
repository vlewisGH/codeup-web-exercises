var meterConv ={
    toNanos: 1000000000,
    toMicros: 1000000,
    toMillis: 1000,
    toCentis: 100,
    toMeters: 1,
    toKilos: 0.001,
    toInches: 39.3701,
    toFeet: 3.28084,
    toYards: 1.09361,
    toMiles: 0.000621371,
    fromNanos:0.000000001,
    fromMicros: 0.000001,
    fromMillis: 0.001,
    fromCentis: 0.01,
    fromMeters: 1,
    fromkilos: 1000,
    fromInches: 0.0254,
    fromFeet: 0.3048,
    fromYards: 0.9144,
    fromMiles: 1609.34
};

var meterConverter = function(unitTo,numberInput){

    return (meterConv[unitTo] * numberInput);

};

var convToMeter = function(unitToConv,numToConv){
    var testVar = meterConv[unitToConv] * parseFloat(numToConv);
    return testVar;
};

var mainConv = function(unitFrom,unitTo,number){
    var numInMeters = convToMeter(unitFrom,number);
    // console.log(meterConv[unitFrom]);
    // console.log(meterConv[unitTo]);
    // console.log(unitFrom);
    // console.log(number);
    // console.log(numInMeters);
    return meterConverter(unitTo,numInMeters);
};
var test = $('#unit_measure').val();
$('#conv_button').click(function(){
    $('#converted_output').text(mainConv(test,$('#to_unit_measure').val(),$('#num_to_convert').val()));
});