import Navbar from 'components/ui/Navbar';
import MusicPlayer from 'components/ui/MusicPlayer';
import BaseContent from 'components/base/BaseContent';
import Router from 'router';

const baseView = {
  handleMusicClick() {
    if (this.musicPlayerOpen) {
      MusicPlayer.tearDown();
      this.musicPlayerOpen = false;
    } else {
      MusicPlayer.render();
      this.musicPlayerOpen = true;
    }
  },
  handleArbClose() {
    document.body.className = '';
    document.getElementById('base-container').className = 'base-container';
    document.body.removeChild(document.getElementById('close-arb'));
  },
  handleBarsClick() {
    document.body.className = 'home-login-background';
    document.getElementById('base-container').className += ' hidden';
    this.musicPlayerOpen = false;
    const bars = document.createElement('i');
    bars.className += ' fa fa-times close-arb';
    bars.id = 'close-arb';
    document.body.appendChild(bars);
    document.getElementById('close-arb').addEventListener('click', () => this.handleArbClose());
  },
  handleLogoutClick() {
    document.body.className = '';
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
    localStorage.setItem('credentials', JSON.stringify({}));
    history.replaceState(null, null, '/login');
    Router.route('/login', false);
  },
  render(params) {
    const baseContainer = document.createElement('div');
    baseContainer.className += 'base-container';
    baseContainer.id = 'base-container';

    document.body.appendChild(baseContainer);
    Navbar.render({
      clickMusic: () => this.handleMusicClick(),
      clickBars: () => this.handleBarsClick(),
      clickLogout: () => this.handleLogoutClick(),
    });

    BaseContent.render(params);
  },
};

export default baseView;
