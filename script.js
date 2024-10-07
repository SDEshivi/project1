var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");
var flag = 0; // Initialize flag to 0 (off)

btn.addEventListener("click", function () {
  if (flag === 0) {
    bulb.style.backgroundImage = "url('BULB.PNG')"; // Turn on the bulb
    console.log("Bulb turned on");
    flag = 1; // Update flag to indicate bulb is on
  } else {
    bulb.style.backgroundImage = "url('BULBOFF.PNG')"; // Turn off the bulb
    console.log("Bulb turned off");
    flag = 0; // Update flag to indicate bulb is off
  }
});
