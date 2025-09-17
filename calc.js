//Dating=======================================================================

let ticketNum = 3;
let ticketCost = 14;
let ttCost = ticketNum * ticketCost;

document.getElementById("ticketNum").innerText = `Tickets: ${ticketNum}`;
document.getElementById("ticketCost").innerText = `Cost: $${ticketCost}`;
document.getElementById("ttCost").innerText = `Total: $${ttCost}`;

//Shopping=====================================================================

//bank
let shirt = 35;
let pants = 75;
let shoes = 60;

document.getElementById("bank").innerText =
  "After purchasing the outfit, my bank account balance is $" +
  (235.87 - (shirt + pants + shoes)) +
  ".";

//addJacket==================================================================
let jacket = 70;
document.getElementById("addJacket").innerText =
  "Add Jacket: " + (jacket <= 235.87 - (shirt + pants + shoes));

//Pizza=======================================================================

//Students
let pizza = 4;
let eachStudent = 2.5;
let slices = 8;

document.getElementById("pizzaStudents").innerText =
  "Students: " + Math.floor((pizza * slices) / eachStudent);

//Professor Rector
let prof =
  pizza * slices - Math.floor((pizza * slices) / eachStudent) * eachStudent;
document.getElementById("profPizza").innerText = "Rector: " + prof;

// //Monty=======================================================================
let adult = 12.0;
let child = 6.0;
let drinks = 1.5;
let adultBuffet = 2;
let childBuffet = 1;
let drinkBuffet = 3;

let total = adult * adultBuffet + child * childBuffet + drinks * drinkBuffet;
document.getElementById("Monty").innerText = "$" + total.toFixed(1);

//Tips=======================================================================
let week1 = 202.45;
let week2 = 134.97;
let week3 = 256.63;
let week4 = 178.22;
let totalTips = week1 + week2 + week3 + week4;
let avgTips = totalTips / 4;

document.getElementById("tips").innerText =
  "Weekly Tip Average: $" + avgTips.toFixed(4);
