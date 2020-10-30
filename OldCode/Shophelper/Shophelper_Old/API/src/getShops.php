<?php
include('APIResources/dbCheck.php');

#Define return object class
class Shop{
	public $shopId;
	public $shopName;
	public $shopIcon;
	public function __construct($shopIdValue,$shopNameValue, $shopIconValue){
		$this->shopId= $shopIdValue;
		$this->shopName= $shopNameValue;
		$this->shopIcon= $shopIconValue;
	}
}

#Get values from SQL database
$pdo = connect_MySQL();
$pdo->exec("set names utf8");
$shopList = $pdo->query(
	'SELECT *
	FROM Shops'
);
$pdo = null;

$shops = array();
foreach($shopList as $shop){
	$shopItem = new Shop($shop['ID'], $shop['Name'], $shop['Icon']);
	array_push($shops,$shopItem);
}

echo json_encode($shops);
?>
