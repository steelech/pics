var loginView = {
	renderLoginView: function() {
		this.drawLoginContainer();
		this.drawLoginHeader();
		this.drawLoginForm();

	}, 
	drawLoginForm: function() {
		var formContainer = document.createElement("div");
		formContainer.id = "login-form-container";

		var username = document.createElement("input");
		username.id = "login-username-input";
		username.type = "text";

		var password = document.createElement("input");
		password.id =  "login-password-input";
		password.type = "password";

		var submitButton = document.createElement("button");
		submitButton.id = "login-submit-button";
		submitButton.innerHTML = "Submit";

		formContainer.appendChild(username);
		formContainer.appendChild(password);
		formContainer.appendChild(submitButton);
		document.getElementById("login-container").appendChild(formContainer);

	},
	drawLoginContainer: function() {
		var loginContainer = document.createElement("div");
		loginContainer.id="login-container";
		document.getElementsByTagName('body')[0].appendChild(loginContainer);
	},
	drawLoginHeader: function() {
		var header = document.createElement("h1");
		var headerText = document.createTextNode("Login");
		header.appendChild(headerText);
		document.getElementById("login-container").appendChild(header);
	}
}

export default loginView;
