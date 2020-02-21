const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

//import from routes folder
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

//connect mongo db
const mongoConnect = require('./util/database').mongoConnect;
//import from controller
const errController = require('./controllers/404');
const app = express();
//using public folder
app.use(express.static('public'));
//config for express-ejs-layouts
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressLayouts);
app.set('view engine', 'ejs')
//defining and use routes
app.use('/admin', adminRoute);
app.use(shopRoute);
//error
app.use(errController.getError);
//creating server
mongoConnect(() => {
    app.listen(3000, (err) => {
        if (!err) {
            console.log("server running at port 3000");
        }
    }
    );

})
