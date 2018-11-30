<?php
    
    //连接数据库
    
    include 'connect.php';
    
    //接收参数
    $id=isset($_GET['id']) ? $_GET['id'] : '';
    $sql="select * from goods where id='$id' ";

    $res=$conn->query($sql);//结果集
    
    $data=$res->fetch_all(MYSQLI_ASSOC);

    echo json_encode($data,JSON_UNESCAPED_UNICODE);
    //关闭结果集和数据库
    $res->close();
    $conn->close();
    
?>