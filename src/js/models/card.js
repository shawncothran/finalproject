import $ from "jquery";

import User from "./user";

class Card {
  constructor() {
    // this.name = null;
    // this.address_line1 = null;
    // this.address_line2 = null;
    // this.address_city = null;
    // this.address_state = null;
    // this.address_country = null;
    // this.address_zip = null;
    // this.front = null;
    // this.back = null;
    // this.date = null;
  }

  cardFront(data) {
    let {
      background,
      fontFamily,
      color,
      fontSize,
      text
    } = data;

    return `<html><head><title>Snailephant 4x6 Postcard Front</title><link href='https://fonts.googleapis.com/css?family=Annie+Use+Your+Telescope|Great+Vibes|Playfair+Display:700|Raleway:900,300,200|Mountains+of+Christmas' rel='stylesheet' type='text/css'><style>*,*:before,*:after{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}body{width:6.25in;height:4.25in;margin:0;padding:0;background-color:${background};background-size:6.25in 4.25in;background-repeat:no-repeat}#safe-area{position:absolute;width:5.875in;height:3.875in;left:.1875in;top:.1875in}.text{display:table;margin:10px;font-family:'${fontFamily}';font-weight:400;font-size:${fontSize};color:${color};}h1{display:table-cell;vertical-align:middle;text-align:center;margin:0}</style></head><body><div id='safe-area'><div class='text'><h1>${text}</h1></div></div></body></html>`
  }

  postCard(data, done) {
    let url = "http://snailephant.herokuapp.com/cards";
    let front = this.cardFront(data.front);

    let reqData = {
      front,
      name: data.to.name,
      address_line1: data.to.address_line1,
      address_line2: data.to.address_line2,
      address_city: data.to.address_city,
      address_country: "US",
      address_state: data.to.address_state,
      address_zip: data.to.address_zip,
      back: "<html></html>",
      date: data.date
    }

    let options = {
      url: url,
      method: "POST",
      data: {card: reqData},
      headers: {
        "Authorization": "Bearer " + User.access_token
      }
    };
    console.log(options);

    $.ajax(options).then(response => {
      if (done) {
        done(null, response);
      }

    }).fail(error => {
      if (done) {
        done(error);
      }
    });
  }
}

  export default new Card();
