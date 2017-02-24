var express = require("express");
var app = express();
var path = require("path");


// different routers for client/api
var clientRouter = express.Router();
var apiRouter = express.Router();

// static files
app.use("/static", express.static("build"));



//api endpoints
apiRouter.get("/", function(req, res) {
	res.send("api endpoints");
});


//index.html
clientRouter.get("/*", function(req, res) {
	res.sendFile(__dirname + "/client/index.html");
});


app.use("/api", apiRouter);
app.use("/", clientRouter);

app.listen(3000);
