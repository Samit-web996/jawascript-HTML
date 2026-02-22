// function study(){              //function declaration / parameter 
//      console.log("sunny ?");


// const { log } = require("console")

// const { log } = require("console");

     
// }
// study()        //function call 


// function greak(name){
//      console.log("hey " + name + " !");     
// }
// greak("sunny")
// greak("bobby")
// greak("samit")

// function numm(a, b){
//      console.log(23 + 23);     
// }
// numm()


// function numm(a, b){
//      let sum = a * b ;
//      return sum;

// }
// console.log(numm(23, 23))


////////regular function////////////////

// function name(){
//      console.log("sunny");
     
// }
// name()

// \//////// function expression ////////////////

// var name = function(){
//      console.log("sunny2");
     
// }
// name()



///////////////////function arrow/////////////////////

// var name = () => {
//      console.log("sunny3");
     
// }
// name()

// let fruits = ["apple", "banana", "mango"]
// for(let sunny of fruits){
//      console.log(sunny);
     
// }

// let name =  "samit";

// for (let nam of name){
//      console.log(nam);
     
// }


// let name = "Sunny";

// for (let ch of name) {
//     console.log(ch);
// }

// let name = "bobby"
// for (let nam of name){
//      console.log(nam);
// }

// for (let i= 1 ; i < 5 ; i++){         // for loop
//      console.log(i);
// }

// let i =1;                  // while loop
// while(i <= 5){
//      console.log(i);
//      i++
     
// }


// let  i =  1   // do while loop
// do{
//      console.log(i);
//      i++  
// }
// while(i <= 5)


     
// function checkNumber(n){              ///EVEN ODD concept             
//      if(n % 2=== 0 )
//           return "The number is EVEN "
//      else 
//           return"The number is ODD"
// }
// console.log(checkNumber(4))


// function checkNumber(n){               // PRIME NUMBER
//      for(let i = 2 ; i < n ; i++ ){
//      if (n %  i === 0)
//          return "Number is not prime"   
// }
// return "Number is prime"
// }

//      console.log(checkNumber(9));



// function prime(n){                           //PRIME NUMBER
//      for(i = 2 ; i < n; i++){
//           if(n % i === 0 )
//                return "The value is not prime number"

//      }
//      return " The value is prime number"
// }
// console.log(prime(5));



// function factorial(n){                           //FACTORIAL
//    let sum =  1
//    for(let i = 1; i <=n; i++ ){
//    sum = sum * i
// }
// return sum
// }
// console.log(factorial(6));


// function fac(n){                                  //FACTORIAL
//      sum = 1
//      for(let i  = 1 ; i<= n ; i++)
//           sum = sum * i
//      return sum
// }
// console.log(fac(6));


// function outerFunction(){                   //CLOSURE
//      let a = 10
//      let b = 20
//      function innerFunction(){
//           console.log(a);
//           console.log(b);
          
          
//      }
//      innerFunction()
// }
// outerFunction()


// function dadaji(){                    // CLOSURE
//      let ru = 1000
     
//      function papa(){
//           let ru = 800
          
//      function sunny(){
//           let ru = 500
//           console.log(ru)
//           console.log("SUNNYRAJ");
          
//      }
//      sunny()
//      }
//      papa()
// }
// dadaji()


// function client(){
//      let leave = 5
//      console.log(leave);
//      function tl(){
//           let leave = 3
//           console.log(leave);
//           function employee(){
//                let leave = 2
//                console.log(leave);
               
//           }
//           employee()
//      }
//      tl()
// }
// client()


/*function checkNumber(n){
     if( n % 2===0 )
          return "number is even"
     else 
          return "number is odd"

}
console.log(checkNumber(2));*/


// function prime(n){
//      for(i = 2 ; i < n ;i++)
//           if(n % i === 0)
//                return "num is not prime"
          

// return "num is prime"
// }
// console.log(prime(3));

// function factorial(n){
//      sum = 1
//      for(let i = 1 ; i <= n ; i++)
//           sum = sum * i
// return sum
// }
// console.log(factorial(21));




//  function fac(n){                                  //FACTORIAL
//      sum = 1
//      for(let i  = 1 ; i<= n ; i++)
//           sum = sum * i
//      return sum
// }


// let sunny = ["AB","BB","FF","GG"]
// let [name , name1 , name2, name3] = sunny
// console.log(sunny);


/*let person = {
     name : "sunnny",
     age : 22, 
     phone : "23456",
     mailId : "sunnnybhasnieya@getMaxListeners.com"


}
let {name , age , phone , mailId} = person

console.log(person);*/

// function add(a,b){
//      return a + b

// }
// let result = add(34,3)
// console.log(result);





// function sayHello(){                         //callback function
//      console.log("hello");        
     
// }
// function add(num1 , num2 , callback){
//      callback();
//      console.log(num1 + num2);
     
// }
// add(10, 20 , sayHello)





// console.log("Step 1");

// setTimeout(() => {
//   console.log("Step 2 - after 2 seconds");
// }, 2000);

// console.log("Step 3");


// console.log("step 1");

// setTimeout(() =>{
//      console.log("step 2 - after 2 second");
     
// }, 4000);
// console.log("step 3");

// setTimeout(() =>{
//      console.log("sunny - after 3 second");
     
// },2000)

// console.log("sunnyboss");


// setTimeout(() =>{
//      console.log("award goes to sunny");
     
// } ,5000)


// setInterval(function(){
//      console.log("sunny");
     
// }, 1000)


// function name1(){
//      console.log("sunny");
     
// }
// function sum(a , b , callback){
//      let c = a + b;
//      console.log(c);
//      callback();
     
// }
// sum(10,20 ,  name1)

// function name3(){
//      console.log("sunnyy");
// }

// function minus(a,b,callback){
//      let c = a + b
//      console.log(c);
//      callback()
     
// }

// name(10,20 , name3)


// function name1(){
//      console.log("sunny");
     
// }
// function sum(a , b , callback){
//      let c = a + b;
//      console.log(c);
//      callback();
     
// }
// sum(  10,20 ,name1   )
// ==========================================================
// let promise = new Promise((resolve , reject) => {
//      if (success){
//           resolve("task done!")
//      }else{
//           reject("task failed!")
//      }
// })
// ======================FUNCTION PROGRAM==============================

// function sum(a, b){
//      console.log(a + b);
     
// }
// sum(10,20)

// function minus(a , b){
//      console.log(a - b);
     
// }
// minus(2 , 4)

// function multiply(a , b){
//      console.log(a * b);
     
// }
// multiply(2,2)

// function division(a, b){
//      console.log( a / b);
     
// }
// division( 6 , 2)

// function message(){
//      console.log("i love JS");
     
// }
// message()

// function isEven(num){
//      return num % 2 === 0 ? "even":"odd";
// }
// console.log(isEven(3));

// function findEvenOdd(number){
//      if ( number % 2 === 0)
//           return`${number} is EVEN`
//      else return ` ${number} is ODD`
// }
// let result = findEvenOdd(690)
// console.log(result);


console.log("Start");

function Register(callback){
     setTimeout(() =>{
          console.log('Register');
          callback()
     },1000)
}

function sendEmail(callback){
     setTimeout(()  =>{
          console.log("Welcome");
          callback()
     }, 3000)
}

function getVerification(callback){
     setTimeout(() => {
          console.log("EnterOTP");
          callback()
          
     }, 5000)
}
function login(callback){
     setTimeout(() =>{
          console.log("Login");
          callback()
          
     }, 1000)
}

function getUserDetail(callback){
     setTimeout(() =>{
          console.log("Get user data");
          callback()
     }, 1000)
}
function endProcess(){
     setTimeout(() =>{
          console.log("END");
          
          
     }, 2000)
}

console.log("EnD");


Register(function(){
sendEmail(function(){
getVerification(function(){
login(function(){
getUserDetail(function(){
endProcess();
    });
});
});
});
});





// console.log("Start")
// function register(callback){
//        setTimeout(() => {
//           console.log('Register');
//           callback();
//        }, 7000)
      
// }
// function sendEmail(callback){
//        setTimeout(() => {
//           console.log("Welcome");
//           callback();
//        }, 2000)
      
// }

// function login(callback){
//        setTimeout(() => {
//            console.log("Login");
//            callback();
//        }, 10000)
      
// }
// function getData(callback){
//        setTimeout(() => {
//             console.log("Get user data");
//             callback();
//        }, 8000)
      
// }
// function accessData(callback){
//        setTimeout(() => {
//        console.log("Access user data");
//        callback();
//        }, 5000)
   
// }

// function endProcess(){
//        setTimeout(() => {
//        console.log("End");
//        }, 5000)
   
// }
// // console.log("End")


