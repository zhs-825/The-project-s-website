
    var nts = document.querySelector('#header>.wrap>ul').children[2];
    var product = document.querySelector('#header>.wrap>ul').children[4];
    nts.children[1].style.display = 'none';

    nts.onmouseenter = function () {
      nts.children[1].style.display = 'block';
    }
    nts.onmouseleave = function () {
      nts.children[1].style.display = 'none';
    }
    product.onmouseenter = function () {
      product.children[1].style.display = 'block';
    }
    product.onmouseleave = function () {
      product.children[1].style.display = 'none';
    }
    loginPD();
    function loginPD() {
      if (sessionStorage.getItem("name")) {
        $(".wrap .rightBar #change").text(sessionStorage.getItem("name"));
        $(".wrap .rightBar i").css("color", "green");
        $('.rightBar').mouseenter(function () {
          $('.rightBar-bottom').show();
        }).mouseleave(function () {
          $('.rightBar-bottom').hide();
        })
      } else {
        $(".wrap .rightBar-top").click(function () {
          location.assign("./login.html");
        })
      }
    }
    $('#zx').click(function () {
      sessionStorage.removeItem('name');
      $(".rightBar-bottom").hide();
      $(".wrap .rightBar #change").text("登录");
      $(".wrap .rightBar i").css("color", "#aaa");
      loginPD();
      $('.rightBar').off('mouseenter');
    })
