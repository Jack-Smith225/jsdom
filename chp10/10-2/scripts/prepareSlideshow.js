function prepareSlideshow() {
  // 确保浏览器智齿DOM方法
  if (!document.getElementsByTagName) {
    return false;
  }
  if (!document.getElementById) {
    return false;
  }

  // 确保元素存在
  if (!document.getElementById("linklist")) {
    return false;
  }
  if (!document.getElementById("previewImg")) {
    return false;
  }
  // 为图片应用样式
  var previewImg = document.getElementById("previewImg");
  previewImg.style.position = "absolute";
  previewImg.style.left = "0px";
  previewImg.style.top = "0px";
  // 取得列表中的所有链接
  var list = document.getElementById("linklist");
  var links = list.getElementsByTagName("a"); /*取得所有a标签*/
  // 为mouseover事件添加动画效果
  links[0].onmouseover = function () {
    moveElement("previewImg", -100, 0, 10);
  };
  links[1].onmouseover = function () {
    moveElement("previewImg", -200, 0, 10);
  };
  links[2].onmouseover = function () {
    moveElement("previewImg", -300, 0, 10);
  };
}