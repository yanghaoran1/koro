<?php
    

    include 'connect.php';

    $id=$_GET['id'];

    //写查询语句
    $sql="delete from goodlist WHERE id='id' ";
    
    //执行语句：得到一个结果集
    $res=$conn->query($sql);
    
//  var_dump($res);//检测已经可以查询到数据

    $row=$res->fetch_all(MYSQLI_ASSOC);//只要内容部分
    
//  var_dump($row);//得到数组

    echo json_encode($row,JSON_UNESCAPED_UNICODE);



?>