//  console.log( y ) is will show error this is y is not defined
console.log( x )
var x = 1
 
console.log( x )

foo()  // it will executed normally
function foo() {
    console.log( 'OK' )
}

// fun() it will through an error for the expression function 

var fun = function() {
     
    console.log( 'Not OK')
}