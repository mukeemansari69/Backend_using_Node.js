const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.method, req.url);

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Server is running");
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// Graceful Shutdown
process.on("SIGINT", () => {
    console.log("\nGracefully shutting down...");

    server.close(() => {
        console.log("HTTP server closed");
        process.exit(0);
    });
});
