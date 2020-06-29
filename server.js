const express = require ("express");
const app = express ();
const expbs = require ("express-handlebars");
const bodyParser = require ('body-parser');
require('dotenv').config({path:"./config/keys.env"});

app.engine("handlebars",expbs({defaultLayout: 'main' }));
app.set("view engine","handlebars");
app.use(express.static('public'));

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
// Load Controllers
 const generalController = require ("./Controllers/generalC");
 const topSaleController = require ("./Controllers/TopSale");

// map controllers to app object
app.use ("/",generalController);
app.use ("/TopSale",topSaleController);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('Web is Up');
});
