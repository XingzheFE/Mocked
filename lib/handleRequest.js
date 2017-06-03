const match = require('./match.js');

module.exports = (req, res, options) => {
    const url = req.url;
    let data = match(url, options);
    console.log(data);
    if (req.url === '/__database') {
        res.end(JSON.stringify(options.db));
    } else if(req.url === '/__routes') {
        res.end(JSON.stringify(options.routes));
    } else {
        if (data) {
            res.end(JSON.stringify(data));
        } else {
            // res.statusCode = 404;
            res.end('404');
        }
    }
}
