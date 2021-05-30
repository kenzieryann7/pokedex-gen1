var htmlFile = fs.readFileSync('public/index.html');

console.log("PORT:", process.env.PORT);

function requestHandler(req, res) {
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("Headers:", req.headers);
  
    if ((req.url == '/index.html') || (req.url == '/')) {
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      res.write(htmlFile);
    }
    else if (req.url == '/style.css') {
      res.writeHead(200, {
        "Content-Type": "text/css"
      });
      res.write(cssFile);
    }
    else if (req.url == '/index.js') {
      res.writeHead(200, {
        "Content-Type": "text/js"
      });
      res.write(jsFile);
    }
    else if (req.url == '/404.html') {
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      res.write(errorFile);
    }
    else {
      res.writeHead(404, {
        "Content-Type": "text/html"
      });
      res.write(errorFile);
    }
    res.end();
  }
  
  var server = http.createServer(requestHandler);
  
  server.listen(3000, function (err) {
    console.log("Server is running on port 3000");
    console.log("Go to http://localhost:3000/");
  });