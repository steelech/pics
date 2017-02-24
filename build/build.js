(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

document.addEventListener('DOMContentLoaded', function () {
	console.log("url: ", window.location.pathname);
	Router(window.location.pathname);
});

function removeTrailingBackslash(url) {
	var cameron = "charlie";
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLFNBQVMsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVc7QUFDeEQsU0FBUSxHQUFSLENBQVksT0FBWixFQUFxQixPQUFPLFFBQVAsQ0FBZ0IsUUFBckM7QUFDQSxRQUFPLE9BQU8sUUFBUCxDQUFnQixRQUF2QjtBQUNBLENBSEQ7O0FBS0EsU0FBUyx1QkFBVCxDQUFpQyxHQUFqQyxFQUFzQztBQUNyQyxLQUFJLFVBQVUsU0FBZDtBQUNBLEtBQUcsSUFBSSxRQUFKLENBQWEsR0FBYixDQUFILEVBQXNCO0FBQ3JCLFFBQU0sSUFBSSxTQUFKLENBQWMsQ0FBZCxFQUFpQixJQUFJLE1BQUosR0FBYSxDQUE5QixDQUFOO0FBQ0E7QUFDRCxRQUFPLEdBQVA7QUFDQTs7QUFFRCxTQUFTLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUI7QUFDcEIsT0FBTSx3QkFBd0IsR0FBeEIsQ0FBTjtBQUNBLEtBQUcsT0FBTyxRQUFWLEVBQW9CO0FBQ25CO0FBQ0EsRUFGRCxNQUVPLElBQUcsT0FBTyxFQUFWLEVBQWM7QUFDcEI7QUFDQSxFQUZNLE1BRUE7QUFDTjtBQUNBO0FBQ0Q7O0FBRUQsU0FBUyxTQUFULEdBQXFCO0FBQ3BCLEtBQUksU0FBUyxTQUFTLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBYjtBQUNBLEtBQUksYUFBYSxTQUFTLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQWpCO0FBQ0EsUUFBTyxXQUFQLENBQW1CLFVBQW5COztBQUVBLFVBQVMsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsRUFBeUMsV0FBekMsQ0FBcUQsTUFBckQ7QUFDQTtBQUNELFNBQVMsZUFBVCxHQUEyQjtBQUMxQixLQUFJLFNBQVMsU0FBUyxhQUFULENBQXVCLElBQXZCLENBQWI7QUFDQSxLQUFJLGFBQWEsU0FBUyxjQUFULENBQXdCLE9BQXhCLENBQWpCO0FBQ0EsUUFBTyxXQUFQLENBQW1CLFVBQW5COztBQUVBLFVBQVMsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsRUFBeUMsV0FBekMsQ0FBcUQsTUFBckQ7QUFDQTs7QUFFRCxTQUFTLGNBQVQsR0FBMEI7QUFDekIsS0FBSSxTQUFTLFNBQVMsYUFBVCxDQUF1QixJQUF2QixDQUFiO0FBQ0EsS0FBSSxhQUFhLFNBQVMsY0FBVCxDQUF3QixNQUF4QixDQUFqQjtBQUNBLFFBQU8sV0FBUCxDQUFtQixVQUFuQjs7QUFFQSxVQUFTLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLEVBQXlDLFdBQXpDLENBQXFELE1BQXJEO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuXHRjb25zb2xlLmxvZyhcInVybDogXCIsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG5cdFJvdXRlcih3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xufSk7XG5cbmZ1bmN0aW9uIHJlbW92ZVRyYWlsaW5nQmFja3NsYXNoKHVybCkge1xuXHRsZXQgY2FtZXJvbiA9IFwiY2hhcmxpZVwiO1xuXHRpZih1cmwuZW5kc1dpdGgoXCIvXCIpKSB7XG5cdFx0dXJsID0gdXJsLnN1YnN0cmluZygwLCB1cmwubGVuZ3RoIC0gMSk7XG5cdH1cblx0cmV0dXJuIHVybDtcbn1cblxuZnVuY3Rpb24gUm91dGVyKHVybCkge1xuXHR1cmwgPSByZW1vdmVUcmFpbGluZ0JhY2tzbGFzaCh1cmwpO1xuXHRpZih1cmwgPT0gXCIvbG9naW5cIikge1xuXHRcdHJlbmRlckxvZ2luUGFnZSgpOyBcblx0fSBlbHNlIGlmKHVybCA9PSBcIlwiKSB7XG5cdFx0cmVuZGVySG9tZVBhZ2UoKTtcblx0fSBlbHNlIHtcblx0XHRyZW5kZXI0MDQoKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW5kZXI0MDQoKSB7XG5cdHZhciBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cdHZhciBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCI0MDQ6IE5vdCBGb3VuZFwiKVxuXHRoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XG5cblx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuZnVuY3Rpb24gcmVuZGVyTG9naW5QYWdlKCkge1xuXHR2YXIgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHR2YXIgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTG9naW5cIik7XG5cdGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcblxuXHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckhvbWVQYWdlKCkge1xuXHR2YXIgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHR2YXIgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSG9tZVwiKTtcblx0aGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuXG5cdGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn1cbiJdfQ==
