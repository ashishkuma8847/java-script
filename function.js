// JavaScript Functions
// JavaScript mein function ek block of code hota hai jo ek specific task ko perform karta hai. Aap function ko ek baar define kar sakte ho, aur usse baar-baar call karke use kar sakte ho. Function ka main purpose reusable code banane ka hota hai, taaki aapko bar-bar same code likhne ki zarurat na ho.

// RAGULAR OR NORMAL FUNCTION 
// YEH SABSE BASIC TARIKA Hai  FUNCTION BANANE KA ISKA NAAM HOTA HAI OR ESE KHI BHI CALL KAR SATHE HAI
// 1. Normal Function

// function sayHello() {
//     console.log("Hello, world!");
// }
// sayHello()

// 2. Arrow Function
// An arrow function is a shorter way to write a function in JavaScript.
// arrow function main ham return k bina hi call kra sakte hai jab wo block main ho

// const ashish = () => {
//     console.log("Hello from an arrow function!");
// }
// ashish()


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
  

// 4. annonymous Function
  // es mai ham variable k ander function ko naam diye bina chla sakte hai 

  //  let ashish =  function(a,b)  {
  //   return a*b
  //  }
  //  console.log(ashish(2,3));
   

// 5. iife (immedeately invoked function expression)
//   ye function turant exicue ho jata hai jaise hi difine hota hai

// (function(){
// console.log("iife");
// })()






// greetUser(displayMessage)


// Function Parameters and Return Values

// 1. Function with Parameters
// Parameters wo inputs hote hain jo aap function mein pass karte ho taaki us function ka behavior change ho sake.

// function addNumbers(a, b) {
//     console.log(a + b);
    
// }
// addNumbers(1,2)


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












