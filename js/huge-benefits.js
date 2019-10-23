//底部国家下拉框 
function countyDown() {
    var county = document.querySelector('#county');
    var countryList = document.querySelector('.countrylist');
    var list1=countryList.children;
    // var dropDown = document.querySelector('.drop-down-box');
    var list = countryList.children;
    countryList.style.display = 'none';
    county.onclick = function () {
        var str = 'url(../img/huge-benefits/ia_200000137.jpg)';
        var dropDown = document.querySelector('.drop-down-box');
        if (/index/g.test(window.location.href)) {
            str = 'url(./img/huge-benefits/ia_200000137.jpg)';
        } 
        if (countryList.style.display == 'none') {
            countryList.style.display = 'block';
            dropDown.style.background = str;
        } else {
            countryList.style.display = 'none';
            dropDown.style.background = str + ' 0 -36px';
        }
    }
    for (var i = 0; i < list.length; i++) {
        list[i].onmouseenter = function () {
            this.style.backgroundColor = '#CCE7F3';
        }
        list[i].onmouseleave = function () {
            this.style.backgroundColor = '';
        }
    }

    
    for(var i=0;i<list1.length;i++){
        list1[i].onclick=function(){
             var country=document.querySelector(".country");
            var tet=$(this).children('a').attr("title");
            country.innerHTML = tet +'<i class="drop-down-box"></i>';
            
            return false;
        }
    }
}
countyDown();

// 返回顶部 
function getPageScroll() {
    return {
        scrollLeft: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
        scrollTop: window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
    }
}

function fTop() {
    var sidebarHd = document.querySelector('.sidebarHd');
    document.onscroll = function () {
        var topTop = getPageScroll().scrollTop
        if (topTop >= 80) {
            sidebarHd.style.display = 'block';
        } else {
            sidebarHd.style.display = 'none';
        }
        sidebarHd.onclick = function () {
            document.documentElement.scrollTop = 0;
            // window.pageXOffset=0;
            // document.body.scrollTop=0;
        }
    }
}
fTop();
// 计时器
function animate(ele, target) {
    clearInterval(ele.timerId);
    ele.timerId = setInterval(function () {
        var currentWidth = ele.offsetWidth;
        var step = currentWidth < target ? 10 : -10;
        currentWidth += step;
        if (Math.abs(currentWidth - target) < Math.abs(step)) {
            ele.style.width = target + "px";
            clearInterval(ele.timerId);
        } else {
            ele.style.width = currentWidth + "px";
        }
    }, 20);
}
// 侧栏 动态
function sidebar() {
    var sidebar = document.getElementById('sidebar');
    var btn1 = document.querySelector('.btn1');
    var target = sidebar.offsetWidth;
    btn1.onclick = function () {
        var str = 'url(../img/huge-benefits/ia_200000135.jpg)';
        if (/index/g.test(window.location.href)) {
            str = 'url(./img/huge-benefits/ia_200000135.jpg)';
        } 
        if (target == 213) {
            target = 60;
            btn1.style.background = str;
            animate(sidebar, target);

        } else if (target == 60) {
            target = 213;
            btn1.style.background = str + ' 0 -41px';
            animate(sidebar, target);
        }
    }
}
sidebar();