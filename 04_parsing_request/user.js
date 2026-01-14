const fs = require('fs');

const userrequesthandel = (req, res) => {
    console.log(req.url, req.method);

    // GET Route
    if (req.url === '/' && req.method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>First Document</title></head>');
        res.write('<body>');
        res.write('<h1>Enter The User Details</h1>');

        res.write('<form action="/submit" method="POST">');

        res.write('<label>Enter Your Name:</label><br>');
        res.write('<input type="text" name="username"><br><br>');

        res.write('<label>Select Gender:</label><br>');
        res.write('<select name="gender">');
        res.write('<option value="male">Male</option>');
        res.write('<option value="female">Female</option>');
        res.write('<option value="other">Other</option>');
        res.write('</select><br><br>');

        res.write('<button type="submit">Submit</button>');
        res.write('</form>');

        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    // POST Route
    if (req.url === '/submit' && req.method === 'POST') {
        const body = [];

        req.on('data', chunk => {
            body.push(chunk);
        });

        req.on('end', () => {
            const fullbody = Buffer.concat(body).toString();
            console.log(fullbody);

            const params = new URLSearchParams(fullbody);
            const bodyobject = Object.fromEntries(params);

            fs.writeFileSync('user-text.txt', JSON.stringify(bodyobject));

            res.setHeader('Content-Type', 'text/html');
            res.write('<h1>Form Submitted Successfully</h1>');
            res.end();
        });
    }
};

module.exports = userrequesthandel;
