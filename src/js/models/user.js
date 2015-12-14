import $ from "jquery";

class User {
  constructor() {
    this.access_token = null;
    this.refresh_token = null;
    this.token_expires = null;
    this.token_created = null;
  }
  isLoggedIn() {
    return this.access_token !== null;
  }

  register({username, password}, done) {

    $.ajax({
      url: 'http://snailephant.herokuapp.com/users',
      type: 'POST',
      data: {
        user: {
          email: username,
          password: password
        }
      },
      dataType: "json"
    })
    .then(done)
    .fail((err) => {

    })
  }


  login(data, done) {
    let url = "http://snailephant.herokuapp.com/oauth/token";
    data.grant_type = "password";

    let options = {
      url: url,
      method: "POST",
      data: data
    };

    $.ajax(options).then(response => {
      let {access_token, refresh_token, expires_in, created_at} = response;

      this.access_token = access_token;
      this.refresh_token = refresh_token;
      this.token_expires = expires_in;
      this.token_created =  created_at;

      localStorage.setItem('user_auth', JSON.stringify({
        access_token: access_token,
        refresh_token: refresh_token,
        expires_in: expires_in,
        created_at: created_at
      }));


      done(null, response);
    }).fail(error => {
      done(error);
    });
  }

  logout() {
    this.token = null;
  }
}

export default new User();
