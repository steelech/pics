export var Pic = {
	yo: function() {
		console.log('pics yo');
	}
};

export var Pics = {
	send: function(pics) {
		var formData = new FormData();
		for(let i = 0;i < pics.length;i++) {
			console.log(pics[i]);
			formData.append(pics[i].name, pics[i]);
		}
		var xhr = new XMLHttpRequest;
	  	xhr.open('POST', 'http://localhost:8888/pics', true);
		xhr.send(formData);
		console.log('formData: ', formData);

	},
};
