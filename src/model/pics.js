export var Pic = {
	yo: function() {
		console.log('pics yo');
	}
};

var splitUpFiles = (files) => {
	// split the files into arrays of length 30 
	// this is needed so the browser doesn't timeout
	var fileList = [];
	var numChunks = Math.round(files.length / 30) + 1;
	for(var i = 0;i < numChunks;i++) {
		fileList.push(files.slice(i * 30, i * 30 + 30));
	}

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
			alert('done');
		}
	}	
	sendPics(0);

}

export var Pics = {
	send: function(pics) {
		splitUpFiles(pics);
	},
};
