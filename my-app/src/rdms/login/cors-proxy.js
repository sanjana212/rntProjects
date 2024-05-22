const cors_proxy=require('cors-anywhere');
const host=process.env.HOST || '0.0.0.0';
const port=process.env.PORT || 8080;
cors_proxy.createServer({
    originWhitelist:[],
}).listen(port,host,()=>{
    console.log(`cors anywhere proxy is running on ${host}:${port}`)
})