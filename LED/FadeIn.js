/**
 * Example:
 * http://johnny-five.io/examples/led-fade/
 * 
 * 
 * */

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function () {
    var leds = new five.Leds([3, 5, 6]);

    leds.fadeIn();

    this.wait(2000, function () {
        leds.fadeOut();
    });
});