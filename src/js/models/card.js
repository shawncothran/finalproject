import $ from "jquery";

class Card {
  constructor() {
    this.name = null;
    this.address1 = null;
    this.address2 = null;
    this.city = null;
    this.state = null;
    this.country = null;
    this.zip = null;
    this.front = null;
    this.back = null;
    this.date = null;

  }

  postCard(data, done) {
    let url = "http://snailephant.herokuapp.com/cards";

    let options = {
      url: url,
      method: "POST",
      data: { data },
      headers: {
        "Authorization": "Bearer " + this.access_token
      }
    };

    $.ajax(options).then(response => {
      done(null, response);
    }).fail(error => {
      done(error);
    });
  }

  export default new Card();
