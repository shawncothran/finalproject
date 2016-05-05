import $ from "jquery";

import User from "./user";

class Card {
  cardFront(data) {
    let {
      background,
      color,
      fontFamily,
      fontSize,
      text,
    } = data;

    return `<html>
      <head>
        <title>Snailephant 4x6 Postcard Front</title>
        <link href='https://fonts.googleapis.com/css?family=Annie+Use+Your+Telescope|Great+Vibes|Playfair+Display:700|Raleway:900,300,200|Mountains+of+Christmas' rel='stylesheet' type='text/css'>
        <style media="print">
          *,*:before,*:after {
            -webkit-box-sizing:border-box;
            -moz-box-sizing:border-box;
            box-sizing:border-box;
          }
          html {
            font-size: 36.28px;
          }
          body {
            background-color:${background};
            background-repeat:no-repeat;
            background-size:6.25in 4.25in;
            height:4.25in;
            margin:0;
            padding:0;
            width:6.25in;
          }
          #safe-area {
            position:absolute;
            width:5.875in;
            height:3.875in;
            left:.1875in;
            top:.1875in;
          }
          h1 {
            color:${color};
            display:block;
            font-family:'${fontFamily}';
            font-size:${fontSize};
            font-weight:400;
            margin:0;
            position:relative;
            text-align:center;
            top:50%;
            transform:translateY(-50%);
            word-wrap:break-word;
          }
        </style>
        <style media="screen">
          *, *:before, *:after {
            box-sizing:border-box;
            -moz-box-sizing:border-box;
            -webkit-box-sizing:border-box;
          }
          html {
            font-size: 9.6px;
          }
          body {
            background-color:${background};
            margin:0;
            padding:0;
            font-size: 4px;
          }
          #safe-area {
            height:100px;
            width:150px;
            position: relative;
          }
          h1 {
            color:${color};
            display:block;
            font-family:${fontFamily};
            font-size:${fontSize};
            font-weight:400;
            margin:0;
            position:absolute;
            text-align:center;
            top:50%;
            width: 100%;
            transform:translateY(-50%);
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            word-wrap:break-word;
          }
        </style>
      </head>
      <body>
        <div id='safe-area'>
          <h1>${text}</h1>
        </div>
      </body>
    </html>`
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
      date: data.date,
    }

    let options = {
      url: url,
      method: "POST",
      data: {card: reqData},
      headers: {
        "Authorization": "Bearer " + User.access_token
      },
    };

    $.ajax(options).done(response => {
        done();
    }).fail(error => {
      if (done) {
        done(error);
      }
    });
  }
}

export default new Card();
