function cardFront(){
  var background,
      fontFamily,
      fontColor,
      fontSize,
      text;

  return `<html><head><title>Snailephant 4x6 Postcard Front</title><link href='https://fonts.googleapis.com/css?family=Annie+Use+Your+Telescope|Great+Vibes|Playfair+Display:700|Raleway:900,300,200|Mountains+of+Christmas' rel='stylesheet' type='text/css'><style>*,*:before,*:after{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}body{width:6.25in;height:4.25in;margin:0;padding:0;background-color:${background};background-size:6.25in 4.25in;background-repeat:no-repeat}#safe-area{position:absolute;width:5.875in;height:3.875in;left:.1875in;top:.1875in}.text{display:table;margin:10px;font-family:'${fontFamily}';font-weight:400;font-size:${fontSize};color:${fontColor};text-shadow:2px 2px black}h1{display:table-cell;vertical-align:middle;text-align:center;margin:0}</style></head><body><div id='safe-area'><div class='text'><h1>${text}</h1></div></div></body></html>`
}
