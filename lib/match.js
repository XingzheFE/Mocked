let urlParse = require('./url.js');
let helper = require('./helper.js');

/**
 * return data
 * @param  {String} url     request url
 * @param  {Object} options server options
 * @return {Object|Array}   return data
 */
module.exports = (req, options) => {
    const routes = options.routes;
    const db = options.db;
    let dataName;
    let data = {};
    let path = req.url;
    let urlObj = urlParse(path);
    let url = urlObj.pathname;
    let params = helper.getParam(urlObj);
    let urlRegExp = new RegExp(url);
    for (let key in routes) {
        if (routes.hasOwnProperty(key) && urlRegExp.test(key)) {
            dataName = routes[key];
            break;
        }
    }
    console.log(params);
    data = db[dataName];
    if (data instanceof Array && Object.keys(params).length > 0) {
        data.map(d => {

        });
    }

    return data;
}
