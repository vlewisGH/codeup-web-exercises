//while 1
//
var i = 2;
while(i < 65537){
    console.log(i);
    i*=2;
}
//
var toSell = Math.floor((Math.random() * 50))+50;
var salesTotal = 0;

//while 2
do{
    var nowSelling = Math.floor((Math.random()*5))+1;

    if ((nowSelling + salesTotal) > toSell ){
        nowSelling = toSell - salesTotal;
    }

    salesTotal += nowSelling;

    console.log('I just sold '+nowSelling+ ' icecream cones! Total sold is: '+salesTotal +' of '+toSell);
}while(salesTotal < toSell);

