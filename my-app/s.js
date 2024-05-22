const arr=[1,2,3];
arr[3]=arr;
console.log(arr,'arr');
console.log('dhanu'+1+1) //ans dhanu11
console.log(1+1+'dhanu') //ans 2dhanu

const string='sanjana'
var show=string.split('').reduce((acc,curr)=>{
    if(!acc[curr]){
        acc[curr]=1
    }else{
        acc[curr]++
    }
    return acc;
},{});
console.log(show);

let str='sanjana';
let set=new Set(str);
console.log(Array.from(set).join(''),'set');

//date
const d = new Date();
console.log(d)

//random
const r=Math.random();
console.log(r);

//set
const letters = new Set("123445666");
console.log(letters);

//map
const flowers=new Map();
flowers.set('lily',500);
flowers.set('rose',500);
flowers.set('tulips',500);
let hs=flowers.has('lily');
console.log(hs);


flowers.delete('lily')

console.log(flowers);
let yu='hello word';
const z=yu.toUpperCase();
console.log(z);

//*********objects*****/
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  //stringify
  let myString = JSON.stringify(person);
  console.log(myString);

  const arr2= ["John", "Peter", "Sally", "Jane"];

  let myString2 = JSON.stringify(arr2);
  console.log(myString2);

//reverse & add char to string
  let xyz='sanjana';
 let pqr=xyz.split('').reverse().join('');
  console.log(pqr,'pqr');
let o=xyz.split('')
o.splice(0,0,'a')
console.log('p',o)
let q=o.join('');
console.log(q,'q');

const employee23={
    firstName:'sanjana',
    lastName:'laware',
}
console.log(employee23.firstName+' '+employee23.lastName)
console.log("hi my name is \"sanjana\"hello");

//concat
let str1='sanjana';
let str2='laware';
let str3=str1.concat(" ",str2);
console.log(str3);
//trim trimStart
const trim='  hallo';
console.log(trim.trim())
//padstart
let text = "5";
let padded = text.padStart(4,"0");
console.log(padded);
//chartAt
let text2 = "HELLO WORLD";
let char = text2.charAt(0);
console.log(char);

let x = Number.MAX_VALUE;
console.log(x);


//************************ */
const obj1={a:3};
const obj2={b:4};
const obj3={c:9};
const mainObj=Object.assign(obj1,obj2,obj3);
console.log('mainObj',mainObj);



let arr_3   = [4, 6, 7];
let arr_4    = [8, 1, 9];
// Example output: 
// [12, 7, 16]
let sumarr=[]
for(let i=0;i<arr_3.length; i++){
 sumarr.push(arr_3[i]+arr_4[i]);
}
console.log('sumarr',sumarr);

//****capitalize the string *** */
let s='';
const k='javascript';
for(let i=0;i<k.length;i++){
   s=s+(k[i].toUpperCase())
}
console.log('s',s);

let st2 = "don’t know why";
// Example output: 
// “yes” 
for(let i=0;i<st2.length;i++){
    console.log(st2[i]);
}


//guess the number;
const prompt = require("prompt-sync")();
const guess = prompt("Please enter your name");
console.log(guess)







