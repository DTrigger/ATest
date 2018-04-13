var http = require("http");
var fs = require("fs"); 
http.createServer(function(request, response){
     
    response.setHeader("Content-Type", "text/html");
	var body = fs.readFileSync("FileA.html");
    response.write(body);
    response.end();
}).listen(80);