<?php
    
    /*
        3:制作真实数据接口
        
             * 连接数据库：配置信息(主机名，用户名，密码，数据库名)  
             * 写查询语句
             * 把结果变成 [{},{},{}] 再变成字符串
             * echo 给前端
     
     */
    
    //接收参数 isset() 是否设置了，返回布尔值,经常和三目运算符一起用，设置默认值
    $page=isset($_GET['page']) ? $_GET['page'] : '1';
    $qty=isset($_GET['qty']) ? $_GET['qty'] : '30';
    
//  echo $page;//证明：前端传给后端的数据已经到了
    
    //连接数据库
    include 'connect.php';//相当于复制connect.php的文件内容过这里
    
    $index=($page-1)*30;//计算下标的公式
    
    //写查询语句 ：
    $sql="SELECT * FROM goods LIMIT $index,$qty";
    
    //执行语句：得到结果集
    $res=$conn->query($sql);
    
    //获取内容部分
    $data=$res->fetch_all(MYSQLI_ASSOC);//获取内容部分
    

    echo json_encode($data,JSON_UNESCAPED_UNICODE);
    
    $res->close();//关掉结果集
    $conn->close();//断开连接
    
?>