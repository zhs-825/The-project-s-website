function animateSlow(ele, attrs, fn) {

    clearInterval(ele.timerId);

    ele.timerId = setInterval(function() {

        var flag = true;


        for (var key in attrs) {

            if (key == "opacity") {

                var currentLeft = getStyle(ele, key) * 100;

                var step = (attrs[key] * 100 - currentLeft) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);

                currentLeft += step;

                if (currentLeft != attrs[key] * 100) {

                    flag = false;
                }

                ele.style[key] = currentLeft / 100;

            } else if (key == "z-index") {

                ele.style[key] = parseInt(attrs[key]);

            } else {

                var currentLeft = parseInt(getStyle(ele, key));

                var step = (attrs[key] - currentLeft) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);

                currentLeft += step;

                if (currentLeft != attrs[key]) {

                    flag = false;
                }

                ele.style[key] = currentLeft + "px";

            }
        }


        if (flag == true) {

            clearInterval(ele.timerId);
            //调用fn.
            if (Object.prototype.toString.call(fn) == "[object Function]") {
                fn();
            }
        }
    }, 10);
}


function getStyle(ele, attr) {

    if (window.getComputedStyle) {

        return window.getComputedStyle(ele, null)[attr];
    } else {

        return ele.currentStyle[attr];
    }
}