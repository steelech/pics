var baseView = {
	render: function(params) {
		// the params are used to tell us which components to render, as well
		// as what we should pass to those components
		console.log("path params: ", params);
		document.body.style="background: white";	
	}
}

export default baseView;
