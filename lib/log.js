const chalk = require('chalk');

module.exports = {
    head: '[Mocked] ',
    error (msg) {
        console.log(`${chalk.red(this.head + msg)}`);
    },
    info (msg) {
        console.log(`${chalk.cyan(this.head + msg)}`);
    },
    success (msg) {
        console.log(`${chalk.green(this.head + msg)}`);
    }
}
