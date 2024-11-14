// conditions 
// conditions ko control flow bhi kha ja sakta  hai
// conditional statements
//  condition statement ka use alag alag jagah k adhar par alag alag karwai karne k liye hota hai
// 1. if ,else if ,else
// if statement code k ek block ko chlati hai jd tak spesifide condition true ho .agar pehli condition false hai to or statement ko test karne k liye nai condition nishchit karti hai .baki staement code k ek block ko chlati hai agar sari pichli statement galat hia tab
let a = 25;
let b = 5
if (a < b){
    console.log("ashish");
}
else if (a / b){
    console.log("taak");
}
else {
    console.log('error'); 
}
// 2. loops
// loop hme code k ek block ko baar baar chlane ki ijajat deta hai
// 1. for loop
// for loop k use ham tab karte jab hme pata hota hai ki hme ese kitni baar chlana hai
let c  = 1;
for (c = 1; c <= 10;c++ ){
    console.log(c);
}
// 2. while loops
// while loop code ko jab tak chlata hai jab tak uski specified condition true hai
let count = 1;

while (count <= 5) {
    console.log("Count is:", count);
    count++;
}
// 3. Do-While Loops
// dowhile loop k smaan hi hota hai par ye condition ki janch karne se pehle code block ko ek baar chlata hai
let number = 1;

do {
    console.log("Number is:", number);
    number++;
} while (number <= 5);




// 3. Switch Statement
// switch statement ka estemal alag alag jagah k adhar par alag alag karwai k liye kiya jata hai. ye multiple likhne ka saaf trika hai agar statmenta jo ek smikarn ki alag alag values se compare karti hai
let fruit =  prompt('apple');

switch (fruit) {
    case 'banana':
        console.log('Banana is $1');
        break;
    case 'apple':
        console.log('Apple is $2');
        break;
    case 'orange':
        console.log('Orange is $1.5');
        break;
    default:
        console.log('Sorry, we are out of ' + fruit);
        break;
}
// prompt statement
// let id = prompt("80")
// switch (id) {
//     case "70":
//         console.log('1');   
//         break;

//     default:
//         console.log('taak'+ id);

//         break;
// }



// Conclusion
// JavaScript If-Else Statement Example
// let score = prompt("MARKS");
// let grade;

// if (score >= 90) {
//     grade = "A++";
// }
// else if (score >= 80) {
//     grade = "A";
// }

// else if (score >= 80) {
//     grade = "B";
// }
// else if (score >= 70) {
//     grade = "C";
// } 
// else if (score >= 60) {
//     grade = "D";
// }
//  else {
//     grade = "F";
// }
// console.log("Alex's grade is: " + grade);