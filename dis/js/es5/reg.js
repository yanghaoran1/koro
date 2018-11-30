'use strict';

$(function () {

    // 生成验证码背景颜色
    var authCode = getid('auth_code');
    authCode.onclick = function () {
        update();
    };
    update(); //一开始就是随机数
    //生成验证码背景颜色
    function update() {
        var num = randomNum();
        authCode.innerHTML = num;
        var color = randomColor(16);
        authCode.style.background = color;
    }

    var num = '';
    function randomNum() {
        num = '';
        var str = '0123456789zxcvbnmasdfghjklqwertyuiop'; //
        //2.生成随机四位数有字母的验证码

        for (var i = 0; i < 4; i++) {
            num += str.charAt(parseInt(Math.random() * str.length));
        }
        return num;
    }

    var isok1, isok2, isok3, isok4, isok5;
    var val1 = 0;
    //用户名验证
    $('#yourphone').blur(function () {
        val1 = $.trim($('#yourphone').val());
        var val2 = checkReg.tel(val1);
        if (val1) {
            if (val2) {
                $.ajax({
                    type: 'GET',
                    url: '../api/checkname.php',
                    data: 'val2',
                    async: true,
                    success: function success(str) {
                        if (str == 0) {
                            $('#cyourphone').html('');
                            isok1 = true;
                        }if (str == 1) {
                            $('#cyourphone').html('该手机号码已存在用户');
                        }
                    }
                });
            } else {
                $('#cyourphone').html('请输入正确的手机号码');
            }
        } else {
            $('#cyourphone').html('请输入手机号码');
        }
    });

    // 验证验证码
    $('#code').blur(function () {
        var valcode = $.trim($('#code').val());
        // console.log(valcode);
        var nums = $('#auth_code').html();
        console.log(valcode);
        if (valcode == nums) {
            $('#ccode').html('');
            isok2 = true;
        } else {
            $('#ccode').html('验证码有误!');
        }
    });

    // 验证密码
    $('#psw').blur(function () {
        valpsw = $.trim($('#psw').val());
        var valpsw2 = checkReg.psweasy(valpsw);
        if (valpsw) {
            if (valpsw2) {
                $('#cpsw').html('');
                isok3 = true;
            } else {
                $('#cpsw').html('密码请设为6-16位字母或数字');
            }
        } else {
            $('#cpsw').html('请输入密码');
        }
    });

    var valpsw = 0;
    // 验证再次输入的密码
    $('#pswt').blur(function () {
        var valpsw = $.trim($('#psw').val());
        var valpswt = $.trim($('#pswt').val());
        if (valpswt) {
            if (valpsw == valpswt) {
                $('#pswt').html('');
                isok4 = true;
            }
        } else {
            $('#pswt').html('与上次输入密码不匹配');
        }
    });

    $('#ckb').click(function () {
        if (isok5) {
            isok5 = false;
        } else {
            isok5 = true;
        }
    });
    // if($('#ckb').prop('checked')){
    //     isok5=true;
    // }


    $('#btn').click(function () {
        console.log(isok1, isok2, isok3, isok4, isok5);
        if (isok1 && isok2 && isok3 && isok4 && isok5) {
            $.ajax({
                type: 'post',
                url: '../api/reg.php',
                data: {
                    'name': val1,
                    'psw': valpsw
                },
                success: function success(data) {
                    if (data == 'yes') {
                        alert('注册成功');
                        window.href = 'login.html';
                    } else {
                        alert('注册失败');
                    }
                }
            });
        }
    });
});