import $ from 'jquery';

class User {
  constructor() {
    this.accessToken = null;
    this.email = null;
    this.expiresIn = null;
    this.listeners = [];
    this.refreshToken = null;
    this.tokenBearer = null;
    this.tokenCreated = null;

    if (localStorage.getItem('auth')) {
      const {
        accessToken,
        expiresIn,
        refreshToken,
        tokenBearer,
        tokenCreated,
      } = JSON.parse(localStorage.getItem('auth'));

      this.accessToken = accessToken;
      this.expiresIn = expiresIn;
      this.refreshToken = refreshToken;
      this.tokenBearer = tokenBearer;
      this.tokenCreated = tokenCreated;
    }
  }

  // Create a function that lets us listen for changes and subscribe to them.
  // Pass in callback so that we can apply to other areas of our application.
  subscribe(callback) {
    this.listeners.push(callback);

    // unsubscribe function, so that we can turn off what is being listened.
    return () => this.listeners.filter(listener => listener !== callback);
  }

  dispatch() {
    // Keep rerendering so that all changes are captured.
    this.listeners.forEach(callback => callback());
  }

  isLoggedIn() {
    return this.accessToken !== null;
  }

  register({ email, password }, done) {
    $.ajax({
      data: {
        user: {
          email,
          password,
        },
      },
      dataType: 'json',
      type: 'POST',
      url: 'http://snailephant.herokuapp.com/users',
    })
    .then(results => done(results))
    .fail(error => done(error));
  }

  login(dataArg, done) {
    const data = dataArg;
    const url = 'http://snailephant.herokuapp.com/oauth/token';
    data.grantType = 'password';

    const options = {
      data,
      method: 'POST',
      url,
    };

    $.ajax(options)
    .then((response) => {
      const {
        accessToken,
        createdAt,
        expiresIn,
        refreshToken,
        tokenBearer,
      } = response;

      this.accessToken = accessToken;
      this.refreshToken = refreshToken;
      this.tokenBearer = tokenBearer;
      this.tokenCreated = createdAt;
      this.tokenExpires = expiresIn;

      localStorage.setItem('auth', JSON.stringify({
        accessToken,
        createdAt,
        expiresIn,
        refreshToken,
        tokenBearer,
      }));

      this.dispatch();

      this.checkloginstatus(() => {
        done(null, response);
      });
    })
    .fail(error => done(error));
  }

  checkloginstatus(done) {
    $.ajax({
      dataType: 'json',
      headers: { Authorization: `Bearer ${this.accessToken}` },
      type: 'GET',
      url: 'http://snailephant.herokuapp.com/users',
    })
    .then((response) => {
      const { email } = response;
      this.email = email;

      localStorage.setItem('header', JSON.stringify({ email }));

      if (done) {
        done(null, response);
        this.dispatch();
      }
    });
    // .fail(error => done(error));
  }

  pay({ token, plan }, done) {
    $.ajax({
      url: 'http://snailephant.herokuapp.com/charges',
      headers: { Authorization: `Bearer ${this.accessToken}` },
      type: 'POST',
      data: {
        stripeToken: token,
        plan,
      },
      dataType: 'json',
    })
    .then(results => done(results))
    .fail(error => done(error));
  }

  logout() {
    this.accessToken = undefined;
    this.createdAt = null;
    this.email = null;
    this.expiresIn = null;
    this.refreshToken = null;
    this.tokenBearer = null;
    localStorage.removeItem('auth');
    localStorage.removeItem('header');
  }
}

export default new User();
