var input = "javascript is awesome";
console.log(input);

// var animals = ["Cat", "Fish"];
// for (var i = 0; i < animals.length; i++) {
//         console.log("I have " + animals[i]);
//     }


// for (var sheep = 0; sheep < 15; sheep++) {
//     console.log("I have" + sheep + " sheep");
// }
// console.log("Zzzzzz");


// var timesToSayHello = 10;
// for (var i = 5; i < timesToSayHello; i++) {
//     console.log("Hello");
// }


// var name = "Nick"
// for (var i = 0; i < name.length; i++) {
//     console.log("My name " + name[i]);
// }

// var newAnimals =[];
// var animals = ["Cat", "Fish"];
// for (var i = 0; i < animals.length; i++) {
//         console.log(["Awesome " + animals[i]]);
//     }
//     newAnimals.push(animals); 

var alphabet = "qwertzuiopüasdfghjklöäyxcvbnm";
Math.floor(Math.random() * alphabet.length);
var randomString = ""


// var animals = ["Cat", "Fish"];
// for (var i = 0; i < animals.length; i++) {
//         animals[i] = "Awesome " + animals[i];
//     }
//     console.log(animals); 


Гра 
var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
];
var word = words[Math.floor(Math.random() * words.length)]
    
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;

while (remainingLetters > 0) {
    alert(answerArray.join(" "));


var guess = prompt("Guess a letter, or click Cancel to stop playing");
if (guess === null) {
    break;
} else if (guess.length !== 1) {
    alert("Please enter a single letter");
} else {
    for (var j = 0; j < word.length; j++) {
       if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
       }
    }
}
}
 alert(answerArray.join(" "));
 alert("Good job! The answer was " + word);




 var ourFirstFunction = function () {
    console.log("Hello world");
 };




 var sayHelloTo = function (name) {
    console.log("Hello " + name + "!");
 };
sayHelloTo("Helen");



var drawCats =function (howManyTimes) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + " =^.^=");
    }
};

drawCats(5);

var drawCats =function (howManyTimes, whatToDrive) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + " " + whatToDrive);
    }
};

drawCats(5, "^.^");


var double = function (number) {
    return number * 2;
};

double(10) + double(24);





function add (x, y) {
return x + y;
}

function multiply (a, b) {
    return a * b;  
}

add(multiply(36325, 9824), 777);


