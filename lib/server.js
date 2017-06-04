const http = require("http");
const log = require('./log.js');
const handleRequest = require('./handleRequest.js')

module.exports = options => {
    let server = http.createServer((req, res) => {
        handleRequest(req, res, options);
    });

    server.on('listening', () => {
        let port = server.address().port;
        log.success(`server start at port: ${port}`);
    });

    server.listen(options.config.port);
};

//artical: https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
