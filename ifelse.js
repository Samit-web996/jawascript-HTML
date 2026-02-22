/////THERE ARE THREE TYPES TO WRITTEN IF ELSE CONDITION//////

var h = 75
var e = 45
var m = 98
var s = 100

var total = h + e + m + s
var per = total / 400 * 100

if( per < 33 ){
    console.log("student fail");
}
if(per >= 33 && per < 50){
    console.log("student pass with 3th div");
}
if(per >= 50 && per < 70){
    console.log("student pass with 2nd div");
    
}
if(per >= 70 &&  per <= 100){
    console.log("student pass  with 1st div");
    
}


var h = 75
var e = 45
var m = 98
var s = 100

var total = h + e + m + s
var per = total / 400 * 100

if( per < 33){
    console.log('student fail');
    
}
else {
    if(per >= 33 && per < 60){
        console.log('student pass with 3th div');
        
    }
    else if(per >=60 && per < 70){
        console.log('student pass with  2nd div');
        
    }
    else if(per >= 70 && per <= 100){
        console.log('student pass with 1st div');
        
    }
}

let h = 75
let e = 45
let m = 98
let s = 100

let total = h + e + m + s
let per = total / 400 * 100 

if (per < 33){
    console.log('student fail');
    
}
if(per >= 33){
    console.log('student pass');
    if(per >= 33 && per < 50 ){
        console.log('3rd div ');
    }
    else if( per >= 50 && per < 70){
        console.log('2nd div');
        
    }
    else if( per >= 70 && per <= 100){
        console.log('1st div');
        
    }

}