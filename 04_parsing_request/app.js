const http = require('http');
const userrequesthandel = require('./user');

const server = http.createServer(userrequesthandel);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
});
