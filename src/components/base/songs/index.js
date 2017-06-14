var songsIndex = {
	render: function(props) {
		console.log('rendering songs index');
		var container = document.createElement('div');
		container.classList.add('songs-index');
		container.id = 'songs-index';
		container.appendChild(document.createTextNode('songs index'));
		while(document.getElementById('main-content').firstChild) {
			document.getElementById('main-content').removeChild(document.getElementById('main-content').firstChild);
		}
		document.getElementById('main-content').appendChild(container);
	}
}

export default songsIndex;