function moveElement(elemId, final_x, final_y, interval) {
  if (!document.getElementById) {
    return false;
  }
  if (!document.getElementById(elemId)) {
    return false;
  }
  var elem = document.getElementById(elemId);
  if (elem.movement) {
    clearTimeout(elem.movement)
  }
  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  if (xpos === final_x && ypos === final_y) {
    return true;
  }
  if (xpos<final_x) {
    xpos+=Math.ceil((final_x-xpos)/10);
  }
  if (xpos > final_x) {
    xpos-=Math.ceil((xpos-final_x)/10);
  }
  if (ypos < final_y) {
    ypos+=Math.ceil((final_y-ypos)/10);
  }
  if (ypos > final_y) {
    ypos-=Math.ceil((ypos-final_y)/10);
  }
  elem.style.left = xpos + "px";
  elem.style.top = ypos + "px";
  var repeat = "moveElement('" + elemId + "'," + final_x + "," + final_y + "," + interval + ")";
  elem.movement = setTimeout(repeat, interval);

}
