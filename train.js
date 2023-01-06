const { escapeSelector } = require("jquery");
console.log("train task ishga tushdi");

//*************** D-task **************** //

//function calculator (a, b, c) {
//let errMsg = "not valid to operate!"
 //if( a == undefined || a == NaN ||c == undefined || c == NaN) {
//    return errMsg;
//} else if (b === "+"){
 //       return a + c;
//} else if (b === "-"){
//        return a - c;
//} else if (b === "/"){
//    if(c == 0){
//        return errMsg;
 //   } else{
 //       return a / c;}
//} else if (b === "*"){
//      return a * c
//}
//}

//hisob = calculator(4, "-", 0);
//console.log(hisob);



// **************** Callback funksiya tuzish ******************** //

// console.log("Jack Ma maslahatlari");
// const list = [
//         "Be a good student", //0-20
//         "Follow right Boss and meke a lot of mistakes",//20-30
//         "Start to work for yourself",//30-40
//         "Do what you are good at",//40-50
//         "Invest to youngs",//50-60
//         "Stop working, live wellbeing", //60-1000 :)
//         ];

// function getAdvice(a, callback) {
//         if (typeof a !== "number") callback("Please, Insert a number", null);
//         else if (a <= 20) callback(null, list[0]); //setTimeout(function () { callback(null, list[2]) }, 5000)
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



// **************  F-task ************** //
function findDoubler(str){
let a = 0;
let result;
for (i = 0; i < str.length; i++) {
        if(str[i] === str[i + 1]){
             a += 1
        };
}
if (a > 0){
        result = true;
   }else {result = false};
return result;
}
console.log(findDoubler("sallom"));