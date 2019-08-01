/**
 * Example:
 * http://johnny-five.io/examples/led-fade-callback/
 * 
 *  
 * */

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var leds = new five.Leds([3, 5, 6]);
  var timing = 150;
  var randomStrobe = true;
  var strobeIndex = 0;
  var ledCount = leds.length;
  
  function strobeNext() {
    var candidateIndex = strobeIndex;
    leds[strobeIndex].strobe(timing);

    if (randomStrobe) {
      while (candidateIndex === strobeIndex) {
        candidateIndex = Math.round(Math.random() * (ledCount - 1));
      }
    } else {
      candidateIndex = (strobeIndex < ledCount - 1) ? strobeIndex + 1 : 0;
    }
    strobeIndex = candidateIndex;

    leds[strobeIndex].strobe(timing, strobeNext);
  }

  leds[strobeIndex].strobe(timing, strobeNext);
  
  this.repl.inject({
    leds: leds
  })

});