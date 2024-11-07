// let, var ,const 3types of variabels keywords or en sabhi ko keyword kha jata hai enko di gayi id ko veriables or eske result ko value kha jata hai or enka estemal veriables ko declare karne k liye kiya jata hai . programing mai variables ka matlab hai memory mai data ko store karne k liye diya gya name hai . variables ko ek container ki trah samjha  ja sakta hai variable k name ko container par lga label ki trah samjha ja sakta hai variables ka estemal coders ko prgram mai mojud jankari ko samjhne ,yaad rakhe , or uska estemaal karne mai madad karta hai.
// ===============================================================================================================
// var variables ko declare karne ka ek purana tarika hai java script mai var keyword ka estemal sirf purana browsers mai likhe gye code k liye hi karna chiye.var ki madad se ek hi variable ko kai baar declare (globale or block scope dono) kiya ja sakta
// var globalscope keyword esko ham baar declair kar sakte hai or value bhi change kar sakte hai
var value = 12*12;
var value = 12+12;
console.log(value*value)
{
    var value1 = 5*5;
    console.log(value1)
    var value1 = 5*5;
    console.log(value1)
}
// let let ko declair kiye gye veriable (globlescope) mai dobara se update kiya ja sakta hai lekin blockscope mai nhi kiya ja sakta 
// 1. let ki madad se ek hi variable ko kai baar declare nhi kiya ja sakta
// 2. ek hi variable ko le se same id se baar baar declare nhi kiya ja sakta jab ki var se kiya sakta hai 
// 3. let se declare kiya gya ek variable blockscope tak hi limited hai jha ye use kiya jata hai
// let block scope keyword hai jiski ham baar value chage kar sakte hai par declaire nhi kr sakte baar baar
let ashish = 12*12;
let ashish1 = 12+12;
console.log(ashish/ashish1)
{
    let ashish2 = 5*5;
    {
        console.log(ashish2)
    }
}

// const variable ko declare ek baar karne k baad baar baar declare nhi kiya ja sakta hai 
// const blockscope keyword hai jiko baar baar declare or value change nhi kiya ja sakta
const rahul = 12+12;
const rahul1 = 12+12;
console.log(rahul)
console.log(rahul1)

// var global scope eliment hai jab ki let const blockscope
// var variable ko dobara update or asign kiya ja sakta hai. let ko bobara update kiya ja sakta hai par dobara nidharit nhi kiya ja sakta. const ko update or nridharit nhi kiya ja sakta.
// var ko declare karne se pehle hi access kiya ja sakta hai jab ki let const ko nhi kiya ja sakta (by default var hi rhega)
// var varable ko paribhashit k sakth shuru kiya ja sakta hai. let const ko nhi kiya ja sakta
// var varables ka teporal dead zone nhi hota jo ki delare hone se pehle phunchyog bnata hai. jab ki let cont mai ek temporal dead zone hota hai
// var windows objects se jude hote hai. let cont nhi jude hote
// var let or const se jyada lachakdaar hai par yeh achanak vivhar ka karn ban skta hai. let ka use un veriables ko declare karne mai hota hai jinko baar barr nidharit karna ho. const ka use jin mai sirf ek hi mai rkhna ho (sthir rakhna).
// var k bjai let or const ka andaja lgana aasaan hai or sambhalne wale code mai eska estemaal karna chaiye.