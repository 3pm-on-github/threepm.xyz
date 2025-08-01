// cloudflare server, DO NOT STOP!!!!!
// ip: https://localhost:7008
// use nodemon --ext js,html,css server.js to run this server
const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 7008;

let visitorcount = 260; // initial visitor count

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        const htmlPath = path.join(__dirname, 'index.html');
        fs.readFile(htmlPath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('apparently the file that i tried to give doesnt exist so... email me saying that the file doesnt exist anymore: 3pmspublicemail@threepm.xyz');
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
                res.end('apparently the file that i tried to give doesnt exist so... email me saying that the file doesnt exist anymore: 3pmspublicemail@threepm.xyz');
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
                res.end('apparently the file that i tried to give doesnt exist so... email me saying that the file doesnt exist anymore: 3pmspublicemail@threepm.xyz');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/coolmusics') {
        const htmlPath = path.join(__dirname, 'coolmusics', 'index.html');

        fs.readFile(htmlPath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('apparently the file that i tried to give doesnt exist so... email me saying that the file doesnt exist anymore: 3pmspublicemail@threepm.xyz');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/projects') {
        const htmlPath = path.join(__dirname, 'projects', 'index.html');

        fs.readFile(htmlPath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('apparently the file that i tried to give doesnt exist so... email me saying that the file doesnt exist anymore: 3pmspublicemail@threepm.xyz');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/placeholder') {
        const htmlPath = path.join(__dirname, 'placeholder.html');

        fs.readFile(htmlPath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('apparently the file that i tried to give doesnt exist so... email me saying that the file doesnt exist anymore: 3pmspublicemail@threepm.xyz');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/projects/nlang') {
        const htmlPath = path.join(__dirname, 'projects', 'nlang', 'index.html');

        fs.readFile(htmlPath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('apparently the file that i tried to give doesnt exist so... email me saying that the file doesnt exist anymore: 3pmspublicemail@threepm.xyz');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/projects/roudice') {
        const htmlPath = path.join(__dirname, 'projects', 'roudice', 'index.html');

        fs.readFile(htmlPath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('apparently the file that i tried to give doesnt exist so... email me saying that the file doesnt exist anymore: 3pmspublicemail@threepm.xyz');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/projects/archive') {
        const htmlPath = path.join(__dirname, 'projects', 'archive', 'index.html');

        fs.readFile(htmlPath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('apparently the file that i tried to give doesnt exist so... email me saying that the file doesnt exist anymore: 3pmspublicemail@threepm.xyz');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/teapot') {
        res.writeHead(418, { 'Content-Type': 'text/plain' });
        res.end('you found an easter egg!!! anyway im a teapot');
    } else if (req.url == "/api/v1/addvisitor") {
        visitorcount = visitorcount + 1;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("done");
    } else if (req.url == "/api/v1/visitorcount") {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(String(visitorcount));
    } else if (req.url == "/script.js") {
        const jsPath = path.join(__dirname, 'script.js');
        fs.readFile(jsPath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('apparently the file that i tried to give doesnt exist so... email me saying that the file doesnt exist anymore: 3pmspublicemail@threepm.xyz');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/javascript' });
                res.end(data);
            }
        });
    } else if (req.url == "/assets/lilguy.webp") {
        const jsPath = path.join(__dirname, 'assets', 'lil guy.webp');
        fs.readFile(jsPath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('apparently the file that i tried to give doesnt exist so... email me saying that the file doesnt exist anymore: 3pmspublicemail@threepm.xyz');
            } else {
                res.writeHead(200, { 'Content-Type': 'image/webp' });
                res.end(data);
            }
        });
    } else if (req.url == "/assets/placeholder_image.webp") {
        const jsPath = path.join(__dirname, 'assets', 'placeholder_image.webp');
        fs.readFile(jsPath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('apparently the file that i tried to give doesnt exist so... email me saying that the file doesnt exist anymore: 3pmspublicemail@threepm.xyz');
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