import Api from 'utils/api';
var Session = {
	login: (username, password) => {
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
	validate: () => {
		console.log("validating session");
		return new Promise((resolve, reject) => {
			var creds = JSON.parse(localStorage.getItem("credentials"));

			if(creds) {
				Api.sendRequestToBackend(
					{
						username: creds.username,
						password: creds.password
					}, 
					"/session", "GET"
				)
				.then(function(data) {
					console.log("data: ", data);
					if(data.responseStatus == 200) {
						resolve();
					} else {
						reject();
					}	
				});
			} else {
				reject();
			}
		});
	}
}

export default Session;
