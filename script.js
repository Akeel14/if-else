// let score = 85;

// if (score >= 90) {
//   console.log("You got an A. Great job!");
// } else if (score >= 80) {
//   console.log("You got a B. Good work!");
// } else if (score >= 70) {
//   console.log("You got a C. You can do better.");
// } else if (score >= 60) {
//   console.log("You got a D. You need to study harder.");
// } else {
//   console.log("You got an F. You failed.");
// }

// // CHALLENGE 1
// // Check if the person is old enough to enter the nightclub (21)
// // Log a suitable message to the console in both cases

// // if less than 21 -> "You can not enter the club!"
// // else            -> "Welcome!"
// let age = 22;

// if (age < 20) {
//   console.log("You cannot enter the club!");
// } else {
//   console.log("Welcome");
// }

// // CHALLENGE 2
// // Check if the person is eligible for a birthday card from the King! (100)

// // let age = 100;

// // if less than 100    -> "Not eligible"
// // else if exactly 100 -> "Here is your birthday card from the King!"
// // else                -> "Not eligible, you have already gotten one"

// // if (age < 100) {
// //   console.log("Not eligible");
// // } else if (age == 100) {
// //   console.log("here is your card");
// // } else {
// //   console.log("Not eligible, you have already gotten one");
// // }

// // we use === equals when comparing because it is more strict which means it will return false for the values which are not of a similar type
// // *********************************IF-ELSE IF-ELSE****************************************************

// // **********************************BOOLEAN*****************************************************
// // BOOLEAN
// // Booleans in JavaScript can be either true or false. Here's an example:

// let isRaining = true; // this could be a dynamic value in real usage

// if (isRaining) {
//   console.log("Remember to bring an umbrella!");
// } else {
//   console.log("It's a sunny day. Enjoy the weather!");
// }

// // Challenge:
// // Create a similar conditional statement using a different boolean variable. For example, isWeekend could lead to different messages like "It's time to relax!" or "Another workday..."

// let isWeekend = true; // this could be a dynamic value in real usage

// if (isWeekend) {
//   console.log("It's the weekend. Time to relax!");
// } else {
//   console.log("It's a workday. Let's be productive!");
// }
// // ******************************************************************************************

// // ********************************ARRAY*****************************************************
// // Arrays - Order lists of items
// let colors = ["red", "blue", "green", "yellow"];

// // displaying all items of the array
// console.log(colors);
// // 0 indexed, in arrays you start counting at 0 instead of 1
// console.log(colors[0]);

// // Challange: create 4 console log messages of the colors in the order of: green, yellow, red, blue

// // to get the length of the array
// console.log(colors.length);

// // Array - ordered list of items - coposite / complex data type
// let car = ["Honda", 2024, true];
// // Create an array that describes yourself. Use the three primitive data types you've learned
// // It should contain your name (string), your age (number), and whether you like pizza (boolean)

// // adding an item to the end of the array
// colors.push("pink");
// // deletes the first element
// colors.shift();
// console.log(colors);

// // removing items from the end of the array
// colors.pop();

// // CHALLANGE
// // Push the newMessage to the messages array, and then log out the array

// let message = [
//   "Hey, how's it going?",
//   "I'm great, thank you! How about you?",
//   "All good. Been working on my portfolio lately.",
// ];

// let newMessage = "Same here!";

// // ******************************************************************************************

// // ********************************FOR LOOP*****************************************************

// // ********************************DOM*****************************************************

// // DOM is basically how we use javascript to modify websites or (HTML)

// //  For example when we updated the innerText in the HTML that is call working with the DOM
// // We use Javascript code to update the actual content on the web page
// // ******************************************************************************************

// // Count to ten!

// // We need to specify...

// // Where should we START counting?
// // Where is the FINISH line?
// // What's the STEP SIZE we should use?

// //    START           FINISH       STEP SIZE
// for (let count = 1; count < 11; count += 1) {
//   // how many times we will run the code inside of the parentheses
//   console.log(count);
// }

let messages = [
  "Hey, how's it going?",
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately.",
  "Same here!",
  "Great to hear",
];

for (let i = 0; i < messages.length; i++) {
  console.log(messages[i]);
}
// // DRY - Don't repeat yourself
// // console.log(messages[0])
// // console.log(messages[1])
// // console.log(messages[2])
// // console.log(messages[3])

let sentence = ["Hello ", "my ", "name ", "is ", "Akeel"];
let greetingEl = document.getElementById("greeting-el");

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for (let i = 0; i < sentence.length; i++) {
  greetingEl.textContent += sentence[i];
}

// // ******************************************************************************************

// // ********************************RETURNING FUNCTIONS***************************************
let player1Time = 102;
let player2Time = 107;

// cmd+d - ctrl+d
function getFastestRaceTime() {
  if (player1Time < player2Time) {
    return player1Time;
  } else if (player2Time < player1Time) {
    return player2Time;
  } else {
    return player1Time;
  }
}
// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

function getTotalTime() {
  return player1Time + player2Time;
}

let totalTime = getTotalTime();
console.log(totalTime);

// // ******************************************************************************************

// // ********************************RANDOM NAMES**********************************************

function randomNumber() {
  let randomNumber = Math.random();

  console.log(randomNumber);

  // What does Math.random() do?
  // Your answer: it generates a random number between 0 and 1 (not includsive of 1)

  let randomNumber6 = Math.random() * 6;
  // Your answer: it generates a random number between 0 and 6 (not includsive of 6)

  let flooredNumber = Math.floor(3.45632);
  console.log(flooredNumber);
  // What does Math.floor() do to positive numbers?
  // Your answer:  Removes the decimals

  // Try to modify the expression so that we get a range from 1 to 6
  let randomNumberFloor = Math.floor(Math.random() * 6);

  console.log(randomNumberFloor);

  // create a function that RETUNS a random number between 1 to 6 and print it to the console

  function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6);
    return randomNumber;
  }
  console.log(rollDice());

  // Random Number:
  // Random numbers in JavaScript can be generated using the Math.random() function. Here's an example:

  let randomNumberFloored = Math.floor(Math.random() * 100) + 1; // generates a random number between 1 and 100

  if (randomNumberFloored <= 50) {
    console.log("The random number is less than or equal to 50.");
  } else {
    console.log("The random number is greater than 50.");
  }

  // Challenge: Extend this code to categorize the random number into more categories (like less than 20, between 20 and 40, between 40 and 60, etc.).

  if (randomNumber <= 20) {
    console.log("The random number is less than or equal to 20.");
  } else if (randomNumber > 20 && randomNumber <= 40) {
    console.log("The random number is between 21 and 40.");
  } else if (randomNumber > 40 && randomNumber <= 60) {
    console.log("The random number is between 41 and 60.");
  } else {
    console.log("The random number is greater than 60.");
  }
}
// // ******************************************************************************************

// // ********************************OBJECTS*****************************************************

function objects() {
  // Objects in programming are data structures that allow us to group related data and functions together. They are one of the fundamental building blocks in JavaScript and many other object-oriented programming languages.

  // Objects consist of properties, which are essentially key-value pairs. The key is always a string, and the value can be any type of data — string, number, boolean, array, function, or even another object.

  // Let's look at the student object in your example:

  let student = {
    name: "John",
    isGraduated: false,
    grade: "A",
    major: "Computer Science",
    courses: ["python", "intro-to-web-dev", "calculus"],
  };

  // In this object:

  // name, isGraduated, grade, major, and courses are keys.
  // "John", false, "A", "Computer Science", and ['python', 'intro-to-web-dev', 'calculus'] are their respective values.
  // Objects are incredibly useful because they allow us to encapsulate related data and functionality into a single unit. This makes our code easier to understand, maintain, and debug.

  // We can access the properties of an object using dot notation. For example, student.name will give us "John", and student.courses[1] will give us 'intro-to-web-dev'.

  if (student.isGraduated) {
    console.log(student.name + " has graduated. Congratulations!");
  } else {
    console.log(student.name + " has not graduated yet. Keep studying!");
  }

  if (student.grade === "A") {
    console.log(student.name + " is a top student. Keep up the good work!");
  }

  console.log(student.courses[1]);

  // Here's an example of an object representing an expedia.ca:

  // Create an object that represents an expedia.ca.
  // It should contain at least one boolean, one string, one number, and one array
  // Log out at least two of the keys using the dot notation
}

// // ******************************************************************************************

// // ********************************EVENT LISTENER**********************************************

// STEP 1:
//  <!-- Create an input element with type="text" and id="input-el" -->
//     <!-- Create a SAVE INPUT button with id="input-btn" -->

// STEP 2:
// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button calls the function saveInput()

// STEP 3:
// Write a function to console log Button Clicked when the function is called


// PUSH TO GITHUB EVERYTIME YOU ADD A NEW FEATURE, ROLLBACK IF FEATURE IS NOT WORKING AS EXPECTED
function EventListener() {
  function saveInput() {
    console.log("Button Clicked from onclick attribute");
  }

  // STEP 4: Update the Event Listners (most common way)

  // store the input-btn element ID in a variable "inputBtn"
  let inputBtn = document.getElementById("input-btn");

  inputBtn.addEventListener("click", function () {
    console.log("Button clicked from Event Listener");
  });
}

// Remove the onclick attribute from the index.html (cleaner code)

// // ******************************************************************************************

// // ********************************(LET vs VAR) VS CONST*************************************

function letConst() {
  // Bank account info
  const name = "Akeel"; // name should not be reassign (updated)
  let accountBalance = 10; // user balance can be updated overtime

  accountBalance += 50;

  // Example (inputBtn Should never be reassign or updated once its set because the value doesnt change)
  const inputBtn = document.getElementById("input-btn");
}

// always Avoid using the var keyword
function letVar() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  // i is not accessible outside of for block, (block scope Variable)
  console.log(i);

  //switching from let to var would be a function scope variable. (accessible in the entire function)
}

//******************************************************************************************

// // ********************************USER INPUT**********************************************
let shoppingList = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

// Push the value "Milk" to shoppingList when the input button is clicked

inputBtn.addEventListener("click", function () {
  shoppingList.push("Milk");
  console.log(shoppingList);

  // Getting Value from Input Field
  shoppingList.push(inputEl.value);
  console.log(shoppingList);
});

// print each item in the shoppingList
for (let i = 0; i < shoppingList.length; i++) {
  console.log(shoppingList[i]);
}

//******************************************************************************************

//********************************UPDATING INNER HTML**********************************************

// 2. Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el");

// Render the leads in the unordered list using ulEl.textContent instead of console.logging the shoppingList array items
for (let i = 0; i < shoppingList.length; i++) {
  ulEl.textContent += shoppingList[i] + " ";

  // render the element in a li tag using innerHTML
  // CREATING ELEMENTS WITH JAVASCRIPT (Manipulating the DOM)
  ulEl.innerHTML += "<li>" + shoppingList[i] + "</li>";

  // rendering element using createElement()
  const li = document.createElement("li");
  li.textContent = shoppingList[i];
  ulEl.append(li);
}

//******************************************************************************************

//********************************Render Function*******************************************
let shoppingList = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  // Clear out the input field
  inputEl.value = "";

  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < shoppingList.length; i++) {
    listItems += "<li>" + shoppingList[i] + "</li>";
  }
  ulEl.innerHTML = listItems;
}
//******************************************************************************************

//********************************TEMPLATE STRINGS**********************************************
// template strings/literals

const recipient = "Akeel";

// Refactor the email string to use template strings
const email = "Hey " + recipient + "! How is it going? Cheers Per";

console.log(email);

const recipient = "Akeel";
// Create a new variable, sender, and set its value to your name

// Use your sender variable instead of "Per"
const email = `Hey ${recipient}! How is it going? Cheers Per`;

console.log(email);
//******************************************************************************************

//********************************LOCAL STORAGE*********************************************
localStorage.setItem("myName", "Akeel");

let name = localStorage.getItem("myName");

localStorage.clear();

// Storing arrays in local Storage
let shoppingList = [];
shoppingList.push("Milk");
localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
// displays what is the data type of the value
console.log(typeof JSON.stringify(shoppingList));

// retrieving arrays from local Storage
let shoppingListArray = JSON.parse(localStorage.getItem("shoppingList")) || [];

//******************************************************************************************

//********************************Function Paramater/Arguements*****************************
const welcomeEl = document.getElementById("welcome-el");

function greetUser(greeting, name) {
  // Rewrite the expression using template literals
  welcomeEl.textContent = greeting + ", " + name + " 👋";
}

greetUser("Howdy", "James");

//.                parameters
function greetUser(greeting, name) {
  welcomeEl.textContent = `${greeting}, ${name} 👋`;
}

//.        arguments
let hi = "Howdy";
greetUser(hi, "James");

function add(num1, num2) {
  return num1 + num2;
}

add(3, 4);
//******************************************************************************************

// TODO:
// WEEK 3
// comments
// variables
// console log
// incrementing
// if statements
// arrays
// for loops
// onClick attribute
// functions
// objects
// WEEK 4
// event listeners
// let vs const
// User Input
// innerHTML
// createElement() & append()
// template strings literals
// localStorage
// Truthy & falsy values
// function parameter
// logical operators
// Arguments vs Params
// MAYBE
// API's
// Promises
// (whatever else is needed to build api)

//***************************************CHALLANGES***************************************

// CHALLANGE 1:
// Here's an example of an object representing an expedia.ca:

// Create an object that represents an expedia.ca.
// It should contain at least one boolean, one string, one number, and one array
// Console.log two of the values in the object using a sentence

// CHALLANGE 2:
// If possible, use const. If not, use let.

// Which variables below should be changed from let to const?

// The customer wants to order some stuff. Here are the details:
let basePrice = 520;
let discount = 120;
let shippingCost = 12;
let shippingTime = "5-12 days";

// Whops! Turns out the shipping will be a bit more complex
shippingCost = 15;
shippingTime = "7-14 days";

// Calculating the full price
let fullPrice = basePrice - discount + shippingCost;

// Finally, notifying the customer
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime);
