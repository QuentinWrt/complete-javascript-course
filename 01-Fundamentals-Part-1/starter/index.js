// let js = "amazing";
// //if (js === "amazing") alert("JavaScript is FUN !!!");
// //console.log(50 + 20 + 30 + 1);

// //console.log("Quentin");
// //console.log(23);

// let firstName = "Quentin";
// //console.log(firstName);

// let myFirstJob = "Porgrammer";
// let myCurrentJob = "Teacher";

// //-------------------------------------------------
// // DATATYPES

// //=> number, string, boolean, object

// let children; // => undefined = empty value now

// //console.log(true);
// let javaScriptIsFun = true;
// //console.log(javaScriptIsFun);
// console.log(typeof javaScriptIsFun);

// javaScriptIsFun = "YES";

// console.log(typeof javaScriptIsFun);

// let year

// console.log(typeof(year));

// => ne jamais déclarer une variable sans 'let' ou 'const'

// let age = 15;

// let phrase = `Bonjour je m'appelle Quentin et j'ai ${age} ans`;

//----------------------------------------------------
// premier 'code challenge'

// const markHeight = 1.69;
// const markWeight = 78;

// const johnHeight = 1.95;
// const johnWeight = 92;

// let markIBM = markWeight / markHeight ** 2;
// let johnIBM = johnWeight / johnHeight ** 2;

// console.log(markIBM);
// console.log(johnIBM);

// console.log(markIBM > johnIBM);

// console.log(`on peut
// vraiment
// faire ça ?!`); // => trop bien ce truc

// const bite = 30;

// if (bite > 20) {
//   console.log(`gros zizi !`);
// } else {
//   console.log("petite bite va");
// }

//--------------------------------------------------------
// second challenge

// const markHeight = 1.69;
// const markWeight = 60;

// const johnHeight = 1.95;
// const johnWeight = 92;

// let markIBM = markWeight / markHeight ** 2;
// let johnIBM = johnWeight / johnHeight ** 2;

// // console.log(markIBM);
// // console.log(johnIBM);

// if (markIBM > johnIBM) {
//   console.log(`Mark IBM is higher than John's.
//     Mark's IBM is ${markIBM} and John's IBM is ${johnIBM}`);
// } else {
//   console.log(`John as a higher IBM than Mark
//     John'S IBM is ${johnIBM} and Mark's IBM is ${markIBM}`);
// }

// pour modifier une valeur 'const' on peut utiliser un consvertisseur

// const year = "2022";
// console.log(Number(year) + 20);

// console.log(year + 20); // => ne fonctionne pas car 'year' est de type const et contient une String donc ceci ne va que concatainer

// fonctionne de la même manière pour convertir un Integer ebn String dans un const

// 5 valeurs fausses => 0, '', undefined, null, flase
// Boolean() => permet de verifier si une vcariable est 'true' ou 'flase'

// const money = 0;
// // 0 est une valeur flase => la convertion se fait automatiquement avec l'utilisation de 'if-else'
// if (money) {
//   console.log("don't pend it all");
// } else {
//   console.log("you should gete a job");
// }

// let height = 123;
// // pareille que au dessus avec la const
// if (height) {
//   console.log(`Hey you are ${height} tall`);
// } else {
//   console.log(`height is not defined`);
// }

// const fav = prompt("What's your favorite number"); => //prompt() renvoie une String
// console.log(fav);

//------------------------------------------------
// Logique Boolean

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if (shoodDrive) {
// //   console.log("She is able to drive !");
// // } else {
// //   console.log("Let somone drive...");
// // }

// const isTired = false; // C

// const shoodDrive = hasDriversLicense && hasGoodVision && !isTired;

// console.log(hasDriversLicense && hasGoodVision && !isTired);

// if (shoodDrive) {
//   console.log("She is able to drive !");
// } else {
//   console.log("Let somone drive...");
// }

//-----------------------------------
// Coding challenge

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// if (scoreDolphins > scoreKoalas) {
//   console.log(`Dolphin win ! (${scoreDolphins})`);
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Equality");
// } else {
//   console.log(`Koala win ! (${scoreKoalas})`);
// }

// const day = "sunday";

// switch (day) {
//   case "monday": // => day === 'monday'
//     console.log("Oh no ... it's monday");
//     console.log("Go to school");
//     break;
//   case "tuesday":
//     console.log("kjrbfui");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("middle week");
//   case "friday":
//     console.log("friday then !");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("week end !");
//     break;
//   default:
//     console.log("not a day of the week !");
// }

//-------------------------------
//ternaire

// => permet d'aller plus vite que les 'if / else'

const age = 18;
age >= 18 ? console.log("tu est vieux") : console.log("trop jeune pour moi");

let drink = age >= 18 ? "alcool" : "watter";
console.log(`I like to drink ${drink}`);
