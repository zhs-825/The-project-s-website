

$(function () {

    // 视频的开关
    $(".sales .open").click(function () {
        $(".video").css("display", "block");
    });

    $(".video span").click(function () {
        $(".video").css("display", "none");
        $('.video embed').remove();
        $('.video').append('<embed src="../img/玩家攻略/玩家攻略.mp4">');
    })

    // 用户体验轮播图

    // 先克隆1-3张图,实现无缝轮播
    $(".exper .move").append($(".exper .move div").eq(0).clone());
    $(".exper .move").append($(".exper .move div").eq(1).clone());
    $(".exper .move").append($(".exper .move div").eq(2).clone());

    // 左箭头向右轮播
    $(".exper .left-arr").click(function () {
        if (flag) {
            flag = false;
            if ($(".exper .move").css("left") == "0px") {
                $(".exper .move")[0].style.left = -2000 + "px ";
                $(".exper .move").animate({ left: -1000 }, 500, function () {
                    flag = true;
                });
            } else {
                $(".exper .move").animate({ left: 0 }, 500, function () {
                    flag = true;
                });
            }
        }
    })



    // 右箭头封装
    function auto() {
        if (flag) {
            flag = false;
            if ($(".exper .move").css("left") == "0px") {
                $(".exper .move").animate({ left: -1000 }, 500, function () {
                    flag = true;
                });
            } else {
                $(".exper .move").animate({ left: -2000 }, 500, function () {
                    if ($(".exper .move").css("left") == "-2000px") {
                        $(".exper .move")[0].style.left = 0;
                        flag = true;
                    }
                });
            }
        }
    }

    // 计时器id
    var tId;

    // 控制前一个动画做完才能做下一个动画
    var flag = true;

    $(".exper").mouseleave(
        function () {
            tId = setInterval(function () {
                auto();
            }, 5000)
        });

    $(".exper")[0].onmouseenter = function () {
        clearInterval(tId);
        $(".exper .right-arr").click(function () {
            auto();
        });
    };


    // 用户体验点击图片看大图
    
    $(".exper .move img").click(function () {
        $(".exper .c-show").css("display", "block");
        $(".exper .c-show img").eq(0).attr("src", "../img/玩家攻略/大" + ($(this).parent().index() + 1) + ".png");
    })

    $(".c-show span").click(function(){
        $(".exper .c-show").css("display", "none");
    })


    // 外星玩家信仰
    // 鼠标悬停换图片,缓动动画的感觉
    $(".spirit-show .w div>div").mouseover(function(){
        $(this).children().eq(0).stop(true,false).fadeIn({"display":"block"},2000);
    })

    $(".spirit-show .w div>div").mouseout(function(){
        $(this).children().eq(0).stop(true,false).fadeOut({"display":"none"},500);
    })

    var arr = ["@超超超超超人SaMa<br>Alienware 17R4与相同配色的Air max 97 还有两双夜空中最亮的星<br>1.配置 CPU:I7 7820HK 显卡：GTX1080 存储：512Gssd+1G RAM：32G RAM 显示器:120hz 2k屏 后配Alienware 250hz 25寸 1080p显示器。<br>2.对外星人最满意的当然是他的灯啦。配上雷蛇的外设，骚就完事儿了。<br>    3.使用感受：买了这台机器的一年，基本所有游戏都能效果全开了。就是发热实在感人，清一次灰居然要了我600。冬天可以当暖气那种。<br>这次活动选的三双鞋，要不就是bulingbuling，要么就是和本子灯光一样的骚配色。拍的很用心啦，就是不知道为什么传上来有点糊。","@脏熊农<br>炸","@Tracy233<br>AW大法好","@养猪吧<br>它可能不贵 但却是今年目前为止我最喜欢的辽","@橙眼Sans<br>今天，我带来的是风一加上51m。风一在当时也是很nb的配置和很前卫的设计。这一点跟外星人51m很像。非常炫酷的外表加上2080和i7九代的加持。","@acecreme<br>来自外星人的信仰","@Taki_13<br>2017春节用我攒了很久的钱买下了这个爱了三年的电脑<br>2019春节买了这双zoom fly放在展柜里至今唯一-- -双一次也没穿过的爱鞋<br>今天用这颗50mm f1.8的镜头拍下了这张照片步入摄影圈开始转型正统相机Vlogger<br>还有什么在等着我去实现呢<br>梦想光说不做可不行","@JAYCiH<br>好鞋配好脑","@红笔画红心<br>听说Red Alienware外星人and Red October??更配哦<br>当初只是个电脑小白，久闻外星人的大名<br>买的时候就只是冲着Alienware的灯光和玩游戏贼爽来的<br>晚上玩的时候亮起来贼酷好吧<br>Alienware 17R4玩游戏真的超级超级流畅，各种效果开到极致根本不虚好吧哈哈(其实只是玩玩吃，和地下城而已?_?)<br>配置<br>CPU i7-7700HQ<br>显卡 GTX1070<br>硬盘 512GB PCle SSD+1TB 7200RPM<br>内存 16GB DDR4 2667MHz<br>显示器 17.3英寸ips 眼动仪版","@再见404<br>要想生活过得去，生活就要多点绿。突然发现Aj的turbo green（蒂芙尼）配色和alien外星人标的颜色一摸一样呢，真的是毫无违和感！","@里约热内卢牛奶<br>北卡蓝配外星人 绝配！","@我的马鸭鸭<br>有了它这个世界会好的"];

    // 给图片设置点击事件
    $(".spirit-show .w>div>div img").click(function(){

        // 给写好的img添加对应的src
        $(".see-big img").attr("src","../img/玩家攻略/big-"+$(this).attr("idx")+".jpg");

        // 添加数组里面对应的文字
        $(".see-big p").html(arr[$(this).attr("idx")-1]);

       // 控制弹窗出现的位置
        $(".see-big").css("top",$("html").scrollTop()+150);
        $(".see-big").css("display","block");
    })

        // 关闭弹窗
    $(".see-big span").click(function(){
        $(".see-big").css("display","none");
    })



    // 资讯悬停高亮
    $(".news-show ul li>div").hide();

    // 这里点击事件和上面一样,效果换成悬停高亮

    // 鼠标移入资讯框
     $(".news-show ul li").mouseenter(function(){
        $(this).children().eq(0).css("backgroundColor","rgba(0,0,0,0.3)");
        $(".news-show ul li .masked").show();
        $(this).children().stop(true,true).fadeIn(500);
     })

     // 移出资讯框
     $(".news-show ul li").mouseleave(function(){
        $(".news-show ul .masked").css("backgroundColor","rgba(0,0,0,0.7)")
        $(".news-show ul li .masked").hide();
        $(this).children().stop(true,true).fadeOut(300);
     })

























})