#!/usr/bin/env node

const prompt = require('prompt-sync')()
const paths = require('./App')
const chalk = require('chalk')

// https://stackoverflow.com/questions/26965331/javascript-prank-joke
// Disclaimer: I take no responsibility for any harm caused by this prank. Have fun!

if (process.argv[2] === '-r') {
  paths('./', 'Íž', ';')
  console.log(chalk.greenBright.bold('Done !! đ'))
} else Main()

function Main () {
  if (prompt(chalk.redBright.bold('Are you sure you want to do it đ [y/N] : ')).toLowerCase().charAt(0) === 'y') paths('./', ';', 'Íž')
  console.log(chalk.greenBright.bold('Dont be evil !! đ'))
}
