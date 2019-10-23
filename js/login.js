$(document).ready(function () {
    //基本样式完善
    changeMainHeight();
    $(window).resize(changeMainHeight);
    // 设置main的高度的函数
    function changeMainHeight() {
        var minHeight = parseFloat($("main>.w>.content").css("height")) + 150;
        var nowHeight = window.innerHeight;
        var otherHeight = parseFloat($("header").css("height")) + parseFloat($("nav").css("height")) + parseFloat($("footer").css("height"));
        var pageMinHeight = minHeight + otherHeight;
        
        if (nowHeight > pageMinHeight) {
            var mainHeight = nowHeight - otherHeight;
            $("main").css("height", mainHeight);
        } else {
            $("main").css("height", minHeight);
        }
    }

    // ----------------------事件-------------------------------------
    // 获取元素
    // 获取注册区的输入框
    var enrollInput = $(".enroll input");
    // 获取登录区的输入框
    var loginInput = $(".login input");

    // -----------------------焦点事件---------------------------------
    // -------获得焦点
    // 输入框获得焦点 添加阴影
    $("input").focus(function () {
        if (this.style.borderColor == "rgb(185, 74, 72)") {
            this.style.boxShadow = "0 0 6px " + this.style.borderColor;
        } else {
            this.style.boxShadow = "0 0 6px #0f6eca";
        }
    })
    // --------失去焦点
    // 输入框的失去焦点事件
    $("input").blur(function () {
        if (this.value != "") {
            this.style.borderColor = "#dddddd";
        }
        this.style.boxShadow = "";
    });

    // 电子邮箱输入框失去焦点事件
    $(".email").blur(function () {
        if (this.style.borderColor == "rgb(185, 74, 72)") {
            this.style.borderColor == "rgb(185, 74, 72)"
        } else {
            this.style.borderColor = "";
        }
        if (this.value != "" && !/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.value)) {
            this.style.borderColor = "#B94A48";
        } else if (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.value)) {
            for (var num = 1; num <= parseFloat(localStorage.getItem("value")); num++) {
                if (enrollInput[2].value == localStorage.getItem("email" + num)) {
                    enrollInput[2].style.borderColor = "#B94A48";
                    break;
                }
            }
        }
    });

    // 注册区密码框的失去焦点事件
    $(".enroll .password input").blur(function () {
        judgePasswordInputValue.bind($(".enroll .password input"))(function () {
            this[0].style.borderColor = "#B94A48";
            $(".warn").css("color", "#B94A48");
        }.bind($(".enroll .password input")));
        this.style.boxShadow = "";
    });

    // 密码框的值判断函数
    function judgePasswordInputValue(fn) {
        var j = 0;//声明一个变量来计数
        if (/\d/.test(enrollInput[3].value)) {
            j++;
        }
        if (/[A-Z]/.test(enrollInput[3].value)) {
            j++;
        }
        if (/[a-z]/.test(enrollInput[3].value)) {
            j++;
        }
        if (enrollInput[3].value.length < 8 || enrollInput[3].value.length > 18) {
            j = 0;
        }
        if (this[0].value == "") {
            flagEnroll = false;
            $(".warn").removeClass("icon-zhengque").addClass("icon-i");
        } else if (j == 3) {
            this[0].style.borderColor = "";
            this.css("boxShadow", "0 0 6px #0f6eca");
            $(".warn").removeClass("icon-i").addClass("icon-zhengque").css("color", "#6EA204");
        } else {
            $(".warn").removeClass("icon-zhengque").addClass("icon-i").css("color", "#B94A48");
            if (Object.prototype.toString.call(fn) == "[object Function]") {
                fn()
            }
        }
    };

    // -----------------------注册区密码框的按键弹起事件----------------------
    $(".enroll .password input").keyup(function (e) {
        var key = e.keyCode || e.which || e.charCode;

        if (key != 13) {
            judgePasswordInputValue.bind($(".enroll .password input"))(function () {
                this[0].style.borderColor = "#B94A48";
                $(".warn").css("color", "#B94A48");
                this[0].style.boxShadow = "0 0 6px " + this[0].style.borderColor;
            }.bind($(".enroll .password input")))
        }
    });

    // ---------------勾选框点击事件---------------------------------
    $(".select").click(function () {
        if ($(".select").hasClass("icon-xuanzhong")) {
            $(".select").removeClass("icon-xuanzhong").addClass("icon-weixuanzhong");
        } else {
            $(".select").removeClass("icon-weixuanzhong").addClass("icon-xuanzhong");
        }
    })



    // --------------密码显示与隐藏事件-----------
    $(".password button").click(function () {
        if (this.innerText == "显示") {
            this.innerText = "隐藏";
            $(this).prev().attr("type", "text");
        } else {
            this.innerText = "显示";
            $(this).prev().attr("type", "password");
        }
    })

    // ----------登录区忘记密码按钮的点击事件-------
    $(".forget").click(function () {
        if ($(".forget i").hasClass("icon-arrow-fill-right")) {
            $(".forget i").removeClass("icon-arrow-fill-right").addClass("icon-arrfill_d-copy");
            $(".forget").next().slideDown(200);
        } else {
            $(".forget i").removeClass("icon-arrfill_d-copy").addClass("icon-arrow-fill-right");
            $(".forget").next().slideUp(200);
        }
    });

    // -----------注册区取消按钮的点击事件----------
    $(".cancel").click(function () {
        $(".enroll input").css("borderColor", "#dddddd").val("");
        $(".enroll .notice").hide();
        $(".warn").css("color", "#007db8")
        if ($(".warn").hasClass("icon-zhengque")) {
            $(".warn").removeClass("icon-zhengque").addClass("icon-i");
        }

    })

    // -------------微信登录点击事件------
    $(".weChat")
        .mouseenter(function () {
            this.style.color = "rgb(89, 168, 89)"
        })
        .mouseleave(function () {
            this.style.color = "";
        })
        .click(function (e) {
            e = e || window.event;
            // location.assign("");

            window.open("weChat-login.html","","top="+(e.screenY)+",left="+(e.screenX+50)+",width=300,height=300,menubar=no")
        })


    // -------------------------提交事件-------------------
    // ----------- 注册区提交
    //.creat按钮的点击提交事件
    $(".creat")
        .mousedown(function () {
            this.style.backgroundColor = "rgb(15, 110, 202)";
            this.style.boxShadow = "0 0 6px rgba(0,0,0,.6) inset";
        })
        .click(function () {
            judgeEnrollInputValue();
            $($(".enroll [class = 'default']")[0]).focus();
            if (flagEnroll) {
                $(".enroll .notice").hide();
                saveEnrollData();
            }
            this.style.backgroundColor = "";
            this.style.boxShadow = "";
            changeMainHeight();
        });

    //判断注册模块input输入框输入内容的函数
    var flagEnroll;
    function judgeEnrollInputValue() {
        flagEnroll = true;
        var enrollNoticWord = [
            "请输入您的姓氏。",
            "请输入您的名字。",
            "请输入您的电子邮件地址。",
            "请输入有效的电子邮件地址。",
            "请创建新密码。",
            "请根据密码规则创建新的密码。",
            "该邮箱已注册过账号，请直接登录"
        ]
        // 判断之前先清空notice的内容
        $(".enroll .notice div")[0].innerText = "";
        // 清楚input框的class
        enrollInput.removeClass("default");
        // 把所有的边框改回初始样式
        enrollInput.css("borderColor", "#dddddd");
        // 判断邮箱是否已经注册
        for (var num = 1; num <= parseFloat(localStorage.getItem("value")); num++) {
            if (enrollInput[2].value == localStorage.getItem("email" + num)) {
                text($(".enroll .notice div")[0], $(".enroll .notice"), enrollNoticWord[6]);
                enrollInput[2].style.borderColor = "#B94A48";
                enrollInput[2].className = "default";
                flagEnroll = false;
                return;
            }
        }
        // 姓氏框的判断
        if (enrollInput[0].value == "") {
            text($(".enroll .notice div")[0], $(".enroll .notice"), enrollNoticWord[0]);
            enrollInput[0].style.borderColor = "#B94A48";
            enrollInput[0].className = "default";
            flagEnroll = false;
        }
        // 名字框的判断
        if (enrollInput[1].value == "") {
            text($(".enroll .notice div")[0], $(".enroll .notice"), enrollNoticWord[1]);
            enrollInput[1].style.borderColor = "#B94A48";
            enrollInput[1].className = "default";
            flagEnroll = false;
        }
        // 电子邮箱输入框的判断
        if (enrollInput[2].value == "") {
            text($(".enroll .notice div")[0], $(".enroll .notice"), enrollNoticWord[2]);
            enrollInput[2].style.borderColor = "#B94A48";
            enrollInput[2].className = "default";
            flagEnroll = false;
        } else if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(enrollInput[2].value)) {
            text($(".enroll .notice div")[0], $(".enroll .notice"), enrollNoticWord[3]);
            enrollInput[2].style.borderColor = "#B94A48";
            enrollInput[2].className = "default";
            flagEnroll = false;
        }

        // 密码输入框的判断
        if (enrollInput[3].value == "") {
            text($(".enroll .notice div")[0], $(".enroll .notice"), enrollNoticWord[4]);
            enrollInput[3].style.borderColor = "#B94A48";
            enrollInput[3].className = "default";
            flagEnroll = false;
        } else {
            judgePasswordInputValue.bind($(".enroll .password input"))(function () {
                var pNew = document.createElement("p");
                pNew.innerText = enrollNoticWord[5];
                $(".enroll .notice div")[0].appendChild(pNew);
                $(".enroll .notice").show();
                enrollInput[3].className = "default";
                enrollInput[3].style.borderColor = "#B94A48";
            })
        }

    }

    // 注册区输入框的键盘弹起事件
    $(".enroll input").keyup(function (e) {
        var key = e.keyCode || e.which || e.charCode;
        if (key == 13) {
            judgeEnrollInputValue();
            $($(".enroll [class = 'default']")[0]).focus();
            if (flagEnroll) {
                $(".enroll .notice").hide();
                saveEnrollData();
            }
            changeMainHeight();
        }
    });

    // 注册区数据保存-------本地保存
    var value = 0;
    function saveEnrollData() {
        if (localStorage.getItem("value")) {
            value = parseFloat(localStorage.getItem("value"));
        }
        value++;
        if (/[\u4e00-\u9fa5]/.test(enrollInput[0].value)) {
            localStorage.setItem("name" + value, enrollInput[0].value + enrollInput[1].value);
            sessionStorage.setItem("name",enrollInput[0].value + enrollInput[1].value);
        } else {
            localStorage.setItem("name" + value, enrollInput[1].value + " " + enrollInput[0].value);
            sessionStorage.setItem("name",enrollInput[1].value + " " + enrollInput[0].value);
        
        }
        localStorage.setItem("email" + value, enrollInput[2].value);
        localStorage.setItem("password" + value, enrollInput[3].value);
        if ($(".select").hasClass("icon-weixuanzhong")) {
            localStorage.setItem("sendEmail" + value, "false");
        } else {
            localStorage.setItem("sendEmail" + value, "true");
        }
        localStorage.setItem("value", value);
        location.assign("../index.html");
    }


    // ------------登录区提交 
    //.btn-login按钮的点击提交事件
    $(".btn-login")
        .mousedown(function () {
            this.style.backgroundColor = "rgb(15, 110, 202)";
            this.style.boxShadow = "0 0 6px rgba(0,0,0,.6) inset";
        })
        .click(function () {
            judgeLoginInputValue();
            $($(".login [class = 'default']")[0]).focus();
            console.log(flagLogin)
            if (flagLogin) {
                $(".login .notice").hide();
                sessionStorage.setItem("name",localStorage.getItem("name"+loginNumber))
                window.open("../index.html")
            }
            //按钮样式
            this.style.backgroundColor = "";
            this.style.boxShadow = "";
            changeMainHeight();
        });
    // 判断登录模块input输入框输入内容的函数
    var flagLogin;
    var loginNumber;
    function judgeLoginInputValue() {
        flagLogin = true;
        loginNumber = null;
        var loginNoticeWord = [
            "请输入您的电子邮件地址。",
            "请输入有效的电子邮件地址。",
            "此邮箱还未注册账号",
            "请输入您的密码。",
            "您输入的密码有误，请重新输入。如果想要重置密码，请单击“忘记密码?”链接。"
        ]
        // 判断之前先清空notice的内容
        $(".login .notice div")[0].innerText = "";
        // 清楚input框的class
        loginInput.removeClass("default");
        // 把所有的边框改回初始样式
        loginInput.css("borderColor", "#dddddd");
        //判断电子邮箱输入框的值
        // var number;
        if (loginInput[0].value == "") {
            text($(".login .notice div")[0], $(".login .notice"), loginNoticeWord[0]);
            loginInput[0].style.borderColor = "#B94A48"
            loginInput[0].className = "default";
            flagLogin = false;
        } else if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(loginInput[0].value)) {
            text($(".login .notice div")[0], $(".login .notice"), loginNoticeWord[1]);
            loginInput[0].style.borderColor = "#B94A48"
            loginInput[0].className = "default";
            flagLogin = false;
        } else {
            for (var num = 1; num <= parseFloat(localStorage.getItem("value")); num++) {
                if (loginInput[0].value == localStorage.getItem("email" + num)) {
                    loginNumber = num;
                    break;
                }
            }
            if (!loginNumber) {
                text($(".login .notice div")[0], $(".login .notice"), loginNoticeWord[2]);
                loginInput[0].style.borderColor = "#B94A48"
                loginInput[0].className = "default";
                flagLogin = false;
                return;
            }
        }
        //判断密码输入框的输入值
        if (loginInput[1].value == "") {
            text($(".login .notice div")[0], $(".login .notice"), loginNoticeWord[3]);
            loginInput[1].style.borderColor = "#B94A48"
            loginInput[1].className = "default";
            flagLogin = false;
        } else if (loginInput[1].value != localStorage.getItem("password" + loginNumber)) {
            text($(".login .notice div")[0], $(".login .notice"), loginNoticeWord[4]);
            loginInput[1].style.borderColor = "#B94A48"
            loginInput[1].className = "default";
            flagLogin = false;
        } else {
            loginInput[1].style.borderColor = "";
        }
    }

    // 向.notice中添加文本函数
    function text(obj1, obj2, str) {
        var pNew = document.createElement("p");
        pNew.innerText = str;
        obj1.appendChild(pNew);
        obj2.show();
    }

    // 登录区输入框的键盘弹起事件
    $(".login input").keyup(function (e) {
        var key = e.keyCode || e.which || e.charCode;
        if (key == 13) {
            judgeLoginInputValue();
            $($(".login [class = 'default']")[0]).focus();
            if (flagLogin) {
                $(".login .notice").hide();
                sessionStorage.setItem("name",localStorage.getItem("name"+loginNumber))
                window.open("../index.html")
            }
            changeMainHeight();
        }
    });

})