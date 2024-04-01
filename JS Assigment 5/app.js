
// Question 1

// var empty = [];



// Question 2

// var arr = [[0,1,2,3], [1,0,1,2], [2,1,0,1]];

// for(var i = 0; i <= 2; i++){
//     document.write(arr[i].join(" ") + "<br>");
// }



// Question 3


// for(var i = 1; i <= 10; i++){
//     document.write(i + "<br>");
// }


// Question 4


// var userinput = +prompt("Enter Your Table Number");
// document.write(`Multiplication table of ${userinput}<br> `);

// var tablelenght = +prompt("Assing Lenght")
// document.write(`Lenght ${tablelenght} <br> <br> `);

// for(var i = 1; i <= tablelenght; i++){
//     document.write(`${userinput} x ${i} = ${userinput*i} <br>`);
// }


// Question 5


// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for(var i = 0; i < fruits.length; i++){
//     document.write(`${fruits[i]} <br>`);
//     document.write(`Element at index ${i} is ${fruits[i]} <br>`);
// }



// Question 6

// document.write("Counting:" + "<br>");

// for(var i = 1; i <= 15; i++){
//     document.write(` ${i}, `);
// }

// document.write("<br> <br>");

// document.write("Reverse counting:" + "<br>");
// for(var i = 10; i >= 1; i--){
//     document.write(` ${i}, `)
// }

// document.write("<br> <br>");

// document.write("Even:" + "<br>");
// for(var i = 0; i <= 20; i=i+2){
//     document.write(` ${i}, `)
// }

// document.write("<br> <br>");

// document.write("Odd:" + "<br>" );
// for(var i = 1; i <= 20; i=i+2){
//     document.write(` ${i}, `)
// }

// document.write("<br> <br>");

// document.write("Series:" + "<br>");
// for(var i = 2; i <= 20; i=i+2){
//     document.write(` ${i}k, `)
// }



// Question 7


// var bakery = ["cake", "apple", "pie", "cookie", "chips", "patties"];

// var userInput = prompt("Enter your words");

// var bakeryIndex = bakery.indexOf(userInput);
// match = false
// for(var i = 0; i < bakery.length; i++){
//     if(userInput === bakery[i]){
//         match = true
//         document.write(`${userInput} is available at index ${bakeryIndex} in our Bakery`);
//         break
//     }

// }if(match == false){
//     document.write(`${userInput} is not available in our Bakery`);

// }




// Question 8 


// var numbers = [24, 53, 78, 91, 12];

// var largestNumber = numbers[0];

// for (var i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largestNumber) {
//         largestNumber = numbers[i];
//     }
// }

// document.write("The largest number in the array is:", largestNumber);



// Question 9


// var A = [24, 53, 78, 91, 12];

// var smallest = A[0];

// for (var i = 1; i < A.length; i++) {
//   if (A[i] < smallest) {
//     smallest = A[i];
//   }
// }

// document.write("The smallest number in the array is:", smallest);




// Question 10


// for(var i = 5; i <= 100; i=i+5){
//     document.write(` ${i}, `)
// }
