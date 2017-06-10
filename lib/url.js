let url = require('url');
module.exports = (path) => {
    return url.parse(path);
}
