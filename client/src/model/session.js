import Api from '../../src/utils/api';
var Session = {
	login: function(username, password) {
		return new Promise((resolve, reject) => {
			Api.sendRequestToBackend(
				{
					username: username,
					password: password
				}, 
				"/login", "POST"
			)
			.then(function(data) {
				console.log("data: ", data);
				resolve(data);
			});
		});
	},
}

export default Session;
