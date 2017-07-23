var splitUpFiles = (files, numChunks) => {
	var fileList = [];
	for(var i = 0;i < numChunks;i++) {
		fileList.push(files.slice(i * 30, i * 30 + 30));
	}
	return fileList;
};

var sendPicsChunk = (files) => {
	return new Promise((resolve, reject) => {
		var formData = new FormData();
		console.log('sending: ', files);
		files.map(file => formData.append(file.name, file));

		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'http://localhost:8888/pics', true);
		xhr.send(formData);

		xhr.onload = () => {
			resolve();
		}
	})
}

const sendAllPics = (fileList) => {
	return new Promise((resolve, reject) => {
		var sendPics = (fileList) => {
			if(fileList.length) {
				sendPicsChunk(fileList.pop())
					.then(() => sendPics(fileList))
			} else {
				resolve();
			}
		}
		sendPics(fileList);
	})
};

export var Pics = {
	get: function() {
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
		console.log('all pics: ', files);
		return new Promise((resolve, reject) => {
			// need to split up files to avoid browser timeout
			var numChunks = Math.ceil(files.length / 30);
			var fileList = splitUpFiles(files, numChunks);

			sendAllPics(fileList)
				.then(resolve)
		})
	},
};
