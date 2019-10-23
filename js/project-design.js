var kaiVi = document.querySelectorAll('.kaiVi');
var he = document.querySelector('#vi-he');
var video = document.querySelector('video');
var he2=document.querySelector('#vi-he2');
// console.log(he2)

  kaiVi[0].onclick = function () {
    // 点击 a标签 让div的盒子显示出来
    $('#vi-he').show();
    //点击a标签后 立马播放视频
     $('video')[0].play();
    var carH = $(document).scrollTop();
    var timer = setInterval(function () {
      $('body,html').scrollTop(carH)
      // console.log($('body,thml').scrollTop())
    }, 0.00000001)

    setInterval(function () {
      clearInterval(timer)
    }, 100)
  }
  kaiVi[1].onclick = function () {
    
    // 点击 a标签 让div的盒子显示出来
    $('#vi-he2').show();
    //点击a标签后 立马播放视频
    $('video')[1].play();
    var carH = $(document).scrollTop();
    var timer = setInterval(function () {
      $('body,html').scrollTop(carH)
      // console.log($('body,thml').scrollTop())
    }, 0.00000001)

    setInterval(function () {
      clearInterval(timer)
    }, 100)
    
  }
// 找到关闭的图标
$('.icon').click( function () {
  // 点击图标 隐藏盒子
  $(this).parent().hide();
  // 点击图标 视频停止
  // console.log($(this).prev()[0]);
  $(this).prev()[0].pause();
  // 播放时间改成0
  $(this).prev()[0].currentTime = 0;
}
)