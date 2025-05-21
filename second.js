//Module wraper functions
//but we need to wrape our data in module wraper function manually Node.js automatically wraps each module in a function like this behind the scenes:

// (function (exports, require, module, __filename, __dirname) {

Ayesha = {
    name: "Ayesha",
    favNO: 2,
    developer: "true"
}

module.exports = Ayesha

// })

