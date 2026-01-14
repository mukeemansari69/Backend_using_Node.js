const http = require('http');
const server=http.createServer((req,res)=>{
    console.log(req.method,req.url);
})

const PORT=3000;
server.listen(PORT,()=>{
    console.log(`The local Server is http://localhost:${PORT}`)
})