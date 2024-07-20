// //stack (primitive)  , Heap memory(Non-Primitive)

// let myYoutubeName = "shubham"


// let anotherName = myYoutubeName

// anotherName = "hey i am shubham"
// console.log("myYoutubeName");
// console.log(anotherName);

// let userOne = {
//     gmail: "shubham@gmail.com",
//     upi:"kdfnhs@ybl"
// }

// let usertwo = userOne

// usertwo.gmail = "ram@gmail.com"

// console.log(userOne);
// console.log(usertwo.gmail)


//=========================================================================================================


// String

let name = "shubham"
let frind = "anil"

// console.log(`hey my name is ${name} and my frind name is ${frind}`);

const gameName = new String(`shubham-pp`)

// console.log(gameName.toUpperCase())
// console.log(gameName.length)
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf(`u`))

// const newString = gameName.substring(0 , 4)
// console.log(newString);

// const anothrString = gameName.slice(3 ,7)
// console.log(anothrString);

const newStringOne = "   shubham   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https//shubham.com?shubham%20parmar"

console.log(url.replace('%20', '-'));

console.log(url.includes('shubham'));

console.log(gameName.split('-'));

console.log(String);


//=====================================================================================================================================



//  Number


// const score =100
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(typeof balance);

// console.log(balance.toFixed(3));

// const otherNumber = 123.832837
// console.log(otherNumber.toPrecision(3));

// const hundred = 100000
// console.log(hundred.toLocaleString('en-IN'));



//==++++++++++++++++++++++++++++++++++++++++++++++MAthes+++++++++++++++++++++++++++++++++++++++++++++++=+++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-4));//onliy negtiv ko possitiv karta he

// console.log(Math.round(4.6));//roundfiger me values dega like 5

// console.log(Math.ceil(4.6))//uper vali value lega 
// console.log(Math.floor(4.6))//niche wali value lega lowest

// console.log(Math.sqrt(5))
// console.log(Math.pow(5 ,2))

// console.log(Math.min(1,3,5,7,8));
// console.log(Math.max(1,3,5,7,8));


console.log(Math.random());//0 to 1

console.log((Math.random() * 10) + 1);//1 to 10 se uper ki value aaygi

console.log((Math.random() * 10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min)) + min);//random number ke liye min to max