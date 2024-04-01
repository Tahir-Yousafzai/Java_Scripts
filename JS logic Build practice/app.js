// var num1 = +prompt();
// var num2 = +prompt();




// var opt = prompt();
// if (opt == "+"){
//     document.write(num1 + num2);
// }
// else if (opt == "-"){
//     document.write(num1 - num2);
// }


// else{
//     document.write('opeartor wrong h ')
// }

// document.write("<h1>" + "Calculater With Prompt" + "</h1>")

//Addition 

// var Digit_1 = +prompt("Enter the first number:");
// document.write("First Number " + Digit_1 + "<br>");

// var Digit_2 = +prompt("Enter the Second number:");
// document.write("Second Number " + Digit_2 + "<br>");

// var opt = prompt("Enter The Operator");

// if(opt == "+"){
//     var result = Digit_1 + Digit_2;
//     document.write("Result " + result);
// }
// else if(opt == "-"){
//     var result = Digit_1 - Digit_2;
//     document.write("The Result of Subtraction " + result);
// }
// else if(opt == "*"){
//     var result = Digit_1 * Digit_2;
//     document.write("The Result of Multiply " + result);
// }
// else if(opt == "/"){
//     var result = Digit_1 / Digit_2;
//     document.write("The Result of Divide " + result);
// }

// var fName = tahir;

// var lName = khan;

// var fullName = fName +""+ lName;

// if(true){
//     console.log(fullName)

// }
// else(false){
//     console.log(fullName);
// }

// var fName = "tahir";
// var lName = "khan";
// var fullName = fName + " " + lName;

// if(true){
//     console.log(fullName);
// }
// else if(false){
//     console.log(fullName);
// }



// var course = prompt("Enter Course Name");

// if(course == "web" || course == "app" || course == "mobile"){
//     console.log("Your'e Eligibal");
// }else{
//     console.log("you are not Eligibal");
// }



// var name = prompt("enter your name");
// document.write(name);

// var age = +prompt("enter your age");
// document.write(age);

// var education = prompt("enter your Education");
// document.write(education);

// var cities = prompt("Enter city name");
// document.write(cities);

// var eligiblecities = ["karachi", "hyderabad", "multan", "sukkar"];

// if (name && age && education && cities) {
//     if (age <= 18) {
//         alert("Age must be required 18 or above");
//     } else {
//         if (education.toLowerCase == "inter" || "matric" || "nine") {
//             alert("must be required ninth or above")
//         } else {
//             if (cities.toLowerCase === eligiblecities) {
//                 alert("Your are not live in required city");
//             } else {
//                 alert("Congurats you are eligible");
//             }
//         }
//     }
// }else{
//     alert("You are not eligible");
// }



// var tableNum = +prompt("Enter Your Table Number");
// var myTable1 = 3;
// var myTable2 = 5;

// if(tableNum % myTable1 === 0 && tableNum % myTable2 === 0 ){
//     alert("The num is solve");
// }else{
//     alert("Your num is not supported");
// }


//Marksheet with Table


// // var stdName = prompt("Enter your name");

// // var eng = +prompt("Enter Marks");

// // var math = +prompt("Enter Marks");

// // var urdu = +prompt("Enter Marks");

// // var cs = +prompt("Enter Marks");

// // var phy = +prompt("Enter Marks");

// // var total = eng + math + urdu + cs + phy;

// // var per = total / 500 * 100 ;

// // var grade;

// // if (per >= 80) {
// //     grade = "A+";
// // } else if (per >= 70 ) {
// //     grade = "A";
// // } else if (per >= 60) {
// //     grade = "B";
// // } else if (per >= 50) {
// //     grade = "C";
// // } else{
// //     grade = "Fail"
// // }


// // document.write(
// `
// //     <table border="1px">

// //         <tr>
// //             <th>Student Name </th>
// //             <th>English</th>
// //             <th>Math</th>
// //             <th>urdu</th>
// //             <th>Cs</th>
// //             <th>Phy</th>
// //             <th>Total</th>
// //             <th>Percentage</th>
// //             <th>Grade</th>

// //         </tr>
// //         <tr>
// //             <td> ${stdName} </td>
// //             <td> ${eng} </td>
// //             <td> ${math} </td>
// //             <td> ${urdu} </td>
// //             <td> ${cs} </td>
// //             <td> ${phy} </td>
// //             <td> ${total} </td>
// //             <td> ${per}% </td>
// //             <td> ${grade} </td>
// //         </tr>
// //     </table>
// //     `
// // )



// var firstNum = +prompt("Enter Table Num");

// var lastNum = +prompt("Enter your Last Num");

// for(i = 1; i <= lastNum; i++){
//     document.write(firstNum + "x" + i + "=" + lastNum*i +"<br>");
// }

// for(i=1; i<=100; i=i+10){
//     document.write(i+ "<br>");
// }




// var cities = ["Karachi", "Islamabad", "Lahore", "Multan"];
// var userInput = prompt("Enter City Name");
// var firstAlpha = userInput.slice(0,1).toUpperCase();
// var secondalpha = userInput.slice(1).toLowerCase();
// var con = firstAlpha + secondalpha;
// var match = "no";

// for (var i = 0; i <= cities.length; i++) {
//     if (con == cities[i]) {
//         alert("city found");
//         match = "yes";
//         break;
//     }
// }
// if (match == "no") {
//     alert("city not found");

// }



// for(var i = 1; i<=100; i=i+10){
//     for(var j = i; j<i+10 ; j++){
//         document.write(j +" ");
//     }
//     document.write("<br>");
// }


// var text = "Tahir khan";

// var num = 302420;

// var concatinate = text + " " + num;

// document.write(concatinate);



// var tableFisrtNum = +prompt("Enter Table Number");

// var tableLastNum = +prompt("Enter your Last Number");

// for(var i = 1; i<=tableLastNum; i++){
//     document.write(`${tableFisrtNum} X ${i} = ${tableFisrtNum*i} <br> `)
// }



// for(var i = 1; i <= 100; i=i+10){
//    for(var j = i; j < i + 10; j++){
//     document.write(`2 x  ${j} = ${j*2} <br> `)
//    }
//     document.write("<br>");
// }



// var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]

// for(var i = 0; i<=2; i++){
//     document.write(arr[i].join(" ")+" "+"<br>");
// }




// var cars = ["Alto", "Mehran", "City", "Corolla", "Civic", "Cultus"];

// var check = prompt("Enter Your Car Name");

// var match = "no";

// var firstAlpha = check.slice(0,1).toUpperCase();

// var baqiAlpha = check.slice(1).toLowerCase();

// var final = firstAlpha + baqiAlpha;

// var carIndex = cars.indexOf(final);

// for(var i = 0; i < cars.length; i++){
//         if(final === cars[i]){

//                 match = "yes"

//                 document.write(`${final} is found`);
//                 document.write(`<br> this is index of ${final} is ${carIndex}`)


//                 break
//         }
// }
// if(match === "no"){
//         document.write(`${final} is not found`);
// }




// var player1 = prompt("Enter player 1 Name");

// var player2 = prompt("Enter player 2 Name");

// var toss =  Math.random()*2

// var flor = Math.floor(toss);

// if(flor == 0){
//         document.write(`${player1} Head Win`);
// }else{
//         document.write(`${player2} Tail Win`);
// }



// var dob = prompt("Enter your age ");

// var newDob = new Date(dob);

// var TodaysDate = new Date().getTime();

// var liveDate = TodaysDate - newDob ;

// var totalAge = liveDate / (1000 * 60 * 60 * 24 * 365);


// document.write(Math.floor(totalAge));



// var customerName = prompt("Enter your customer Name");

// var monthArr = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'july', 'aug', 'sep', 'oct', 'nov', 'dec']

// var currentMonth = monthArr[new Date().getMonth()];

// var numberUnits = +prompt("Enter your number Units");

// var chargesUnits = 40 * numberUnits;

// var amountPyment = chargesUnits;

// var latePymentCharges = 25 + "%";

// var dueDateCharges = 25 / 100 * amountPyment;

// document.write(`<table border = "1">
// <tr>
// <th> Customer Name </th>
// <th> Current Month </th>
// <th> Units </th>
// <th> Units Charges</th>
// <th> Bill Amount</th>
// <th> Late Charges</th>
// <th> Due Date Charges</th>
// </tr>
// <tr>
// <td> ${customerName} </td>
// <td> ${currentMonth} </td>
// <td> ${numberUnits} </td>
// <td> ${chargesUnits} </td>
// <td> ${amountPyment} </td>
// <td> ${latePymentCharges} </td>
// <td> ${dueDateCharges} </td>
// </tr>
// </table> `);



