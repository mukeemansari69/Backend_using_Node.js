const http=require('http');
const express=require('express');
const home=require('./routes/home');
const contactus=require('./routes/contactus');

const app=express();

app.use((req,res,next)=>{
    console.log(req.url, req.method);
    next();
})
app.use(home);
app.use(contactus);
const server=http.createServer(app);
const PORT=3000;
server.listen(PORT,()=>{
    console.log(`this server link is http://localhost:${PORT}`);
})