/**
 * Example:
 * http://johnny-five.io/examples/led-array-controller/
 * 
 *  
 * */

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var leds = new five.Leds([3, 5, 6]);
  var pot = new five.Sensor("A0");

  pot.scale([-1, 2]).on("change", function() {
    var lastIndex = Math.round(this.value);
    //console.log("Last Index " + lastIndex);

    if (lastIndex === -1) {
      leds.off();
    } else {
      leds.each(function(led, index) {
        if (index <= lastIndex) {
          //console.log(index);  
          led.on();
        } else {
          led.off();
        }
      });
    }
  });
});