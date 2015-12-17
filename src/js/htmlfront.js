function cardFront(){
  var background,
      text;

  return `<html>
  <head>
  <link href='https://fonts.googleapis.com/css?family=Annie+Use+Your+Telescope|Great+Vibes|Playfair+Display:700|Raleway:900,300,200|Mountains+of+Christmas' rel='stylesheet' type='text/css'>
  <title>Snailephant 4x6 Postcard Front</title>
  <style>
    *, *:before, *:after {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    }

    body {
      width: 6.25in;
      height: 4.25in;
      margin: 0;
      padding: 0;
      /* If using an image, the background image should have dimensions of 1875x1275 pixels. */
      background-color: ${background};
      background-size: 6.25in 4.25in;
      background-repeat: no-repeat;
    }

    #safe-area {
      position: absolute;
      width: 5.875in;
      height: 3.875in;
      left: 0.1875in;
      top: 0.1875in;
      background-color: rgba(255,255,255,0.5);
    }

    .text {
      margin: 10px;
      font-family: 'Open Sans';
      font-weight: 400;
      font-size: 40px;
      color: white;
      text-shadow: 2px 2px black;
    }
  </style>
  </head>

  <body>
    <div id="safe-area">
      <!-- All text should appear within the safe area. -->
      <div class="text">
        ${text}
      </div>
    </div>
  </body>

  </html>`
}
