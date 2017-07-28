import Session from 'model/session';
import Router from 'router';
import LoginForm from 'components/login/LoginForm';

const _collectFormData = function() {
  const username = document.getElementById('login-username-input').value;
  const password = document.getElementById('login-password-input').value;
  return {
    username,
    password,
  };
};
const _tearDownLoginView = function() {
  document.body.classList.remove('home-login-background');
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
};

const _tearDownLoginForm = () => {
  document.body.removeChild(document.getElementById('login-container'));
};

const _validateFormData = function(username, password) {
  const response = {
    valid: true,
    error: null,
  };
  if (username == '') {
    response.valid = false;
    response.message = "Username can't be left blank";
  } else if (password == '') {
    response.valid = false;
    response.message = "Password can't be left blank";
  }
  return response;
};
const loginView = {
  // login form in middle of screen
  render() {
    document.body.className = '';
    this._drawLayout(this);
    LoginForm.render({ onClick: this.handleLogin });
  },
  _handleBarsClick() {
    console.log('bars clicked');
    if (document.getElementById('login-form-container')) {
      _tearDownLoginForm();
    } else {
      LoginForm.render({ onClick: this.handleLogin });
    }
    // if form is there, tear it down
    // else, render LoginForm
  },
  _drawLayout: self => {
    document.body.className = '';
    const bars = document.createElement('i');
    bars.className += ' fa fa-bars home-bars';
    bars.id = 'home-bars';
    document.getElementsByTagName('body')[0].appendChild(bars);
    document.body.className = 'home-login-background';
    document.getElementById('home-bars').addEventListener('click', self._handleBarsClick);
  },
  handleLogin(e) {
    // tell controller about form submission
    const formData = _collectFormData();
    if (_validateFormData(formData.username, formData.password).valid) {
      Session.login(formData.username, formData.password)
        .then(response => {
          if (response.responseStatus == 200) {
            // render home page
            localStorage.setItem('credentials', JSON.stringify(formData));
            history.replaceState(null, null, '/');
            Router.route('', false);
            _tearDownLoginView();
          } else {
            // tell login view to display error
            console.log('unsuccessful login');
          }
        })
        .catch(err => {
          console.log('error: ', err);
        });
    } else {
      // todo: fire off an event to tell view invalid form data
      console.log('invalid form data');
    }
  },
};

export default loginView;
