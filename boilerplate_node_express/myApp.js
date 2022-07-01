require('dotenv').config()
let express = require('express');
let app = express();

console.log("Hello World")
// console.log(process.env.MESSAGE_STYLE)

// app.get('/', function(req, res) {
//   res.send('Hello Express')
// })

let absolutePath = __dirname + "/views/index.html"

app.get('/', function(req, res) {
  res.sendFile(absolutePath)
})

let assetAbsolutePath = __dirname + "/public"

let middleware = express.static(assetAbsolutePath)
app.use('/public', middleware)

app.get('/json', function(req, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({"message": "Hello json".toUpperCase()})
  } else {
    res.json({"message": "Hello json"})
  }
})


































module.exports = app;



































 module.exports = app;
