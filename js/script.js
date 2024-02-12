var firstName = "D'Angelo";
var lastName = 'Kwakye';
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

let age = 22;

let a = 23;
let b = 55;

let result = `${a} + ${b} = ${a+b}`;
console.log(result);


let bottle = {
    color: "navy",
    volume: 580,
    canStoreWater: true,
    storeWater: null
}


if (age >= 18){
    console.log("welcome to XXX");
}else{
    console.log("This page is not for you");
}
let v = 1
for (let i = v; i != 8; i++) {
    console.log('the value of i is', i);
}

function isEligible () {
    if (age >= 18){
       return "welcome to XXX";
    }else{
       return "This page is not for you";
    }
}

//function - Invoking
// alert(isEligible()); 
isEligible();

