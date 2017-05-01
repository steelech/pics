var express = require("express");
var app = express();
var path = require("path");

var router = express.Router();

router.get("/", function(req, res) {
	res.send("api endpoint");
});
router.get("/stuff", function(req, res) {
	res.send("first endpoint!");	
});
router.get("/stuff2", function(req, res) {
	res.send("second endpoint!");	
});

app.use("/", router);
console.log("backend server listening at port 3001");
app.listen(3001);
