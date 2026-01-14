const http=require('http');
const express=require('express');


const app=express();

app.use((req,res,next)=>{
    console.log(req.url,req.method
    )
    next();
})
app.use((req,res,next)=>{
    console.log("First middleware here ");
    next();
})
app.use((req,res,next)=>{
    console.log("Second middleware here ");
    next();
})
app.use('/response-test',(req,res)=>{
    res.send("this is response midlleware")
    next();
})
app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1>');
    next();
})
app.get('/contact-us',(req,res,next)=>{
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="/contact-us" method="POST">
        <label for="name">Enter Your name</label>
        <input type="text" name="username" id="name" placeholder="Enter the name">
        <br><br>
        <label for="email">Enter the email</label>
        <input type="email" name="useremail" placeholder="Enter the email ">
        <button type="submit">Submit</button>
    </form>
</body>
</html>`)
next();
})
app.use(express.urlencoded({extended:false}))

app.post('/contact-us', (req, res) => {
    const { username, useremail } = req.body;
    res.send(`
        <h2>Form Submitted</h2>
        <p>Name: ${username}</p>
        <p>Email: ${useremail}</p>
    `);
});

const server=http.createServer(app);
const PORT=3000;
server.listen(PORT,()=>{
    console.log(`this server link is http://localhost:${PORT}`);
})