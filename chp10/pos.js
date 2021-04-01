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
}

window.onload = positionMessage;

/*
function addLoadEvent(func) {
  var oldOnload = window.onload;
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
addLoadEvent(positionMessage)*/
