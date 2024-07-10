require('dotenv').config()
const http = require('http');
// const url = require('url');
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    res.write("Hello World");
    res.end();
});

server.listen((PORT), () => {
    console.log(process.env.PORT);
    console.log(`Server running on port ${PORT}`);
});