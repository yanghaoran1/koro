"use strict";

/**
 * Created by Administrator on 2017/5/24.
 */

$(function () {

    // 渲染数据：jq的ajax
    function init(arrs) {

        var res = arrs.map(function (item) {
            var html = " <ul data-id=\"" + item.id + "\" class=\"order_lists one\">  \n\t\t\t\t\t\t\t\t<li class=\"list_chk\">\n                                <input type=\"checkbox\" id=\"checkbox_2\" class=\"son_check\">\n                                <label for=\"checkbox_2\" class=\"\" style=\"margin:50px 0 0 30px;\"></label>\n                            </li>\n                            <li class=\"list_con\">\n                                <div class=\"list_img\"><a href=\"javascript:;\"><img src=\"../img/" + item.img + "\" alt=\"\"></a></div>\n                                <div class=\"list_text\"><a href=\"javascript:;\">" + item.tital + "</a></div>\n                            </li>\n                            <li class=\"list_price\">\n                                <p class=\"price\"><span>\uFFE5</span ><span class=\"ss1\">" + item.price + "</span></p>\n                            </li>\n                            <li class=\"list_amount\">\n                                <div class=\"amount_box\">\n                                    <a href=\"javascript:;\" class=\"reduce reSty\">-</a>\n                                    <input type=\"text\" value=\"" + item.num + "\" class=\"sum\">\n                                    <a href=\"javascript:;\" class=\"plus\">+</a>\n                                </div>\n                            </li>\n                            <li class=\"list_sum\">\n                                <p class=\"sum_price\">\uFFE5" + item.num * item.price + "</p>\n                            </li>\n                            <li class=\"list_op\">\n                                <p class=\"del\"><a href=\"javascript:;\">\u52A0\u5165\u6536\u85CF\u5939</a><a href=\"javascript:;\" class=\"delBtn\">\u5220\u9664</a></p>\n                                </li></ul>";
            return html;
        });

        return res;
    }

    $.ajax({
        type: "get",
        url: "../api/cartinit.php",
        async: true,
        success: function success(str) {
            var arr = JSON.parse(str);
            //渲染到购物车：dom，字符串模板

            //计算总价
            // var arrs=arr.map(function(item){
            //     var tnum=item.price*item.num;
            // });
            // console.log(arrs);

            var res = init(arr);
            $('.order_content').html(res);
            $('label').addClass('mark');
            for (var i = 0; i < $('.one').length; i++) {
                console.log($('.one').eq(i).attr("data-id"));
            };

            updateNum();
            function updateNum() {
                //空数组：存被勾选的行的下标
                arr.length = 0;
                var le = $('.one label').size(); //复选框的总个数
                for (var i = 0; i < le; i++) {
                    if ($('.one label').eq(i).attr('class') == 'mark') {
                        //意味着这一行被勾选
                        arr.push(i);
                    }
                }

                var num = 0; //总数量
                var totalPrice = 0; //存总价
                for (var i = 0; i < arr.length; i++) {
                    num += $('.sum').eq(arr[i]).val() * 1;
                    var price = $('.sum_price').eq(arr[i]).text(); //￥ 199.98
                    price = $.trim(price); //去掉前后空格
                    price = price.substring(1) * 1; //199.98
                    // console.log($('.sum').eq(arr[i]).val());
                    // console.log($('.sum').eq(arr[i]));
                    totalPrice += price;
                }
                $('.piece_num').html(num);

                //      console.log(totalPrice.toFixed(2));
                $('.total_text').html(totalPrice);
            }
        }

    });

    //全局的checkbox选中和未选中的样式
    var $allCheckbox = $('input[type="checkbox"]'),
        //全局的全部checkbox
    $wholeChexbox = $('.whole_check'),
        $cartBox = $('.cartBox'),
        //每个商铺盒子
    $shopCheckbox = $('.shopChoice'),
        //每个商铺的checkbox
    $sonCheckBox = $('.son_check');
    //每个商铺下的商品的checkbox

    //	$('#cartMain').on('click','input[type="checkbox"]',function(){
    //		if($(this).is(':checked')) {
    //			$(this).next('label').addClass('mark');
    //		} else {
    //			$(this).next('label').removeClass('mark')
    //		}
    //	});

    // $('.order_content').on('click',$allCheckbox,function(){
    // 	if($(this).is(':checked')) {
    // 		$(this).next('label').addClass('mark');
    // 	} else {
    // 		$(this).next('label').removeClass('mark')
    // 	}
    // });
    // $allCheckbox.click(function() {
    //     if ($(this).is(':checked')) {
    //         $(this).next('label').addClass('mark');
    //     } else {
    //         $(this).next('label').removeClass('mark')
    //     }
    // });

    //===============================================全局全选与单个商品的关系================================
    $wholeChexbox.click(function () {
        var $checkboxs = $cartBox.find('input[type="checkbox"]');
        if ($(this).is(':checked')) {
            $checkboxs.prop("checked", true);
            $checkboxs.next('label').addClass('mark');
        } else {
            $checkboxs.prop("checked", false);
            $checkboxs.next('label').removeClass('mark');
        }
        totalMoney();
    });

    $sonCheckBox.each(function () {
        $(this).click(function () {
            if ($(this).is(':checked')) {
                //判断：所有单个商品是否勾选
                var len = $sonCheckBox.length;
                var num = 0;
                $sonCheckBox.each(function () {
                    if ($(this).is(':checked')) {
                        num++;
                    }
                });
                if (num == len) {
                    $wholeChexbox.prop("checked", true);
                    $wholeChexbox.next('label').addClass('mark');
                }
            } else {
                //单个商品取消勾选，全局全选取消勾选
                $wholeChexbox.prop("checked", false);
                $wholeChexbox.next('label').removeClass('mark');
            }
        });
    });

    //=======================================每个店铺checkbox与全选checkbox的关系/每个店铺与其下商品样式的变化===================================================

    //店铺有一个未选中，全局全选按钮取消对勾，若店铺全选中，则全局全选按钮打对勾。
    $shopCheckbox.each(function () {
        $(this).click(function () {
            if ($(this).is(':checked')) {
                //判断：店铺全选中，则全局全选按钮打对勾。
                var len = $shopCheckbox.length;
                var num = 0;
                $shopCheckbox.each(function () {
                    if ($(this).is(':checked')) {
                        num++;
                    }
                });
                if (num == len) {
                    $wholeChexbox.prop("checked", true);
                    $wholeChexbox.next('label').addClass('mark');
                }

                //店铺下的checkbox选中状态
                $(this).parents('.cartBox').find('.son_check').prop("checked", true);
                $(this).parents('.cartBox').find('.son_check').next('label').addClass('mark');
            } else {
                //否则，全局全选按钮取消对勾
                $wholeChexbox.prop("checked", false);
                $wholeChexbox.next('label').removeClass('mark');

                //店铺下的checkbox选中状态
                $(this).parents('.cartBox').find('.son_check').prop("checked", false);
                $(this).parents('.cartBox').find('.son_check').next('label').removeClass('mark');
            }
            totalMoney();
        });
    });

    //========================================每个店铺checkbox与其下商品的checkbox的关系======================================================

    //店铺$sonChecks有一个未选中，店铺全选按钮取消选中，若全都选中，则全选打对勾
    $cartBox.each(function () {
        var $this = $(this);
        var $sonChecks = $this.find('.son_check');
        $sonChecks.each(function () {
            $(this).click(function () {
                if ($(this).is(':checked')) {
                    //判断：如果所有的$sonChecks都选中则店铺全选打对勾！
                    var len = $sonChecks.length;
                    var num = 0;
                    $sonChecks.each(function () {
                        if ($(this).is(':checked')) {
                            num++;
                        }
                    });
                    if (num == len) {
                        $(this).parents('.cartBox').find('.shopChoice').prop("checked", true);
                        $(this).parents('.cartBox').find('.shopChoice').next('label').addClass('mark');
                    }
                } else {
                    //否则，店铺全选取消
                    $(this).parents('.cartBox').find('.shopChoice').prop("checked", false);
                    $(this).parents('.cartBox').find('.shopChoice').next('label').removeClass('mark');
                }
                totalMoney();
            });
        });
    });

    //=================================================商品数量==============================================
    var $plus = $('.plus'),
        $reduce = $('.reduce'),
        $all_sum = $('.sum');
    $plus.click(function () {
        var $inputVal = $(this).prev('input'),
            $count = parseInt($inputVal.val()) + 1,
            $obj = $(this).parents('.amount_box').find('.reduce'),
            $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
            $price = $(this).parents('.order_lists').find('.price').html(),
            //单价
        $priceTotal = $count * parseInt($price.substring(1));
        $inputVal.val($count);
        $priceTotalObj.html('￥' + $priceTotal);
        if ($inputVal.val() > 1 && $obj.hasClass('reSty')) {
            $obj.removeClass('reSty');
        }
        totalMoney();
    });

    $reduce.click(function () {
        var $inputVal = $(this).next('input'),
            $count = parseInt($inputVal.val()) - 1,
            $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
            $price = $(this).parents('.order_lists').find('.price').html(),
            //单价
        $priceTotal = $count * parseInt($price.substring(1));
        if ($inputVal.val() > 1) {
            $inputVal.val($count);
            $priceTotalObj.html('￥' + $priceTotal);
        }
        if ($inputVal.val() == 1 && !$(this).hasClass('reSty')) {
            $(this).addClass('reSty');
        }
        totalMoney();
    });

    $all_sum.keyup(function () {
        var $count = 0,
            $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
            $price = $(this).parents('.order_lists').find('.price').html(),
            //单价
        $priceTotal = 0;
        if ($(this).val() == '') {
            $(this).val('1');
        }
        $(this).val($(this).val().replace(/\D|^0/g, ''));
        $count = $(this).val();
        $priceTotal = $count * parseInt($price.substring(1));
        $(this).attr('value', $count);
        $priceTotalObj.html('￥' + $priceTotal);
        totalMoney();
    });

    //======================================移除商品========================================

    var $order_lists = null;
    var $order_content = '';
    $('.delBtn').click(function () {
        $order_lists = $(this).parents('.order_lists');
        $order_content = $order_lists.parents('.order_content');
        $('.model_bg').fadeIn(300);
        $('.my_model').fadeIn(300);
    });

    //关闭模态框
    $('.closeModel').click(function () {
        closeM();
    });
    $('.dialog-close').click(function () {
        closeM();
    });

    function closeM() {
        $('.model_bg').fadeOut(300);
        $('.my_model').fadeOut(300);
    }
    //确定按钮，移除商品
    $('.dialog-sure').click(function () {
        $order_lists.remove();
        if ($order_content.html().trim() == null || $order_content.html().trim().length == 0) {
            $order_content.parents('.cartBox').remove();
        }
        closeM();
        $sonCheckBox = $('.son_check');
        totalMoney();
    });

    //======================================总计==========================================

    function totalMoney() {
        var total_money = 0;
        var total_count = 0;
        var calBtn = $('.calBtn a');
        $sonCheckBox.each(function () {
            if ($(this).is(':checked')) {
                var goods = parseInt($(this).parents('.order_lists').find('.sum_price').html().substring(1));
                var num = parseInt($(this).parents('.order_lists').find('.sum').val());
                total_money += goods;
                total_count += num;
            }
        });
        $('.total_text').html('￥' + total_money);
        $('.piece_num').html(total_count);

        // console.log(total_money,total_count);

        if (total_money != 0 && total_count != 0) {
            if (!calBtn.hasClass('btn_sty')) {
                calBtn.addClass('btn_sty');
            }
        } else {
            if (calBtn.hasClass('btn_sty')) {
                calBtn.removeClass('btn_sty');
            }
        }
    }
});