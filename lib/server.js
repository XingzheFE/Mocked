const http = require("http");
const log = require('./log.js');
const WebSocket = require('ws');
const handleRequest = require('./handleRequest.js')

module.exports = options => {
    const server = http.createServer((req, res) => {
        handleRequest(req, res, options);
    });
    const wss = new WebSocket.Server({
        server,
    });

    server.on('listening', () => {
        let port = server.address().port;
        log.success(`server start at port: ${port}`);
    });

    server.listen(options.config.port);

    wss.on('connection', ws => {
        const websocketConf = options.config.websocket;
        websocketConf instanceof Array && websocketConf.map(item => {
            setInterval(() => {
                let data = item.data instanceof Function ? item.data() : item.data;
                ws.send(JSON.stringify(data));
            }, item.interval || 2000);
        });
    });
};

//artical: https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
