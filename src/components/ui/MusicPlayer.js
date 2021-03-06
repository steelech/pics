const MusicPlayer = {
  _drawRewindButton() {
    const rewind = document.createElement('i');
    rewind.className += ' fa fa-backward';
    rewind.id = 'rewind';
    this.container.appendChild(rewind);
  },
  _drawPlayButton() {
    const play = document.createElement('i');
    play.className += ' fa fa-play';
    play.id = 'play';
    this.container.appendChild(play);
  },
  _drawForwardButton() {
    const forward = document.createElement('i');
    forward.className += ' fa fa-forward';
    forward.id = 'forward';
    this.container.appendChild(forward);
  },
  render() {
    this.container = document.createElement('div');
    this.container.className += 'music-player-container';
    this.container.id = 'music-player-container';
    this._drawRewindButton();
    this._drawPlayButton();
    this._drawForwardButton();

    document.getElementById('base-container').appendChild(this.container);
  },
  tearDown() {
    document.getElementById('base-container').removeChild(this.container);
  },
};

export default MusicPlayer;
