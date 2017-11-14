

var lightSwitch = document.querySelector('.plate');

lightSwitch.addEventListener('click', function(e) {
  var button = document.querySelector('button');
  if (button.className === "switch on")
  {
    button.className = "switch off"
    document.body.className = "dark";
    var h1 = document.querySelector('h1');
    h1.innerHTML = "Hey, who turned off the lights?"
  } else {
    button.className = "switch on"
    document.body.className = "light";
    var h1 = document.querySelector('h1');
    h1.innerHTML = "It's so bright in here!"
  }
});


// When someone hits the button in the switch, remove the current state class (on/off), and apply the opposite class (on/off)
// Swap the colors of the body's background and text by adding or removing the dark/light class
// Lastly, change the text in box to say "It's so bright in here!" when it's on, and "Hey, who turned off the lights?" when it's off
