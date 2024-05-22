const app = require('express')();
const PORT = 8881;
app.listen(
    PORT,
    () => console.log(`server is running on port ${PORT} `)
);

app.get('/fruits', (req, res) => {
    res.send([
        {
            apple: 2,
            banana: 3,
        },
        {
            apple: 2,
            banana: 3,
        },
        {
            apple: 2,
            banana: 3,
        }
    ]);
});
app.get('/about',(req,res)=>{
    console.log("Data sent by broweser",req.query)
    res.send([
        {
            myName:'sanjnaa',
            myNumber:'98344691187889'
        }
    ])
});