// // dom elements and functions

//  // Example 1: getElementById
//  function changeTextById() {
//     // Selecting the element by its ID and changing its text content
//     document.getElementById('elementByIdExample').textContent = 'The text has been changed!';
// }

// // // Example 2: getElementsByClassName
// function changeColorByClass() {
//     // Selecting all elements with the class 'colorBox' and changing their background color
//     const boxes = document.getElementsByClassName('colorBox');
//     for (let i = 0; i < boxes.length; i++) {
//         boxes[i].style.backgroundColor="red"
//         boxes[i].style.color = 'yellow';
//     }
// }
// // Example 4: tagElementsByTagName
// function myFunction() {
//     const list = document.getElementsByTagName("UL")[0];
//     list.getElementsByTagName("li")[0].innerHTML = "Milk"; 
//   }
 
// // Example 4: querySelector and querySelectorAll
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

//    // Example 5: createElement and appendChild
//    function addNewItem() {
//     // Creating a new list item and adding it to the unordered list
//     const newItem = document.createElement('li');
//     newItem.textContent = 'Newly added item';
//     document.getElementById('dynamicList').appendChild(newItem);
// }

// // Example 6: innerHTML , innerText
// function changeHtmlContent() {
//     // Changing the HTML content inside the div with id 'htmlContent'
//     // document.getElementById('htmlContent').innerHTML = '<strong>New HTML content!</strong>';
//     // document.getElementById('htmlContent').innerText = '<strong>New HTML content!</strong>';
// }


