function positionMessage() {
  if (!document.getElementById) {
    return false;
  }
  if (!document.getElementById("message")) {
    return false;
  }

  var elem = document.getElementById("message");
  elem.style.position = "absolute"
  elem.style.left = "50px";
  elem.style.top = "100px";
  moveElement("message", 200, 100, 10);
}

// 此处不能写成 "positionMessage()", 否则加载不出效果
addLoadEvent(positionMessage)
