const http = require('http');
const url = require('url');
const fs = require('fs');

const port = 8082;
const host = "127.0.0.1";

const server = http.createServer((req, res) => {
    const q = url.parse(req.url, true)

    const urlString = q.pathname;

    if(urlString == '/')
        res.end('<h1>Home Page</h1>');

    else if(urlString == '/users') {
        data = fs.readFileSync('users.json');
        res.write(data);
        res.end()
    }

    else if(urlString == '/add') {
        const user = q.query;

        data = fs.readFileSync('users.json');
        users = JSON.parse(data)
        users.push({"name" : user.name, "age" : user.age})
        data = JSON.stringify(users);
        fs.writeFileSync('users.json', data);
        res.end('User data added...');
    }

    else if(urlString == '/update') {
        const user = q.query;

        data = fs.readFileSync('users.json');
        users = JSON.parse(data)
        users[user.name] = user.age;
        data = JSON.stringify(users);
        fs.writeFileSync('users.json', data);
        res.end('User data updated...');
    }

    else if(urlString == '/delete') {
        const user = q.query;

        data = fs.readFileSync('users.json');
        users = JSON.parse(data)
        delete user[user.name];
        data = JSON.stringify(users);
        fs.writeFileSync('users.json', data);
        res.end('User data deleted...');
    }
})

server.listen(port, host, () => {
    console.log(`Server waiting for request at ${host}:${port}`);
})