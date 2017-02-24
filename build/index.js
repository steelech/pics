"use strict";

document.addEventListener('DOMContentLoaded', function () {
	console.log("url: ", window.location.pathname);
	Router(window.location.pathname);
});

function removeTrailingBackslash(url) {
	if (url.endsWith("/")) {
		url = url.substring(0, url.length - 1);
	}
	return url;
}

function Router(url) {
	url = removeTrailingBackslash(url);
	if (url == "/login") {
		renderLoginPage();
	} else if (url == "") {
		renderHomePage();
	} else {
		render404();
	}
}

function render404() {
	var header = document.createElement("h1");
	var headerText = document.createTextNode("404: Not Found");
	header.appendChild(headerText);

	document.getElementsByTagName('body')[0].appendChild(header);
}
function renderLoginPage() {
	var header = document.createElement("h1");
	var headerText = document.createTextNode("Login");
	header.appendChild(headerText);

	document.getElementsByTagName('body')[0].appendChild(header);
}

function renderHomePage() {
	var header = document.createElement("h1");
	var headerText = document.createTextNode("Home");
	header.appendChild(headerText);

	document.getElementsByTagName('body')[0].appendChild(header);
}