module.exports = {
    port: 4443,                         
    enableWrite: false,                 // post/patch/delete method won't change db.json
    database: "./db.json",              // response data
    route: "./routes.json",             // route list
}
