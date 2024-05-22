//os module
const os = require('os');
const { dirname } = require('path');
console.log(os.freemem);

console.log('homedir', os.homedir);
console.log(os.hostname);
console.log(os.platform);
console.log(os.release);
console.log(os.type());

//path modulee;
const path = require('path');
const a = path.basename('c:\\Users\\Bhushan\\Desktop\\node\\myfile.html');
const a2 = dirname('c:\\Users\\Bhushan\\Desktop\\node\\myfile.html')
console.log('a', a);
console.log('a2', a2);

//fs module;
const fs = require('fs');
fs.readFile('data.js', 'utf8', (err, data) => {
  console.log(err, data);
});
console.log('finished reading file');

const b = fs.readFileSync('data.js')
console.log('finished reading file', b);//buffer error
console.log('finished reading file2', b.toString());//buffer error

fs.writeFile('data.js', 'this is data', () => {
  console.log('return to the file');
}
);
console.log('finished writing file');

const b2 = fs.writeFileSync('data.js', 'this is data2'
);
console.log('finished writing file', b2);