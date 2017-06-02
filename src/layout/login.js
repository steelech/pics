import Session from 'model/session';
import Router from 'router';
import LoginForm from 'components/login/LoginForm';

const _collectFormData = function() {
	var username = document.getElementById("login-username-input").value;
	var password = document.getElementById("login-password-input").value;
	return {
		username: username,
		password: password
	};
}
const _tearDownLoginView = function() {
	document.body.classList.remove('home-login-background')
	while(document.body.firstChild) {
		document.body.removeChild(document.body.firstChild);
	}
}

const _tearDownLoginForm = () => {
	document.body.removeChild(document.getElementById('login-container'));
}

const _validateFormData = function(username, password) {
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
}
var loginView = {
	// login form in middle of screen
	render: function() {
		document.body.className = "";
		this._drawLayout(this);
		LoginForm.render({onClick: this.handleLogin});
	}, 
	_handleBarsClick: function() {
		console.log("bars clicked");
		if(document.getElementById("login-form-container")) {
			_tearDownLoginForm();
		} else {
			LoginForm.render({onClick: this.handleLogin});
		}
		// if form is there, tear it down
		// else, render LoginForm
	},
	_drawLayout: (self) => {
		document.body.className = "";
		var bars = document.createElement("i");
		bars.className += " fa fa-bars home-bars";
		bars.id = "home-bars"
		document.getElementsByTagName('body')[0].appendChild(bars);
		document.body.className = "home-login-background";
		document.getElementById("home-bars").addEventListener('click', self._handleBarsClick);

	},
	handleLogin: function(e) {
		// tell controller about form submission
		let formData = _collectFormData()
		if(_validateFormData(formData.username, formData.password).valid) {
			Session.login(formData.username, formData.password)
			.then((response) => {
				if(response.responseStatus == 200) {
					// render home page
					localStorage.setItem("credentials", JSON.stringify(formData));
					history.replaceState(null, null, "/");
					Router.route("", false);
					_tearDownLoginView();
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
}


export default loginView;
