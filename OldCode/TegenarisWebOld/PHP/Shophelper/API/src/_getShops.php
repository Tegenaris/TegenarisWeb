<?php
include('rsc/dbCheck.php');

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
	'SELECT * FROM ShopHelper.Shops'
);
$pdo = null;

$shops = array();
foreach($shopList as $shop){
	$shopItem = new Shop($shop['ShopID'], $shop['ShopName'], $shop['Icon']);
	array_push($shops,$shopItem);
}
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
echo json_encode($shops);
?>
