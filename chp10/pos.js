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
  movement = setTimeout("moveMessage()", 2000);
}

function  moveMessage() {
  if (!document.getElementById) {
    return false;
  }
  if (!document.getElementById("message")) {
    return false;
  }
  var elem = document.getElementById("message");
  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  if (xpos == 200 && ypos == 100) {
    return true;
  }
  if (xpos < 200) {
    xpos+=1;
  }
  if (xpos > 200) {
    xpos-=1;
  }
  if (ypos < 200) {
    ypos+=1;
  }
  if (ypos > 200) {
    ypos-=1;
  }

  elem.style.left = xpos + "px";
  elem.style.top = ypos + "px";
  movement = setTimeout("moveMessage()", 10);
}

//window.onload = positionMessage;

function addLoadEvent(func) {
  var oldOnload = window.onload;
  //若之前的onload没被赋予函数,则直接调用; 否则首先调用老的
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function () {
      oldOnload();
      func();
    };
  }
}

// 此处不能写成 "positionMessage()", 否则加载不出效果
addLoadEvent(positionMessage)
