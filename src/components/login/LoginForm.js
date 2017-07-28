const LoginForm = {
  render(props) {
    this._drawLoginContainer();
    this._drawLoginHeader();
    this._drawLoginForm();
    this._setupFormListener(props.onClick);
  },
  _drawLoginContainer() {
    this.container = document.createElement('div');
    this.container.className = 'login-container';
    this.container.id = 'login-container';
    document.body.appendChild(this.container);
  },
  _drawLoginHeader() {
    const header = document.createElement('h1');
    header.appendChild(document.createTextNode('Login'));
    this.container.appendChild(header);
  },
  _drawLoginForm() {
    this._drawLoginFormContainer();
    this._drawUsernameInput();
    this._drawPasswordInput();
    this._drawSubmitButtom();
  },
  _drawLoginFormContainer() {
    this.loginForm = document.createElement('div');
    this.loginForm.className = 'login-form-container';
    this.loginForm.id = 'login-form-container';
    this.container.appendChild(this.loginForm);
  },
  _drawUsernameInput() {
    // wrap input in div
    const loginFormUsername = document.createElement('div');
    loginFormUsername.className = 'login-form-username';
    this.loginForm.appendChild(loginFormUsername);

    // draw input
    const loginUsernameInput = document.createElement('input');
    loginUsernameInput.className = 'login-username-input';
    loginUsernameInput.id = 'login-username-input';
    loginUsernameInput.placeholder = 'Username';
    loginFormUsername.appendChild(loginUsernameInput);
    loginUsernameInput.focus();
  },
  _drawPasswordInput() {
    // wrap input in div
    const loginFormPassword = document.createElement('div');
    loginFormPassword.className = 'login-form-password';
    loginFormPassword.id = 'login-form-password';
    this.loginForm.appendChild(loginFormPassword);

    // draw input
    const loginPasswordInput = document.createElement('input');

    loginPasswordInput.placeholder = 'Password';
    loginPasswordInput.className = 'login-password-input';
    loginPasswordInput.id = 'login-password-input';
    loginPasswordInput.type = 'password';
    loginFormPassword.appendChild(loginPasswordInput);
  },
  _drawSubmitButtom() {
    // wrap button in div
    const loginFormSubmit = document.createElement('div');
    loginFormSubmit.className = 'login-form-submit';
    this.loginForm.appendChild(loginFormSubmit);

    // draw button
    const loginButton = document.createElement('div');
    const buttonText = document.createTextNode('Submit');
    loginButton.className = 'login-button';
    loginButton.id = 'login-button';
    loginButton.appendChild(buttonText);
    loginFormSubmit.appendChild(loginButton);
  },
  _setupFormListener(onClick) {
    document.getElementById('login-button').addEventListener('click', onClick);
  },
};

export default LoginForm;
