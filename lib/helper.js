module.exports = {
    getParam (urlObj) {
        let param = {};
        let query = urlObj.query && urlObj.query.split(/&|=/g);
        if (query) {
            for (let i = 0; i < query.length; i+=2) {
                param[query[i]] = query[i+1];
            }
        }
        return param;
    },

    queryData (params, data) {
        let d;
        // TODO:
        return;
    }
}
