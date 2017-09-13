const PicsNav = {
  _handlePicsClick() {
    if (this.activeTab != this.picsOptionContainer) {
      this.activeTab.classList.remove('active');
      this.activeTab = this.picsOptionContainer;
      this.activeTab.classList.add('active');
      this.props.handlePicsClick();
    }
  },
  _handleAlbumsClick() {
    if (location.pathname != '/pics/albums') {
      this.activeTab.classList.remove('active');
      this.activeTab = this.albumsOptionContainer;
      this.activeTab.classList.add('active');
      this.props.handleAlbumsClick();
    }
  },
  render(props) {
    this.container = props.container;
    this.props = props;

    this.navContainer = document.createElement('div');
    this.navContainer.classList.add('pics-nav-container');
    this.navContainer.id = 'pics-nav-container';

    this.picsOptionContainer = document.createElement('div');
    this.picsOptionContainer.classList.add('pics-option-container');
    this.picsOptionContainer.id = 'pics-option-container';
    this.picsOptionContainer.appendChild(document.createTextNode('Pics'));

    this.albumsOptionContainer = document.createElement('div');
    this.albumsOptionContainer.classList.add('albums-option-container');
    this.albumsOptionContainer.id = 'albums-option-container';
    this.albumsOptionContainer.appendChild(document.createTextNode('Albums'));

    this.activeTab = props.tab === 'albums' ? this.albumsOptionContainer : this.picsOptionContainer;
    this.activeTab.classList.add('active');

    this.picsOptionContainer.addEventListener('click', () => this._handlePicsClick());

    this.albumsOptionContainer.addEventListener('click', () => this._handleAlbumsClick());

    this.navContainer.appendChild(this.picsOptionContainer);
    this.navContainer.appendChild(this.albumsOptionContainer);

    this.container.appendChild(this.navContainer);
  },
};

export default PicsNav;
