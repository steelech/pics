var splitUpFiles = (files, numChunks) => {
	var fileList = [];
	for(var i = 0;i < numChunks;i++) {
		fileList.push(files.slice(i * 30, i * 30 + 30));
	}
	return fileList;
}

export var Pics = {
	get: function() {
		console.log('bout to ask the server for some pics');
		return new Promise((resolve, reject) => {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', 'http://localhost:8888/pics', true);
			xhr.send();
			xhr.onload = function() {
				resolve(JSON.parse(this.response));
			}
		})
	},
	send: function(files) {

		return new Promise((resolve, reject) => {
			// need to split up files to avoid browser timeout
			var numChunks = Math.round(files.length / 30) + 1;
			var fileList = splitUpFiles(files, numChunks);

			var count = 0;
			var sendPics = (index) => {
				if(index < numChunks) {
					console.log('sending: ', fileList[index]);
					var formData = new FormData();
					for(let i = 0;i < fileList[index].length;i++) {
						formData.append(fileList[index][i].name, fileList[index][i])
					}
					var xhr = new XMLHttpRequest();
				  	xhr.open('POST', 'http://localhost:8888/pics', true);
					xhr.send(formData);

					xhr.onload = () => {
						sendPics(index + 1);
					}	
				} else {
					resolve({ message: 'yo, we done now' });
				}
			}	
			sendPics(0);
		})
	},
};
