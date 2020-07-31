// function 1

function getRandomArray(length, min, max) {
const randomArray = [];
randomArray.length = length;
const newArray = [];
randomArray.forEach((number) => {
number = (Math.floor(Math.random() * (max-min) + 1 + min);
newArray.push(number)
});
return newArray;
}

document.write (getRandomArray(6, 5, 25));

// function 3

/*function getAverage (...numbers) {
let averageArray = numbers.filter((number) => Number.isInteger(number));
const sum = (averageArray.reduce((acc, item) => acc += item);
return (sum/averageArray.length);
}

document.write (getAverage(1,6,3,8,5,4));

//function 5

function filterEvenNumbers(...numbers) {
  const finalNumbers = numbers.filter((number) => number % 2 > 0);
  return finalNumbers;
}

document.write (filterEvenNumbers(1,2,3,4,5,6,7,8,9));

//function 6

function countPositiveNumbers(...numbers) {
const positiveArray = numbers.filter((number) => number > 0);
return positiveArray.length;
}
document.write (countPositiveNumbers(4,-5,8,-5,3,-5,9,6,-5,9,-6,-7,5,-9,6,5,-3,5,-6,3));

//function 7

function getDividedByFive(...numbers) {
  const divFiveArray = numbers.filter((number) => number % 5 === 0 );
  return divFiveArray;
}
document.write (getDividedByFive(5,2,6,10,13,15,17,20,22,25,28,30));*/

//function 8

function replaceBadWords(string) {
  const wordArray = string.split('');
  const findWord = wordArray.find((word) => word ==== "fuck" && word === "shit");
  if (findWord) {
    findWord.replace("fuck"||"shit", "****");
    findWord.join('');
  }
  return findWord;
}
document.write (replaceBadWords("fuck this shit!"));
