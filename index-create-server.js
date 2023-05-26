const http = require('http');
// const dataControl=(req,res)=>{
//     res.write("hello node1");
//     res.end();
// }
http.createServer((req,res)=>{
    res.write("hello node3");
    res.end();
}).listen(4500)