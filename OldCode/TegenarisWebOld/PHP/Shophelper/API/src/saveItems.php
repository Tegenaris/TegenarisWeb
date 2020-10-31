<?php
include('rsc/dbCheck.php');

//Understand JSON object
$shoppingItem = json_decode(file_get_contents('php://input'), true);

$name = $shoppingItem['Name'];
$amount =  $shoppingItem['Amount'];
$containerId =  $shoppingItem['ContainerId'];
$price =  $shoppingItem['Price'];

//Send values to MySQL
$pdo = connect_MySQL();
$itemQuery = "INSERT
			INTO Item (Name, Amount, ContainerID, Price)
			VALUES (:name, :amount, :containerId, :price)";

$sent = $pdo->prepare ( $itemQuery);
$sent->execute ( array (
		':name' => $shoppingItem['Name'],
		':amount' =>  $shoppingItem['Amount'],
		':containerId' =>  $shoppingItem['ContainerId'],
		':price' =>  $shoppingItem['Price']
) );
$pdo = null;
?>