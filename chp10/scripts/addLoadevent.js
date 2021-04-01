

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

