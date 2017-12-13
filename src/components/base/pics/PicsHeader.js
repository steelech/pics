import AlbumHeader from 'components/base/pics/albums/AlbumHeader';

const drawUploadButton = ({ buttons, handleUploadButtonClick }) => {
  const fileUploadButton = document.createElement('div');
  fileUploadButton.classList.add('file-upload-button');
  fileUploadButton.id = 'file-upload-button';
  fileUploadButton.appendChild(document.createTextNode('+Pictures'));
  fileUploadButton.addEventListener('click', handleUploadButtonClick);
  buttons.appendChild(fileUploadButton);
};

const drawAlbumCreateButton = ({ buttons, handleAlbumCreateClick }) => {
  const albumCreateButton = document.createElement('div');
  albumCreateButton.classList.add('add-album-button');
  albumCreateButton.id = 'add-album-button';
  albumCreateButton.appendChild(document.createTextNode('+Album'));
  albumCreateButton.addEventListener('click', handleAlbumCreateClick);
  buttons.appendChild(albumCreateButton);
};

const drawButtons = ({ container, handleUploadButtonClick, handleAlbumCreateClick }) => {
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('buttons-container');
  buttonsContainer.id = 'buttons-container';

  const buttons = document.createElement('div');
  buttons.classList.add('buttons');
  buttons.id = 'pics-header-buttons';

  buttonsContainer.appendChild(buttons);

  drawUploadButton({ buttons, handleUploadButtonClick });
  drawAlbumCreateButton({ buttons, handleAlbumCreateClick });
  container.appendChild(buttonsContainer);
};

const drawHeaderText = ({ container, albums, albumName, handleBackClick }) => {
  // if albumsName, draw AlbumHeader, else :
  if (albumName) {
    AlbumHeader.render({ container, albumName, handleBackClick });
  } else {
    const picsHeaderText = document.createElement('div');
    picsHeaderText.classList.add('pics-header-text');
    picsHeaderText.id = 'pics-header-text';

    const headerText = albums ? 'Albums' : 'Pictures';
    picsHeaderText.appendChild(document.createTextNode(headerText));
    container.appendChild(picsHeaderText);
  }
};

const PicsHeader = {
  handleBackClick() {
    this.props.handleBackClick();
  },
  drawHeaderText: () => ({ container, albums, albumName }) => {
    // if albumsName, draw AlbumHeader, else :
    if (albumName) {
      AlbumHeader.render({
        container,
        albumName,
        handleBackClick: () => this.handleBackClick(),
      });
    } else {
      const picsHeaderText = document.createElement('div');
      picsHeaderText.classList.add('pics-header-text');
      picsHeaderText.id = 'pics-header-text';

      const headerText = albums ? 'Albums' : 'Pictures';
      picsHeaderText.appendChild(document.createTextNode(headerText));
      container.appendChild(picsHeaderText);
    }
  },
  render(props) {
    const { handleUploadButtonClick, handleAlbumCreateClick, albums, albumName } = props;
    this.handleBackClick = this.handleBackClick.bind(this);
    this.drawHeaderText = this.drawHeaderText.bind(this);
    this.props = props;
    this.container = props.container;

    const container = document.createElement('div');
    container.classList.add('pics-header');
    container.id = 'pics-header';
    drawButtons({ container, handleUploadButtonClick, handleAlbumCreateClick });
    drawHeaderText({ container, albums, albumName, handleBackClick: this.handleBackClick });
    this.container.appendChild(container);
  },
};

export default PicsHeader;
