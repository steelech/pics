import Session from 'model/session';
import Router from 'router';
var loginView = {
	// login form in middle of screen
	renderLoginView: function() {
		this._drawLoginBox();
		history.pushState(null, null, 'login');
		this._setupFormListener();
	}, 
	_setupFormListener: function() {
		var self = this;
		document.getElementById("login-button").addEventListener('click', this.handleLogin.bind(self));
	},
	handleLogin: function(e) {
		// tell controller about form submission
		let formData = this._collectFormData()
		if(this._validateFormData(formData.username, formData.password).valid) {
			Session.login(formData.username, formData.password)
			.then((response) => {
				if(response.responseStatus == 200) {
					// render home page
					console.log("successful login");
					Router.route("/pics", false);
				} else {
					// tell login view to display error
					console.log("unsuccessful login");
				}
			})
			.catch((err) => {
				console.log("error: ", err);
			});
		} else {
			// todo: fire off an event to tell view invalid form data
			console.log("invalid form data")
		}
	},
	_collectFormData: function() {
		var username = document.getElementById("login-username-input").value;
		var password = document.getElementById("login-password-input").value;
		return {
			username: username,
			password: password
		};
	},

	_drawLoginBox: function() {
		this._drawLoginContainer();
		this._drawLoginHeader();	
		this._drawLoginForm();
	},
	_drawLoginContainer: function() {
		this.container = document.createElement("div");
		this.container.className = "login-container";
		document.body.appendChild(this.container);
	},
	_drawLoginHeader: function() {
		var header = document.createElement("h1");
		header.appendChild(document.createTextNode("Login"));
		this.container.appendChild(header);
	},
	_drawLoginForm: function() {
		this._drawLoginFormContainer();
		this._drawUsernameInput();
		this._drawPasswordInput();
		this._drawSubmitButtom();
	},
	_drawLoginFormContainer: function() {
		this.loginForm = document.createElement("div");
		this.loginForm.className = "login-form-container";
		this.container.appendChild(this.loginForm);
	},
	_drawUsernameInput: function() {
		// wrap input in div
		var loginFormUsername = document.createElement("div");
		loginFormUsername.className = "login-form-username";
		this.loginForm.appendChild(loginFormUsername);

		// draw input
		var loginUsernameInput = document.createElement("input");
		loginUsernameInput.className = "login-username-input";
		loginUsernameInput.id = "login-username-input";
		loginUsernameInput.placeholder = "Username";
		loginFormUsername.appendChild(loginUsernameInput);
		loginUsernameInput.focus();
	},
	_drawPasswordInput: function() {
		// wrap input in div
		var loginFormPassword = document.createElement("div");
		loginFormPassword.className = "login-form-password";
		loginFormPassword.id = "login-form-password";
		this.loginForm.appendChild(loginFormPassword);

		// draw input
		var loginPasswordInput = document.createElement("input");
		
		loginPasswordInput.placeholder = "Password";
		loginPasswordInput.className = "login-password-input";
		loginPasswordInput.id = "login-password-input";
		loginPasswordInput.type = "password";
		loginFormPassword.appendChild(loginPasswordInput);
	},
	_drawSubmitButtom: function() {
		// wrap button in div
		var loginFormSubmit = document.createElement("div");
		loginFormSubmit.className = "login-form-submit";
		this.loginForm.appendChild(loginFormSubmit);

		// draw button
		var loginButton = document.createElement("div");
		var buttonText = document.createTextNode("Submit");
		loginButton.className = "login-button";
		loginButton.id = "login-button";
		loginButton.appendChild(buttonText);
		loginFormSubmit.appendChild(loginButton);
	},
	_setupEventListeners: function() {
		var self = this;
		document.addEventListener('clickHomeBars', function() {
			self._tearDownLoginForm();
		}); 
		document.addEventListener('clickLoginBars', function() {
			self.renderLoginView();
		});
	},
	_tearDownLoginForm: function() {
		var tearDown = document.getElementsByClassName("login-container")[0];
		document.body.removeChild(tearDown);
		history.pushState(null, null, "/");
	},
	_validateFormData: function(username, password) {
		var response = {
			valid: true,
			error: null
		};
		if(username == "") {
			response.valid = false;
			response.message = "Username can't be left blank";	
		} else if(password == "") {
			response.valid = false;
			response.message = "Password can't be left blank";
		} 
		return response;
	},
	_handleLoginSubmit({ username, password }) {
		// client side validations
		// if valid form data, send to backend
		if(this._validateFormData(username, password).valid) {
			Session.login(username, password)
			.then((response) => {
				if(response.responseStatus == 200) {
					// render home page
					console.log("successful login");
				} else {
					// tell login view to display error
					console.log("unsuccessful login");
				}
			})
		} else {
			// todo: fire off an event to tell view invalid form data
			console.log("invalid form data")
		}
	}
}


loginView._setupEventListeners();

export default loginView;
