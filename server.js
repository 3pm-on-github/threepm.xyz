// cloudflare server, DO NOT STOP!!!!!
// ip: https://localhost:7008
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 7008;

var visitorcount = 0;

// Create the server
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        const htmlPath = path.join(__dirname, 'index.html');

        fs.readFile(htmlPath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('apparently the file that i tried to give doesnt exist so... email me saying that the file doesnt exist anymore: 3pmspublicemail@gachaytb3.org');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/style.css') {
        const cssPath = path.join(__dirname, 'style.css');
        fs.readFile(cssPath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('apparently the file that i tried to give doesnt exist so... email me saying that the file doesnt exist anymore: 3pmspublicemail@gachaytb3.org');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(data);
            }
        });
    } else if (req.url === '/assets/88x31s/mainwebsite.gif') {
        const imagePath = path.join(__dirname, 'assets', "88x31s", 'mainwebsite.gif');
        fs.readFile(imagePath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('ah shet, cant find the 88x31 😔');
            } else {
                res.writeHead(200, { 'Content-Type': 'image/gif' });
                res.end(data);
            }
        });
    } else if (req.url === '/my88x31s') {
        const htmlPath = path.join(__dirname, 'my88x31s', 'index.html');

        fs.readFile(htmlPath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('apparently the file that i tried to give doesnt exist so... email me saying that the file doesnt exist anymore: 3pmspublicemail@gachaytb3.org');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/teapot') {
        res.writeHead(418, { 'Content-Type': 'text/plain' });
        res.end('you found an easter egg!!! anyway im a teapot');
    } else if (req.url == "/addvisitor") {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        visitorcount++;
    } else if (req.url == "/visitorcount") {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(toString(visitorcount));
    } else if (req.url == "/script.js") {
        const jsPath = path.join(__dirname, 'script.js');
        fs.readFile(jsPath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('apparently the file that i tried to give doesnt exist so... email me saying that the file doesnt exist anymore: 3pmspublicemail@gachaytb3.org');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/javascript' });
                res.end(data);
            }
        });
    } else if (req.url == "/assets/rpilogo.webp") {
        const jsPath = path.join(__dirname, '/assets/rpilogo.webp');
        fs.readFile(jsPath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('apparently the file that i tried to give doesnt exist so... email me saying that the file doesnt exist anymore: 3pmspublicemail@gachaytb3.org');
            } else {
                res.writeHead(200, { 'Content-Type': 'image/webp' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('this webpage doesnt exist, might go back?');
    }
});
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});