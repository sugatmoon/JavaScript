// here we have three data type i.e. number, string, boolean
//NOTE: we can not use to declear data directly
// it must be store in VAR but the repective data type can store internally
var x = 1, y; // here 1 is store internally in float, y treated as undefined

console.log(x); // simply print the 1
console.log(y); // simply print y as undefined

var z = 45.25;
console.log( typeof x);
console.log(typeof 2.1);
console.log( typeof z);


//BOOLEAN
var isRanning = true , isPouring = false;
console.log(isPouring);
console.log( typeof isRanning);

// concantination
var name = "Sugat" , message = 'Good Morning';
console.log( typeof message);
console.log( name);
console.log( message);


console.log( typeof message);
console.log( name+ "!!!!"+message);
console.log(message.length);



// NULL and UNDEFINED
var k ;
var obj = {
    y : 5 ,
    x : 6
};

console.log( k) // undefined
obj = null;
console.log(obj) // null as the memory are deleted;
