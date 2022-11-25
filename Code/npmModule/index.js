// const chalk = require("chalk");
import chalk from 'chalk'
import validator from 'validator'

// console.log(chalk.blue.inverse("I am blue baby"))

const res = validator.isEmail('aditya@gmail.com');
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
// console.log(chalk.red('Hii'))