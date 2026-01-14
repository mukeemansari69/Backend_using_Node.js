const http = require('http');
const server=http.createServer((req,res)=>{
    console.log(res);
    // process.exit(0);// server stop krna ?? ydi first error dayga to secind may chlay jayga 
    // process.exit(1);
})
process.on("SIGINT",()=>{
    console.log("Gracefully sutting Down ");
    server.close(()=>{
        process.exit();
    })
})
const PORT=3000;
server.listen(PORT,()=>{
    console.log(`The local Server is http://localhost:${PORT}`)
})