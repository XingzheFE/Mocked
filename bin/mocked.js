const loader = require('../lib/loader.js');
const program = require('commander');
const path = require('path');
const mocked = require('../lib/server.js');
const fs = require('fs');
const log = require('./../lib/log.js');

let customConf = loader('./mocked.config.js');
let defaultConf = require("../lib/default.config.js");

Object.assign(defaultConf, customConf);

program
    .version(require('../package').version)
    .option('-c, --config <n>', 'Mocked configuration')
    .option('-p, --port <n>', 'An integer argument', parseInt)
    .option('-r, --route <n>', 'Route json file path')
    .option('-d, --data <n>', 'Database json file path')
    .parse(process.argv);

let serverPort = program.port;
let routesPath = program.route ? path.resolve(process.cwd(), program.route) : '';
let databasePath = program.data ? path.resolve(process.cwd(), program.data) : '';
let database = databasePath ? require(databasePath) : {};
let routes = routesPath ? require(routesPath) : {};
let options = {
    config: defaultConf,
    db:database,
    routes: routes
};

console.log(serverPort);
console.log(routesPath);
console.log(databasePath);

// watch database file change
fs.watch(databasePath, {
    encoding: 'utf8'
}, (e, f) => {
    log.info('database change');
    // TODO: updata options.db
    options.db = JSON.parse(fs.readFileSync(databasePath, {
        encoding: 'utf8'
    }));
});
// watch database file change
fs.watch(routesPath, {
    encoding: 'utf8'
}, (e, f) => {
    log.info('routes change');
    // TODO: updata options.routes
    options.routes = JSON.parse(fs.readFileSync(routesPath, {
        encoding: 'utf8'
    }));
});

// launch mock server
mocked(options);
