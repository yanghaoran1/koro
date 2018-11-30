'use strict';

/* 
* @Author: Marte
* @Date:   2018-11-26 20:16:53
* @Last Modified by:   Marte
* @Last Modified time: 2018-11-29 11:46:23
*/

$(function () {

    var val1 = 0;
    var val2 = 0;
    var isok5;
    $('#zidong').click(function () {
        if (isok5) {
            isok5 = false;
        } else {
            isok5 = true;
        }
        console.log(isok5);
    });
    $('#btn').click(function () {
        val1 = $.trim($('#uname').val());
        val2 = $.trim($('#psw').val());
        if (val1) {
            if (val2) {
                // 七天免登陆
                if (isok5) {
                    var now = new Date();
                    now.setDate(now.getDate() + 7);
                    Cookie.set('name', val1, { 'expires': now, path: '/' });
                    Cookie.set('password', val2, { 'expires': now, path: '/' });

                    //然后把账号密码放到输入框
                    var name = Cookie.get('name');
                    var pwdval = Cookie.get('password');
                    // $.trim($('#uname').val(name));
                    // $.trim($('#psw').val(pwdval)); 
                } else {
                    Cookie.set('name', val1, { path: '/' });
                    Cookie.set('password', val2, { path: '/' });
                }
                console.log(11);
                $.ajax({
                    type: 'post',
                    url: '../api/login.php',
                    async: true,
                    data: {
                        'name': val1,
                        'psw': val2
                    },
                    success: function success(data) {
                        if (data == 'yes') {
                            console.log(data);
                            location.href = '../index1.html';
                        }
                    }
                });
            } else {
                $('#tex1').html('密码不能为空');
            }
        } else {
            $('#tex1').html('账号不能为空');
        }
    });
});