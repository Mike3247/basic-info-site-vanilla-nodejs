require('dotenv').config()
const http = require('http');
const fs = require('fs');
// const url = require('url');
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;    
        case '/contact':
            path += 'contact.html';
            res.statusCode = 200;
            break;    
        default:
            path += 'error404.html';
            res.statusCode = 404;
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