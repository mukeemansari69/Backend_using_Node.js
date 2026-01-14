const http= require('http')
const server=http.createServer((req,res)=>{
    console.log(req.url,req.headers,req.method);
    if(req.url==='/'){
        res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title> first Document </title></head>')
    res.write('<body><h1>Welcome to the Home   </h1></body>')
    res.write('</html>');
    return res.end(); 
    }else if(req.url==='/products'){
     res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title> first Document </title></head>')
    res.write('<body><h1>Welcone to the Products Page </h1></body>')
    res.write('</html>');
   return res.end();
    }else{
        
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title> first Document </title></head>')
    res.write('<body><h1>Else Condition  </h1></body>')
    res.write('</html>');
    res.end();

    }
})
const PORT=3000;
server.listen(PORT,()=>
{
    console.log(`The server is runging at http://localhost:${PORT}`);
})