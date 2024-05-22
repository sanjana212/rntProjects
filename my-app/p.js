// function solve(arr, rotations){
//     if(rotations == 0) return arr;
//     for(let i = 0; i < rotations; i++){
//     const element=arr.pop();
//   arr.unshift(element);
//     }
//     return arr;
//    }
//    solve([44, 1, 22, 111], 5);
console.log('hey')
const a = true + true + true * 3;
console.log('a', a);

var b;
console.log('b', b)//undefined declared value but not assigned

var a1 = 23;
var a2;
console.log('multiply', a1 * a2)//not a number
console.log(typeof (null));
console.log(typeof (NaN));
console.log('print(parseInt("123Hello"));', parseInt("012 10"));

const obj1 = { Name: "Hello", Age: 16 };
const obj2 = { Name: "Hello", Age: 16 };
console.log((obj1 === obj2));

//test prime function
function testPrime(n) {
    if (n == 1) {
        return false;
    } else if (n == 2) {
        return true;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}
console.log('testPrime', testPrime(11));
//////////////////

let count1 = 0;
for (let i = 2; i <= 100; i++) {
    for (let j = 1; j <= i; j++) {
        if (i % j == 0) {debugger;
           // console.log(i,"I num",j," j Num");
            //console.log("Condition Of Count",i % j);
            count1++;
        }
    }
    if (count1 == 2)
        console.log("count",i);
    count1 = 0;
}

//palindrome;
const str = 'rasanjcar';
const len = str.length;
for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
        console.log(' not palindrome');
    } else {
        console.log('paliindrome')
    }

}

const validateStr = (string) => {
    let isPali=true;
    string.split('').forEach((ele,i)=>{
        if(ele!==string[string.length-1-i]){
            isPali= false;
        }
    })
   return isPali
}
console.log('validateStr', validateStr('121'));

const object=[
    {
        "projectId": 75,
        "projectName": "rnt",
        "email": "mailto:kiran@multistate.com",
        "customer": {
            "customerId": 1,
            "userId": null,
            "password": null,
            "customerName": "Multistate",
            "firstName": "Billy",
            "lastName": "Wo",
            "email": "mailto:billy@multistate.com",
            "contactNo": "+91788967458",
            "address": "Banglore",
            "licenseType": "License 1",
            "noOfUsers": 5,
            "activationDate": "2023-06-14",
            "expiryDate": "2023-07-08"
        },
        "projectManager": {
            "userId": "kiran",
            "customer": {
                "customerId": 1,
                "userId": null,
                "password": null,
                "customerName": "Multistate",
                "firstName": "Billy",
                "lastName": "Wo",
                "email": "mailto:billy@multistate.com",
                "contactNo": "+91788967458",
                "address": "Banglore",
                "licenseType": "License 1",
                "noOfUsers": 5,
                "activationDate": "2023-06-14",
                "expiryDate": "2023-07-08"
            },
            "role": {
                "roleId": 3,
                "name": "ROLE_PROJECT_ADMIN"
            },
            "firstName": "Kiran",
            "lastName": "Ghule",
            "reportingTo": "kiran",
            "employeeId": "kiran1234",
            "email": "mailto:kiran@email.com",
            "password": "1234",
            "contactNo": "99998880009",
            "userStatus": "ACTIVE"
        },
        "document": {
            "docTypeId": 1,
            "customer": null,
            "docType": "billy",
            "docFields": [
                {
                    "fieldId": 2,
                    "field": "Invoice Number",
                    "documentType": null
                },
                {
                    "fieldId": 13,
                    "field": "Invoice Number",
                    "documentType": null
                },
                {
                    "fieldId": 27,
                    "field": "",
                    "documentType": null
                },
                {
                    "fieldId": 3,
                    "field": "Invoice Date",
                    "documentType": null
                },
                {
                    "fieldId": 19,
                    "field": "qwe",
                    "documentType": null
                },
                {
                    "fieldId": 1,
                    "field": "Consignee",
                    "documentType": null
                },
                {
                    "fieldId": 15,
                    "field": "Add Address",
                    "documentType": null
                },
                {
                    "fieldId": 10,
                    "field": "",
                    "documentType": null
                },
                {
                    "fieldId": 14,
                    "field": "",
                    "documentType": null
                },
                {
                    "fieldId": 4,
                    "field": "Invoice To",
                    "documentType": null
                }
            ]
        }
    },
    // {
    //     "projectId": 80,
    //     "projectName": "Insights Riposte",
    //     "email": "mailto:kiran3@gmail.com",
    //     "customer": {
    //         "customerId": 1,
    //         "userId": null,
    //         "password": null,
    //         "customerName": "Multistate",
    //         "firstName": "Billy",
    //         "lastName": "Wo",
    //         "email": "mailto:billy@multistate.com",
    //         "contactNo": "+91788967458",
    //         "address": "Banglore",
    //         "licenseType": "License 1",
    //         "noOfUsers": 5,
    //         "activationDate": "2023-06-14",
    //         "expiryDate": "2023-07-08"
    //     },
    //     "projectManager": {
    //         "userId": "kiran1",
    //         "customer": {
    //             "customerId": 1,
    //             "userId": null,
    //             "password": null,
    //             "customerName": "Multistate",
    //             "firstName": "Billy",
    //             "lastName": "Wo",
    //             "email": "mailto:billy@multistate.com",
    //             "contactNo": "+91788967458",
    //             "address": "Banglore",
    //             "licenseType": "License 1",
    //             "noOfUsers": 5,
    //             "activationDate": "2023-06-14",
    //             "expiryDate": "2023-07-08"
    //         },
    //         "role": {
    //             "roleId": 3,
    //             "name": "ROLE_PROJECT_ADMIN"
    //         },
    //         "firstName": "Venkatesh",
    //         "lastName": "Prabhu",
    //         "reportingTo": "billy",
    //         "employeeId": "pankaj",
    //         "email": "mailto:kiran3@gmail.com",
    //         "password": "1234",
    //         "contactNo": "8889998880",
    //         "userStatus": "ACTIVE"
    //     },
    //     "document": {
    //         "docTypeId": 1,
    //         "customer": null,
    //         "docType": "billy",
    //         "docFields": [
    //             {
    //                 "fieldId": 2,
    //                 "field": "Invoice Number",
    //                 "documentType": null
    //             },
    //             {
    //                 "fieldId": 13,
    //                 "field": "Invoice Number",
    //                 "documentType": null
    //             },
    //             {
    //                 "fieldId": 27,
    //                 "field": "",
    //                 "documentType": null
    //             },
    //             {
    //                 "fieldId": 3,
    //                 "field": "Invoice Date",
    //                 "documentType": null
    //             },
    //             {
    //                 "fieldId": 19,
    //                 "field": "qwe",
    //                 "documentType": null
    //             },
    //             {
    //                 "fieldId": 1,
    //                 "field": "Consignee",
    //                 "documentType": null
    //             },
    //             {
    //                 "fieldId": 15,
    //                 "field": "Add Address",
    //                 "documentType": null
    //             },
    //             {
    //                 "fieldId": 10,
    //                 "field": "",
    //                 "documentType": null
    //             },
    //             {
    //                 "fieldId": 14,
    //                 "field": "",
    //                 "documentType": null
    //             },
    //             {
    //                 "fieldId": 4,
    //                 "field": "Invoice To",
    //                 "documentType": null
    //             }
    //         ]
    //     }
    // }
]
// const projectMap=object.map(o=>{
//     return 
// })

const employee={
    name:'sanjana',
    age:23,
}
const keys=Object.entries(employee);
const flat=keys.flat(3);
console.log(keys);
console.log(flat);

//.splice(0,0,'a').join('');
const xyz='sanjana';
let o=xyz.split('')
o.splice(3,0,' ')
console.log('p',o)
let q=o.join('');

console.log('u',q);

const y=o.reverse().join('')
console.log('xyz',y);

function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  }
  console.log('isPrime',isPrime(9))

  function printTop100Primes() {
    let primeCount = 0;
    let currentNum = 2;
  
    while (primeCount < 100) {
      if (isPrime(currentNum)) {
        console.log(currentNum);
        primeCount++;
      }
      currentNum++;
    }
  }
  
  printTop100Primes();

  //closure
  const sanjana=(a)=>{
    let sanjanaSaying='hi...';
     // console.log('bye...')
     return  function suraj(b){
        return a+b;
        }

  }
 
 console.log('hey',sanjana(2)(3))