<?php
    include 'connect.php';
    //接收数据
    $id = isset($_GET['id']) ? $_GET['id'] : 1;
    $way = isset($_GET['way']) ? $_GET['way'] : 'jia';
    $num = isset($_GET['num']) ? $_GET['num'] : 1;
    // echo $num;
    if($way=='jia'){
        $num++;
        $sql="update cart set num=$num WHERE id=$id";//写查询语句
    }
    if($way=='jian'){
        if($num <=1 ){
            $num =1;
        }else{
            $num--;
        }
        $sql="update cart set num=$num WHERE id=$id";//写查询语句
    }

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