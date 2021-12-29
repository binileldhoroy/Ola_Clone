document.getElementById("js-style").onmouseover = function() {mouseOver()};
document.getElementById("js-style").onmouseout = function() {mouseOut()};



function mouseOver() {
  document.getElementById("js-style").style.color = "#CCE500";
}

function mouseOut() {
  document.getElementById("js-style").style.color = "black";
}
