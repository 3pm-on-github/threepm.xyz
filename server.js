const express = require('express');
const http = require("http")
const fs = require('fs');
const path = require('path');

const port = 7008;
const app = express();

let visitorcount = parseInt(fs.readFileSync('visits.txt', 'utf8'));

function newVisitor() {
    visitorcount++;
    fs.writeFileSync('visits.txt', String(visitorcount));
}

function log(ip, path, status_code, message=null) {
    if (message) {
        console.log(`[${ip}] ${path} (${status_code}): ${message}`)
    } else {
        console.log(`[${ip}] ${path} (${status_code})`)
    }
}

// websites

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.status(200);
    log(req.ip, req.url, res.statusCode);
    const htmlPath = path.join(__dirname, 'index.html');
    res.send(fs.readFileSync(htmlPath))
});

app.get('/placeholder', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.status(200);
    log(req.ip, req.url, res.statusCode);
    const htmlPath = path.join(__dirname, 'placeholder.html');
    res.send(fs.readFileSync(htmlPath))
});

app.get('/spinningfish', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.status(200);
    log(req.ip, req.url, res.statusCode);
    const htmlPath = path.join(__dirname, 'spinning_fish.html');
    res.send(fs.readFileSync(htmlPath))
});

app.get('/88x31s', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.status(200);
    log(req.ip, req.url, res.statusCode);
    const htmlPath = path.join(__dirname, '88x31s', 'index.html');
    res.send(fs.readFileSync(htmlPath))
});

app.get('/projects', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.status(200);
    log(req.ip, req.url, res.statusCode);
    const htmlPath = path.join(__dirname, 'projects', 'index.html');
    res.send(fs.readFileSync(htmlPath))
});

app.get('/projects/roudice', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.status(200);
    log(req.ip, req.url, res.statusCode);
    const htmlPath = path.join(__dirname, 'projects', 'roudice', 'index.html');
    res.send(fs.readFileSync(htmlPath))
});

// files

app.get('/script.js', (req, res) => {
    res.set('Content-Type', 'text/javascript');
    res.status(200);
    log(req.ip, req.url, res.statusCode);
    const jsPath = path.join(__dirname, 'script.js');
    res.send(fs.readFileSync(jsPath))
});

app.get('/style.css', (req, res) => {
    res.set('Content-Type', 'text/css');
    res.status(200);
    log(req.ip, req.url, res.statusCode);
    const cssPath = path.join(__dirname, 'style.css');
    res.send(fs.readFileSync(cssPath))
});

app.get('/assets/88x31s/mainwebsite.gif', (req, res) => {
    res.set('Content-Type', 'image/gif');
    res.status(200);
    log(req.ip, req.url, res.statusCode);
    const gifPath = path.join(__dirname, 'assets', "88x31s", 'mainwebsite.gif');
    res.send(fs.readFileSync(gifPath))
});

app.get('/assets/88x31s/usewaterfox.jpg', (req, res) => {
    res.set('Content-Type', 'image/jpeg');
    res.status(200);
    log(req.ip, req.url, res.statusCode);
    const jpgPath = path.join(__dirname, 'assets', "88x31s", 'usewaterfox.jpg');
    res.send(fs.readFileSync(jpgPath))
});

app.get('/assets/lilguy.webp', (req, res) => {
    res.set('Content-Type', 'image/webp');
    res.status(200);
    log(req.ip, req.url, res.statusCode);
    const jpgPath = path.join(__dirname, 'assets', 'lil guy.webp');
    res.send(fs.readFileSync(jpgPath))
});

app.get('/assets/placeholder_image.webp', (req, res) => {
    res.set('Content-Type', 'image/webp');
    res.status(200);
    log(req.ip, req.url, res.statusCode);
    const jpgPath = path.join(__dirname, 'assets', 'placeholder_image.webp');
    res.send(fs.readFileSync(jpgPath))
});

app.get('/assets/spinning_fish.mov', (req, res) => {
    res.set('Content-Type', 'video/mov');
    res.status(200);
    log(req.ip, req.url, res.statusCode);
    const movPath = path.join(__dirname, 'assets', 'spinning_fish.mov');
    res.send(fs.readFileSync(movPath))
});

app.get('/assets/3pm.mp3', (req, res) => {
    res.set('Content-Type', 'audio/mpeg');
    res.status(200);
    log(req.ip, req.url, res.statusCode);
    const mp3Path = path.join(__dirname, 'assets', '3pm.mp3');
    res.send(fs.readFileSync(mp3Path))
});

app.get('/assets/click.wav', (req, res) => {
    res.set('Content-Type', 'audio/wav');
    res.status(200);
    log(req.ip, req.url, res.statusCode);
    const wavPath = path.join(__dirname, 'assets', 'click.wav');
    res.send(fs.readFileSync(wavPath))
});

// API, other random stuff

app.get("/teapot", (req, res) => {
    res.set('Content-Type', "text/plain");
    res.status(418);
    log(req.ip, req.url, res.statusCode);
    res.send('you found an easter egg!!! anyways i\'m a teapot')
})

app.get("/api/v1/addvisitor", (req, res) => {
    newVisitor();
    res.set('Content-Type', "text/plain");
    res.status(200);
    log(req.ip, req.url, res.statusCode);
    res.send('done')
})

app.get("/api/v1/visitorcount", (req, res) => {
    res.set('Content-Type', "text/plain");
    res.status(200);
    log(req.ip, req.url, res.statusCode);
    res.send(String(visitorcount))
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});