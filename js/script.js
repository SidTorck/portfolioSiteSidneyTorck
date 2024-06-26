console.log("Welcome to my portfolio!");

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
      } else {
        x.className = 'navtoggle';
      }
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("bright-mode");
}