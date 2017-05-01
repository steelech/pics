var express = require("express");
var app = express();
var path = require("path");


// different routers for client/api
var clientRouter = express.Router();

// static files
app.use("/static", express.static("build"));

//index.html
clientRouter.get("/*", function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.use("/", clientRouter);

console.log("frontend server listening at port 3000");
app.listen(3000);
