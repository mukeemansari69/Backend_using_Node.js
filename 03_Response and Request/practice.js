const http = require('http');

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

    // Navbar (common for all pages)
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Node Server</title>
    </head>
    <body>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/men">Men</a></li>
                <li><a href="/women">Women</a></li>
                <li><a href="/kids">Kids</a></li>
                <li><a href="/cart">Cart</a></li>
            </ul>
        </nav>
        <hr>
    `);

    if (req.url === '/') {
        res.write('<h1>Welcome to the Home Page</h1>');

    } else if (req.url === '/men') {
        res.write('<h1>Welcome to Mens Collection BABY</h1>');

    } else if (req.url === '/women') {
        res.write('<h1>Welcome to Womens Collection BABY</h1>');

    } else if (req.url === '/kids') {
        res.write('<h1>Welcome to Kids Collection BABY</h1>');

    } else if (req.url === '/cart') {
        res.write('<h1>Welcome to Cart Section BABY</h1>');

    } else {
        res.write('<h1>Wrong URL Given</h1>');
    }

    // Close HTML only once
    res.write(`
        </body>
        </html>
    `);

    res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
