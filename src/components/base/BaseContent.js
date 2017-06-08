import BaseNav from 'components/base/BaseNav';

var BaseContent = {
	render: (props) => {

		let {
			pics,
			songs,
			picid,
			albums,
			albumid		
		} = props;

		console.log('props: ', props);
		var contentContainer = document.createElement("div");
		contentContainer.className = "content-container";
		contentContainer.id = "content-container";
		document.getElementById('base-container').appendChild(contentContainer);
		BaseNav.render({ pics: pics, songs: songs });
	}
};

export default BaseContent;