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

    // TODO:
    queryData (params = {}, data) {
        let d;
        if (data instanceof Array) {
            data.map(item => {
                let result = 0;
                for (let key in params) {
                    if (item.hasOwnProperty(key) && item[key] == params[key]) {
                        result++;
                    }
                }
                if (result === Object.keys(params).length) {
                    d = item;
                }
            });
        }
        return d;
    }
}
