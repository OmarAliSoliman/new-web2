<?php
    if(isset($_POST['data'])){
        $data = $_POST['data'];
        $data = json_decode($data,true);

        $q = new mysqli("localhost", "root", "rootroot","web");
        if($q->connect_error)
        {
            die($q->connect_error); 
        }

        $Type = $data['getEventType'];
        $Target = 'getEventTarget';
        $Time = $data['getEventTime'];        
        $sql = "INSERT INTO t1 (getEventTime, getEventType, getEventTarget) VALUES ('$Time', '$Type', '$Target');";
        $q->query($sql);
        if($q->affected_rows = 0){ 
            echo "there is an existing error in your insertion please try again";  
        } 
    }
    if(isset($_GET['data'])){
        $sql = "Select * from t1";
        $q = new mysqli("localhost", "root", "rootroot","web");
        if($q->connect_error){
            die($q->connect_error);
        }
        if ($result = $q->query($sql)){
            $rows = array();
            if($result->num_rows > 0){
                while($row = $result->fetch_assoc()){
                    array_push($rows, $row);
                }
                echo json_encode($rows);
            }
        }
        else{
            echo "No Data to Retrieve";
        }
    }


?>