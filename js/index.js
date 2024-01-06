const content = $("#content");
const fakeContent = $("#fakeContent");
const wrapper = $("#wrapper");

// 底部滚动条函数
function roll(t) {
  // 插入字体
  fakeContent[0].innerHTML = content[0].innerHTML;
  // 开始无滚动时设为0
  wrapper[0].scrollTop = 0;
  // 设置定时器，参数t用在这为间隔时间（单位毫秒），参数t越小，滚动速度越快
  let timer = setInterval(rollStart, t);

  // 鼠标移入div时暂停滚动
  wrapper[0].onmouseover = function () {
    clearInterval(timer);
    timer = null;
  };

  // 鼠标移出div后继续滚动
  wrapper[0].onmouseout = function () {
    timer = setInterval(rollStart, t);
  };
}
// 开始滚动函数
function rollStart() {
  // 正常滚动不断给scrollTop的值+1,当滚动高度大于列表内容高度时恢复为0
  // console.log(wrapper[0].scrollRight);
  if (wrapper[0].scrollLeft >= content[0].scrollWidth) {
    wrapper[0].scrollLeft = 0;
  } else {
    wrapper[0].scrollLeft++;
    // console.log(wrapper[0].scrollLeft--);
  }
}

// 页面加载完成时开始滚动
$(document).ready(() => {
  roll(35);
});
