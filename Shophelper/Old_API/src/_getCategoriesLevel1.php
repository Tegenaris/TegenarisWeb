<?php
include('rsc/dbCheck.php');

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
		'SELECT idLevel1,nameLevel1
		FROM Level1'
		);
$pdo = null;

$level1s = array();
foreach($level1List as $level1){
	$level1Item = new Level1($level1['idLevel1'], $level1['nameLevel1']);
	array_push($level1s,$level1Item);
}
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

class Hero{
	public $id;
	public $name;
	public function __construct($id, $name){
		$this->id = $id;
		$this->name  = $name;
		$this->unknownProperty  = 5;
	}
}
$hero = array();
array_push($hero, new Hero(1, "Zax"));
array_push($hero, new Hero(2, "Trax"));
//echo json_encode($level1s);
echo json_encode($hero);
?>
