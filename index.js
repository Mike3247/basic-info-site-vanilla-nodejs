require('dotenv').config()
const http = require('http');
const fs = require('fs');
const url = require('url');
// const url = require('url');
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += 'error404.html';
            break;
    };

    // send an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            res.end(data);
        }
    });

});

server.listen((PORT), () => {
    console.log(process.env.PORT);
    console.log(`Server running on port ${PORT}`);
});