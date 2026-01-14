const http= require('http')
const server=http.createServer((req,res)=>{
    console.log(req.url,req.headers,req.method);
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title> first Document </title></head>')
    res.write('<body><h1>First Heading Baby  </h1></body>')
    res.write('</html>');
    res.end();

})
const PORT=3000;
server.listen(PORT,()=>
{
    console.log(`The server is runging at http://localhost:${PORT}`);
})