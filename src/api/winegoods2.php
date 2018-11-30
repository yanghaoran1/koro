<?php
/**
 * @Author: Marte
 * @Date:   2018-11-23 19:08:43
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-11-24 09:42:54
 */
include 'connect.php';
$sql="SELECT * FROM winegoods2";
$res=$conn->query($sql);
    
    //获取内容部分
$data=$res->fetch_all(MYSQLI_ASSOC);

echo json_encode($data,JSON_UNESCAPED_UNICODE);
$conn->close();