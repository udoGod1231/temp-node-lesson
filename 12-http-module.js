const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('welcome to our homepage')
    }
    if(req.url === '/about') {
        res.end('here is short history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to fin the page you are looking for</p>
    <a href = '/'> Go back to home </a>
    `)
});

server.listen(5000);