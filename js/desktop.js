// $(function () {
//     $('#open').click(function () {
//         $('video').show();
//         $("#close").show();
//     })

//     $("#close").click(function(){
//         $("video")[0].currentTime = 0;
//         $('video').hide();
//         $("#close").hide();
//     })

// })

var btn=document.querySelector('#open')

btn.onclick = function () {
    
    // 点击 a标签 让div的盒子显示出来
   $('video').show();
    //点击a标签后 立马播放视频
    $('video')[0].play();
    $('#close').show()
    var carH = $(document).scrollTop();
    var timer = setInterval(function () {
      $('body,html').scrollTop(carH)
      // console.log($('body,thml').scrollTop())
    }, 0.00000001)

    setInterval(function () {
      clearInterval(timer)
    }, 100)
    
  }
  $('#close').click( function () {
    $(this).hide();
    // 点击图标 隐藏盒子
    $(this).next().hide();
    // 点击图标 视频停止
    // console.log($(this).prev()[0]);
    $(this).next()[0].pause();
    // 播放时间改成0
    $(this).next()[0].currentTime = 0;
  }
  )