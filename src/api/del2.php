<?php
    include 'connect.php';
    //接收数据
    $id = isset($_GET['id']) ? $_GET['id'] : 1;
    
    // echo $num;
    
    $sql="DELETE FROM cart WHERE id=$id ";//写查询语句
    

    $res=$conn->query($sql);//执行语句：得到结果集
    
    //用于检测是否修改成功
    if($res){
        //插入成功返回yes否则返回no
        echo 'yes';
    }else{
        echo 'no';
    }
    
    //关闭数据库
    $conn->close();
?>