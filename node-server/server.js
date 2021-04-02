const http = require('http');

http.createServer((req,res) => {
  if (req.url === '/') {
    res.write('<html>')
    res.write('<head> <title>Node app</title> </head>')
    res.write('<body> <h1> Hello world</h1> <p>I am getting started with node js</p> </body>')
    res.write('</html>')
    res.end()
  }else{
    res.write('Hello world with an incorrect route')
    res.end()
  }
}).listen(3001)

const fs = require('fs');
// Synchornous way
const data = fs.readFileSync('./data.json', 'utf8')
console.log(data)

// Asynchornous way
fs.readFile('./data.json', 'utf8',(err,data) => {
  if (err) return console.err(err);
  console.log(data)
})

const dirs = fs.readdirSync('./')
console.log(dirs)

fs.readdir('./',(err,data) => {
if (err) return console.err(err)
console.log(data)
})

// write the file
fs.writeFileSync('message.txt','I am writting the file')

// Asynchornous way to write the file
fs.writeFile('message1.txt','I am learning node', (err) =>{
  if (err) return console.err(err)
  console.log('File written successfully')
})