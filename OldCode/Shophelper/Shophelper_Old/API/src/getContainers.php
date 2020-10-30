<?php
include('APIResources/dbCheck.php');

#Define return object class
class Container{
	public $containerId;
	public $containerName;
	public $containerNamePlural;
	public function __construct($containerIdValue,$containerNameValue,$containerNamePluralValue){
		$this->containerId= $containerIdValue;
		$this->containerName= $containerNameValue;
		$this->containerNamePlural= $containerNamePluralValue;
	}
}

#Get values from SQL database
$pdo = connect_MySQL();
$pdo->exec("set names utf8");
$containerList = $pdo->query(
		'SELECT *
		FROM Containers'
		);
$pdo = null;

$containers = array();
foreach($containerList as $container){
	$containerItem = new container($container['idContainers'], $container['ContainerName'], $container['ContainerNamePlural']);
	array_push($containers,$containerItem);
}

echo json_encode($containers);
?>
