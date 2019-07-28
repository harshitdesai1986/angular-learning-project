var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var app = express();
var port = 3000;
var Schema = mongoose.Schema;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*'); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/users-db", { useNewUrlParser: true });

var nameSchema = new Schema({
    firstName: String,
    lastName: String,
    password: String,
    email: String
});

var User = mongoose.model("User", nameSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Set the root directory
app.use('/', express.static(__dirname + '/'));

app.post("/createUser", (req, res) => {
    var myData = new User(req.body);
    myData.save()
    .then(item => {
        res.json({ success: true });
    })
    .catch(err => {
        res.status(400).send("unable to save to database");
    });
});

app.get("/getUsers", (req, res) => {
    var data = User.find();
    data.exec(function(err, results) {
        res.json(results);
    });
});

app.post("/login", (req, res) => {
    var data = User.findOne({'email': req.body.email , 'password': req.body.password});
    data.exec(function(err, results) {
        if(results === null) {
            res.status(401).send("Invalid Credentials");
        } else {
            res.json({ success: true });
        }
    });
});

app.delete("/deleteUser/:id", (req, res) => {
    var data = User.deleteOne({_id: req.params.id});
    data.then(results => {
        res.json({ success: true });
    })
    .catch(err => {
        res.status(400).send("unable to delete from database");
    });
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});