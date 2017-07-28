const Navbar = {
  _handleMusicClick() {
    console.log('opening music player footer');
  },
  _handleSignOut() {
    console.log('signing out');
  },
  handleArbView() {
    console.log('displaying the arb view');
  },
  _drawBars(onClick) {
    const barsIcon = document.createElement('i');
    barsIcon.className += ' fa fa-bars bars-icon';
    barsIcon.id = 'bars-icon';
    document.getElementById('left-navbar-control').appendChild(barsIcon);
    barsIcon.addEventListener('click', onClick);
  },
  _drawSignOut(onClick) {
    const signOut = document.createElement('i');
    signOut.className += ' fa fa-sign-out sign-out-icon';
    signOut.id = 'sign-out';
    document.getElementById('right-navbar-control').appendChild(signOut);
    signOut.addEventListener('click', onClick);
  },
  _drawMusic(onClick) {
    const musicIcon = document.createElement('i');
    musicIcon.className += ' fa fa-music music-icon';
    musicIcon.id = 'sign-out';
    document.getElementById('left-navbar-control').appendChild(musicIcon);
    musicIcon.addEventListener('click', onClick);
  },
  _drawContainer() {
    const navbarContainer = document.createElement('div');
    navbarContainer.className += 'navbar-container ';
    navbarContainer.id += 'navbar-container';
    document.getElementById('base-container').appendChild(navbarContainer);
  },

  _drawLeftNavigation(clickMusic, clickBars) {
    const leftNavContainer = document.createElement('div');
    leftNavContainer.className += 'left-navbar-control';
    leftNavContainer.id = 'left-navbar-control';
    document.getElementById('navbar-container').appendChild(leftNavContainer);

    this._drawBars(clickBars);
    this._drawMusic(clickMusic);
  },
  _drawRightNavigation(clickLogout) {
    const rightNavContainer = document.createElement('div');
    rightNavContainer.className += 'right-navbar-control';
    rightNavContainer.id = 'right-navbar-control';
    document.getElementById('navbar-container').appendChild(rightNavContainer);
    this._drawSignOut(clickLogout);
  },
  render(params) {
    this._drawContainer();
    this._drawLeftNavigation(params.clickMusic, params.clickBars);
    this._drawRightNavigation(params.clickLogout);
  },
};

export default Navbar;
