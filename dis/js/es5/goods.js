'use strict';

/* 
* @Author: Marte
* @Date:   2018-11-28 15:33:02
* @Last Modified by:   Marte
* @Last Modified time: 2018-11-30 15:25:45
*/

$(function () {
    var res = location.search.slice(4);

    $.ajax({
        type: 'get',
        url: '../api/checkid.php',
        async: true,
        data: {
            'id': res
        },
        success: function success(data) {
            data = JSON.parse(data)[0];
            console.log(data);
            var html = '<div class="haonan">\n                            <h3>' + data.tital + '</h3>\n                            <p>\u6CE8\uFF1A\u65B0\u3001\u8001\u5305\u88C5\u968F\u673A\u53D1\u8D27</p>\n                            <dl>\n                                <dd>\u5546\u54C1\u8BC4\u5206\uFF1A<span></span></dd>\n                                <span>\u8BC4\u8BBA\u6570\uFF1A<em style="color: #09c;">164</em></span>\n                                <span style="margin-left:10px;">\u8FD1\u671F\u552E\u51FA\u6570\uFF1A</span><em>' + data.sell + '</em>\n                            </dl>\n                        </div>\n    \n                        <div class="haonan1">\n                            <h2><span>\u4E5F\u4E70\u4EF7\uFF1A<em style="color: #c00;">\uFFE5</em></span>' + data.price + '</h2>\n                        </div>';
            $('.main_headr .laoshi').html(html);

            var html2 = ' <li>\n                        <div class="small-img">\n                            <img src="../img/' + data.img + '" />\n                        </div>\n                    </li>\n                    <li>\n                        <div class="small-img">\n                            <img src="../img/8570610_380x620.png" />\n                        </div>\n                    </li>\n                    <li>\n                        <div class="small-img">\n                            <img src="../img/9593061_380x620.jpg" />\n                        </div>\n                    </li>';
            $('.magnifier-line .animation03').html(html2);

            var magnifierConfig = {
                magnifier: "#magnifier1", //最外层的大容器
                width: 378, //承载容器宽
                height: 438, //承载容器高
                moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
                zoom: 5 //缩放比例
            };

            var _magnifier = magnifier(magnifierConfig);
        }
    });

    $('.goodsadd').click(function () {
        $('.feifei').css('id', 'feifei2');

        $.ajax({
            type: 'get',
            async: true,
            url: '../api/api.php',
            data: {
                method: 'cart',
                id: res,
                num: 1
            },
            success: function success(data) {
                $('.cattab2 .cartnum').html(data);
            }
        });
    });

    $('.cattab2').click(function () {
        location.href = '../html/car.html';
    });
});