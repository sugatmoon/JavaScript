var days = [
    'Monday',
    'Tuesday',
    'Thursday',
    'Friday',
    'Satersday'
];
days.sort();

days.reverse();
 
days[days.length] = 'Wenesday';
days[days.length] = 'sunday';

console.log(days.length );

console.log( 1 + days.indexOf('sunday') );
console.log( days );
 



days.push( 'NODAY' );
days.sort();
console.log( days );



days.pop();
console.log( days );
 

var x = days.pop();
 
console.log( x );
