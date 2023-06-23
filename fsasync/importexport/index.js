// import chalk from 'chalk';
var validator = require('validator');
const chalk = require("chalk")
// const oper  = require('./oper')
// console.log(oper.sub(20,1));
// console.log(oper.add(5,1)); 
console.log(chalk.red("Hello world"));
console.log(chalk.bgRed('Hello world!'));
const res =validator.isEmail('foo@bar.com'); 
console.log(res ? chalk.green.bold.inverse(res) : chalk.red.inverse(res));