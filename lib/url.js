let url = require('url');
module.exports = (path = '') => {
    let urlObj = url.parse(path);
    urlObj.pathname = urlObj.pathname.replace(/\/$/g, '');
    return urlObj;
}
