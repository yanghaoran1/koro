'use strict';

/* 
* @Author: Marte
* @Date:   2018-11-21 11:09:26
* @Last Modified by:   Marte
* @Last Modified time: 2018-11-27 10:23:03
*/

$(function () {

    $('#top .top .topr li').hover(function () {
        $(this).children('a').css('color', '#C53F4C');
        $(this).css('color', '#C53F4C');
    }, function () {
        $(this).children('a').css('color', '#85726C');
        $(this).css('color', '#85726C');
    });

    $('#top .top .topl li').hover(function () {
        $(this).children('a').css('color', '#C53F4C');
    }, function () {
        $(this).children('a').css('color', '#85726C');
    });

    $('.topr .toprul').hover(function () {
        $('.topr .toprul ul').css('display', 'block');
        $('.topr .toprul .zhsanjiaoxing').css('display', 'block');
        $('.topr .toprul ul li').css('color', 'white');
    }, function () {
        $('.topr .toprul ul').css('display', 'none');
        $('.topr .toprul .zhsanjiaoxing').css('display', 'none');
    });

    $('.topr .toprul ul li').hover(function () {
        $(this).children('a').css('color', 'white');
    }, function () {
        $('.topr .toprul ul li a').css('color', '#5B473D');
    });

    $('.top .topr li:nth-child(4)').hover(function () {
        $(this).children('.phoneQR').css('display', 'block');
    }, function () {
        $(this).children('.phoneQR').css('display', 'none');
    });

    $('.head .hcart').hover(function () {
        $('.head .hcart').css('backgroundPosition', '0px -194px');
        $('.head .hcart_xx').css('display', 'block');
    }, function () {
        $('.head .hcart').css('backgroundPosition', '0px -160px');
        $('.head .hcart_xx').css('display', 'none');
    });

    // $('#btcat').hover(function(){        
    //     $('#btcat .xxf').css('display','block');
    // }, function(){
    //     $('#btcat .xxf').css('display','none');
    // });


    // 导航  nav
    $('.nav>ul li').hover(function () {
        $(this).css('background', '#bc0001');
    }, function () {
        $(this).css('background', '#D3161B');
    });

    $('.nav h3').hover(function () {
        $('.nav h3>span').css('backgroundPosition', '-160px -182px');
        $('.nav h3>.Dig_nav').css('display', 'block');
    }, function () {
        $('.nav h3>span').css('backgroundPosition', '-160px -172px');
        $('.nav h3>.Dig_nav').css('display', 'none');
    });

    // $('.nav h3 .Dig_nav li').hover(function(){
    //     $(this).css('height','80px');

    // }, function(){
    //     $(this).css('height','75px');

    // });

    $('.nav h3 .Dig_nav li').hover(function () {

        $(this).children('.nav_box').css('display', 'block');
    }, function () {

        $(this).children('.nav_box').css('display', 'none');
    });

    // 轮播图
    $(function () {

        /*
            步骤：一定要掌握的版本
                1.把所有的图片放在右侧，第一个图片放到可视区
                2.开定时器：每次轮播一个图
                3.焦点跟随
                4.点击上下按钮可以切图
                5.点击焦点可以跳转
        
         */

        //1.把所有的图片放在右侧，第一个图片放到可视区
        //获取图片宽度   
        $('#imglist li').css('opacity', 0);
        $('#imglist li').eq(0).css('opacity', 1);

        //2.开定时器：每次轮播一个图
        var timer = null;
        clearInterval(timer);
        var now = 0;

        timer = setInterval(next, 3000); //每隔2秒钟切换一个图

        function next() {
            //旧的挪走
            $('#imglist li').eq(now).css('display', 'none');
            $('#imglist li').eq(now).animate({ 'opacity': 0 }, 1000);
            now = ++now >= $('#imglist li').size() ? 0 : now;
            //新的快速放在右侧，再挪进可视区
            $('#imglist li').eq(now).css('display', 'block');
            $('#imglist li').eq(now).animate({ 'opacity': 1 }, 1000);
            light();
        }

        //3.焦点跟随
        function light() {
            $('#light span').removeClass('active');
            $('#light span').eq(now).addClass('active');
        }

        function prev() {
            //从左侧切入到可视区
            //旧的挪到右侧
            $('#imglist li').eq(now).css('display', 'none');
            $('#imglist li').eq(now).animate({ 'opacity': 0 }, 1000);
            //新的
            now = --now < 0 ? $('#imglist li').size() - 1 : now;
            // $('#imglist li').eq(now).css('left',-iW);
            $('#imglist li').eq(now).css('display', 'block');
            $('#imglist li').eq(now).animate({ 'opacity': 1 }, 1000);
            light();
        }

        //4.点击上下按钮可以切图:如果是渲染出来的数据，记得用事件委托来绑定

        //鼠标经过停止，鼠标离开继续运动
        $('#banner').hover(function () {
            clearInterval(timer);
        }, function () {
            clearInterval(timer);
            timer = setInterval(next, 3000);
        });

        //5.点击焦点可以跳转

        $('#light span').hover(function () {
            //旧 ：now
            //新：index() 新的
            clearInterval(timer);
            var index = $(this).index();
            //从右边切入
            //旧 now：挪到左边
            $('#imglist li').eq(now).css({ 'display': 'none' }, 1000);
            $('#imglist li').eq(index).css('opacity', 0);
            //新的
            $('#imglist li').eq(index).css('display', 'block');
            $('#imglist li').eq(index).animate({ 'opacity': 1 }, 500);
            now = index; //最新的一张变成index


            light();
        }, function () {
            clearInterval(timer);
            timer = setInterval(next, 3000);
        });
    });
});