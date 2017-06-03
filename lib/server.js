const http = require("http");
const log = require('./log.js');

let server = http.createServer((req, res) => {
    res.end(`${req.url},${req.method}`);
});

server.on('listening', () => {
    let port = server.address().port;
    log.success(`server start at port: ${port}`);
});

module.exports = conf => {
    server.listen(conf.port);
};

//artical: https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
