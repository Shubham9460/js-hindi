//stack (primitive)  , Heap memory(Non-Primitive)

let myYoutubeName = "shubham"


let anotherName = myYoutubeName

anotherName = "hey i am shubham"
console.log("myYoutubeName");
console.log(anotherName);

let userOne = {
    gmail: "shubham@gmail.com",
    upi:"kdfnhs@ybl"
}

let usertwo = userOne

usertwo.gmail = "ram@gmail.com"

console.log(userOne);
console.log(usertwo.gmail)