console.log( "Hello world" );

console.log( 200 );

console.log( true );

console.log( null );

var num = 10;

console.log( num );

console.log( "string", 10.11, true, false, null, num );

//we can define logs in the browser like this and when we refresh the page the logs will not removed

function addition (abb, acc)
{
    var akk = abb + acc;
    return akk;
}

console.log( addition(2,5))

// we write a function for addition operation, after we can use this function for our operations, we enter 2 parameter for addition and then gives us result

// we can write objects with curly brackets and array with square brackets. objects uses like a class or struct let me illustrate this

var car = {
    color : "white",
    speed : "180",
    drive : function(){ return "drive";}
}

var device = [
    "phone",
    "laptop",
    "tv",
    "mstation"
];

// after these declarations we can use them like object oriented
// ofcourse we can use this structures embedded

var pencil = {
    name : "artline",
    fine : "0.4",
    type : {
      no : "1",
      make : "hh"
    },
    writing : function(){return "writing"}
}

// we can access this values like that  => pencil.name this gives us "artline" for example, or pencil.writing() gives us function return
// we can access array elements with parameters like that => if we want to access first element we should write device[0] cuz lists starts with 0

// as we can create before, at the same time we can change values after for example pencil.name = "artline" but if we want to change it with console we can write pencil.name = "stabilo", then pencil.name variable is stabilo

if(name==="artline"){
    console.log("pencil name is artline");
}

// if statement using

for(var i=0; i<10; i++){
    console.log(i)
}

// we can see numbers with for loop like that

