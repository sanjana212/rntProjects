//Write a JS code to find the no of digits in a number
const countDigits = (num) => {
  let count = 0;
  let split = num.toString();
  count = count + split.length;
  console.log('count', count);
}
countDigits(563349);

// Write a JS code to calculate the sum of digits in a number
const digitCount = (num) => {
  let split = num.toString().split('')
  let sum = 0;
  //   console.log('split',split);
  split.map(num => {
    sum += parseInt(num)
  });
  console.log(sum);
}
digitCount(45);

//11. Write a JS code to find the number of zeros in 2D Matrix
var arr = [[0, 1, 1], [0, 1, 0], [1, 0, 0]];
let flat = arr.flat(3);
console.log(flat, 'flat');
const zeroes = flat.reduce((acc, curr) => {
  if (!acc[curr]) {
    acc[curr] = 1;
  } else {
    acc[curr]++
  }
  return acc;
}, {})
console.log(zeroes);

//12. Write a JS code to find product of two arrays;
function findProd(arr1, arr2) {
  var arrProd = arr1.length > arr2.length ? arr1 : arr2;
  console.log('arrProd', arrProd);
  for (var i = 0; i < Math.min(arr1.length, arr2.length); i++) {
    arrProd[i] = arr1[i] * arr2[i]; //Product of 2 array elements
  }
  return arrProd;
}

var arr1 = [3, 45, 23, 78, 34];
var arr2 = [4, 2, 34, 4, 12, 1];

console.log(findProd(arr1, arr2)); //[12, 90, 782, 312, 408, 1]

const sanjana = (arr1, arr2) => {
  let product = arr1.length > arr2.length ? arr1 : arr2
  for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
    product[i] = arr1[i] * arr2[i];
  }
  return product;
}
console.log('sanjnaa', sanjana(arr1, arr2));

// errors?

// let a=67;
// console.log('Type Error',a())

// console.log('refferance error',b);
// console.log('refferance error',c);
// const b=90;
// let c=89;

//find fabinacci of a number
var fabino = (num) => {
  let n1 = 0, n2 = 1, n3
  for (let i = 0; i <= num; i++) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  };
  return n3;
}
console.log(fabino(6));

//15. Write a JS code to count all letters in a word
const countLetters = (string) => {
  const charInStr = string.split('').reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }
    return acc
  }, {})

  return charInStr;

}
console.log(countLetters('sanjana'));

//histogram;
const myHisto = (string) => {
  let histogram = {};
  for (let i in string) {
    // console.log('i',i)
    const ch = string[i];
    if (!histogram[ch]) {
      histogram[ch] = 1;
    } else {
      histogram[ch]++;
    }
  }
  return histogram;
}
console.log('histo', myHisto('sanjana'));

//Anagram
const anagram = (str1, str2) => {
  let firstName = str1.split('')
  let sort1 = firstName.sort();
  let join = sort1.join('')
  console.log('sorted', join);

  let secondName = str2.split('');
  let sort2 = secondName.sort();
  let join2 = sort2.join('');
  console.log('sorted', join2);

  if (join == join2) {
    return true;
  } else {
    return false;
  }

}
console.log(anagram('army', 'many'));

//?insert add remove  modify i.e. splice
const array = [12, 24, 56, 89, 23];
array.splice(1, 1, 100);
array.splice(3, 1, 200)
console.log(array);

//?find max length word characher;

const sanjan = 'sanjana is a good girl';
let maxLength=-Infinity;
let hey = sanjan.split(' ');
      //1)using for loop
// for (let i=0;i<hey.length;i++){
//   console.log('hey',hey[i]);
//  if(hey[i].length>maxLength){
//   maxLength=hey[i];
//  }
// }

      //2)Using map
const mapped=hey.map((letter)=>{
  if(letter.length >maxLength) {
  maxLength=letter
  console.log("MaxLenght----------",maxLength);
 return maxLength;
 }
 
})
console.log('maxLength',mapped);

//?Math.hypot do square=>add them=>find square root
console.log(Math.hypot(3, 4));

//?remove the char which is double;
const characters='aaabbbccc';
let newArray=new Set(characters);
console.log(Array.from(newArray).join(''));

//?














