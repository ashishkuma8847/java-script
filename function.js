// JavaScript Functions

// JavaScript mein function ek block of code hota hai jo ek specific task ko perform karta hai. Aap function ko ek baar define kar sakte ho, aur usse baar-baar call karke use kar sakte ho. Function ka main purpose reusable code banane ka hota hai, taaki aapko bar-bar same code likhne ki zarurat na ho.

// RAGULAR OR NORMAL FUNCTION 
// YEH SABSE BASIC TARIKA Hai  FUNCTION BANANE KA ISKA NAAM HOTA HAI OR ESE KHI BHI CALL KAR SATHE HAI

// ==============================================================================================================================

// 1. Normal Function

// function sayHello() {
//     console.log("Hello, world!");
// }
// sayHello()

// ==============================================================================================================================

// 2. Arrow Function
// An arrow function is a shorter way to write a function in JavaScript.
// arrow function main ham return k bina hi call kra sakte hai jab wo block main ho

// const ashish = () => {
//     console.log("Hello from an arrow function!");
// }
// ashish()

// ==============================================================================================================================

// 3. Callback Function
// Ek callback function wo function hota hai jo ek dusre function ko argument ke roop mein pass kiya jata hai.

// function greetUser(callback) {
//     console.log("Greeting user...");
//     callback()
//   }

//   function displayMessage() {
//     console.log("This is a callback function!");
//   }
//   greetUser(displayMessage)
  
// ==============================================================================================================================

// 4. annonymous Function
  // es mai ham variable k ander function ko naam diye bina chla sakte hai 

  //  let ashish =  function(a,b)  {
  //   return a*b
  //  }
  //  console.log(ashish(2,3));
   
  // ==============================================================================================================================

// 5. iife (immedeately invoked function expression)
//   ye function turant exicue ho jata hai jaise hi difine hota hai

// (function(){
// console.log("iife");
// })()





// ==============================================================================================================================

// greetUser(displayMessage)


// Function Parameters and Return Values

// ==============================================================================================================================

// 1. Function with Parameters
// Parameters wo inputs hote hain jo aap function mein pass karte ho taaki us function ka behavior change ho sake.

// function addNumbers(a, b) {
//     console.log(a + b);
    
// }
// addNumbers(1,2)

// ==============================================================================================================================

//2. RETURN

// JavaScript mein return ek statement hai jo function ko exit karne ke liye use hota hai aur optional value ko function call karne wale ko bhejta hai. Jab return execute hota hai, function ka execution wahan hi ruk jata hai, aur jo value return ke baad hoti hai, woh caller ko wapas bheji jaati hai.

// function add(a, b) {
//   return a + b; // a aur b ka sum return kar raha hai
// }

// let result = add(3, 5);
// console.log(result); // 8

// return function ko exit karta hai aur optional value return karta hai.
// Agar return ke baad koi value nahi di, to undefined return hota hai.
// return ke baad ka code execute nahi hota.

// ==============================================================================================================================

// =================================================================//
// ======================== Date functions==========================//
// ========================_____==========================//

// --------------Get--------------//
// console.log("--------------Get----------------");

//  const d = new Date(/*'june 31, 1975 23:15:30'*/);
// console.log(d);

// let Time = d.getTime();
// console.log("Time: "+Time);

// let date = d.getDate();
// console.log("date: "+date);

// let day = d.getDay();
// console.log("day: "+day);

// let fullyear = d.getFullYear();
// console.log("fullyear: "+fullyear);

// let month = d.getMonth();
// console.log("month: "+month);

// let hours = d.getHours();
// console.log("hours: "+hours);

// let Minutes = d.getMinutes();
// console.log("Minutes: "+Minutes);

// let Seconds = d.getSeconds();
// console.log("Seconds: ",Seconds);

// let m_second = d.getMilliseconds();
// console.log("m_seconds: "+m_second);

// //-==--=------------------=-=-=-=--=-- utc time

// let UTC_date = d.getUTCDate();
// console.log("UTC_date: "+UTC_date);

// let UTC_day = d.getUTCDay();
// console.log("UTC_day: "+UTC_day);

// let UTC_full_year = d.getUTCFullYear();
// console.log("UTC_full_year: "+UTC_full_year);

// // -------------------SET---------//
// console.log("--------------Set----------------");

// d.setDate(25);
// console.log("set_date: "+d.getDate());

// d.setFullYear(2026);
// console.log("set_fullYear: "+d.getFullYear());

// d.setMonth(6);
// console.log("set_month: "+d.getMonth());

// d.setHours(11);
// console.log("set_Hours: "+d.getHours());

// d.setMinutes(55);
// console.log("set_Minutes: "+d.getMinutes());

// d.setSeconds(50);
// console.log("set_Seconds: "+d.getSeconds());

// d.setMilliseconds(582);
// console.log("set_Milliseconds: "+d.getMilliseconds());

// d.setTime(1784960750232)
// console.log("set_time: "+d.getTime());

// =================================================================//
// ======================== Math-functions =========================//
// ========================______=========================//


// const abc = eval("5+4-9*5");
// console.log(abc);

// console.log("ABS: "+Math.abs(2-5)); // ye - value return nhi karta

// function difference(a, b) {
//   console.log("pankaj", a - b);

//   return Math.abs(a - b);
// }

// console.log(difference(3, 5));

// console.log(difference(5, 3));

// console.log(difference(1.23456, 7.89012));



// console.log("floor: "+Math.floor(5.9)); // ye point value ko ignore karta hai 

// console.log("ceil: "+Math.ceil(5.1));// ye point value di jane par real value ko complete kar dega

// console.log("round: "+Math.round(4.4)); // ye half point value hone tak value ko complete nhi karta

// console.log("trunc: "+Math.trunc(9.4)); // ye bhi point value ko ignore karta hai 

// console.log("max: "+Math.max(4,1,6,4));// sabhi mai se sab se badi value ko retun karega

// console.log("min: "+Math.min(4,1,6,4));// sbhi mai sab se choti value ko retun karega

// console.log("pow: "+Math.pow(3,3));//ye 1 value ka qube kr k next value se multipy kr deta hai

// console.log("cbrt: "+Math.cbrt(27));// ye qubic value btata hai 

// console.log("random: "+Math.random()*100);// ye rendom value deta hia

// ---------------------max & min------------------------------
// let a = prompt("Enter Your 1st number");
// let b = prompt("Enter Your 2nd number");
// let c = prompt("Enter Your 3rd number");
// function test (a,b,c){
//     document.write("largest number is: "+Math.max(a,b,c),"<br>");
//     document.write("smallest number is: "+Math.min(a,b,c));
// }
// test(a,b,c)

// ------------------random number---------------------------------
// let aa = Math.random()*10;
// let a = Math.round(aa)
// let b = Math.random()*100;
// let c = Math.random()*100;
// function test (x,y,z){
//     document.write("1st ryndom number: "+x+"<br>");
//     document.write("2nd random number: "+y+"<br>");
//     document.write("3rd random number: "+z);
// }
// test(a,b,c)








