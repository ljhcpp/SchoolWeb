//轮播图
$(function () {
    var num = 0;
    var timer = null;
    go();
    $("#bannerBox").mouseenter(function () { //实现当鼠标移动到box上时，不执行自动轮播功能
        clearInterval(timer); //移动进去时清除定时器
    }).mouseleave(function () {
        go(); //移出后执行go函数
    });
    $(".span_list").eq(0).css("backgroundColor", "#3B3B3B");

    //页面加载后默认是第一张图，则让第一个导航圆点变为“选中色”。
    function go() {
        timer = setInterval(function () { //设置定时器
            num++; //用一个全局变量来控制图的运动次数
            if (num > 3) { //如果移动到了最后一张图，则num赋值1，调整ul边距（相当于初始化）
                num = 1;
                $(".ulList").css("margin-left", "0px");
            }
            if (num == 3) { //由于圆点只有三个，而图片有四张，当移动到第四张图片时，给第一个圆点“选中色”。
                $(".span_list").css("backgroundColor", "transparent");
                $(".span_list").eq(0).css("backgroundColor", "#3B3B3B");
            } else { //图片运动一次，导航圆点也动态的变换，这里先让所有圆点变为“不选中色”，再让当前圆点变为“选中色”。
                $(".span_list").css("backgroundColor", "transparent");
                $(".span_list").eq(num).css("backgroundColor", "#3B3B3B");
            }
            $(".ulList").stop().animate({
                "marginLeft": -$("#bannerBox").width() * num + "px"
            }, 580); //使用animate实行运动功能
        }, 4000);
    }

    $(".span_list").each(function (index) { //遍历每一个圆点添加点击事件，点击当前圆点则让num值赋为当前圆点的索引
        $(this).click(function () {
            num = index;
            $(".span_list").css("backgroundColor", "transparent");
            $(".span_list").eq(num).css("backgroundColor", "#3B3B3B");
            $(".ulList").stop().animate({
                "marginLeft": -$("#bannerBox").width() * num + "px"
            }, 580);
        })
    });

    $(".right_click").click(function () {
        //右按钮点击事件，每点击一次num++,这里有很多的判断，是用来消除一些BUG的。
        if (num <= 3) {
            num++;
        }
        if (num > 3) {
            num = 1;
            $(".ulList").css("margin-left", "0px");
        }
        if (num == 3) {
            $(".span_list").css("backgroundColor", "transparent");
            $(".span_list").eq(0).css("backgroundColor", "#3B3B3B");
        } else {
            $(".span_list").css("backgroundColor", "transparent");
            $(".span_list").eq(num).css("backgroundColor", "#3B3B3B");
        }
        $(".ulList").stop().animate({
            "marginLeft": -$("#bannerBox").width() * num + "px"
        }, 580);

    });

    $(".left_click").click(function () { //左按钮点击事件
        if (num >= 0) {
            num--;
        }
        if (num < 0) {
            num = 2;
            $(".ulList").css("margin-left", "-300%");
            $(".span_list").css("backgroundColor", "transparent");
            $(".span_list").eq(2).css("backgroundColor", "#3B3B3B");
        } else {
            $(".span_list").css("backgroundColor", "transparent");
            $(".span_list").eq(num).css("backgroundColor", "#3B3B3B");
        }
        $(".ulList").stop().animate({
            "marginLeft": -$("#bannerBox").width() * num + "px"
        }, 580);

    });
    $(".left_click").hover(function () {
        //这里是实现左右按钮的阴影效果显示，用到了hover事件
        $(".btn_left").css("opacity", "1");
    }, function () {
        $(".btn_left").css("opacity", "0.5");
    });

    $(".right_click").hover(function () {
        $(".btn_right").css("opacity", "1");
    }, function () {
        $(".btn_right").css("opacity", "0.5");
    });

});
