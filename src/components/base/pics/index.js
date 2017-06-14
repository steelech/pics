var picsIndex = {
	render: function(props) {
		console.log('rendering pics index');
		var container = document.createElement('div');
		container.classList.add('pics-container');
		container.id = 'pics-container';
		container.appendChild(document.createTextNode('picss index'));
		while(document.getElementById('main-content').firstChild) {
			document.getElementById('main-content').removeChild(document.getElementById('main-content').firstChild);
		}
		document.getElementById('main-content').appendChild(container);

	}
}

export default picsIndex;