const http=require('http');
const express=require('express');

const app=express();
const server=http.createServer(app);
app.use((req,res,next)=>{
    console.log("First middleware",req.url,req.method);
    next();
})
app.use((req,res,next)=>{
    console.log("Second middleware is here",req.url,req.method);
    res.send('<h1>Welcome to the Complete Coding</h1>')
    next();
})
const PORT=3000;
server.listen(PORT,()=>{
    console.log(`The server running at http://localhost:${PORT}`);
})