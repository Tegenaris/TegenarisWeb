<?php
include('APIResources/dbCheck.php');

#Define return object class
class Level1{
	public $level1Id;
	public $level1Name;
	public function __construct($level1IdValue,$level1NameValue){
		$this->level1Id= $level1IdValue;
		$this->level1Name= $level1NameValue;
	}
}

#Get values from SQL database
$pdo = connect_MySQL();
$pdo->exec("set names utf8");
$level1List = $pdo->query(
		'SELECT ID,Name
		FROM Level1'
		);
$pdo = null;

$level1s = array();
foreach($level1List as $level1){
	$level1Item = new Level1($level1['ID'], $level1['Name']);
	array_push($level1s,$level1Item);
}

echo json_encode($level1s);
?>
