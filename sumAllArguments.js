function sumAll(){
    for(var i = 0, result = 0; i < arguments.length; i++ ){
        result += arguments[i];
    }
    return result;
}
console.log( sumAll( 25,26,5,8,8,7,96,5699,5) );
console.log( sumAll(55,6,5,8,9) );
console.log( sumAll(5,6) );