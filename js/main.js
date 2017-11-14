

var lightSwitch = document.querySelector('.plate');

lightSwitch.addEventListener('click', function(e) {
  var button = document.querySelector('button');
  button.className = "switch off"
  document.body.className = "dark";
  var h1 = document.querySelector('h1');
  h1.innerHTML = "Hey, who turned off the lights?"
});


// When someone hits the button in the switch, remove the current state class (on/off), and apply the opposite class (on/off)
// Swap the colors of the body's background and text by adding or removing the dark/light class
// Lastly, change the text in box to say "It's so bright in here!" when it's on, and "Hey, who turned off the lights?" when it's off
