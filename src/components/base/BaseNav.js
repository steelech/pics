var BaseNav = {
	render: function(props) {
		console.log('base nav:',  props);
		let container = document.createElement('div');
		container.className = 'basenav-container';
		container.id = 'basenav-container';
		let leftNav = document.createElement('div');
		leftNav.className = 'leftnav-container';
		leftNav.id = 'leftnav-container';
		leftNav.appendChild(document.createTextNode('Pics'));
		leftNav.appendChild(document.createTextNode('Songs'));
		container.appendChild(leftNav);
		document.getElementById('content-container').appendChild(container);

	}
}

export default BaseNav;