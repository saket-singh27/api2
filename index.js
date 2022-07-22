const http = require('http');
var requests = require('requests');

const server = http.createServer((req, res) => {
    if (req.url = "/todos") {
        requests("https://jsonplaceholder.typicode.com/todos")
            .on('data', function (chunk) {
                const objData = JSON.parse(chunk);
                const arrData = [objData];
                console.log(arrData);
            })
            .on('end', function (err) {
                if (err) return console.log('connection closed due to errors', err);

                console.log('end');
            });
    }
});



server.listen(3000 , "127.0.0.1");