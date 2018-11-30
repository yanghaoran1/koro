/* 
* @Author: Marte
* @Date:   2018-11-28 15:33:02
* @Last Modified by:   Marte
* @Last Modified time: 2018-11-30 15:25:45
*/

$(function(){
    var res=(location.search).slice(4);

    $.ajax({
        type:'get',
        url:'../api/checkid.php',
        async:true,
        data:{
            'id':res,
        },
        success(data){
            data = JSON.parse(data)[0];
            console.log(data);
            var html = `<div class="haonan">
                            <h3>${data.tital}</h3>
                            <p>注：新、老包装随机发货</p>
                            <dl>
                                <dd>商品评分：<span></span></dd>
                                <span>评论数：<em style="color: #09c;">164</em></span>
                                <span style="margin-left:10px;">近期售出数：</span><em>${data.sell}</em>
                            </dl>
                        </div>
    
                        <div class="haonan1">
                            <h2><span>也买价：<em style="color: #c00;">￥</em></span>${data.price}</h2>
                        </div>`;
        $('.main_headr .laoshi').html(html); 

        var html2=` <li>
                        <div class="small-img">
                            <img src="../img/${data.img}" />
                        </div>
                    </li>
                    <li>
                        <div class="small-img">
                            <img src="../img/8570610_380x620.png" />
                        </div>
                    </li>
                    <li>
                        <div class="small-img">
                            <img src="../img/9593061_380x620.jpg" />
                        </div>
                    </li>`;
        $('.magnifier-line .animation03').html(html2);






var magnifierConfig = {
        magnifier : "#magnifier1",//最外层的大容器
        width : 378,//承载容器宽
        height : 438,//承载容器高
        moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
        zoom : 5//缩放比例
    };

    var _magnifier = magnifier(magnifierConfig);



        }
    });
    


    $('.goodsadd').click(function() {
        $('.feifei').css('id','feifei2');
       
        $.ajax({
            type:'get',
            async:true,
            url:'../api/api.php',
            data:{
                method: 'cart',
                id:res,
                num:1
            },
            success(data){
                $('.cattab2 .cartnum').html(data);
            }
        });


    });


    $('.cattab2').click(function() {
        location.href='../html/car.html';
    });
    
});