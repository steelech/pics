var loginView = {
	// login form in middle of screen
	renderLoginView: function() {
		this._drawLoginBox();
		history.pushState(null, null, 'login');
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
		loginUsernameInput.placeholder = "Username";
		loginFormUsername.appendChild(loginUsernameInput);
		loginUsernameInput.focus();
	},
	_drawPasswordInput: function() {
		// wrap input in div
		var loginFormPassword = document.createElement("div");
		loginFormPassword.className = "login-form-password";
		this.loginForm.appendChild(loginFormPassword);

		// draw input
		var loginPasswordInput = document.createElement("input");
		
		loginPasswordInput.placeholder = "Password";
		loginPasswordInput.className = "login-password-input";
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
	}
}


loginView._setupEventListeners();

export default loginView;
