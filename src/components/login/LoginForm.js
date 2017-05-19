var LoginForm = {
	render: function(props) {
		this._drawLoginContainer();
		this._drawLoginHeader();	
		this._drawLoginForm();
		this._setupFormListener(props.onClick);
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
		this.loginForm.id = "login-form-container";
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
	_setupFormListener: function(onClick) {
		document.getElementById("login-button").addEventListener("click", onClick);

	}
}

export default LoginForm;