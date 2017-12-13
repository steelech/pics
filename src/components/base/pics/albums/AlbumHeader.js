const AlbumHeader = {
  handleBackClick() {
    this.props.handleBackClick();
  },
  render({ container, albumName, handleBackClick }) {
    this.props = {};
    this.props.handleBackClick = () => handleBackClick();
    const albumHeaderText = document.createElement('div');
    albumHeaderText.classList.add('albums-header-text');
    albumHeaderText.id = 'albums-header-text';

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

    const albumHeaderTextLeft = document.createElement('div');
    albumHeaderTextLeft.id = 'album-header-text-left';
    albumHeaderTextLeft.classList.add('album-header-text-left');

    const albumHeaderTextRight = document.createElement('div');
    albumHeaderTextRight.id = 'album-header-text-right';
    albumHeaderTextRight.classList.add('album-header-text-right');

    const backWrapper = document.createElement('div');
    backWrapper.id = 'back-wrapper';
    backWrapper.classList.add('back-wrapper');

    backWrapper.appendChild(backIconWrapper);
    backWrapper.appendChild(backTextWrapper);
    backWrapper.addEventListener('click', () => {
      history.replaceState(null, null, '/pics/albums');
      this.props.handleBackClick();
    });

    albumHeaderTextLeft.appendChild(backWrapper);
    albumHeaderTextLeft.appendChild(rightArrowWrapper);
    albumHeaderTextRight.appendChild(albumNameWrapper);

    albumHeaderText.appendChild(albumHeaderTextLeft);
    albumHeaderText.appendChild(albumHeaderTextRight);

    container.appendChild(albumHeaderText);
  },
};

export default AlbumHeader;
