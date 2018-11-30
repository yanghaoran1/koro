'use strict';

/* 
 * @Author: Marte
 * @Date:   2018-11-27 10:21:02
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-11-30 14:39:52
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

    // 导航
    $('.nav>ul li').hover(function () {
        $(this).css('background', '#58322c');
    }, function () {
        $(this).css('background', '#7E0001');
    });

    $('.nav h3 .Dig_nav li').hover(function () {

        $(this).children('.nav_box').css('display', 'block');
    }, function () {

        $(this).children('.nav_box').css('display', 'none');
    });

    $('.nav h3').hover(function () {
        $('.nav h3>span').css('backgroundPosition', '-160px -182px');
        $('.nav h3>.Dig_nav').css('display', 'block');
    }, function () {
        $('.nav h3>span').css('backgroundPosition', '-160px -172px');
        $('.nav h3>.Dig_nav').css('display', 'none');
    });

    $('#list .listl').find('h4').click(function () {
        if ($(this).children('span').css('backgroundPosition') == '0px -200px') {
            $(this).children('span').css('backgroundPosition', '0px -216px');
        } else {
            $(this).children('span').css('backgroundPosition', '0px -200px');
        }
        if ($(this).children('ul').css('display') == 'block') {
            $(this).children('ul').css('display', 'none');
        } else {
            $(this).children('ul').css('display', 'block');
        }
    });

    $('#gengduo span').click(function () {
        if ($(this).parent().css('height') == '32px') {
            $(this).parent().css('height', '50px');
        } else {
            $(this).parent().css('height', '32px');
        }
    });

    $('.goods_price ul li a').hover(function () {
        $('.goods_price ul li a').removeClass();
        $(this).addClass('reda');
    }, function () {
        $('.goods_price ul li a').removeClass();
        $('.goods_price ul li a').eq(0).addClass('reda');
    });

    $('.goods_price ul li a').click(function () {
        $('.goods_price ul li a').removeClass();
        $(this).addClass('reda');
    });

    function init(ar) {
        var res = ar.map(function (item) {
            var html = '<li class="' + item.id + '">\n                                <dt style="height: 236px;"><a href="javascript:;"><img src="../img/' + item.img + '" alt="" /></a></dt>\n                                \n                                <dd>\n                                    <a href="javascript:;">\n                                        <p>' + item.tital + '</p>\n                                        <span></span>\n                                        <span>' + item.activity + '</span>\n                                    </a>\n                                    \n                                    <b><i>\uFFE5</i>' + item.price + '</b>\n                                </dd>\n                                <p><a href="javascript:;">\u52A0\u5165\u8D2D\u7269\u8F66</a></p>\n                                <dd class="sum">\n                                    <span class="sum1">\n                                    <b>100%</b>\u597D\u8BC4\u5EA6</span>\n                                    <span class="sum2"><b>1</b>\u8BC4\u8BBA</span>\n                                    <span class="sum3"><b>' + item.sell + '</b>\u552E\u51FA</span>\n                                </dd>\n                            </li>';
            return html;
        });

        return res;
    }
    $.ajax({
        type: 'get',
        url: '../api/01goodlist.php',
        async: true,
        data: {
            'qty': 30
        },
        success: function success(data) {
            var arr = JSON.parse(data).datalist;

            var res = init(arr);
            $('#ulgoods').html(res);

            // 分页功能
            var num = Math.ceil(JSON.parse(data).total / 30);
            var con = '';
            for (var i = 0; i < num; i++) {
                con += '<span>' + (i + 1) + '</span>';
            }
            $('.goodspage p').html(con);
            $('.goodspage p span').eq(0).attr('class', 'actives');
            // console.log($('.goodspage p').eq(0));
        }
    });

    var mima = 2;

    $('#goodsprice').click(function () {
        // console.log(123);
        if (mima == 2) {
            mima = 1;
            $.ajax({
                type: 'get',
                url: '../api/click.php',
                async: true,
                data: {
                    mima: mima
                },
                success: function success(data) {
                    var arr = JSON.parse(data);
                    var res = init(arr);
                    $('#ulgoods').html(res);
                }
            });
        } else {
            mima = 2;
            $.ajax({
                type: 'get',
                url: '../api/click.php',
                async: true,
                data: {
                    mima: mima
                },
                success: function success(data) {
                    var arr = JSON.parse(data);
                    var res = init(arr);
                    $('#ulgoods').html(res);
                }
            });
        }
    });

    $('#goodssell').click(function () {
        $.ajax({
            type: 'get',
            url: '../api/click.php',
            async: true,
            data: {
                mima: 'sell'
            },
            success: function success(data) {
                var arr = JSON.parse(data);
                var res = init(arr);
                $('#ulgoods').html(res);
            }
        });
    });

    $('.ppage').on('click', 'span', function () {
        var num = $(this).text();
        $('span').attr('class', '');
        $(this).addClass('actives');
        $.ajax({
            type: 'get',
            url: '../api/goods3.php',
            async: true,
            data: {
                'page': num
            },
            success: function success(data) {
                var arr = JSON.parse(data);
                // console.log(data)
                var html = init(arr);
                $('#ulgoods').html(html);
            }
        });
    });

    // 下一页
    $('.next').click(function () {
        var num = $('.actives').index();
        num++;
        $('.actives').removeClass('actives');
        // span高亮，然后渲染下一页
        $('.ppage span').eq(num).addClass('actives');

        $.ajax({
            type: 'get',
            url: '../api/goods3.php',
            async: true,
            data: {
                'page': num + 1
            },
            success: function success(data) {
                var arr = JSON.parse(data);
                console.log(data);
                var html = init(arr);
                $('#ulgoods').html(html);
            }
        });
    });

    $('#ulgoods').on('click', 'li', function () {
        console.log($(this).attr('class'));
        location.href = '../html/goods.html?id=' + $(this).attr('class');
    });
});