// console.log("ashish")
// let, var ,const 3types of variabels keywords or en sabhi ko keyword kha jata hai enko di gayi id ko veriables or eske result ko value kha jata hai or enka estemal veriables ko declare karne k liye kiya jata hai . programing mai variables ka matlab hai memory mai data ko store karne k liye diya gya name hai . variables ko ek container ki trah samjha  ja sakta hai variable k name ko container par lga label ki trah samjha ja sakta hai variables ka estemal coders ko prgram mai mojud jankari ko samjhne ,yaad rakhe , or uska estemaal karne mai madad karta hai.
// ===============================================================================================================
// let let ko ghoshit kiye gye veriable (globlescope) mai dobara se update kiya ja sakta hai lekin blockscope mai nhi kiya ja sakta 
// 1. let ki madad se ek hi variable ko kai baar declare nhi kiya ja sakta
// 2. ek hi variable ko le se same id se baar baar declare nhi kiya ja sakta jab ki var se kiya sakta hai 
// 3. let se declare kiya gya ek variable blockscope tak hi limited hai jha ye use kiya jata hai
let ashish = 12*12;
let ashish1 = 12+12;
console.log(ashish/ashish1)
{
    let ashish = 5*5;
    console.log(ashish)
}
{
    let ashish = 5-5;
    console.log(ashish)
}
// var variables ko declare karne ka ek purana tarika hai java script mai var keyword ka estemal sirf purana browsers mai likhe gye code k liye hi karna chiye.var ki madad se ek hi variable ko kai baar declare (globale or block scope dono) kiya ja sakta
var value = 12*12;
var value = 12+12;
console.log(value*value)
{
    var value1 = 5*5;
    console.log(value1)
    var value1 = 5*5;
    console.log(value1)
}
// const variable ko declare ek baar karne k baad baar baar declare nhi kiya ja sakta hai 
const rahul = 12+12;
const rahul1 = 12+12;
console.log(rahul)
console.log(rahul1)

