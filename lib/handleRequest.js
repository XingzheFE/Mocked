const match = require('./match.js');

module.exports = (req, res, options) => {
    const url = req.url;
    const data = match(req, options);

    if (req.url === '/__database' || req.url === '/') {
        res.end(JSON.stringify(options.db));
    } else if(req.url === '/__routes') {
        res.end(JSON.stringify(options.routes));
    } else {
        if (data) {
            // res.statusCode = 404;
            res.end(JSON.stringify(data));
        } else {
            res.statusCode = 404;
            res.end('404');
        }
    }
}
