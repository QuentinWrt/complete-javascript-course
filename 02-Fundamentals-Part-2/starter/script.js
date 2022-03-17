"use strict";

// let hasDiversLisence = false;
// const passTest = true;

// if (passTest) hasDiversLisence = true;
// if (hasDiversLisence) console.log("I can drive");

//-----------------
// function

// function logger() {
//   console.log("Hello world!");
// }

// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const juice = fruitProcessor(5, 0); // => stockage de la variable pour la réutilisé
// console.log(juice);

// console.log(fruitProcessor(2, 3)); // => la variable de sortie de la func ne peut etre réutilisé

// function test() {} // => peut etre appelé avant ça déclaration
// const test = function () {}; // => ne peut pas etre appelé avant avoir été déclaré

// Arrow function

// une seule ligne de code
// const calcAge = (birthYear) => 2037 - birthYear;
// const age = calcAge(2002);

// console.log(age);

// plusieurs lignes de code
// const yearUtilRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   //return retirement;
//   return `${firstName} retire in ${retirement}`;
// };

// console.log(yearUtilRetirement(2002, "Quentin"));

// function cutFruitPieces(fruit) {
//   return fruit * 3;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

//--------------------------------
//coding challenge

// function calcAverage(score1, score2, score3) {
//   const avg = (score1 + score2 + score3) / 3;
//   return avg;
// }

// function checkWinner(avgK, avgD) {
//   if (doubleAvg(avgK) < avgD) {
//     return `Daulphin wins ! (${avgK} vs. ${avgD})`;
//   } else if (avgK > doubleAvg(avgD)) {
//     return `Koala wins ! (${avgK} vs. ${avgD})`;
//   } else {
//     return `Nobody win !`;
//   }
// }

// function doubleAvg(avg) {
//   return avg * 2;
// }

// const avgDaulphin = calcAverage(23, 34, 27);
// const avgKoala = calcAverage(85, 54, 41);

// const winner = checkWinner(avgKoala, avgDaulphin);

// console.log(winner);

//------------------------------
// Arrays

// const friend1 = "Sacha";
// const friend2 = "Isaie";
// const friend3 = "matteo";

// => très chiant à faire

// const friends = ["Sacha", "Isaie", "Matteo"]; // => nouvelle
// console.log(friends);

// const years = new Array(1991, 2002, 1005); // => vieux en appelant une function de création

// console.log(friends[0]);
// console.log(friends.length);

// friends[2] = "Aude";
// friends[3] = "Matteo";
// // on peut change la variable malgré le fait qu'elle soit déclaré en 'const' car Array n'est pas un type primitif
// console.log(friends);

// function calcAge(birthYear) {
//   return 2022 - birthYear;
// }

// const year = [1990, 2002, 2005];

// for (let i = 0; i < year.length; i++) {
//   console.log(calcAge(year[i]));
// }

// const friends = ["Sacha", "Isaie", "Matteo"];
// const newLength = friends.push("Julien"); // => push renvoie la taille de l'Array après avoir ajouté l'élément
// // => met l'élément à l'arrière de la liste

// console.log(friends);
// console.log(newLength);

// friends.unshift("Mathilde"); // => met à l'avant d'une liste
// console.log(friends);

// friends.pop(); // => enlève le dernier | renvoie un tableau de l'élément supprimé
// console.log(friends);

// friends.shift(); // => enlève le premier élément
// console.log(friends);

// console.log(friends.indexOf("Sacha")); // => indexOf renvoie l'index de l'élément passé en paramètre || si pas dans la liste -1

// console.log(friends.includes("Sacha")); // => boolean en fonctionde la présence dans la liste

//------------------
// coding challenge
// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// }

// const bills = [125, 555, 44];
// const tips = [];
// const total = [];

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
// }

// for (let i = 0; i < bills.length; i++) {
//   total.push(bills[i] + tips[i]);
// }

// for (let i = 0; i < total.length; i++) {
//   console.log(
//     `The bill is ${bills[i]}, tips is ${tips[i]} and total ${total[i]}`
//   );
// }

// console.log(bills);
// console.log(tips);
// console.log(total);

//--------------------------
// Object
// const quentin = {
//   firstname: "Quentin",
//   lastname: "Warth",
//   birthYear: 2002,
//   job: "student",
//   friends: ["Sacha", "Isaie", "Matteo"],
//   hasDriverLicense: true,

//   calcAge: function () {
//     this.age = 2022 - this.birthYear; // => créé une nouvelle prop
//     return this.age;
//   },

//   sumUp: function () {
//     return console.log(
//       `${this.firstname} ${this.lastname} is ${this.age} and was born in ${
//         this.birthYear
//       }. He is a ${this.job}. He has ${this.friends.length} friends ${
//         this.friends
//       }. He has ${this.hasDriverLicense ? "a" : "no"} driver's license.`
//     );
//   },
// };

// console.log(quentin);

// console.log(quentin.firstname); // => ne peut pointer que un objet précis qui existe
// console.log(quentin["lastname"]); // => permet de le faire avec des expressions

// const nameKey = "name";
// console.log(quentin[`first${nameKey}`]);
// console.log(quentin[`last${nameKey}`]);

// const nameKey = prompt("What do you want to know ?");
// console.log(quentin[`${nameKey}`]);

// if (quentin[nameKey]) {
//   console.log(quentin[nameKey]);
// } else {
//   console.log("This not exist");
// }

// quentin.location = "France";
// quentin["twitter"] = "@quentin_wrt";

// console.log(quentin.location + " " + quentin.twitter);

// const friend = prompt("Enter Quentin's best firend");
// quentin["bestFriends"] = friend;

// console.log(
//   `${quentin.firstname} has ${quentin.friends.length} friends and his best friend is ${quentin.friends[0]}`
// );

// console.log(quentin);

// console.log(quentin.calcAge());

// console.log(quentin["calcAge"](quentin.birthYear)); // => peut etre cool si l'utilisateur veut choisir une fonction dans l'objet

// pointer une variable d'un objet dans un objet == 'this'

// console.log(quentin.age);

// console.log(quentin.sumUp());

//---------------------
// Coding challenge
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     return (this.BMI = this.mass / (this.height * this.height));
//   },
// };

// console.log(
//   `${
//     john.calcBMI() > mark.calcBMI()
//       ? "John's BMI (" +
//         john.BMI +
//         ") is higher than Mark's (" +
//         mark.BMI +
//         ") !"
//       : "Mark's (" + mark.BMI + ") is higher than John's (" + john.BMI + ") !"
//   }`
// );

//-----------------------
// Loop

// for (let i = 1; i <= 10; i++) {
//   console.log(`Lifting weights repetition ${i}`);
// }

// const quentinArray = [
//   "Quentin",
//   "Warth",
//   2022 - 2002,
//   "teacher",
//   ["Sacha", "Isaie", "Matteo"],
//   true,
// ];

// console.log("------ ONLY STRINGS --------");
// for (let i = 0; i < quentinArray.length; i++) {
//   if (typeof quentinArray[i] !== "string") continue;
//   console.log(quentinArray[i]);
// }

// console.log("------ BREAK NUMBER NUMBER --------");
// for (let i = 0; i < quentinArray.length; i++) {
//   if (typeof quentinArray[i] === "number") break;
//   console.log(quentinArray[i]);
// }

// for (let i = quentinArray.length - 1; i >= 0; i--) {
//   console.log(quentinArray[i]);
// }

// for (let exercice = 1; exercice <= 3; exercice++) {
//   for (let rep = 1; rep <= 5; rep++) {
//     console.log(`Exercice ${exercice}, rep ${rep}`);
//   }
// }

// while

// for (let i = 1; i <= 10; i++) {
//   console.log(`Lifting weights repetition ${i}`);
// }

// let rep = 0;
// while (rep <= 10) {
//   console.log(rep);
//   rep++;
// }

// let rdm = Math.trunc(Math.random() * 6) + 1;
// console.log(rdm);

// while (rdm !== 6) {
//   console.log(rdm);
//   rdm = Math.trunc(Math.random() * 6) + 1;
// }

//---------------------------
// Coding challenge
function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

const bills = [125, 555, 44];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
}

for (let i = 0; i < bills.length; i++) {
  total.push(bills[i] + tips[i]);
}

for (let i = 0; i < total.length; i++) {
  console.log(
    `The bill is ${bills[i]}, tips is ${tips[i]} and total ${total[i]}`
  );
}

console.log(bills);
console.log(tips);
console.log(total);
