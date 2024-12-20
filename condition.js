// conditions 
// conditions ko control flow bhi kha ja sakta  hai
// conditional statements
//  condition statement ka use alag alag jagah k adhar par alag alag karwai karne k liye hota hai

// 1. if ,else if ,else(type opf if else 1. if 2.if else 3. ladder 4. nested )

// if statement code k ek block ko chlati hai tab tak spesifide condition true ho .agar pehli condition false hai to or statement ko test karne k liye nai condition nishchit karti hai .baki staement code k ek block ko chlati hai agar sari pichli statement galat hai tab
// let a = 5
// let b = "5"
// if (a < b){
//      console.log("taak");
// }
// else if(a === b){
//     console.log("ashish");  
// }
// else{
//     console.log("error");
// }

// 2. loops
// loop hme code k ek block ko baar baar chlane ki ijajat deta hai
// 1. for loop
// for loop k use ham tab karte jab hme pata hota hai ki hme ese kitni baar chlana hai
// for (let id = 1; id >= -10; id--){
//     console.log(id);      
// }
// 2. while loops
// while loop code ko jab tak chlata hai jab tak uski specified condition true hai
// let dc = 1
// while (dc <= 5){
//     console.log(dc);
//     dc++  
// }
// 3. Do-While Loops
// dowhile ,while k smaan hi hota hai par ye condition ki janch karne se pehle code block ko ek baar chlata hai
// let numb = 1;
// let demo1 = 1
// do{
//     console.log(demo1);
//     demo1++
// }while(demo1 <= 10)
//     // in positive
// let demo = 1
// do {
//     console.log(demo);
//     demo--
// }while(demo >= -5)

// 3. Switch Statement
// switch statement ka estemal alag alag jagah k adhar par alag alag karwai k liye kiya jata hai. ye multiple likhne ka saaf trika hai agar statment jo ek smikarn ki alag alag values se compare karti hai. 
// let fruits =    (prompt("fruits"))
// switch(fruits) {
//     case '0':
//         console.log("the days");
//         break;
//         case '1':
//             console.log("the next day");
//             break;
//             case '2':
//                 console.log("early day");
//                 break;
//                 default:
//                     console.log("i am death strenth up" +fruits);
//                     break;
// }
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
// console.log("none of them  : " + grade);