#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var program = require('commander');
var log = require('../lib/log.js');
var loader = require('../lib/loader.js');
var mocked = require('../lib/server.js');
var defaultConf = require("../lib/default.config.js");

program
    .version(require('../package').version)
    .option('-c, --config <n>', 'Mocked configuration')
    .option('-p, --port <n>', 'An integer argument', parseInt)
    .option('-r, --route <n>', 'Route json file path')
    .option('-d, --data <n>', 'Database json file path')
    .parse(process.argv);

var serverPort = program.port || 0;
var routesPath = program.route ? path.resolve(process.cwd(), program.route) : '';
var databasePath = program.data ? path.resolve(process.cwd(), program.data) : '';
var configPath = program.config ? path.resolve(process.cwd(), program.config) : path.resolve(process.cwd(), './mocked.config.js');
var database = databasePath ? require(databasePath) : {};
var routes = routesPath ? require(routesPath) : {};
var customConf = loader(configPath);

customConf.port = serverPort;
Object.assign(defaultConf, customConf);

var options = {
    config: defaultConf,
    db:database,
    routes: routes
};

// watch database file change
fs.watch(databasePath, {
    encoding: 'utf8'
}, function (e, f) {
    log.info('database change');
    options.db = JSON.parse(fs.readFileSync(databasePath, {
        encoding: 'utf8'
    }));
});
// watch database file change
fs.watch(routesPath, {
    encoding: 'utf8'
}, function (e, f) {
    log.info('routes change');
    options.routes = JSON.parse(fs.readFileSync(routesPath, {
        encoding: 'utf8'
    }));
});

// launch mock server
mocked(options);
