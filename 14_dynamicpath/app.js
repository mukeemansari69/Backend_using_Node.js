
const http=require('http');
const express=require('express');
const path=require('path');
 const storeRouter=require('./routes/storeRoute');
 const {hostRouter}=require('./routes/hostRouter');


const app=express();


// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));


app.use(express.static(path.join(__dirname, 'public')));

const server=http.createServer(app);
app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next();
})


app.use(express.urlencoded({ extended: true }))
app.use(storeRouter);
app.use('/host', hostRouter);








app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, 'view', '404.html'));
})

const PORT=3001;
server.listen(PORT,()=>{
    console.log(`This is the server http://localhost:${PORT}`);
})
