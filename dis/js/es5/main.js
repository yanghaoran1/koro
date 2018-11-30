'use strict';

/* 
* @Author: Marte
* @Date:   2018-11-23 09:41:33
* @Last Modified by:   Marte
* @Last Modified time: 2018-11-30 14:44:32
*/
$(function () {

    // 选项卡
    $('.mtnews').find('input').click(function () {
        $('.mtnews input').attr('class', ''); //清空样式
        $(this).attr('class', 'active'); //点击高亮
        $('.mtnews .mtnews_box').css('display', 'none'); //清空
        $('.mtnews .mtnews_box').eq($(this).index()).css('display', 'block'); //对应的盒子跟着显示
    });

    $('.main_toprul ul').find('li').hover(function () {
        $('.maint_goods ul').stop();
        $('.main_toprul ul li').attr('class', '');
        $(this).attr('class', 'topr_active');
        $('.maint_goods ul').animate({ 'top': $(this).index() * -334 + 'px' }, 300);
    });

    $('.maint_goods ul li').hover(function () {
        $('.maint_goods ul li').css('box-shadow', '');
        $(this).css('box-shadow', '1px 3px 9px #dadada');
    });

    $.ajax({
        type: "get", //请求方式
        url: "api/winegoods.php", //接口路径
        async: true, //异步
        success: function success(str) {
            //成功回调
            var arr = JSON.parse(str);
            var html = '';
            html += arr.map(function (item) {
                return '<li>\n                            <img src="' + item.img + '" />\n                        </li>';
            }).join('');
            $('.main_wine .winecenter .winec_l ul').html(html);
        }

    });

    // wine轮播图
    var iW = $('.wozhen li').eq(0).outerWidth(); //JS offsetwidth
    $('.wozhen li').css('left', iW);
    $('.wozhen li').eq(0).css('left', 0);
    //2.开定时器：每次轮播一个图
    var timer = null;
    clearInterval(timer);
    var now = 0;

    timer = setInterval(next, 2000); //每隔2秒钟切换一个图

    function next() {
        //旧的挪走
        $('.wozhen li').eq(now).animate({ 'left': -iW }, 1000);
        now = ++now >= $('.wozhen li').size() ? 0 : now;
        //新的快速放在右侧，再挪进可视区
        $('.wozhen li').eq(now).css('left', iW);

        $('.wozhen li').eq(now).animate({ 'left': 0 }, 1000);
        light();
    }
    //3.焦点跟随
    function light() {
        $('.winec_c p span').removeClass('active2');
        $('.winec_c p span').eq(now).addClass('active2');
    }

    function prev() {
        //从左侧切入到可视区
        //旧的挪到右侧
        $('.wozhen li').eq(now).animate({ 'left': iW }, 1000);
        //新的
        now = --now < 0 ? $('.wozhen li').size() - 1 : now;
        $('.wozhen li').eq(now).css('left', -iW);

        $('.wozhen li').eq(now).animate({ 'left': 0 }, 1000);
        light();
    }

    //鼠标经过停止，鼠标离开继续运动
    $('.ybaba').hover(function () {
        clearInterval(timer);
    }, function () {
        clearInterval(timer);
        timer = setInterval(next, 2000);
    });
    //5.点击焦点可以跳转
    $('.ybaba p').find('span').hover(function () {
        //旧 ：now
        //新：index() 新的
        clearInterval(timer);
        var index = $(this).index();
        if (index > now) {
            //从右边切入
            //旧 now：挪到左边

            $('.wozhen li').eq(now).animate({ 'left': -iW }, 300);
            //新的
            $('.wozhen li').eq(index).css('left', iW);

            $('.wozhen li').eq(index).animate({ 'left': 0 }, 300);
            now = index; //最新的一张变成index
        }
        if (index < now) {
            //从左边切入
            //旧 now：挪到左边
            $('.wozhen li').eq(now).animate({ 'left': iW }, 300);
            //新的
            $('.wozhen li').eq(index).css('left', -iW);
            $('.wozhen li').eq(index).animate({ 'left': 0 }, 300);
            now = index; //最新的一张变成index
        }

        light();
    }, function () {
        clearInterval(timer);
        timer = setInterval(next, 2000);
    });

    // 洋酒轮播图
    var iW2 = $('.wozhen2 li').eq(0).outerWidth(); //JS offsetwidth
    $('.wozhen2 li').css('left', iW2);
    $('.wozhen2 li').eq(0).css('left', 0);
    //2.开定时器：每次轮播一个图
    var timer2 = null;
    clearInterval(timer2);
    var nows = 0;

    timer2 = setInterval(next2, 2000); //每隔2秒钟切换一个图

    function next2() {
        //旧的挪走
        $('.wozhen2 li').eq(nows).animate({ 'left': -iW2 }, 1000);
        nows = ++nows >= $('.wozhen2 li').size() ? 0 : nows;
        //新的快速放在右侧，再挪进可视区
        $('.wozhen2 li').eq(nows).css('left', iW2);
        $('.wozhen2 li').eq(nows).animate({ 'left': 0 }, 1000);
        light2();
    }
    //3.焦点跟随
    function light2() {
        $('.fmama p span').removeClass('active2');
        $('.fmama p span').eq(nows).addClass('active2');
    }
    console.log($('.fmama p span'));
    function prev2() {
        //从左侧切入到可视区
        //旧的挪到右侧
        $('.wozhen2 li').eq(nows).animate({ 'left': iW2 }, 1000);
        //新的
        nows = --nows < 0 ? $('.wozhen2 li').size() - 1 : nows;
        $('.wozhen2 li').eq(nows).css('left', -iW2);
        $('.wozhen2 li').eq(nows).animate({ 'left': 0 }, 1000);
        light2();
    }

    //鼠标经过停止，鼠标离开继续运动
    $('.fmama').hover(function () {
        clearInterval(timer2);
    }, function () {
        clearInterval(timer2);
        timer2 = setInterval(next2, 2000);
    });
    //5.点击焦点可以跳转

    $('.fmama p').find('span').hover(function () {
        //旧 ：now
        //新：index() 新的
        clearInterval(timer2);
        var index = $(this).index();
        if (index > nows) {
            //从右边切入
            //旧 now：挪到左边
            $('.wozhen2 li').eq(nows).animate({ 'left': -iW2 }, 300);
            //新的
            $('.wozhen2 li').eq(index).css('left', iW2);
            $('.wozhen2 li').eq(index).animate({ 'left': 0 }, 300);
            nows = index; //最新的一张变成index
        }
        if (index < nows) {
            //从左边切入
            //旧 now：挪到左边
            $('.wozhen2 li').eq(nows).animate({ 'left': iW2 }, 300);
            //新的
            $('.wozhen2 li').eq(index).css('left', -iW2);
            $('.wozhen2 li').eq(index).animate({ 'left': 0 }, 300);
            nows = index; //最新的一张变成index
        }

        light2();
    }, function () {
        clearInterval(timer2);
        timer2 = setInterval(next2, 2000);
    });

    $.ajax({
        type: "get", //请求方式
        url: "api/winegoods2.php", //接口路径
        async: true, //异步
        success: function success(str) {
            //成功回调
            var arr = JSON.parse(str);
            var html = '';
            // console.log(arr);
            html += arr.map(function (item) {
                return '<li>          \n                            <a href="#"><img src="' + item.img + '"/></a>\n                            <div class="main_goodsbt">\n                                <a href="#">\n                                    <p>' + item.title + '</p>\n                                    <span>' + item.titles + '</span>\n                                </a>\n                                <p>\u62A2\u8D2D\u4EF7\uFF1A<span>\uFFE5' + item.price + '</span></p>\n                            </div>\n                            <div class="maint_goodstime"><p>\u51FA\u552E ' + item.good + '</p></div>\n                        </li>';
            }).join('');
            $('.winebottom_lt').html(html);
            $('.winebottom_lb').html(html);
        }

    });

    $('.winebottom_lt').on('mouseover', 'li', function () {

        $(this).css('box-shadow', '3px 3px 3px #dadada');
        $(this).css('border', '1px solid #ccc');
    });

    $('.winebottom_lt').on('mouseleave', 'li', function () {

        $(this).css('box-shadow', '');
        $(this).css('border', '');
    });

    $('.winebottom_lb').on('mouseover', 'li', function () {

        $(this).css('box-shadow', '3px 3px 3px #dadada');
        $(this).css('border', '1px solid #ccc');
    });

    $('.winebottom_lb').on('mouseleave', 'li', function () {

        $(this).css('box-shadow', '');
        $(this).css('border', '');
    });

    // 推拉门
    var oUl = document.querySelector('#famous2ul');
    var aLiUl = oUl.getElementsByTagName('li');
    var num = Math.ceil(1200 / aLiUl.length);
    bg();
    function bg() {
        for (var i = 1; i < aLiUl.length; i++) {
            aLiUl[i].style.left = 400 + (i - 1) * 100 + 'px';
        }
    }

    for (var i = 0; i < aLiUl.length; i++) {
        aLiUl[i].index = i;
        aLiUl[i].onmouseover = function () {

            for (var i = 0; i < aLiUl.length; i++) {
                if (i <= this.index) {
                    startMove(aLiUl[i], { left: i * 100 });
                    // oUl.onmouseleave=function(){
                    //     bg();
                    // }
                } else {
                    startMove(aLiUl[i], { left: 450 + (i - 1) * 100 });
                }
            }
        };
    }

    $('.famous2b ul li').hover(function () {
        $(this).children('img').animate({ left: -100 });
    }, function () {
        $(this).children('img').animate({ left: 0 });
    });

    var name = Cookie.get('name', { path: '/' });
    var password = Cookie.get('password', { path: '/' });
    console.log(name);
    if (name) {
        $('.nihao').html('您好' + name);
        $('.nihao1').html('新消息');
        $('.nihao2').html('退出');
    }

    $('.nihao2').click(function () {
        var now = new Date();
        now.setDate(now.getDate() - 1);
        Cookie.set('name', name, { 'expires': now, path: '/' });
        Cookie.set('password', name, { 'expires': now, path: '/' });
        location.href = '../index1.html';
    });
});