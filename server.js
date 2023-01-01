var http=require("http");
http.createServer(function (req,resp){

    resp.writeHead(200,{"content-type":"text/html"});
    resp.write("<h1>Hello World</h1>");
    resp.end();
}).listen(3000);
console.log("Server is listening at port number 3000");