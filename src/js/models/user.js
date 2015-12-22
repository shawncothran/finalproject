import $ from "jquery";

class User {
  constructor() {
    this.access_token = null;
    this.token_bearer = null;
    this.refresh_token = null;
    this.expires_in = null;
    this.token_created = null;
    this.email = null;

    if (localStorage.getItem('auth')) {
      let {
        access_token,
        token_bearer,
        refresh_token,
        expires_in,
        token_created
      } = JSON.parse(localStorage.getItem('auth'));

      this.access_token = access_token;
      this.token_bearer = token_bearer;
      this.refresh_token = refresh_token;
      this.expires_in = expires_in;
      this.token_created = token_created;
    }
  }

  isLoggedIn() {
    return this.access_token !== null;

  }

  register({email, password}, done) {

    $.ajax({
      url: 'http://snailephant.herokuapp.com/users',
      type: 'POST',
      data: {
        user: {
          email,
          password
        }
      },
      dataType: "json"
    })
    .then((results) => {
      done(results);
    })
    .fail((err) => {

    })
  }


  login(data, done) {
    let url = "http://snailephant.herokuapp.com/oauth/token";
    data.grant_type = "password";

    let options = {
      url: url,
      method: "POST",
      data
    };

    $.ajax(options).then(response => {
      let {access_token, token_bearer, refresh_token, expires_in, created_at} = response;

      this.access_token = access_token;
      this.token_bearer = token_bearer;
      this.refresh_token = refresh_token;
      this.token_expires = expires_in;
      this.token_created =  created_at;

      localStorage.setItem('auth', JSON.stringify({
        access_token: access_token,
        token_bearer: token_bearer,
        refresh_token: refresh_token,
        expires_in: expires_in,
        created_at: created_at
      }));
      done(null, response);
    }).fail(error => {
      done(error);
    });
  }

  checkloginstatus() {
    $.ajax({
      url: 'http://snailephant.herokuapp.com/users',
      headers: {
        'Authorization': 'Bearer ' + this.access_token
      },
      type: 'GET',
      dataType: "json"
    }).then((response) => {
      let email = response;
    })
  }


  pay ({token, plan}, done) {

      $.ajax({
        url: 'http://snailephant.herokuapp.com/charges',
        headers: {
          'Authorization': 'Bearer ' + this.access_token
        },
        type: 'POST',
        data: {
            stripeToken: token,
            plan: plan
        },
        dataType: "json"
      })
      .then((results) => {
        done(results);
      })
      .fail((err) => {

      })
  }

  logout() {
    this.access_token = undefined;
    this.token_bearer = null;
    this.refresh_token = null;
    this.expires_in = null;
    this.created_at = null;

    localStorage.removeItem('auth');
  }
}

export default new User();
