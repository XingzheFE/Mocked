const loader = require('../lib/loader.js');

let program = require('commander');
let path = require('path');
let mocked = require('../lib/server.js');
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

console.log(serverPort);
console.log(routesPath);
console.log(databasePath);

mocked(defaultConf);
