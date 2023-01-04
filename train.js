const { escapeSelector } = require("jquery");

console.log("train task ishga tushdi");
// D-task


function calculator (a, b, c) {
let errMsg = "not valid to operate!"
 if( a == undefined || a == NaN ||c == undefined || c == NaN) {
    return errMsg;
} else if (b === "+"){
        return a + c;
} else if (b === "-"){
        return a - c;
} else if (b === "/"){
    if(c == 0){
        return errMsg;
    } else{
        return a / c;}
} else if (b === "*"){
        return a * c
}
}

hisob = calculator(4, "-", 0);
console.log(hisob);
