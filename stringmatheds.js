// string mathods

// ==============================================================================================================================

// 1.lenght
// "Length property string ki length return karti hai."
// let a= "lenght"
// a=a.length
// console.log(a);

// ==============================================================================================================================

// 2.CharAt()
//"charAt() method ek specified index (position) par string ka character return karta hai."
// Yeh bilkul simple hai, matlab charAt() ek particular position par jo character hoga, wo return karega.

// let a= "hello"
// a=a.charAt(0)
// console.log(a); 

// ==============================================================================================================================

//3. charCodeAt()
//  method ek specified index par string ke character ka code return karta hai.
// Yeh method us index par jo character hoga, uska code (jaise Unicode value) return karega.

// let a= "hello"
// a=a.charCodeAt(0)
// console.log(a); 

// ==============================================================================================================================

//4.
// at():

// let a= "hello"
// a=a.at(0)
// console.log(a);

// ==============================================================================================================================

//5. []
// let a= "hello"
// a=a[0]
// console.log(a);

// ==============================================================================================================================

//6. Extracting String Parts
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end) //ye "-" (nagitive) value ko return nhi karta output complete value hi return aayega
// substr(start, length)

// "slice() ek string ka hissa extract karta hai aur us extracted hissa ko naye string mein return karta hai. Yeh method 2 parameters leta hai: start position, aur end position (jahan tak, end ko include nahi kiya jata)."

// substring(start, end)

// let a= "hello"
// a=a.slice(1,4)
// console.log(a);

// substr(start, length)
// "substr() slice() ke similar hota hai. Par difference yeh hai ki second parameter extracted part ki length specify karta hai, na ki end position."
// Iska matlab, substr() mein hum start position aur extracted part ki length dete hain, jabki slice() mein start aur end positions diye jaate hain.


// let a= "hello"
// a=a.substr(2,4)
// console.log(a);

// ==============================================================================================================================

//7. toUpperCase():  toLowerCase():
// "Ek string ko upper case mein convert karne ke liye toUpperCase() use kiya jaata hai."
// "Ek string ko lower case mein convert karne ke liye toLowerCase() use kiya jaata hai."
// Dono methods string ke characters ko change karte hain:
// toUpperCase() saari characters ko capital (uppercase) bana deta hai.
// toLowerCase() saari characters ko small (lowercase) bana deta hai.

// let a= "hello"
// a=a. toUpperCase()
// b= a.toLowerCase()
// console.log(a); 
// console.log(b);
 

// ==============================================================================================================================

//8. "concat() method ko plus operator ke jagah use kiya ja sakta hai. Yeh dono lines ek hi kaam karti hain."
// Matlab, concat() method ko string ko join karne ke liye use kar sakte ho, jaise + operator se karte hain.

// let str1 = "Hello";
// let str2 = "World";
// // Using + operator
// let result1 = str1 + " " + str2;  
// console.log(result1);

// // Using concat() method
// let result2 = str1.concat(" ", str2); 
// console.log(result2);

// ==============================================================================================================================

//9. 
// trim()                                                                                                   
// trim start trim end
    
// "trim() method string ke dono sides se whitespace hata deta hai."
// Yeh method string ke starting aur ending mein jo extra spaces hote hain, unhe remove kar deta hai.

// let a= "     hello    "
// a=a.trim()
// b= a.trimStart() 
// c= a.trimEnd()
// console.log(a); 
// console.log(b);
// console.log(c);

// ==============================================================================================================================

// 10.padStart() method ek string ke starting se characters add karta hai.
// Yeh ek string ko doosri string (baar-baar repeat karke) ke saath pad karta hai, jab tak string ki length specified length tak na pahuch jaaye.
// padEnd() method ek string ke end (last) mein characters add karta hai.
// Yeh bhi ek string ko doosri string (baar-baar repeat karke) ke saath pad karta hai, jab tak string ki length specified length tak na pahuch jaaye.

// let str = "75";
// // Starting se pad karna (padStart)
// let paddedStart = str.padStart(5, "0");
// console.log(paddedStart); // Output: "00075"
// // End se pad karna (padEnd)
// let paddedEnd = str.padEnd(5, "0");
// console.log(paddedEnd); // Output: "75000"

// ==============================================================================================================================

// 11.repeat() method ek string ke multiple copies banata hai aur unhe combine karke ek nayi string return karta hai.
// Yeh method original string ko change nahi karta.

// let dashLine = "-".repeat(10);
// console.log(dashLine); // Output: "----------"

// ==============================================================================================================================

//12 .
// replace() method ek string ke andar specified value ko doosri value ke saath replace karta hai.
// Yeh ek nayi string return karta hai aur original string ko change nahi karta.

// let str = "Hello, World!";

// // "World" ko "Everyone" se replace karte hain
// let newStr = str.replace("World", "Everyone");
// console.log(newStr); // Output: "Hello, Everyone!"  

// replaceAll() method ek string ke andar saari occurrences (jitni baar value milegi) ko doosri value ke saath replace karta hai.
// Yeh ek nayi string return karta hai aur original string ko change nahi karta.

// let str = "Banana, Banana, Banana!";

// // Saare "Banana" ko "Apple" se replace karte hain
// let newStr = str.replaceAll("Banana", "Apple");
// console.log(newStr); // Output: "Apple, Apple, Apple!"

// ==============================================================================================================================

// //13.
// split() method ek string ko array mein convert karta hai, aur wo array string ke parts ka collection hota hai.
// Yeh method ek separator ka use karke string ko todta hai.

// let a = "ashish"
// a= a.split()
// console.log(a);//output ['ashish']
                   
// let ashish =new String('ashish')
// console.log(ashish);
 

