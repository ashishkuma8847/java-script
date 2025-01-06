//array lenght (ARRAY KI LENGHT DEKHTA HAI)__________________________________________________________________________________

// let a = ["ashish","TAAK"]
// console.log(a.length);


//array toString()(array ko string mai covert kr deta hai )___________________________________________________________________

//  let a = ["ashish","TAAK"]
// console.log(a.toString());


//at()(array main index se position pta karta hai)_________________________________________________________________________

//let a = ["ashish","TAAK"]
// console.log(a.at(1));

//join()(array ko sting mai change kr dega jab ham uske ander value paas karte hai matlab uske ander di gai value ko ye array mai pass kr dega)____________________________________________________________________________________________

// let a = ["ashish","TAAK"]
// console.log( a.join(" "));


//pop()(array mai last value ko remove kr dega)______________________________________________________________________________

// let a = ["ashish","TAAK"]
// console.log(a.pop());


//push()(array mai last main di gyi value ko add kr dega)____________________________________________________________________

// let a = ["ashish","TAAK"]
// console.log(a.push("i"));



//shift()(array mai first value ko remove kr dega)_____________________________________________________________________________

// let a = ["ashish","TAAK"]
// console.log(a.shift());



//unshift()(array mai first side di gai value ko add dega)_____________________________________________________________________

// let a = ["ashish","TAAK"]
// console.log(a.unshift("i"));
// console.log(a);

//  delete (ko Avoid Karna Chahiye)____________________________________________________________________________________________
// Ye array ko delete nahi karta, sirf variable ko undefined banata hai.

// let fruits = ["apple", "banana", "mango"];
// delete fruits[1]; 
// console.log(fruits); 

// splice()___________________________________________________________________________________________________________________
// Elements ko add, remove, ya replace karne ke liye use hota hai.
 
// let fruits = ["apple", "banana", "mango"];
// let b=fruits.splice(1, 1, "orange");
// console.log(b);
// console.log(fruits);
 

// slice()____________________________________________________________________________________________________________________
// Array ka ek portion return karta hai (original array modify nahi hota).

// let fruits = ["apple", "banana", "mango", "orange"];
// let newFruits = fruits.slice(1, 3); 
// console.log(newFruits); 



// concat()___________________________________________________________________________________________________________________
// Do arrays ko combine karta hai

// let fruits1 = ["apple", "banana"];
// let fruits2 = ["mango", "orange"];
// let combined = fruits1.concat(fruits2);
// console.log(combined); 

// toSpliced() method JavaScript me nayi cheez hai . Yeh splice() ki tarah kaam karta hai, lekin original array ko modify nahi karta._________________________________________________________________________________________________________________________

// Key Difference:
// toSpliced(): Naya array banata hai aur original array ko safe rakhta hai.
// splice(): Directly original array ko modify karta hai.

// let fruits = ["apple", "banana"];
// let newFruits = fruits.toSpliced(1, 0, "mango", "orange"); 
// console.log(fruits);   
// console.log(newFruits); 

// copyWithin() _______________________________________________________________________________________________________________
// copyWithin() method ka use ek hi array ke andar elements ko copy karne aur overwrite karne ke liye hota hai. Ye array ki length ko change nahi karta aur original array ko modify karta hai (in-place operation).

// let numbers = [10, 20, 30, 40, 50];
// numbers.copyWithin(-2, 0, 2); 
// console.log(numbers);

// flat() _______________________________________________________________________________________________________________________
// flat() method ka use array ke nested arrays ko flatten (ek level pe le aana) ke liye hota hai. Matlab agar array ke andar sub-arrays hain, toh flat() unko ek array me convert kar deta hai.

// let numbers = [1, [2, [3, 4], 5], 6];
// let flatNumbers = numbers.flat(2); 
// console.log(flatNumbers); 

// map ()________________________________________________________________________________________________________________________
// kaam: ek nya aaray bnata hai jo har element par ek callback function apply karta hai
// return: ek nya array deta hai
// kab use krein: jab array ke elemntes ko transform karke ek naya array chaiye ho

// const n = [1,2,3,4,5]
// const d = n.map(num => num*2)
// console.log(d);
// console.log(n);

// foreach()_____________________________________________________________________________________________________________________
// kaam: har element par ek callback function ko execute karta hai useallay side effect (jaise console.log ya external variable modify karna ) ke liye
// return: kuch mhi return karta undifind aata hai
// use: jab sirf iterate karna ho aur koi naya array create na jarna ho

// const n= [1,2,3,4,5]
// n.forEach(num=>console.log(num*2))


// JavaScript mein reduce() method ek array method hai jo array ke elements ko ek single value mein reduce karne ke liye use hota hai. Iska syntax kuch is tarah hota hai:____________________________________________________________________________________

// array.reduce(callbackFunction, initialValue);

// callbackFunction ek function hoti hai jo array ke har element par call hoti hai.
// initialValue (optional) wo initial value hai jo accumulator ko di jaati hai.

// reduce() Method Ka Kaam:

// Accumulator: Ye wo value hoti hai jo har iteration ke baad update hoti hai.
// Current Value: Ye array ka current element hota hai jo is waqt process ho raha hota hai.

// let numbers = [1, 2, 3, 4];

// let sum = numbers.reduce(function(accumulator, currentValue) {
    
//     return accumulator + currentValue;

// },0); // Initial value 0 hai

// console.log(sum); 





