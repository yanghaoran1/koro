/* 
* @Author: Marte
* @Date:   2018-11-29 17:08:55
* @Last Modified by:   Marte
* @Last Modified time: 2018-11-30 11:17:11
*/

$(function(){
    var arr = [];

    // 更新数据库
    function initnum(id,num){
        $.ajax({
            type:'get',
            async:true,
            url:'../api/num.php',
            data:{
                'id':id,
                'num':num
            },
            success(data){
                console.log(data);
            }
        });
    }
    var isok=false;

    $('.order_content').on('click', 'label', function(){
        console.log($(this));
        updateNum();
        if($(this).attr('class') == 'mark'){
            $(this).removeClass('mark');
            updateNum();
            isok=false;
        }else{
            $(this).addClass('mark');
            isok=true;
        }
    });





   //加数量:事件委托方式
    $('.order_content').on('click', '.plus', function() {
        //点击获取对应行的数量，加1在赋值
        var val = $(this).prev().val();
        //获取ID
        var id=$(this).parent().parent().parent().attr('data-id');
        //接口2：更新数据库数量
        initnum(id,val);
        val++;
        $(this).prev().val(val);
        subTotal($(this)); //刷新小计
    });

    //减数量
     $('.order_content').on('click', '.reduce', function() {
        //点击获取对应行的数量，加1在赋值
        var val = $(this).next().val();
        //获取ID
        var id=$(this).parent().parent().parent().attr('data-id');
        //接口2：更新数据库数量
        $.ajax({
            type:'get',
            async:true,
            url:'../api/num.php',
            data:{
                'id':id,
                'num':val,
                'way':'jian'
            },
            success(data){
                console.log(data);
                // $('.order_content').html(data);
            }
        });
        val--;
        $(this).next().val(val);
        subTotal($(this)); //刷新小计
    });

     function subTotal(now) { //小计
        var num = now.parent().find('input').val(); //数量
        var price = now.parent().parent().prev().children('p').children('.ss1').text();
        price = $.trim(price); //工具方法：去除前后空格
        var all = (num * price).toFixed(2); //保留两个小数，小计：数量*单价
        now.parent().parent().next().children('p').html('￥&nbsp;' + all);
        updateNum();
    }



    // 删除当行
    $('.order_content').on('click', '.delBtn', function() {
        var mes = confirm('您确定要删除该行吗？');
        var num=$(this).parent().parent().parent().attr('data-id')
            //接口3：删除数据库的某行
            
        if(mes) {

            $(this).parent().parent().parent().remove();
            $.ajax({
                type:'get',
                async:true,
                url:'../api/del2.php',
                data:{
                    'id':num,
                },
                success(data){
                    console.log(data);
                    
                }
            });
        }

        update(); //最后一行是否显示判断
        updateNum();
    });

    // console.log($('.list_con'));
    function update() {
        if($('.sum_price').size() == 0) {
            //意味着没有商品数据了
            $('.cartBox').css('display', 'none');
        }
    }

    updateNum();
    function updateNum() {
        //空数组：存被勾选的行的下标
        arr.length = 0;
        var le = $('.one label').size(); //复选框的总个数
        for(var i = 0; i < le; i++) {
            if($('.one label').eq(i).attr('class') == 'mark') {
                //意味着这一行被勾选
                arr.push(i);
            }
        }

        var num = 0; //总数量
        var totalPrice = 0; //存总价
        for(var i = 0; i < arr.length; i++) {
            num += $('.sum').eq(arr[i]).val() * 1;
            var price = $('.sum_price').eq(arr[i]).text(); //￥ 199.98
            price = $.trim(price); //去掉前后空格
            price = (price.substring(1) * 1); //199.98
            // console.log($('.sum').eq(arr[i]).val());
            // console.log($('.sum').eq(arr[i]));
            totalPrice += price;
        }
        $('.piece_num').html(num);

        //      console.log(totalPrice.toFixed(2));
        $('.total_text').html(totalPrice);

    }

    // 全删
    $('.qbdel').on('click', function() {
        updateNum();
        $('.order_content').css('display','none');
        $.ajax({
                type:'get',
                async:true,
                url:'../api/del3.php',
                data:{
                    'id':1,
                },
                success(data){
                    console.log(data);
                    
                }
            });
        update();
    });

});