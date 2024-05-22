const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'crud');
const filePath=`${dirPath}/apple.txt`;

// fs.writeFileSync(filePath,'this is a simple text file');
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item)
// })
// fs.appendFile(filePath,'this is a node file',(err)=>{
//     if(!err)console.log('file is updated')
// })
fs.writeFileSync('code.txt','hello world');

