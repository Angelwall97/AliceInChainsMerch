const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const auth = require("./auth.js"); // Import the authentication module


app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs"); // Set ejs as the view engine
//import authentication modulec:\MyWebServer\DB_app\index.js

//route to handle the login form submission
app.post("/login", function(req, res) {
    //get the username and password from the request body
    const username = req.body.username;
    const password = req.body.password;


// Connect to database:
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'route',
    database: 'aliceinchainsproductdata'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database!');
    }
});

//serve static files from the public directory
app.use(express.static('alice home'));
app.use(express.static('pics'));
app.get("/", function (req, res) {
    res.send("<html><h1>Welcome to the Alice in Chains Product Database</h1></html>");
});



    const authenticated = auth.authenticationUser(username, password);
    console.log(authenticated);
    //check if authentication is successful

    if(authenticated) {
        console.log("Authentication was successful!");
    } else {
        console.log("Authentication was NOT successful!");
    }
    //render the appropriate page based on authentication result
    const auth = require("./auth.js");
    //import authentication module
    auth.CreateUser("Angel", "Secret1234");
    auth.CreateUser("user@123.com", "pass");
    
    console.log(auth.authenticationUser("Angel", "Secret1234"));
        console.log(auth.authenticationUser("user@123.com", "pass"));
    
        // Close the app.post("/login") block
    });
    


app.get("/shop", function(req, res) {
    const ID = req.query.rec; // Get ID from the query string
    connection.query("SELECT * FROM productdata WHERE ID = ?", [ID], function(err, rows) {
        if (err) {
            console.error("Error retrieving data from database:", err);
            res.status(500).send("Error retrieving data from database");
        } else if (rows.length === 0) {
            console.error(`No rows found for ID ${ID}`);
            res.status(404).send(`No product found for ID ${ID}`);
        } else {
            console.log("Data retrieved from the database!");
            const prodName = rows[0].Product;
            const prodModel = rows[0].Model;
            res.render("test.ejs", { myMessage: prodName, model: prodModel }); // Render to page
        }
    });
});

app.post("/shop", function(req, res) {
    const ID = req.body.rec2; // Get ID from the POST body
    connection.query("SELECT * FROM productdata WHERE ID = ?", [ID], function(err, rows) {
        if (err) {
            console.error("Error retrieving data from database:", err);
            res.status(500).send("Error retrieving data from database");
        } else if (rows.length === 0) {
            console.error(`No rows found for ID ${ID}`);
            res.status(404).send(`No product found for ID ${ID}`);
        } else {
            console.log("Data retrieved from the database!");
            console.log(rows[0].Product);
            console.log(rows[0].Manufacturer);
            console.log(rows[0].Model);
            console.log(rows[0].Price);
            console.log(rows[0].Image);
            
            const prodName = rows[0].Product;
            const prodModel = rows[0].Model;
            res.render("test.ejs", { myMessage: prodName, model: prodModel }); // Render to page 
        }
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
    console.log('Visit http://localhost:3000/shop?rec=1 to test the GET request');
    });