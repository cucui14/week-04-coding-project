console.log(
  `1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.\n
    \ta. Programmatically subtract the value of the first element in the array from the value in the last element of the array.\n
    \t\tDo not use numbers to reference the last element, find it programmatically.\n
    \t\tages\[7\] - ages\[0\] is not allowed!\n
    \tb. Add a new age to your array and repeat the step above to ensure it is dynamic. \(works for arrays of different lengths\).\n
    \tc.Use a loop to iterate through the array and calculate the average age.`
);

const ages = [3, 9, 23, 64, 2, 8, 28, 93]; //This is an array of numbers named "ages"
let lastNumber = ages[ages.length - 1]; //The variable "lastNumber" is assigned the value of the last number of the array ages
let firstNumber = ages[0]; //The variable "firstNumber" is assigned the value of index 0 in the array ages
console.log(lastNumber - firstNumber); //we log to the console the value of lastNumber minus the value of firstNumber

let newAge = 13; //The new variable "newAge" gets assigned 13 as its value
ages.push(newAge); //takes the array ages and adds the value of newAge to the end of the array
lastNumber = ages[ages.length - 1]; //The variable "lastNumber" is assigned the value of the last number of the array ages
firstNumber = ages[0]; //The variable "firstNumber" is assigned the value of index 0 in the array ages
console.log(lastNumber - firstNumber); //we log to the console the value of lastNumber minus the value of firstNumber

let counter = 0; //The new variable "counter" gets assigned 0 as its value
for (let i = 0; i < ages.length; i++) {
  //for loop: variable "i" gets assigned the value of 0. While the value of "i" is less than the length of the variable ages we add one to the "i" variable
  counter += ages[i]; //adds each index of the array "ages" to the value of the variable "counter" each time the for loop runs until the variable "i" stops been less than the length of ages.
}
console.log(counter / ages.length); //logs to the console the value of counter devided by the length of the array "ages".

console.log(
  `1. Create an array called names that contains the following values: \'Sam\', \'Tommy\', \'Tim\', \'Sally\', \'Buck\', \'Bob\'.\n
\ta. Use a loop to iterate through the array and calculate the average number of letters per name.\n
\tb. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.`
);

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; //This is an array of strings named "names"

let nameCounter = 0; //The new variable "nameCounter" gets assigned 0 as its value
for (let i = 0; i < names.length; i++) {
  //for loop: variable "i" gets assigned the value of 0. While the value of "i" is less than the length of the variable names we add one to the "i" variable
  let name = names[i]; //assigns the value of each index element of names to a new variable called "name"
  let nameLength = name.length; //asigns the lenth of the value the variable name has in each iteration to a new variable called "nameLength"
  nameCounter += nameLength; //adds the value of nameLenth to the "nameCounter" variable each iteration
}
console.log(nameCounter / names.length); //devides the value of the variable "nameCounter" by the length of the array "names"
let newNames = ''; //assigned an empty string to variable "newNames"
for (let i = 0; i < names.length; i++) {
  //for loop: variable "i" gets assigned the value of 0. While the value of "i" is less than the length of the variable names we add one to the "i" variable
  newNames += names[i] + ' '; //adds the index value of each element in the array "names" to the variable "newNames" with a space after
}
newNames = newNames.trim(); //removes any space from the befining and the end of the string value in the array "newNames"
console.log(newNames); //logs to the console the value of the variable "newNames"

console.log('3. How do you access the last element of any array?');
console.log(
  `You can access the last element of an array by using the name of the array then [] with .length -1 inside\n Example: ages\[ages.length - 1\]\;\nWe take the length and minus one since the index of elements starts at 0`
);
console.log('4. How do you access the first element of any array?');
console.log(
  `We can access the first element of an array by targeting the index of 0\nAn array's index starts at 0 so this will be the first element\nExample: ages[0]`
);

console.log(
  '5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.'
);

let nameLengths = []; //an empty array called "nameLengths"

for (let i = 0; i < names.length; i++) {
  //for loop: variable "i" gets assigned the value of 0. While the value of "i" is less than the length of the variable names we add one to the "i" variable
  let name = names[i]; //new variable "name" take the value of each iterations of the names index
  let nameLength = name.length; //new variable "nameLength" takes the value of the left of the value the variable "name" received from the varible "names" index
  nameLengths += nameLength; //adds the value of "nameLength" to the array "name lengths"
}

nameLengths = nameLengths.split('').map(Number); //splits the numbers in the variable "nameLengths" and maps them as an array of numbers.
console.log(nameLengths); //logs the variable "nameLengths" to the console

console.log(
  '6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.'
);

let nameLengthsCounter = 0; //variable "namelengthsCounter" created to keep count
for (let i = 0; i < nameLengths.length; i++) {
  //for loop: variable "i" gets assigned the value of 0. While the value of "i" is less than the length of the array nameLengths we add one to the "i" variable
  nameLengthsCounter += nameLengths[i]; //adds the each of the values of the indexes in the nameLengths array to the varaible "nameLengthsCounter"
}

console.log(nameLengthsCounter); //logs the variable "namelengthsCounter" to the console

console.log(
  `7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. \(i.e. if I pass in 'Hello' and 3, I would expect the function to return \'HelloHelloHello\'\).`
);

let concatCounter = ''; //"concatCounter" variable created with an empty string
function wordConcat(word, n) {
  //a function wordConcat takes two parameters word and n
  for (let i = 0; i < n; i++) {
    //for loop: variable "i" gets assigned the value of 0. While the value of "i" is less than the value of the variable n we add one to the "i" variable
    concatCounter += word; //adds the value of the variable "worrd" to the variable "concatCounter" for every iteration
  }
  return concatCounter; //returns the value of the variable "concatCounter"
}
console.log(wordConcat('Hello', 3)); //executes thee function wordConcat passing a string of "hello" and the number 3 as two arguments and logs the results to the console

console.log(
  `8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.`
);

function fullName(firstName, lastName) {
  //a function fullName takes two parameters firstName and lastName
  return `${firstName} ${lastName}`; //returns the value of firstName and lastName as a string literal with a space in the middle
}
console.log(fullName('Angel', 'Pureco')); //executes the function fullName passing a string of "Angel" and a string of "Pureco" as two arguments and logs the results to the console

console.log(
  `9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.`
);

const arrayOfNumbers = [20, 30, 25, 25, 3]; //an array of numbers called "arrayOfNumbers"

const numSum = (numArray) => {
  //an arrow function called "numSum" takes a parameter called numArray
  let counter = 0; //a variable called "counter" with 0 assigned to it
  for (let i = 0; i < numArray.length; i++) {
    //for loop: variable "i" gets assigned the value of 0. While the value of "i" is less than the length of the variable "numArray" we add one to the "i" variable
    counter += numArray[i]; //add the value of the index of numArray to the variable "counter" each interation
  }
  return counter > 100; //returns true if the value of counter is more than 100
};

console.log(numSum(arrayOfNumbers)); //executes the function numSum and passes in the array "arrayOfNumbers" and logs it to the console

console.log(
  `10. Write a function that takes an array of numbers and returns the average of all the elements in the array.`
);

const averageNum = (numArray) => {
  //an arrow function called "averageNum" that takes a parameter
  let counter = 0; //a variable called "counter" with a value of 0 assigned to it
  for (let i = 0; i < numArray.length; i++) {
    //for loop: variable "i" gets assigned the value of 0. While the value of "i" is less than the length of the variable "numArray" we add one to the "i" variable
    counter += numArray[i]; //adds the value of the index of numArray to the variable "counter" each interation
  }
  return counter / numArray.length; //returns the value of the variable counter devided by the length of the numArray variable
};

console.log(averageNum(arrayOfNumbers)); //executes the fuction averageNum, passes in the array arrayOfNumbers as an argument and logs the results to the console

console.log(
  `11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.`
);

const numArray1 = [10, 4, 5, 8]; //an array of numbers called numArray1
const numArray2 = [4, 6, 8, 1]; //an array of numbers called numArray2

function averaOfTwoNum(array1, array2) {
  //a function called averaOfTwoNum that takes two parameters
  let counter = 0; //a variable called "counter" with a value of 0 assigned to it
  for (let i = 0; i < array1.length; i++) {
    //for loop: variable "i" gets assigned the value of 0. While the value of "i" is less than the length of the variable "array1" we add one to the "i" variable
    counter += array1[i]; //adds the value of the index of array1 to the variable "counter" each interation
  }
  let counter2 = 0; //a variable called "counter2" with a value of 0 assigned to it
  for (let i = 0; i < array2.length; i++) {
    //for loop: variable "i" gets assigned the value of 0. While the value of "i" is less than the length of the variable "array2" we add one to the "i" variable
    counter2 += array2[i]; //adds the value of the index of array2 to the variable "counter2" each interation
  }
  return counter > counter2; //returns true if the value of the variable counter is greater than the value of variable counter2
}

console.log(averaOfTwoNum(numArray1, numArray2)); //executes the function averaOfTwoNum, passes the arrays numArray1 and numArray2 as two arguments and logs the results to the console

console.log(
  `12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`
);

const willBuyDrink = (
  isHotOutside,
  moneyInPocket //an arrow function that takes two parameters
) => isHotOutside && moneyInPocket > 10.5; //returns true if the value of the variable isHotOutside is true and the value of the variable moneyInPocket is gerater than 10.5

console.log(willBuyDrink(true, 11.0)); //executes the function willBuyDrink, passes an argument of true as the first argument and 11.0 as the second argument and logs the results to the console

console.log(
  `13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.`
);

function tipCalculator(total, percent) {
  //a function called "tipCalculator" that takes two parameters
  let tip = total * (percent / 100); //variable tip gets assigned the value of the parameter total times the result of the varaibgle percent devided by 100
  return tip; //we return the value of the variable tip
}
console.log(tipCalculator(50, 15)); //executes the function tipCalculator, passes two values as the two parameters the function takes and logs to the console the results

//This function can be used to figure out how much to tip based on a percentage. The first argument is the total of the bill and the second argument is the percentage you would tip
