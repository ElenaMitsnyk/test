// var input = "javascript is awesome";
// console.log(input);

// // var animals = ["Cat", "Fish"];
// // for (var i = 0; i < animals.length; i++) {
// //         console.log("I have " + animals[i]);
// //     }


// // for (var sheep = 0; sheep < 15; sheep++) {
// //     console.log("I have" + sheep + " sheep");
// // }
// // console.log("Zzzzzz");


// // var timesToSayHello = 10;
// // for (var i = 5; i < timesToSayHello; i++) {
// //     console.log("Hello");
// // }


// // var name = "Nick"
// // for (var i = 0; i < name.length; i++) {
// //     console.log("My name " + name[i]);
// // }

// // var newAnimals =[];
// // var animals = ["Cat", "Fish"];
// // for (var i = 0; i < animals.length; i++) {
// //         console.log(["Awesome " + animals[i]]);
// //     }
// //     newAnimals.push(animals); 

// var alphabet = "qwertzuiopüasdfghjklöäyxcvbnm";
// Math.floor(Math.random() * alphabet.length);
// var randomString = ""


// // var animals = ["Cat", "Fish"];
// // for (var i = 0; i < animals.length; i++) {
// //         animals[i] = "Awesome " + animals[i];
// //     }
// //     console.log(animals); 


// Гра 
// var words = [
//     "javascript",
//     "monkey",
//     "amazing",
//     "pancake"
// ];
// var word = words[Math.floor(Math.random() * words.length)]
    
// var answerArray = [];
// for (var i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
// }
// var remainingLetters = word.length;

// while (remainingLetters > 0) {
//     alert(answerArray.join(" "));


// var guess = prompt("Guess a letter, or click Cancel to stop playing");
// if (guess === null) {
//     break;
// } else if (guess.length !== 1) {
//     alert("Please enter a single letter");
// } else {
//     for (var j = 0; j < word.length; j++) {
//        if (word[j] === guess) {
//         answerArray[j] = guess;
//         remainingLetters--;
//        }
//     }
// }
// }
//  alert(answerArray.join(" "));
//  alert("Good job! The answer was " + word);




//  var ourFirstFunction = function () {
//     console.log("Hello world");
//  };




//  var sayHelloTo = function (name) {
//     console.log("Hello " + name + "!");
//  };
// sayHelloTo("Helen");



// var drawCats =function (howManyTimes) {
//     for (var i = 0; i < howManyTimes; i++) {
//         console.log(i + " =^.^=");
//     }
// };

// drawCats(5);

// var drawCats =function (howManyTimes, whatToDrive) {
//     for (var i = 0; i < howManyTimes; i++) {
//         console.log(i + " " + whatToDrive);
//     }
// };

// drawCats(5, "^.^");


// var double = function (number) {
//     return number * 2;
// };

// double(10) + double(24);





// function add (x, y) {
// return x + y;
// }

// function multiply (a, b) {
//     return a * b;  
// }

// add(multiply(36325, 9824), 777);





// 
// 

// 2
{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
$(window).on("load", function() {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
  });  */}

// 3
// const refs = {
//     searchForm: document.querySelector('.js-search-form'),
//     articlesContainer: document-querySelector('.js-articles-container'),
// };

// const loadMoreBtn = new loadMoreBtn({
//     selector: '[data-action="load-more"]'
// });
// const newApiService = new newApiService();

// console.log(loadMoreBtn);


// refs.searchForm.addEventListener('submit', onSearch);
// loadMoreBtn.refs.button.addEventListener('click', onLoadMore);



// function onSearch(e) {
//     e.preventDefault();

//     newApiService.query = e.currentTarget.elements.query.value;

//     if (newApiService.query === '') {
//         return alert ('Введи что-то');
//     }
    
//     loadMoreBtn.show();
//     loadMoreBtn.disable();
//     newApiService.resetPage();
//     newApiService.fetchArticles().then(articles => {
//         clearArticlesContainer();
//         appendArticlesMarkup(articles);
//         loadMoreBtn.enable();
//     });
// }
//  function onLoadMore() {
//     newsApiServise.fetchArticles().then(appendArticlesMarkup);
//  }

//  function appendArticlesMarkup(articles) {
//     refs.articlesContainer.insertAdjacentHTML('beforend', articlesTpl(articles));
//  }


// 

// // 4
// document.addEventListener('DOMContentLoaded', () => {

//     const mediaFiles = document.querySelectorAll('img, video');
//     let i = 0

//     Array.from(mediaFiles).forEach((file, index) => {
//         file.onload = () => {
//             i++

//             percents.innerHTML = ((i * 100) / mediaFiles.length).toFixed(1)

//             if(i === mediaFiles.length) {
//                 preloader.classList.add('preloader--hide')
//                 percents.innerHTML = 100
//             }
//         }
//     })

// })
