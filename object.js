var Sholay = {
name : [ 'Jay', 'Viry', 'Dharmendra', 'Gabber'],
   'public' : 'Yes' ,
   DateOfRealise : 1991,
    
   "Box office Collection" : {
     contries : 10,
     collection : 12300000000
   },
   addTocollection : function( amount ) {
        this["Box office Collection"].collection += amount;
   }

   
};
// console.log( Sholay.name );


// console.log( Sholay.name[3]);

// Sholay.addTocollection( 123231313 );
// console.log( Sholay["Box office Collection"]['collection']);
Sholay.villan = 'Gubber';
Sholay.name[2] = 'sugat';
Sholay.addNewName = function( newName ){
    this.name[this.name.length] = newName; 
}
 
Sholay.addNewName( 'moon' );
Sholay.addNewName( 'Pratibha' );
delete Sholay["Box office Collection"];
console.log( Sholay );
 