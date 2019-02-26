'use strict';

//countSheep takes a number
//should display number with the message
//"Another sheep jump over the fence"
//until no more sheep are left
function countSheep(num){
  //base case
  if(num === 0) return;

  console.log(`${num} - Another sheep jump over the fence`);
  return countSheep(num - 1);
}
countSheep(3);

//arrayDouble takes an array
//displays new arrary with each value doubled
function arrayDouble(arr){
  //base case
  if (!arr.length)return [];
  //return double first index
  return [arr[0]*2, ...arrayDouble(arr.slice(1))];
}
let theArray = [2,3,4];
console.log(`Doubling the array ${theArray} give ` + arrayDouble(theArray));

//reverse string takes a string
//reverses it
//returns the new string
function reverseString(str){
  //base case
  if (str.length === 0) return '';
  return (str.slice(-1)[0] + reverseString(str.slice(0, str.length-1)));
}
let forwardString = 'Marv';
console.log(`${forwardString} spelled backwards is ` + reverseString(forwardString));

//nth triangular number receives number
//returns number of objects in equilateral triangle with n objects per side
function nthTriangularNumber(num){
  //base case
  if (num === 0) return 0;
  return num + nthTriangularNumber(num-1);
}
let nthNumber = 4
console.log(`An equilateral triangle with ${nthNumber} of objects per side holds ` + nthTriangularNumber(nthNumber) + ' objects.');

//string splitter takes a string and a character
//returns an array of strings split from the original 
//as determined by the character
let splitString = [];
let arrayOfStrings = [];
function stringSplitter(str, char){
  //base case
  if(str.length===0)return arrayOfStrings.push(splitString);
  if(str[0] !== char) splitString = splitString + (str[0]);
  if(str[0] === char){ 
    arrayOfStrings.push(splitString);
    splitString = [];
  }
  stringSplitter(str.slice(1), char);
  return arrayOfStrings;
}
let wholeString = "Sometimes they do, sometimes they don't.";
let splitter = " ";
console.log(`The string "${wholeString}", split at each "${splitter}", gives: "${stringSplitter(wholeString, splitter)}".`);

//binary representation receives a decimal number
//and returns that value in binary
function binaryRepresentation(num){
  //base case
  if(num===0)return '';
  let binary = num%2;
  num = Math.floor(num/2);
  return binaryRepresentation(num) + binary;
}
let decimalNumber = 25;
console.log(`The binary representation of ${decimalNumber} is ` + binaryRepresentation(decimalNumber));

//factorial receives a number
//and returns factorial of that number
function factorialValue(num){
  //base case
  if(num === 1) return 1;
  return (num * factorialValue(num-1));
}
let factorialOf = 4;
console.log(`The factorial of ${factorialOf} is ` + factorialValue(factorialOf));


//Fibonacci sequence receives a number 
//and returns sequence to the nth iteration
function fibonacciSequence(num){
  //base case
  if (num<2) return num;
  let temp =(fibonacciSequence(num-1) + fibonacciSequence(num-2));
  console.log(temp);
  return (temp);
}
let nthIteration = 6;
console.log(fibonacciSequence(nthIteration));


//anagrams receives a string
//returns every possible permutation of those characters
let anagramArray = []
let position = 0;
function anagram(str) {
  if (position > str.length-1) return anagramArray;
  if (position === 0){
    anagramArray.push(str[position]+str.slice(position+1));
    position++;
    anagram(str);
  } else {
    anagramArray.push(str.slice(position-1)+str.slice(0,position-1));
    position++;
    anagram(str);
  }
}
let word = 'east';
console.log(anagram(word));