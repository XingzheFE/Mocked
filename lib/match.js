let urlParse = require('./url.js');
/**
 * return data
 * @param  {String} url     request url
 * @param  {Object} options server options
 * @return {Object|Array}   return data
 */
module.exports = (path, options) => {
    const routes = options.routes;
    const db = options.db;
    let data;
    let url = urlParse(path);
    console.log(url);
    if (routes[url] && db[routes[url]]) {
        data = db[routes[url]];
    } else if (db[url]) {
        data = db[url];
    }
    // console.log(url);
    // console.log(db[url]);
    return data;
}
