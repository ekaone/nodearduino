var five = require("johnny-five");
var temporal = require("temporal");
var board = new five.Board();

board.on("ready", function () {
  var accelerometer = new five.Accelerometer({
    controller: "ADXL345",
    // Optionally set the range to one of
    // 2, 4, 8, 16 (±g)
    // Defaults to ±2g
    //range: 8
  });

  this.samplingInterval(1000);
  
  accelerometer.on("change", function () {
    //console.log("accelerometer");
    console.log("  x            : ", this.x + " ~g");
    console.log("  y            : ", this.y + " ~g");
    console.log("  z            : ", this.z + " ~g");
    console.log("  pitch        : ", this.pitch);
    console.log("  roll         : ", this.roll);
    // console.log("  acceleration : ", this.acceleration);
    // console.log("  inclination  : ", this.inclination);
    // console.log("  orientation  : ", this.orientation);
    console.log("--------------------------------------");
  });
});