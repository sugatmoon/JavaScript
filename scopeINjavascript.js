var x =5; //global variable
function foo(){
    var y = 6;// local variable
    console.log('The global variable x:'+ x);
    console.log('The local variable y:'+ y);
    function goo() {
        var b = 5;
        console.log('The global variable x:'+ x);
        console.log('The global variable b:'+ b);
    }
    goo();
    console.log('The global variable b:'+ b);
};
foo();
console.log('The local variable y:'+ y);