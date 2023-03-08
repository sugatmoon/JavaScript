 // funtion decleration syntax
 function foo( x , y) {
    console.log( 'This is the function in javaScript.');
}
foo( 52,6);
// function expresstion syntax (more like declaration of variable)
 var fun = function ( s,g ) {
    console.log ( 'This is function expression' );
}
fun(52,6);



// Only difference is that if we call foo() before the foo() defination it gets call correctly
// and if we call fun()  as an expression before the fun expression defination it doesn't call this will through an error