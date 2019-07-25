/**
 * Example:
 * http://johnny-five.io/examples/led/
 * 
 *  
 * */

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(13);

  this.repl.inject({
    led: led
  });
  
  led.on()
  //led.off()
  //led.stop()
  //led.blink(500);
});