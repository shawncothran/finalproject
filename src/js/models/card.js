import $ from "jquery";

class Card {
  constructor() {
    this.card.name = null;
    this.card.

  }
  card(data, done) {
    let url = "http://snailephant.herokuapp.com/cards";

    let options = {
      url: url,
      method: "POST",
      data: {
        "card": {
          "name": name,
          "address_line1": address1,
          "address_line2": address2,
          "address_city": city,
          "address_state": state,
          "address_country": country,
          "address_zip": zip,
          "front": html
        }
      }
    };

    $.ajaxSetup({
      headers: {
        "Authorization": "Bearer " + this.access_token
      }
    });

    $.ajax(options).then(response => {
      done(null, response);
    }).fail(error => {
      done(error);
    });
  }
}
