function indexAnimate(ele, target) {
  clearInterval(ele.timerId);
  ele.timerId = setInterval(function () {
    var currentleft = ele.offsetLeft;
    var step = 50;
    currentleft += currentleft > target ? -step : step;
    if (Math.abs(currentleft - target) < step) {
      ele.style.left = target + 'px';
      clearInterval(ele.timerId);
    } else {
      ele.style.left = currentleft + 'px';
    }
  }, 20)
}