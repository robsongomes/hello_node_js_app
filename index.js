let http = require('http')

let server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"})
  res.end("Welcome to my node site")
})

var port = process.env.PORT || 3000;

server.listen(port)

console.log("Server running at http://localhost:%d", port)
