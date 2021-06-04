/*
    CIT 281 Project 2
    Name: Allie Deere
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += alphabet[getRandomInteger(1,alphabet.length-1)];
}

console.log(result);

//This function will return a single random lowercase letter 
const getRandomletter = function() {
    let result = ""

    for (let i = 0; i < 1; i++) {
        result += alphabet[getRandomInteger(1,alphabet.length-1)]
    }

    return result
}
console.log(getRandomletter())

//This function will return a random string length
const getRandomString = function(minLength, maxLength){
    let result = ""
    for (let i = 0; i < getRandomInteger(minLength, (maxLength + 1) ); i++) {
        result += getRandomletter()
    }
    return result
}
console.log(getRandomString(10,20))



//this function will sort any string in alphabetical order
const getSortedString = function(string) {
    return string.split("").sort().join("")
}
console.log(getSortedString("xpacd"))