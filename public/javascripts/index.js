/**
 * Created by Administrator on 2017/9/22.
 */
$(document).ready(function () {
    //智能隐藏导航栏
    var new_scroll_position = 0;
    var last_scroll_position;
    //设置滚动多少隐藏
    var setHeight = 50;
    var header = document.getElementById("menu-nav");
    window.addEventListener('scroll', function (e) {
        last_scroll_position = window.scrollY;
        // 向下滚动
        if (new_scroll_position < last_scroll_position && last_scroll_position > setHeight) {
            header.classList.remove("slideDown");
            header.classList.add("slideUp");
            // 向上滚动
        } else if (new_scroll_position > last_scroll_position) {
            header.classList.remove("slideUp");
            header.classList.add("slideDown");
            $(".web-code-div").css("display", "none");
        }
        new_scroll_position = last_scroll_position;
    });

    //默认隐藏返回顶部按钮
    $(function () {
        //移动距离超过一定距离时出现
        $(window).scroll(function () {
            if ($(window).scrollTop() > 100) {
                $(".back-top").fadeIn("normal");
            } else {
                $(".back-top").fadeOut("normal");
            }
        });
        //返回顶部
        $(".back-top").click(function (e) {
            e.preventDefault();
            var speed = 500;//滑动的速度
            $('body,html').animate({scrollTop: 0}, speed);
            return false;
        });
    });
});