import Api from '../../src/utils/api';
var Session = {
	login: function(username, password) {
		console.log("logging in: ", username, password);
		Api.sendRequestToBackend({}, "/login");
		// make ajax request
		// use localStorage to store creds if successful 
		// return 200 if successful, 404 + error message if not
	}
}

export default Session;
