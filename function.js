// JavaScript Functions
// 1. Normal Function
// A normal function is the most common way to define a function in JavaScript.

// function sayHello() {
//     console.log("Hello, world!");
// }

// 2. Arrow Function
// An arrow function is a shorter way to write a function in JavaScript.

// const ashish = () => {
//     console.log("Hello from an arrow function!");
// }

// 3. Callback Function
// A callback function is a function passed as an argument to another function.

// function greetUser(callback) {
//     console.log("Greeting user...");
//     callback();
// }

// function displayMessage() {
//     console.log("This is a callback function!");
// }



// Function Parameters and Return Values

// 1. Function with Parameters
// Parameters are inputs you can pass into a function to change its behavior.

// function addNumbers(a, b) {
//     console.log(a + b);
// }

// 2. Function with Return Value
// A function can return a value, which can be used later in your code.

// function multiplyNumbers(a, b) {
//     return a * b;
// }





// dom mathods and functions

 // // Example 1: getElementById
//  function changeTextById() {
//     // Selecting the element by its ID and changing its text content
//     document.getElementById('elementByIdExample').textContent = 'The text has been changed!';
// }

// // Example 2: getElementsByClassName
// function changeColorByClass() {
//     // Selecting all elements with the class 'colorBox' and changing their background color
//     const boxes = document.getElementsByClassName('colorBox');
//     for (let i = 0; i < boxes.length; i++) {
//         boxes[i] 
//         boxes[i].style.color = 'black';
//     }
// }

// // Example 3: querySelector and querySelectorAll
// function highlightFirstItem() {
//     // Selecting the first list item and changing its background color
//     const firstItem = document.querySelector('ul li');
//     firstItem.style.backgroundColor = 'lightblue';
// }

// function highlightAllItems() {
//     // Selecting all list items and changing their background color
//     const allItems = document.querySelectorAll('ul li');
//     allItems.forEach(item => {
//         item.style.backgroundColor = 'lightgreen';
//     });
// }

//    // Example 4: createElement and appendChild
//    function addNewItem() {
//     // Creating a new list item and adding it to the unordered list
//     const newItem = document.createElement('li');
//     newItem.textContent = 'Newly added item';
//     document.getElementById('dynamicList').appendChild(newItem);
// }

// // Example 5: innerHTML
// function changeHtmlContent() {
//     // Changing the HTML content inside the div with id 'htmlContent'
//     document.getElementById('htmlContent').innerHTML = '<strong>New HTML content!</strong>';
// }






