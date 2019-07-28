/**
 * Example:
 * http://johnny-five.io/examples/relay/
 * 
 *  
 * */

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  
  var relay1 = new five.Relay({
    pin: 8, 
    type: "NC"
  });

  var relay2 = new five.Relay({
    pin: 9, 
    type: "NC"
  });

  // Control the relay in real time
  // lamp1.on();
  // lamp2.off();
  
  this.repl.inject({
    lamp1: relay1,
    lamp2: relay2
  });
});

process.on("SIGINT", function () {
  //clearInterval(a);
  process.exit();
});