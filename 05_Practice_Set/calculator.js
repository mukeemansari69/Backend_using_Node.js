const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);
    if(req.url==='/' && req.method==='GET'){
        res.setHeader('content-Type','text/html');
        res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home page</title>
</head>
<body>
    <h1>Welcome To Home </h1>
    <br>
    <br>
    <nav>
        <a href="/calculator">calculator</a>
    </nav>
</body>
</html>`)
   res.end();
    }else if(req.url==='/calculator' && req.method==='GET'){
        res.setHeader('content-type','text/html');
        res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home page</title>
</head>
<body>
   <h1>Welcome to the calculator</h1>
   <br>
   <form action="/calculator-result" method="POST">
    <label for="num1">Enter The First Number</label>
    <input type="text" placeholder="Enter the value 1" name="num1">
    <br>
    <br>
    <label for="num2">Enter The Second Number</label>
    <input type="text" placeholder="Enter the Value 2" name="num2">
    <br>
    <br>
    <button type="submit">Sum</button>
   </form>
</body>
</html>`)
res.end();
    }else if(req.url==='/calculator-result' && req.method==='POST'){
        res.setHeader('content-type','text/html');
       const body=[];
       req.on('data',(chunk)=>{
        body.push(chunk);
       })
       req.on('end',()=>{
        const parsedBody=Buffer.concat(body).toString();
        const params=new URLSearchParams(parsedBody);
        const num1=Number(params.get('num1'));
        const num2=Number(params.get('num2'));
        const sum=num1+num2;
        res.setHeader('content-type','text/html');
        res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Sum is :${sum} </h1>
    <br>
    <a href="/calculator">Go Back </a>

</body>
</html>`);
res.end();
       })
    }

})
const PORT=3000;
server.listen(PORT,()=>{
console.log(`server link is http://localhost:${PORT}`)
})