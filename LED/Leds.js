/**
 * Example:
 * http://johnny-five.io/examples/led/
 * 
 *  
 * */

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function () {
    var leds = new five.Leds([3, 5, 6]);

    leds.blink(200);
    //leds.on();
    //leds.strobe();
    //leds.stop();
    //leds.off();

    this.repl.inject({
        leds:leds
    });

});