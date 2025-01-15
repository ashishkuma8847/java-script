// React.js me useState ek hook hai jo functional components me state manage karne ke liye use hota hai. Pehle, state sirf class components me hoti thi, lekin ab functional components me bhi state ka use kar sakte hain useState ke through.
// useState kaise kaam karta hai?
// Import karo: React se useState ko import karo.
// State define karo: useState ek initial value leta hai aur do cheezein return karta hai:
// Current state ki value.
// State ko update karne ka function.

// Syntax:
// const [state, setState] = useState(initialValue);

// state: Jo value currently state me hai.
// setState: Ek function jo state ko update karega.
// initialValue: State ki shuruwaati (initial) value.

// Example:
// import React, { useState } from "react";

// function Counter() {
//   // State define kar rahe hain
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   );
// }

// export default Counter;

// Key Points:
// useState sirf functional components me use hota hai.
// State ko update karne ke liye directly state variable ko modify mat karo, hamesha setState function ka use karo.
// Har bar state update hone par component re-render hota hai.