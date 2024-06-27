console.log("Welcome to my portfolio!");

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
      } else {
        x.className = 'navtoggle';
      }
}

/*
function myFunction() {
  var element = document.body;
  element.classList.toggle("bright-mode");
}
  */

function brightmode() {
  const wasBrightmode = localStorage.getItem('brightmode') === 'true';
  localStorage.setItem('brightmode', !wasBrightmode);
  const element = document.body;
  element.classList.toggle('bright-mode', !wasBrightmode);

  var x = document.getElementById("myDIV");
  if (localStorage.getItem('brightmode') === 'true') {
    x.innerHTML = "Toggle dark mode";
  } else {
    x.innerHTML = "Toggle bright mode";
  }
}

function onload() {
  document.body.classList.toggle('bright-mode', localStorage.getItem('brightmode') === 'true');
}