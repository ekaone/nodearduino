/**
 * Example:
 * http://johnny-five.io/examples/led-pulse/
 * 
 *  
 * */

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function () {

    var leds = new five.Leds([3, 5, 6]);

    leds.pulse();

    // Stop and turn off the led pulse loop after
    // 10 seconds (shown in ms)
    this.wait(10000, function () {
        leds.stop().off();
    });

    //leds.blink(200);
    //leds.on();
    //leds.stop();
    //leds.off();

    this.repl.inject({
        leds: leds,
        led_Pin3: leds[0],
        led_Pin5: leds[1],
        led_Pin6: leds[2]
    });
});
