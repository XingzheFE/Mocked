const http = require("http");
const conf = require("./default.config.js");
// let customConf = require("./mocked.config.js");
const loader = require('./loader.js');
const log = require('./log.js');

console.log(loader('./mocked.config.js'));

let app = http.createServer((req, res) => {
    res.end(`${req.url},${req.method}`);
});
app.on('listening', () => {
    let port = app.address().port;
    log.success(`server start at port:${port}`);
});
app.listen(conf.port);

// https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
