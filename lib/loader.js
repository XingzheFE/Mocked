module.exports = function (url) {
    let data;
    try {
        data = require(url);
    } catch (exp) {
        // console.log(exp);
    }
    return data;
}
