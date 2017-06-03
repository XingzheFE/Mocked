/**
 * return data
 * @param  {String} url     request url
 * @param  {Object} options server options
 * @return {Object|Array}   return data
 */
module.exports = (url, options) => {
    const routes = options.routes;
    const db = options.db;
    console.log(`visit ${url}`);
    let data;
    if (routes[url]) {
        if (db[routes[url]]) {
            data = db[routes[url]];
        } else if (db[url]) {
            data = db[url];
        }
    }
    return data;
}
