#!/usr/bin/env node

const prompt = require('prompt-sync')()
const paths = require('./App')
const chalk = require('chalk')

if (process.argv[2] === '-r') {
  paths('./', ';', ';')
  console.log(chalk.greenBright.bold('Done !! 😇'))
} else Main()

function Main () {
  if (prompt(chalk.redBright.bold('Are you sure you want to do it 😈 [y/N] : ')).toLowerCase().charAt(0) === 'y') paths('./', ';', ';')
  console.log(chalk.greenBright.bold('Dont be evil !! 😇'))
}
