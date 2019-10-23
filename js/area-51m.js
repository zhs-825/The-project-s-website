$(
    function () {
        $lis=$(".slide>ul>li");
$lis.each(function(index,ele){
$(ele).html(' <img src="../img/Area-51m图片/'+(index+1)+'.jpg" alt="">')

}) 
    

    }
)



window.onload=function(){
    var config = [
        {
          width: 500,
          height:500,
          top: 50,
          left: 100,
          opacity: 0.1,
        
          "z-index": 2
        }, //0
        {
          width: 500,
          height:500,
          top: 50,
          left: 0,
          opacity: 0.1,
        
          "z-index": 3
        }, //1
        {
          width: 800,
          height:600,
          top: 0,
          left: 200,
          opacity: 1,
          "z-index": 4
        }, //2
        {
          width: 500,
          height:500,
          top: 50,
          left: 700,
          opacity: 0.1,
          "z-index": 3
        }, //3
        {
          width: 500,
          height:500,
          top: 50,
          left: 600,
          opacity: 0.1,
          "z-index": 2
        }, //4
        {
          width: 500,
          height:500,
          top: 50,
          left: 600,
          opacity: 0,
          "z-index": 2
        } ,//4
        {
          width: 500,
          height:500,
          top: 50,
          left: 600,
          opacity: 0,
          "z-index": 2
        } ,//4
        {
          width: 500,
          height:500,
          top: 50,
          left: 600,
          opacity: 0,
          "z-index": 2
        } //4
      ];
    var wrap = document.getElementById("rotate"); //大盒子
var arrow = document.getElementById("button"); //左右焦点盒子
var lis = document.getElementById("slide").children[0].children;
var left= document.getElementById("left");
var right= document.getElementById("right");
var lis2=this.document.getElementById("smallbox").children[0].children;



wrap.onmouseover = function() {
    left.style.opacity = 0.6;
    right.style.opacity = 0.6;
   clearInterval( Timeid);
  };
wrap.onmouseout = function() {
  left.style.opacity = 0;
  right.style.opacity = 0;
  getIn();
  };
  var index=1;
var flag=true;
showStyle();
getIn();

function showStyle() {
  for (var i = 0; i < config.length; i++) {
    animateSlow(lis[i], config[i],function(){
      //回调函数在动画执行完毕后执行. 
      flag = true;
    });
  }
}

console.log(index);

right.onclick =   onRight;
function onRight () {
   
  if (flag == true) {
    //把config这个数组里的最后一个删掉,添加到第一个
    config.unshift(config.pop());
    showStyle();
       
    
    flag = false;
  }
  index+=1;
  
    (function () {
   
        $('.whiteText').animate(
          {
            opacity:0.5
          },100,'linear',function () {
            $('.whiteText').animate(
              {
                opacity:0
              },100
            )
            
          }
        )
      
    }())
  
  for (let i = 0; i <lis2.length; i++) {
    lis2[i].style. backgroundColor="";
  }
  if (index-1==8) {
     index=1;
  }
  lis2[index-1].style. backgroundColor="#92ffff";
 
};

  
  left.onclick = onLeft;
  function onLeft() {
   
    if (flag == true) {
      //把config这个数组里的第一个删掉,添加到最后一个
      config.push(config.shift());
      showStyle();
      flag = false;
    }
    index-=1;
    $('.whiteText').animate(
      {
        opacity:0.8
      },100,'linear',function () {
        $('.whiteText').animate(
          {
            opacity:0
          },100
        )
        
      }
    )
    for (let i = 0; i <lis2.length; i++) {
      lis2[i].style. backgroundColor="";
    }
    if (index-1<0) {
      index=8;
   }
    lis2[index-1].style. backgroundColor="#92ffff";
   
  };
 

$(
  function () {
 
      $('.whiteText').animate(
        {
          opacity:0.8
        },1000,'linear',function () {
          $('.whiteText').animate(
            {
              opacity:0
            },100
          )
          
        }
      )
    
  }
)
    var Timeid;
  function getIn() {
     Timeid= setInterval(onRight,2000);
  }
};




  
  

