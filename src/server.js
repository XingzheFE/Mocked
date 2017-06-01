let http = require("http");
let conf = require("./default.config.js");

let app = http.createServer((req, res) => {
    res.end(`${req.url},${req.method}`);

});
app.on('listening', () => {
    let port = app.address().port;
    // https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
    console.log('\x1b[32m', `server start at port:${port}`);
});
app.listen(conf.port);
