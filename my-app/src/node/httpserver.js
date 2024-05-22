const http=require('http');

// const port =process.env.PORT;

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-type','text/html');
    res.end('<h1>This is node code</h1><p>It is same as javaScript...</p>')
});
server.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
    listen('3000');
})