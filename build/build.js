(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
	_router2.default.route(window.location.pathname);
});

},{"./router":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _loginView = require('./src/view/loginView');

var _loginView2 = _interopRequireDefault(_loginView);

var _homeView = require('./src/view/homeView');

var _homeView2 = _interopRequireDefault(_homeView);

var _View = require('./src/view/404View');

var _View2 = _interopRequireDefault(_View);

var _urlParse = require('./src/utils/urlParse');

var _urlParse2 = _interopRequireDefault(_urlParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = {
	route: function route(url) {
		url = _urlParse2.default.removeTrailingBackslash(url);
		if (url == "/login") {
			_loginView2.default.renderLoginView();
		} else if (url == "") {
			_homeView2.default.renderHomeView();
		} else {
			_View2.default.render404View();
		}
	}
};

exports.default = router;

},{"./src/utils/urlParse":3,"./src/view/404View":4,"./src/view/homeView":5,"./src/view/loginView":6}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var urlParse = {
	removeTrailingBackslash: function removeTrailingBackslash(url) {
		if (url.endsWith("/")) {
			url = url.substring(0, url.length - 1);
		}
		return url;
	}
};

exports.default = urlParse;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var View404 = {
	render404View: function render404View() {
		var header = document.createElement("h1");
		var headerText = document.createTextNode("404: Not Found");
		header.appendChild(headerText);

		document.getElementsByTagName('body')[0].appendChild(header);
	}
};

exports.default = View404;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var homeView = {
	renderHomeView: function renderHomeView() {
		var header = document.createElement("h1");
		var headerText = document.createTextNode("Home");
		header.appendChild(headerText);

		document.getElementsByTagName('body')[0].appendChild(header);
	}
};

exports.default = homeView;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var loginView = {
	renderLoginView: function renderLoginView() {
		var header = document.createElement("h1");
		var headerText = document.createTextNode("Login");
		header.appendChild(headerText);

		document.getElementsByTagName('body')[0].appendChild(header);
	}
};

exports.default = loginView;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQvaW5kZXguanMiLCJjbGllbnQvcm91dGVyLmpzIiwiY2xpZW50L3NyYy91dGlscy91cmxQYXJzZS5qcyIsImNsaWVudC9zcmMvdmlldy80MDRWaWV3LmpzIiwiY2xpZW50L3NyYy92aWV3L2hvbWVWaWV3LmpzIiwiY2xpZW50L3NyYy92aWV3L2xvZ2luVmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7OztBQUNBLFNBQVMsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVc7QUFDeEQsa0JBQU8sS0FBUCxDQUFhLE9BQU8sUUFBUCxDQUFnQixRQUE3QjtBQUNBLENBRkQ7Ozs7Ozs7OztBQ0RBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJLFNBQVM7QUFDWixRQUFPLGVBQVMsR0FBVCxFQUFjO0FBQ3BCLFFBQU0sbUJBQVMsdUJBQVQsQ0FBaUMsR0FBakMsQ0FBTjtBQUNBLE1BQUcsT0FBTyxRQUFWLEVBQW9CO0FBQ25CLHVCQUFVLGVBQVY7QUFDQSxHQUZELE1BRU8sSUFBRyxPQUFPLEVBQVYsRUFBYztBQUNwQixzQkFBUyxjQUFUO0FBQ0EsR0FGTSxNQUVBO0FBQ04sa0JBQVEsYUFBUjtBQUNBO0FBQ0Q7QUFWVyxDQUFiOztrQkFhZSxNOzs7Ozs7OztBQ2xCZixJQUFJLFdBQVc7QUFDZCx3QkFEYyxtQ0FDVSxHQURWLEVBQ2U7QUFDNUIsTUFBRyxJQUFJLFFBQUosQ0FBYSxHQUFiLENBQUgsRUFBc0I7QUFDckIsU0FBTSxJQUFJLFNBQUosQ0FBYyxDQUFkLEVBQWlCLElBQUksTUFBSixHQUFhLENBQTlCLENBQU47QUFDQTtBQUNELFNBQU8sR0FBUDtBQUNBO0FBTmEsQ0FBZjs7a0JBU2UsUTs7Ozs7Ozs7QUNUZixJQUFJLFVBQVU7QUFDYixjQURhLDJCQUNHO0FBQ2YsTUFBSSxTQUFTLFNBQVMsYUFBVCxDQUF1QixJQUF2QixDQUFiO0FBQ0EsTUFBSSxhQUFhLFNBQVMsY0FBVCxDQUF3QixnQkFBeEIsQ0FBakI7QUFDQSxTQUFPLFdBQVAsQ0FBbUIsVUFBbkI7O0FBRUEsV0FBUyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxFQUF5QyxXQUF6QyxDQUFxRCxNQUFyRDtBQUNBO0FBUFksQ0FBZDs7a0JBVWUsTzs7Ozs7Ozs7QUNWZixJQUFJLFdBQVc7QUFDZCxpQkFBZ0IsMEJBQVc7QUFDMUIsTUFBSSxTQUFTLFNBQVMsYUFBVCxDQUF1QixJQUF2QixDQUFiO0FBQ0EsTUFBSSxhQUFhLFNBQVMsY0FBVCxDQUF3QixNQUF4QixDQUFqQjtBQUNBLFNBQU8sV0FBUCxDQUFtQixVQUFuQjs7QUFFQSxXQUFTLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLEVBQXlDLFdBQXpDLENBQXFELE1BQXJEO0FBQ0E7QUFQYSxDQUFmOztrQkFVZSxROzs7Ozs7OztBQ1ZmLElBQUksWUFBWTtBQUNmLGtCQUFpQiwyQkFBVztBQUMzQixNQUFJLFNBQVMsU0FBUyxhQUFULENBQXVCLElBQXZCLENBQWI7QUFDQSxNQUFJLGFBQWEsU0FBUyxjQUFULENBQXdCLE9BQXhCLENBQWpCO0FBQ0EsU0FBTyxXQUFQLENBQW1CLFVBQW5COztBQUVBLFdBQVMsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsRUFBeUMsV0FBekMsQ0FBcUQsTUFBckQ7QUFDQTtBQVBjLENBQWhCOztrQkFVZSxTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXInO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuXHRyb3V0ZXIucm91dGUod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbn0pO1xuXG4iLCJpbXBvcnQgbG9naW5WaWV3IGZyb20gJy4vc3JjL3ZpZXcvbG9naW5WaWV3JztcbmltcG9ydCBob21lVmlldyBmcm9tICcuL3NyYy92aWV3L2hvbWVWaWV3JztcbmltcG9ydCBWaWV3NDA0IGZyb20gJy4vc3JjL3ZpZXcvNDA0Vmlldyc7XG5pbXBvcnQgdXJsUGFyc2UgZnJvbSAnLi9zcmMvdXRpbHMvdXJsUGFyc2UnO1xuXG52YXIgcm91dGVyID0ge1xuXHRyb3V0ZTogZnVuY3Rpb24odXJsKSB7XG5cdFx0dXJsID0gdXJsUGFyc2UucmVtb3ZlVHJhaWxpbmdCYWNrc2xhc2godXJsKTtcblx0XHRpZih1cmwgPT0gXCIvbG9naW5cIikge1xuXHRcdFx0bG9naW5WaWV3LnJlbmRlckxvZ2luVmlldygpOyBcblx0XHR9IGVsc2UgaWYodXJsID09IFwiXCIpIHtcblx0XHRcdGhvbWVWaWV3LnJlbmRlckhvbWVWaWV3KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdFZpZXc0MDQucmVuZGVyNDA0VmlldygpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iLCJ2YXIgdXJsUGFyc2UgPSB7XG5cdHJlbW92ZVRyYWlsaW5nQmFja3NsYXNoKHVybCkge1xuXHRcdGlmKHVybC5lbmRzV2l0aChcIi9cIikpIHtcblx0XHRcdHVybCA9IHVybC5zdWJzdHJpbmcoMCwgdXJsLmxlbmd0aCAtIDEpO1xuXHRcdH1cblx0XHRyZXR1cm4gdXJsO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVybFBhcnNlO1xuIiwidmFyIFZpZXc0MDQgPSB7XG5cdHJlbmRlcjQwNFZpZXcoKSB7XG5cdFx0dmFyIGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblx0XHR2YXIgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiNDA0OiBOb3QgRm91bmRcIilcblx0XHRoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XG5cblx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlldzQwNDtcbiIsInZhciBob21lVmlldyA9IHtcblx0cmVuZGVySG9tZVZpZXc6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cdFx0dmFyIGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkhvbWVcIik7XG5cdFx0aGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVWaWV3O1xuIiwidmFyIGxvZ2luVmlldyA9IHtcblx0cmVuZGVyTG9naW5WaWV3OiBmdW5jdGlvbigpIHtcblx0XHR2YXIgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRcdHZhciBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJMb2dpblwiKTtcblx0XHRoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XG5cblx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9naW5WaWV3O1xuIl19
