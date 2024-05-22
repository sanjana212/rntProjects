const app = require('./app');
// console.log(app);
// console.log(app.z());
const http = require('http');
// http.createServer((req, res) => {
//   res.write('<h1>hello this is me sanjana....</h1>');
//   res.end()
// }).listen(4500);

// function dataControl(request, response) {
//   response.write('<h1>hello world</h1>');
//   response.end();
// }
// const dataControl = (req, res) => {
//   res.write('<h1>hello worlld ...</h1>');
//   res.end()
// }
// http.createServer(dataControl).listen(4500);


const data = require('./data')
// const colors = require('colors');
// console.log('package.json'.bgRed);

// http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.write(JSON.stringify(data));
//   res.end();
// }).listen(5000);

//**** File system ******//
// console.log('process.argv', process.argv)
//here we are trying to create a file or remove a file
const fs = require('fs');
// const input = process.argv;
// console.log('input', input)
// if (input[2] == 'add') {
//   fs.writeFileSync(input[3], input[4])
// } else if (input[2] == 'remove') {
//   fs.unlinkSync(input[3])
// } else {
//   console.log('invalid input')
// }

// const path = require('path');
// const dirPath = path.join(__dirname);
// console.warn('dirPath', dirPath);

// fs.readdir(dirPath, (err, files) => {
//   files.forEach((item) => {
//     console.log('file', item)
//   })
// })


//crud with files..

// const path1 = require('path');
// const dirPath1 = path1.join(__dirname, 'crud');
// const filePath = `${dirPath1}/apple.txt`;
// fs.writeFileSync(`${filePath}/apple.txt`, 'this is a simple file text')
// fs.readFile(filePath, (err, item) => {
//   console.log(item)
// })
// fs.appendFile(filePath, 'add file name is apple.txt,', (err) => {
//   if (!err) console.log('file is updated')
// })




//*****EXPRESS .JS ******//
// const fs=require('fs')
 var dataPath = '.data';

const express = require('express');
const app1 = express();
app1.get('/data', (req, res) => {
    var dataString=fs.readFileSync(dataPath).toString()
    res.send(JSON.parse(dataString))
});

app1.get('/about', (req, res) => {
  req.send('hello this is me sanjana')
})


app1.listen(5020);

//**** Practice from Zero*****/

// const requireStudet = require('./second');
// console.log('requireStudet', requireStudet)