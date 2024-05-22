//?******************* find longest word*****************
const findLongestWord = (str) => {
    //   let longest="";
    //   const array=str.split(" ");
    //   for(var word of array){
    //     if(word.length>longest.length){
    //         longest=word
    //     }
    //   }
    //   console.log(longest) ;

    // const get = str.split(" ").sort((a, b) => b.length - a.length);
    // console.log(get[0]);
}
// findLongestWord("sanjana is a beautiful girl")

//?************write neasted loop*******************
const array = [1, 2, 3, 4, 4, 5, 6, 6];
for (let i = 0; i < array.length; i++) {
    //   console.log("i=====",array[i]) 
    for (let j = array.length - 1; j >= 0; j--)
        // console.log("j",array[j])
        if (array[i] == array[j]) {
            // console.log("-----hi-------",true);
        }
}

//?***************uppercase the first letter***************
// const capital=(str)=>{
//      let split=str.toLowerCase().split(" ")
//     for(let i=0;i<newStr.length;i++){
//     const newStr=str.toLowerCase().split(" ")
//        const upperrCase= newStr[i][0].toUpperCase()+newStr[i].slice(1);
//        console.log("upperrCase",upperrCase);
//     }
// }


//?*****************largest of 4 array in a array***********
// const num1=[1,2,3,4];
// let max=num[0];
// for(let i=0;i<num.length;i++){
//     if(num[i]>max){
//         max=num[i]
//     }
// }
// console.log("max",max);


//*******************remove dublicates??***************
const arr = [1, 2, 3, 4, 1, 2, 5];
//1) by filter
// const f=arr.filter((num,i)=>arr.indexOf(num)==i);
// console.log(f);
//2) by creating new set
// console.log([...new Set(arr)]);
//3)by for loop
let uniqueArray = []
for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
        uniqueArray.push(arr[i])
    }
}
// console.log("uniqueArray",uniqueArray);

//***************removed dublicates in string??***********
const nums = "sanjana";
const arry = Array.from(nums);
const filtered = arry.filter((char, i) => arry.indexOf(char) == i);
// console.log(filtered.join(""));


//?************* returns a random number between 0 (inclusive),  and 1 (exclusive)***********
// console.log(Math.random())


const User =
    [

        {
            "serialNumber": "IHOR2",
            "accessCode": "10220",
            "storeInfo": {
                "storeId": 4,
                "externalStoreId": "IHOR_TEST"
            },
            "status": 4,
            "blacklistReason": "Blacklisted by AmDocsTMS (user_id: )",
            "isMaintenance": false,
            "updatedTs": "2024-04-29T14:50:32.837",
            "createdTs": "2023-10-30T09:28:21.843"
        },
        {
            "serialNumber": "IHOR3",
            "accessCode": "100000065",
            "storeInfo": {
                "storeId": 15,
                "externalStoreId": "IHOR_TEST"
            },
            "status": 4,
            "blacklistReason": "Blacklisted by AmDocsTMS (user_id: )",
            "isMaintenance": false,
            "lastConnectedTs": "2023-11-21T09:32:11.997",
            "lastDisconnectedTs": "2023-11-21T09:32:48.417",
            "updatedTs": "2024-05-06T09:32:19.55",
            "createdTs": "2023-11-16T09:19:08.79"
        },
        {
            "serialNumber": "IHOR4",
            "accessCode": "100000065",
            "storeInfo": {
                "storeId": 16
            },
            "status": 0,
            "isMaintenance": false,
            "updatedTs": "2023-11-16T09:19:08.92",
            "createdTs": "2023-11-16T09:19:08.92"
        },
        {
            "serialNumber": "IHOR6",
            "accessCode": "",
            "storeInfo": {
                "storeId": 15,
                "externalStoreId": "IHOR_TEST"
            },
            "status": 4,
            "blacklistReason": "Blacklisted by AmDocsTMS (user_id: )",
            "isMaintenance": false,
            "updatedTs": "2024-04-29T11:47:27.153",
            "createdTs": "2023-11-20T12:58:59.143"
        },
        {
            "serialNumber": "string",
            "accessCode": "string",
            "storeInfo": {
                "storeId": 250,
                "externalStoreId": "string"
            },
            "status": 4,
            "blacklistReason": "Blacklisted by AmDocsTMS (user_id: )",
            "isMaintenance": false,
            "terminalAlias": "string",
            "updatedTs": "2024-04-25T08:12:42.887",
            "createdTs": "2024-01-09T19:08:44.843"
        },
        {
            "serialNumber": "test",
            "accessCode": "12345",
            "storeInfo": {
                "storeId": 123,
                "externalStoreId": "string"
            },
            "status": 4,
            "blacklistReason": "Blacklisted by AmDocsTMS (user_id: )",
            "isMaintenance": false,
            "gatewayType": "RapidConnect",
            "terminalAlias": "123",
            "updatedTs": "2024-04-30T06:20:20.14",
            "createdTs": "2024-04-22T09:26:50.687"
        },
        {
            "serialNumber": "test12345",
            "accessCode": "12345",
            "storeInfo": {
                "storeId": 5,
                "externalStoreId": "12345"
            },
            "status": 0,
            "isMaintenance": false,
            "gatewayType": "RapidConnect",
            "terminalAlias": "123",
            "updatedTs": "2024-04-23T09:01:46.41",
            "createdTs": "2024-04-23T08:50:17.46"
        },
        {
            "serialNumber": "test123457555",
            "accessCode": "12345",
            "storeInfo": {
                "storeId": 5,
                "externalStoreId": "12345"
            },
            "status": 0,
            "isMaintenance": false,
            "gatewayType": "RapidConnect",
            "terminalAlias": "123",
            "updatedTs": "2024-04-23T09:18:35.38",
            "createdTs": "2024-04-23T09:18:35.38"
        },
        {
            "serialNumber": "test12345ttt6",
            "accessCode": "12345",
            "storeInfo": {
                "storeId": 5,
                "externalStoreId": "12345"
            },
            "status": 0,
            "isMaintenance": false,
            "gatewayType": "RapidConnect",
            "terminalAlias": "123",
            "updatedTs": "2024-04-24T11:26:53.39",
            "createdTs": "2024-04-24T11:26:53.39"
        },
        {
            "serialNumber": "test12345ttt7",
            "accessCode": "12345",
            "storeInfo": {
                "storeId": 5,
                "externalStoreId": "12345"
            },
            "status": 0,
            "isMaintenance": false,
            "gatewayType": "RapidConnect",
            "terminalAlias": "123",
            "updatedTs": "2024-04-24T11:28:29.527",
            "createdTs": "2024-04-24T11:28:29.527"
        }
    ];

//**************** */ Find uniq store id in given data************;
//1) const newuser=User.map((obj)=>obj.storeInfo.storeId).filter((storeId,i,self)=>self.indexOf(storeId)===i)
// console.log("newuser",newuser);
const UniqeStore = [...new Map(User.map(item => [item?.storeInfo?.storeId, item])).values()];
// console.log("UniqeStore",UniqeStore);


//************************?CheckIf array**************
const checkIfArray = (input) => {
    const array = "[object Array]";
    if (toString.call(input) == array) {
        return true
    } else {
        return false;
    }
}
// console.log(checkIfArray([1,2,3,4]))


//**********clonning methods of an array************
const myArray = [1, 2, 3, 4, 5];
// const clonned=[...myArray];
// const clonned=myArray.slice(0);
// const clonned=myArray.map(num=>num);
// const clonned=myArray.filter(num=>true)
// const clonned=Array.from(myArray)
// console.log(clonned)


//***************print nested array elements**********
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

//  for(let i=0;i<a.length;i++){
//      for(let j=0;j<a.length;j++){
//          console.log(a[i][j])
//      }
//  }
for (var i in a) {
    for (var j in a[i]) {
        // console.log(a[i][j])
    }
}
const nums1 = [1, 2, 3, 4];
for (x in nums1) {
    // console.log("forIn",nums1[x])
}

//?************************************ReverseAString***************** */

const reverseAstring = (str) => {
    // const getArray=str.split("").reverse().join("")
    // return getArray;

    let finalString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        finalString += str[i];
    }
    return finalString;
}
// console.log(reverseAstring("sanjana"));


//************************Factorial********************//
const factorial = (num) => {
    let result = 1;
    for (let i = 0; i < num; i++) {
        result *= i
    }
    return result;
}
console.log(factorial(5));

//***********************palindrome***********************//

const palindrome = (str) => {
    // const reveredStr=str.split("").reverse().join("");
    // if(str==reveredStr){
    //     return true;
    // }else{
    //     return false;
    // }
}

const palindrome1 = (str) => {
    // Define the regular expression to match non-alphanumeric characters
    var reg = /[^a-z0-9]/gi;
    console.log("reg", reg)
    // Convert the string to lowercase and replace non-alphanumeric characters with an empty string
    var smallStr = str.toLowerCase().replace(reg, "");

    // Reverse the processed string
    var reversed = smallStr.split("").reverse().join("");

    // Check if the reversed string is equal to the processed string
    return reversed === smallStr;
}

console.log(palindrome1("sanjana")); // Output: false
console.log(palindrome1("A man, a plan, a canal: Panama")); // Output: true

// console.log(palindrome1("sanjana"));

//******************REGEX PRECTICE**********************************// */
const myStr = "sanjana123445";
const regex = /[a-zA-Z]+/g;
const match = myStr.match(regex);
if (match) {
    const result = match.join("");
    // console.log(result);
} else {
    // console.log("no match found");
}


const password = "Password123!";
const myPassRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
const isPasswordValid = myPassRegex.test(password);
// console.log("isPasswordValid",isPasswordValid);  // Output: true

const char = "123Parth";
const newRegex = /[A-Za-z]/g;
const checkChar = char.match(newRegex);
// console.log(checkChar.join(""))

const numbersReg = /[\d]/g;
// console.log(char.match(numbersReg).join(""));

const specialChar = "@#$%&?123456";
const reg = /[@$%!&*?]/g
// console.log(specialChar.match(reg).join(""));


const regex1 = /^.{8}$/;
// Function to test if a string has exactly 8 characters
function isEightCharactersLong(str) {
    return regex1.test(str);
}
// console.log(isEightCharactersLong("abcdpppp"));  // Output: true

//************largestOfFour********** */

const largestOfFour = (arr) => {
    let max = [0, 0, 0, 0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            currentElement = arr[i][j];
            if (currentElement >= max[i]) {
                max[i] = currentElement
            }
        }
    }
    // console.log("max",max)
}
largestOfFour([[1, 2, 3, 4], [5, 6, 7, 8], [8, 10, 11, 12], [23, 45, 67, 89]]);


//*****************Confirm Ending******************//
const confirmEnding = (str, target) => {
    if (str.endsWith(target)) {
        return true
    } else {
        return false;
    }
}
// console.log(confirmEnding("Bastin","z"))


//************Repeat String***************//
const repeatStringNumTimes = (str, num) => {
    // if(num<0) {
    //     return "";
    // }
    // else{
    //    return str.repeat(num)
    // }

    let final = "";
    if (num < 0) return "";
    for (let i = 0; i < num; i++) {
        final += str;
    }
}

// console.log(repeatStringNumTimes("abc",3));

//******************Truncate string*******************/ 
const truncateStr = (str, num) => {
    if (num >= str.length) return str;
    if (num <= 3) return str.slice(0, num) + "...";
    return str.slice(0, num - 3) + "..."
}

// console.log(truncateStr("A-tisket a tasket A geen and yellow basket",14))
// console.log(truncateStr("Tommy goes to work",10))


//*********************Chunk Array In groups***************************//
const chunkArrayInGroups = (arr, size) => {
    var groups = [];
    while (arr.length > 0) {
        groups.push(arr.splice(0, size));
        arr = arr.slice(size)
    }
    return groups;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 3));

//*****************Slasher********************//

const slasher = (arr, howMany) => {
    arr.splice(0, howMany);
    return arr;
}
console.log(slasher([1,2,3],2));
console.log(slasher(["burgur","fries","shake"],1));

//***************Mutation*********************//

const mutation=(arr)=>{
    var firstWord=arr[0].toLowerCase();
    var secondWord=arr[1].toLowerCase();
    for(var i=0;i<secondWord.length;i++){
        if(firstWord.indexOf(secondWord[i])==-1)
            return false;
    }
    return true;
}
console.log(mutation(["hello","he"]));

//*************************************//







