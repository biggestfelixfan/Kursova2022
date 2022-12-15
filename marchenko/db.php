<?php
if (isset($_POST['name']) && isset($_POST['phone']) && isset($_POST['date_one']) && isset($_POST['date_two'])&& isset($_POST['room'])){
    $name = $_POST['name'];
    $phone = $_POST['phone'];
	$date_one = $_POST['date_one'];
	$date_two = $_POST['date_two'];
	$room = $_POST['room'];
    
   
    $db_host = "localhost"; 
    $db_user = "root"; 
    $db_password = ""; 
    $db_base = 'hotel'; 
    $db_table = "rooms";
    
    try {
     
        $db = new PDO("mysql:host=$db_host;dbname=$db_base", $db_user, $db_password);
        $db->exec("set names utf8");
        $data = array( 'name' => $name, 'phone' => $phone, 'date_one' => $date_one, 'date_two' => $date_two, 'room' => $room ); 
        $query = $db->prepare("INSERT INTO $db_table (name, phone, date_one, date_two, room) values (:name, :phone, :date_one, :date_two, :room)");
		$query->execute($data);
        $result = true;

    } catch (PDOException $e) {

        print "Помилка!: " . $e->getMessage() . "<br/>";
    }
    
    if ($result) {
    	header("Location: index.html");
    }
}
?>