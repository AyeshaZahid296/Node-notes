// CommonJS modules
const express = require('express'); // 'require' ek function hai jo Express module ko import karta hai
const app = express(); // Express function ko call karke ek app banayi gayi jo server banayega

// Server ko port 3000 par run kar rahe hain
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

// Root route (homepage)
app.get('/', (req, res) => {
    res.send(`
        Hello Everyone<br>
        My name is Ayesha<br>
        I am studying in Bahria University<br>
        My hobbies are painting and sketching<br>
        I have 4 friends
    `);
});


// Route for /name/user/:id (dynamic route)
app.get('/name/user/:id', (req, res) => {
    const { id } = req.params;
    res.send(`id ; ${id}`); // Example: /name/user/5 → { id: "5" }
});

// Route for /contact/:contactid/user/:userid
app.get('/contact/:contactid/user/:userid', (req, res) => {
    res.send(req.params); // Example: /contact/123/user/456 → { contactid: "123", userid: "456" }
});

// Route for /profile
app.get('/profile', (req, res) => {
    res.send(req.params);
});

app.get('/product/:productid', (req, res) => {
    res.send(req.params);
});
app.get('/category/electronics/items/:itemid', (req, res) => {
    res.send(req.params);
});
app.get('/admin/dashboards', (req, res) => {
    res.send(req.params);
});

// New route: /user/info
app.get('/user/info', (req, res) => {
    res.send("User Information Page");
});

// New route: /products/view/:id
app.get('/products/view/:id', (req, res) => {
    res.send(`Viewing Product ID: ${req.params.id}`);
});

// New route: /shop/:type/items/:itemId
app.get('/shop/:type/items/:itemId', (req, res) => {
    const { type, itemId } = req.params;
    // res.send(`Shop: type ${req.params.type}, item ${req.params.itemId}`);
    res.send(`Shop: type ${type}, item ${itemId}`);
});

// New route: /admin/panel/overview
app.get('/admin/panel/overview', (req, res) => {
    res.send("Admin Panel Overview");
});

// Importing another module
const second = require("./second");
console.log("Hello world", second);


// Express JS Response Methods

// ****** res.send() *******
// these are the four ways to send response 
app.get('/send', (req, res) => {  //  these all have same domain /send so thats why only the first one will run
    res.send("Welcome to Home Page...")
})

app.get('/send', (req, res) => {
    res.send(`<h1>Welcome to Home Page...</>`)
})

app.get('/send', (req, res) => {
    res.send({ memeber: "Welcome to Home Page..." })
})

app.get('/send', (req, res) => {
    res.send(["Ayesha", "Noor", "Laiba"])
})

// ****** res.json() *******

app.get('/json', (req, res) => {
    res.json({ message: "<h1>Welcome to JSON page...</h1>" });
});

// ****** res.jsonp() *******

app.get('/jsonp', (req, res) => {
    res.jsonp({ message: "<h1>Welcome to JSON page...</h1>" });
});

// ****** res.redirect() *******

app.get('/home', (req, res) => { // is ma hum /home domain ma type kartay hi /welcome par redirsct ho  jain gay...
    res.redirect('/welcome');
});

app.get('/welcome', (req, res) => {
    res.send("<h1>Welcome to the new page to learn res.redirect!</h1>");
});

//redirect to an external website
app.get('/google', (req, res) => { // is ma hum /google domain ma type kartay hi google par redirect ho jain gay..
    res.redirect('https://www.google.com');
});

// ****** res.render() *******


// ****** res.download() *******


