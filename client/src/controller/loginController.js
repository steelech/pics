import Session from '../../src/model/session';
var loginController  = {
	setupEventListeners: function() {
		document.body.addEventListener('loginSubmit',this._handleLoginSubmit.bind(this)); 
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
	_handleLoginSubmit({ detail: { username, password }}) {
		// client side validations
		// if valid form data, send to backend
		if(this._validateFormData(username, password).valid) {
			Session.login(username, password);
		} else {
			// todo: fire off an event to tell view invalid form data
			console.log("invalid form data")
		}
	}
}

export default loginController;
