const { escapeSelector } = require("jquery");
console.log("train task ishga tushdi");

//*************** D-task **************** //

// function calculator (a, b, c) {
// let errMsg = "not valid to operate!"
//  if( a == undefined || a == NaN ||c == undefined || c == NaN) {
//    return errMsg;
// } else if (b === "+"){
//        return a + c;
// } else if (b === "-"){
//        return a - c;
// } else if (b === "/"){
//    if(c == 0){
//        return errMsg;
//    } else{
//        return a / c;}
// } else if (b === "*"){
//      return a * c
// }
// }

// hisob = calculator(4, "-", 0);
// console.log(hisob);

// **************  F-task ************** //
// function findDoubler(str){
// let a = 0;
// let result;
// for (i = 0; i < str.length; i++) {
//         if(str[i] === str[i + 1]){
//              a += 1
//         };
// }
// if (a > 0){
//         result = true;
//    }else {result = false};
// return result;
// }
// console.log(findDoubler("sallom"));

// ************** Challenge 2 *****************

// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let code = 2;
// function decodeMessage(message, code) {
// let alp_split = alphabet.split("");
// let  a = message.split("");
// function forIndex(x) {
//         let result;
//         if (code >= 0) { result =  (alp_split.indexOf(x) + code) % alphabet.length;}
//          else {result = ((alp_split.indexOf(x) + code) + alphabet.length) % alphabet.length; }
//          return result;
// };
// let  by_index = a.map(forIndex)
// //console.log("by index:", by_index);

// let c = [];
// let d = ""
// for (i = 0; i < a.length; i++){
//     let index = alphabet.indexOf(a[i]);
//     c = alp_split[by_index[i]];
//     if(index > -1){
//     d +=c;
//     } else {
//       d += " ";
//     }
// }
// return d;
// }

// const message = "salom dostim qalaysiz";
// const sec_msg = decodeMessage(message, code);
// console.log("secret message: ", sec_msg);

// setTimeout (() =>{
// code = -2;
// const message_encode = decodeMessage(sec_msg, code);
// console.log("Original message: ", message_encode);
// }, 5000);

/*callback -> callback
  async    -> then/catch||async/await
  Promise  -> then/catch||async/await*/

// **************** Callback funksiya tuzish ******************** //

// console.log("Jack Ma maslahatlari");
// const list = [
//   "Be a good student", //0-20
//   "Follow right Boss and meke a lot of mistakes", //20-30
//   "Start to work for yourself", //30-40
//   "Do what you are good at", //40-50
//   "Invest to youngs", //50-60
//   "Stop working, live wellbeing", //60-1000 :)
// ];

// function getAdvice(a, callback) {
//         // callback = err, data
//         if (typeof a !== "number") callback("Please, Insert a number", null);
//         else if (a <= 20) callback(null, list[0]);           //setTimeout(function () { callback(null, list[2]) }, 5000)
//         else if (a > 20 && a <= 30) callback(null, list[1]); //setTimeout(function () { callback(null, list[2]) }, 5000)
//         else if (a > 30 && a <= 40) callback(null, list[2]); //setTimeout(function () { callback(null, list[2]) }, 5000)
//         else if (a > 30 && a <= 40) callback(null, list[2]); //setTimeout(function () { callback(null, list[2]) }, 5000)
//         else if (a > 50 && a <= 60) callback(null, list[4]); //setTimeout(function () { callback(null, list[2]) }, 5000)
//         else {
//               setTimeout(function () {
//                 callback(null, list[5])
//               }, 5000)

//         }
// }

// console.log("passed here 0");
// getAdvice(37, (err, data) => {
//         if(err) console.log('ERROR:', err);
//         else {console.log("Result:", data);
//         }
// });
// console.log("passed here 1");

// ************ async functions and Promise functions *************** //

// async function getAdvice(a) {
//   // async functionlarda setTimeOut va setInterval ishlamaydi
//   if (typeof a !== "number") throw new Error("Please, Insert a number");
//   else if (a <= 20) return null, list[0];
//   else if (a > 20 && a <= 30) return null, list[1];
//   else if (a > 30 && a <= 40) return null, list[2];
//   else if (a > 30 && a <= 50) return null, list[3];
//   else if (a > 50 && a <= 60) return null, list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(function () {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }
// // console.log("passed here 0");
// // getAdvice(37)
// //   .then((data) => {
// //     console.log("javob:", data);
// //   })
// //   .catch((err) => {
// //     console.log("ERROR:", err);
// //   });
// // console.log("passed here 1");
// async function test(a, b) {
//   if (typeof a !== "number" && typeof b !== "number")
//     throw new Error("Faqat son kirita olasiz");
//   else {
//     return new Promise((natija, xatolik) => {
//       setTimeout(() => {
//         natija(console.log("just for test", a + b));
//       }, 5000);
//     });
//   }
// }

// async function run() {
//   // bu funksiya shunchaki ran qilish uchun
//   try {
//     let javob = await getAdvice(17);
//     console.log(javob);
//     javob = await test(3, 6);
//     javob = await getAdvice(27);
//     console.log(javob);
//     javob = await getAdvice(34);
//     console.log(javob);
//     javob = await getAdvice(67);
//     console.log(javob);
//   } catch (err) {
//     console.log(
//       "ERROR:",
//       err.message
//     ); /* .message -> errorning biz kiritgan qiymatinigina qaytarish  */
//   }
// }
// run();

/************* G-task *************/
// function indexOfLargest(arr) {
//   let largest = arr[0];
//   let index = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//       index = i;
//     }
//   }
//   return index;
// }

// console.log(indexOfLargest([4, 16, 9, 12, 15]));

// function indexOfLargestDifference(arr) {
//   // eng katta farqi o'z ichiga olgan elementlar indexlarini saqlash uchun
//   // 0 ga teng bo'lgan largestDifference, index1, va index2 o'z ichiga olgan massiv
//   let largestDifference = 0;
//   let index1 = 0;
//   let index2 = 0;
//   // massivning har bir elementi bilan boshqa elementlar o'rtasidagi farqni aniqlash uchun ikkita for davomiyligi
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       // farqni aniqlash
//       let diff = Math.abs(arr[i] - arr[j]);
//       // agar farq oldingi farqdan katta bo'lsa, largestDifference, index1, va index2 ni yangilash
//       if (diff > largestDifference) {
//         largestDifference = diff;
//         index1 = i;
//         index2 = j;
//       }
//     }
//   }
//   // [index1, index2] ni qaytarish
//   return [index1, index2];
// }

// ************** Challenge 2 *****************

// let price = [2, 10000, 1, 3000000, 30, 3, 30];

// stockBuyAndSell(price);

// function stockBuyAndSell(price) {
//   let n = price.length;
//   let i = 0;
//   let maxProfit;
//   let a = [];
//   while (i < n - 1) {
//     while (i < n - 1 && price[i + 1] <= price[i]) i++;
//     if (i == n - 1) break;
//     let index = i++;
//     while (i < n && price[i] >= price[i - 1]) i++;
//     let profitIndex = i - 1;
//     a = a.push(price[profitIndex] - price[index]);
//     console.log(a);
// console.log(
//   `You should buy stock => on index: ${index}, and sell on ${profitIndex} to get max Profit: ${
//     price[profitIndex] - price[index]
//   }`
//);
// }
//}
// function isGreatestThen100(a, callback) {
//   if (typeof a !== "number") callback("Please, Insert a number", null);
//   else if (a < 100) callback(null, `Son 100dan kichik`);
//   else if (a >= 100) {
//     callback(null, `Son 100ga ten yoki katta`);
//   }
// }

// isGreatestThen100(1, (err, data) => {
//   if (err) console.log("ERROR: ", err);
//   else {
//     console.log("result: ", data);
//   }
// });

// ************** H-task *****************

// function reserveString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reserveString("MIT-2"));

// ************** Challenge 4 ***************

// const arr = [null, 1, null, 15, null, 54, 3, null, 10, null, null, 1];

// function moveNullskeepOrder(arr) {
//   let numbers = arr.filter((ele) => {
//     if (typeof ele == "number") {
//       return ele;
//     }
//   });
//   let nulls = arr.map((ele) => {
//     // nullarning qiymatini o'zgartirib olish
//     if (typeof ele != "number") {
//       return (ele = 1);
//     }
//   });
//   let cc = nulls.filter((ele) => {
//     // nullarning sonini aniqlash
//     if (ele == 1) {
//       return ele;
//     }
//   });
//   for (i = 0; i < cc.length; i++) {
//     // nullarning sonicha nullni arrayga push qilish
//     numbers.push(null);
//   }
//   return numbers;
// }
// console.log(moveNullskeepOrder(arr));

// // ************** Challenge 5 ***************

// const magazine =
//   "Lorem kill ipsum dolor sit amet, consectetur adipiscing elit, you sed do eiusmod tempor incididunt ut labore et dolorse magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolors in reprehenderit in voluptate velit esse cillum dolorse eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
// const note = "dolor kills you";

// function canMurderWrite(words) {
//   var wordsArray = words.split(" "); // note elementlarini arrayga o'tkazish
//   return wordsArray.every(function (word) {
//     //array elementlarini magazineda mavjudligini tekshirish
//     return magazine.indexOf(word) !== -1;
//   });
// }
// console.log(canMurderWrite(note));

// // ************** I - Task  ***************

let arr = [0, -15, 5, -3, 2, -8, 9, -11];
function getPositive(arr) {
  return arr.filter((ele) => ele > 0);
}
console.log(getPositive(arr));
