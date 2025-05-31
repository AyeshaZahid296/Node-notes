//common js modules
const express = require('express') //require is a function which calls or imports the modules of express
const app = express() // ko call karke ek Express app banayi jo server banayegi

const second = require("./second")
console.log("Hello world", second)