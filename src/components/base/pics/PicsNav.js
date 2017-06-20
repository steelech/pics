var PicsNav = {
	render() {
		console.log('rendering pics nav');
		var navContainer = document.createElement('div');
		navContainer.classList.add('pics-nav-container');
		navContainer.id = 'pics-nav-container';
		navContainer.appendChild(document.createTextNode('pics nav yo'))
		this.container.appendChild(navContainer);

	}
}

export default PicsNav;