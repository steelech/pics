var loginController  = {
	setupEventListeners: function() {
		document.body.addEventListener('loginSubmit',this._handleLoginSubmit); 
	},
	_handleLoginSubmit({ detail: { username, password }}) {
		console.log("username: ", username);
		console.log("password: ", password);
	}
}

export default loginController;
