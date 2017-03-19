
//Import the express module
var express = require('express');
//Import the body-parser 
var bodyparser = require("body-parser");
//Intializing the express module
var app = express();
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var loginModule = require('./modules/login');
var fileUploadModule = require('./modules/fileupload');
//set the bodyparser to json 
app.use(bodyparser.json());

var port = process.env.PORT || 8080; // used to create, sign, and verify tokens

app.set('superSecret', '123santhosh456naini'); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
var apiRoutes = express.Router();
app.use('/api/uploadfile', fileUploadModule);
// route to authenticate a user (POST http://localhost:8080/api/authenticate)
apiRoutes.get('/authenticate', function (req, res) {
    var user = req.query.username;
    var token = jwt.sign(user, app.get('superSecret'));
    // return the information including token as JSON
    res.json({
        success: true,
        token: token
    });

});
// route middleware to verify a token
apiRoutes.use(function (req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, app.get('superSecret'), function (err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
});
app.use('/api', apiRoutes);
app.use('/api/login', loginModule);

app.listen(port);
console.log('Server started at http://localhost:' + port);