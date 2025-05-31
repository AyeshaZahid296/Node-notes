//common js modules
const express = require('express'); // 'require' ek function hai jo Express module ko import karta hai
const app = express(); // Express function ko call karke ek app banayi gayi jo server banayega

// Server ko port 3000 par run kar rahe hain
app.listen(3000, () => {
    console.log("Server running at port 3000");
});

// Root route (homepage)
app.get('/', (req, res) => {
    res.send("Hello Everyone"); // res.send likhna zaroori hai
});

// Route for /name
app.get('/name', (req, res) => {
    res.send("My name is Ayesha"); // res.send missing tha
});

// Route for /uni
app.get('/uni', (req, res) => {
    res.send("I am studying in Bahria University"); // res.send missing tha
});

// Route for /hobby
app.get('/hobby', (req, res) => {
    res.send("My hobbies are painting and sketching"); // res.send missing tha
});

// Route for /friends
app.get('/friends', (req, res) => {
    res.send("I have 4 friends"); // res.send missing tha
});


const second = require("./second")
console.log("Hello world", second)