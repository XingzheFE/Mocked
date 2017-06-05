module.exports = {
    port: 4443,
    writable: false,                    // post/patch/delete method won't change db.json
    database: './db.json',              // response data
    route: './routes.json',             // route list
    api: [
        {
            route: '/api/v4/players',
            data: {
                name: 'joe223'
            },
            writable: false,            // default is true
            status: 200,                // default 200
        },
        {
            route: '/api/v4/random',
            data: function () {
                return {
                    time: new Date().getTime(),
                }
            },
            // repeat: 2,               // use create data function
        }
    ],
    websocket: [
        {
            data: {
                name: 'joe'
            },
            interval: 2000, 
        },
        {
            name: 'test',
            data () {
                return {
                    time: +new Date()
                }
            }
        }
    ]
}
