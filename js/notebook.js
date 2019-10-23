$(function () {
    // $('#video-btn').click(function () {
    //     $('video').css('display', 'block')
    //     $('#close').css('display', 'block')

    // })
    


    var $lis = $('.shop>ul>li');
    for (i = 0; i < $lis.length; i++) {
        $($lis[i]).mouseenter(function () {
            $(this).children('.shop-bottom').stop(true, false).fadeTo(700, 0.5).css('z-index', '30')

        })
        $($lis[i]).mouseleave(function () {
            $(this).children('.shop-bottom').stop(true, false).fadeTo(0, 0)
        })
    }

    // $('#close').click(function () {
    //     $('video').css('display', 'none')
    //     $('#close').css('display', 'none')
    // })

    

/* 轮播图函数 */
    /* 声明一个变量记录点击次数 */
    var index = 0;
    var timeId=null;
    /* 大盒子移入事件 */
    $('.animations').mouseenter(function(){
        clearInterval(timeId);
        $('.com').show();
    })
    /* 大盒子移开事件 */
    $('.animations').mouseleave(function(){
        $('.com').hide();
        timeId=setInterval(animations,2000);
    })
    /* 右箭头点击函数 */
    $('.next').click(function () {
        
        animations();
        clearInterval(timeId);
    })
    /* 左箭头点击函数 */
    $('.prve').click(function () {
        
        index--;
        if (index < 0) {
            index = 2;
        }
        $('.animations>div').eq(index).stop(true,false).fadeIn(1000).siblings('div').fadeOut(1000);
        clearInterval(timeId);
    })

    /* 右箭头点击函数封装 */
    var animations = function () {
        index++;
        if (index == 3) {
            index = 0;
        }
        $('.animations>div').eq(index).stop(true,false).fadeIn(1000).siblings('div').fadeOut(1000);
    }

    /* 设置一个定时器 */
    timeId=setInterval(function(){
        animations();
    },2000)


    /*图片懒加载*/
            /*2.先需要找  懒加载的图片 */
            /*3.把src属性改成自定义属性  默认的是  data-original */
            $('div  img').lazyload({
                placeholder: '../img/产品笔记本图片/ia_800000133.gif',
                effect: "fadeIn",
                threshold : 400,
            });
          
            /*4. data:image/png:djsadjslkajdslkajdlksajdlskajdlsaj;*/
            /*5. base64数据  也可以当作图片使用*/
})
var btn=document.querySelector('#video-btn')

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
    // 点击图标 隐藏盒子
    $(this).next().hide();
    // 点击图标 视频停止
    // console.log($(this).prev()[0]);
    $(this).next()[0].pause();
    // 播放时间改成0
    $(this).next()[0].currentTime = 0;
    $(this).hide();
  }
  )