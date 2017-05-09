import Api from '../../src/utils/api';
var Session = {
	login: function(username, password) {
		Api.sendRequestToBackend({username: username, password: password}, "/login", "POST").then(function(data) {
			console.log("data: ", data);
		});
		// make ajax request
		// use localStorage to store creds if successful 
		// return 200 if successful, 404 + error message if not
	},
	
}

export default Session;
