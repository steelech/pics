var Api = {
	sendRequestToBackend: (data, endpoint, method) => {
		return new Promise((resolve, reject) => {
			var request = new XMLHttpRequest();
			request.open("POST", "http://localhost:8888/login", true);
			request.setRequestHeader("Content-Type", "application/json");
			request.send(JSON.stringify(data));

			request.addEventListener("load", function(e) {
				var responseStatus = e.target.status;
				var responseData = JSON.parse(e.target.response);

				var response = {
					"responseStatus": responseStatus,
					"responseData": responseData
				}
				resolve(response);
			});
			request.addEventListener("error", function(e) {
				console.log("error!", e);
			})

		});
	}
};

export default Api;
