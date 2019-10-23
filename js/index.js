$(function () {
  $('#header>.wrap>ul').children('li').eq(2).mouseenter(function () {
    $(this).children('ul').stop(true, false).slideDown(500);
  });
  $('#header>.wrap>ul').children('li').eq(2).mouseleave(function () {
    $(this).children('ul').slideUp(500);
  });
  $('#header>.wrap>ul').children('li').eq(4).mouseenter(function () {
    $(this).children('ul').stop(true, false).slideDown(500);
  });
  $('#header>.wrap>ul').children('li').eq(4).mouseleave(function () {
    $(this).children('ul').slideUp(500);
  });
});
// 声明一个变量,记录当前显示的图片索引
$(function () {
  $('.banner').on('mouseenter', function () {
    clearInterval(bannerTimerId);
  })
  $('.banner').on('mouseleave', function () {
    bannerAN();
  })
  // 给父盒子设置高度
  function setBannerHeight() {
    for (var i = 0; i < $(".banner .swiper-slide").length; i++) {
      if ($($(".banner .swiper-slide")[i]).css("display") == "block") {
        $(".banner").css("height", $($(".banner .swiper-slide")[i]).children("img")["context"].offsetHeight);
      }
    }
  }
  setBannerHeight();
  $(window).resize(setBannerHeight);
  
  var bannerIndex = 0;
  var bannerTimerId = null;
  bannerAN();

  function bannerAN() {
    bannerTimerId = setInterval(function () {
      bannerIndex++;
      if (bannerIndex == 5) {
        bannerIndex = 0;
      }
      $('.banner>.swiper-wrapper>.swiper-slide').eq(bannerIndex).fadeIn(500).siblings('.swiper-slide').fadeOut(500);
      $('.banner>.pagination>i').eq(bannerIndex).addClass('btn').siblings('i').removeClass('btn');
    }, 10000)
  }
  // 点击下面小圆点变换图片
  $('.banner>.pagination>i').click(function () {
    clearInterval(bannerTimerId);
    bannerIndex = $(this).index();
    $(this).addClass('btn').siblings('i').removeClass('btn');
    $('.banner>.swiper-wrapper>.swiper-slide').eq($(this).index()).fadeIn(500).siblings('.swiper-slide').fadeOut(500);
    bannerAN();
  })
});
$(function () {
  var contentLeftTimerId = null;
  var contentIndex1 = 0;
  contentAN1();
  $('.index-content .videos').on('mouseenter', function () {
    clearInterval(contentLeftTimerId);
  })
  $('.index-content .right .right-top').on('mouseenter', function () {
    clearInterval(contentRightTimerId);
  })
  $('.index-content .videos').on('mouseleave', function () {
    contentAN1();
  })
  $('.index-content .right .right-top').on('mouseleave', function () {
    contentAN2();
  })

  function contentAN1() {
    contentLeftTimerId = setInterval(function () {
      contentIndex1++;
      if (contentIndex1 == 2) {
        contentIndex1 = 0;
      }
      $('.index-content .videos .swiper-slide').eq(contentIndex1).fadeIn(500).siblings('.swiper-slide').fadeOut(500);
      $('.index-content .videos .pagination i').eq(contentIndex1).addClass('btn').siblings('i').removeClass('btn');
    }, 5000)
  }
  $('.index-content .videos .pagination i').click(function () {
    clearInterval(contentLeftTimerId);
    contentIndex1 = $(this).index();
    $(this).addClass('btn').siblings('i').removeClass('btn');
    $('.index-content .videos .swiper-slide').eq($(this).index()).fadeIn(500).siblings('.swiper-slide').fadeOut(500);
    contentAN1();
  })
  $('.index-content .videos .swiper-slide').click(function (e) {
    e = e || window.event;
    e.preventDefault();
    clearInterval(contentLeftTimerId);
    $('.content .videos .shade').show();
    if ($(this).idx == 1) {
      $('.index-content .videos .video1').show();
    } else {
      $('.index-content .videos .video2').show();
    }
    contentAN1();
  })
  $('.index-content .videos .icon').click(function () {
    $(this).parent().hide().siblings('.shade').hide();
  })
  var contentRightTimerId = null;
  var contentIndex2 = 0;
  contentAN2();

  function contentAN2() {
    contentRightTimerId = setInterval(function () {
      contentIndex2++;
      if (contentIndex2 == 2) {
        contentIndex2 = 0;
      }
      $('.index-content .right .swiper-slide').eq(contentIndex2).fadeIn(500).siblings('.swiper-slide').fadeOut(500);
      $('.index-content .right .pagination i').eq(contentIndex2).addClass('btn').siblings('i').removeClass('btn');
    }, 5000)
  }
  $('.index-content .right .pagination i').click(function () {
    clearInterval(contentRightTimerId);
    contentIndex2 = $(this).index();
    $(this).addClass('btn').siblings('i').removeClass('btn');
    $('.index-content .right .swiper-slide').eq($(this).index()).fadeIn(500).siblings('.swiper-slide').fadeOut(500);
    contentAN2();
  })
});
window.onload = function () {
  var catsTimerId = null;
  catself();
  var catsBtnLeft = document.getElementById('cats-btn-left'); // 左
  var catsBtnRight = document.getElementById('cats-btn-right'); // 右
  var unitWidth = document.querySelector('.cats .swiper-slide').offsetWidth;
  var catsswiperWrapper = document.querySelector('.cats .swiper-wrapper'); // 做动画的盒子
  var catsPaginations = document.querySelector('.cats .pagination').children; // 下方焦点
  var lists = document.getElementById('list').children; // 下方三个图片库
  var catBgs = document.querySelector('.cats .cat-bg').children; // 上面三个壁纸
  var catspicIndex = 0; // 出去的图片
  var catsliIndex = 0; // 出去的下标签
  for (var i = 0; i < catsPaginations.length; i++) {
    catsPaginations[i].index = i; // 给他们索引
    lists[i].index = i;
    catBgs[i].index = i;
    (function (i) {
      catsPaginations[i].onclick = function () {
        for (var j = 0; j < catsPaginations.length; j++) {
          catsPaginations[j].removeAttribute('class');
          lists[j].style.display = 'none';
          catBgs[j].style.display = 'none';
        }
        this.className = 'btn';
        lists[i].style.display = 'block';
        catBgs[i].style.display = 'block';
        var target = -this.index * unitWidth;
        indexAnimate(catsswiperWrapper, target);
        catspicIndex = catsliIndex = this.index;
      }
    }(i))
  }
  catsswiperWrapper.appendChild(catsswiperWrapper.children[0].cloneNode(true));
  // 右边焦点事件
  catsBtnRight.onclick = function () {
    catsAN();
  }
  // 左边点击事件
  catsBtnLeft.onclick = function () {
    if (catspicIndex == 0) {
      catspicIndex = catsPaginations.length;
      catsswiperWrapper.style.left = -catsPaginations.length * unitWidth + 'px';
    }
    catspicIndex--;
    var target = -catspicIndex * unitWidth;
    indexAnimate(catsswiperWrapper, target);
    for (var i = 0; i < catsPaginations.length; i++) {
      catsPaginations[i].removeAttribute('class');
      lists[i].style.display = 'none';
      catBgs[i].style.display = 'none';
    }
    catsliIndex--;
    if (catsliIndex < 0) {
      catsliIndex = catsPaginations.length - 1;
    }
    catsPaginations[catsliIndex].className = 'btn';
    lists[catsliIndex].style.display = 'block';
    catBgs[catsliIndex].style.display = 'block';
  }

  function catself() {
    catsTimerId = setInterval(function () {
      catsAN();
    }, 10000)
  }
  // 自动动画函数封装
  function catsAN() {
    if (catspicIndex == catsPaginations.length) {
      catspicIndex = 0;
      catsswiperWrapper.style.left = '0px';
    }
    catspicIndex++;
    var target = -catspicIndex * unitWidth;
    indexAnimate(catsswiperWrapper, target);
    for (var j = 0; j < catsPaginations.length; j++) {
      catsPaginations[j].removeAttribute('class');
      lists[j].style.display = 'none';
      catBgs[j].style.display = 'none';
    }
    catsliIndex++;
    if (catsliIndex == catsPaginations.length) {
      catsliIndex = 0;
    }
    catsPaginations[catsliIndex].className = 'btn';
    lists[catsliIndex].style.display = 'block';
    catBgs[catsliIndex].style.display = 'block';
  }
  // 鼠标移入移除清除计时器
  document.getElementById('cats').onmouseenter = function () {
    clearInterval(catsTimerId);
  }
  document.getElementById('cats').onmouseleave = function () {
    catself();
  }
}