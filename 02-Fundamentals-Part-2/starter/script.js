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
