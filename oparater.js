//Arithmatic Operater
console.log(2.3 + 65.44);
console.log(2.3 - 65.44);
console.log(2.3 / 65.44);
console.log(2.3 * 65.44);
console.log(2.3 & 65.44);
 

//Relational Operater

var isBefore = 'Hello' > 'Hi';
var isAfter  = 'Hello' < 'Hi';
console.log( isBefore );
console.log( isAfter );

var x = 35, y = 65;
console.log( 42 < 45 );
console.log( 42 > 65);

console.log(x <= y );

console.log(x >= y );

console.log(x != y );

console.log(x == y );

console.log( 1 == '1'); // type unsafe equality oparator
console.log( 1 === '1'); 

console.log( 1 != '1'); // type unsafe equality opartor
console.log( 1 !== '1'); 

//Misleanious Operator
var name = 'sugat' , surname = 'moon';
console.log( name +' '+ surname);

var city = 'Wardha';
var isCity = city === 'Wardha' ? 'Yes' : 'No';
console.log( isCity);

//Logical Operater

var isRaining = true , goByWalking = true , goByCar = false;
var willTakeUmralla = isRaining && goByWalking;
console.log( willTakeUmralla);

var priceOfPhone = 42000, bankBalance = 20000, isInterested = true;
var willBuyPhone = priceOfPhone < bankBalance && isInterested;
console.log( willBuyPhone);


var priceOfPhone = 42000, bankBalance = 20000, isInterested = true, friendsBalance = 200000;
var willBuyPhone = ( priceOfPhone < bankBalance || friendsBalance >  priceOfPhone );
console.log( willBuyPhone);
