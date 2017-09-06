const AlbumHeader = {
  render({ container, albumName }) {
    console.log('rendering AlbumHeader');
    const albumHeaderText = document.createElement('div');
    albumHeaderText.classList.add('pics-header-text');
    albumHeaderText.id = 'pics-header-text';

    const backIconWrapper = document.createElement('div');
    backIconWrapper.id = 'back-icon-wrapper';
    backIconWrapper.classList.add('back-icon-wrapper');

    const backIcon = document.createElement('div');
    backIcon.className = 'fa fa-arrow-left';
    backIconWrapper.appendChild(backIcon);

    const backTextWrapper = document.createElement('div');
    backTextWrapper.id = 'back-text-wrapper';
    backTextWrapper.classList.add('back-text-wrapper');
    backTextWrapper.appendChild(document.createTextNode('Albums'));

    const rightArrowWrapper = document.createElement('div');
    rightArrowWrapper.id = 'right-arrow-wrapper';
    rightArrowWrapper.classList.add('right-arrow-wrapper');

    const rightArrow = document.createElement('div');
    rightArrow.className = 'fa fa-angle-right';

    rightArrowWrapper.appendChild(rightArrow);

    const albumNameWrapper = document.createElement('div');
    albumNameWrapper.id = 'album-name-wrapper';
    albumNameWrapper.classList.add('album-name-wrapper');
    albumNameWrapper.appendChild(document.createTextNode(albumName));

    albumHeaderText.appendChild(backIconWrapper);
    albumHeaderText.appendChild(backTextWrapper);
    albumHeaderText.appendChild(rightArrowWrapper);
    albumHeaderText.appendChild(albumNameWrapper);

    container.appendChild(albumHeaderText);
  },
};

export default AlbumHeader;
