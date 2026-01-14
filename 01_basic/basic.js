console.log("Mukeem Ansari Is the best and He is a King of Thought");
const fs= require('fs')
fs.writeFile("output.txt","Writing File BY Mukeem Ansari",(err)=>{
    if(err) throw err;
    else console.log("File Written Succesfully");
})