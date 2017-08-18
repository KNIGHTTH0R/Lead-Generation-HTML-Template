function move() {
  var elem = document.getElementById("myBar");   
  var width = 0;
  var id = setInterval(frame, 25);
  function frame() {
    if (width >= 50) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}