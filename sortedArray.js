var numbers = [ 32,22,6,565,65,98,97,11,54,6,64,5,77,21,54,5,46,4,70,36];
 

numbers.sort( function( x , y ){
    // console.log( x , y);
    return x - y;
} );
 
console.log( numbers );




var project1 = [
    {huaurs : 32    ,name : 'Project1'  },
    {huaurs : 33  ,name : 'Project2'  },
    {huaurs : 687    ,name : 'Project3'  },
    {huaurs :  1665   ,name : 'Project4'  },
    {huaurs :  156   ,name : 'Project5'  },
    {huaurs :  2313   ,name : 'Project6'  }
];




project1.sort( function( x, y ){
    return x.huaurs - y.huaurs;
} )


console.log( project1 );
