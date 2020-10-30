<?php
	#Connect to localhost MySQL
	$ignoreServer = true;
	if ($ignoreServer){
		define('host', 'localhost'); //usually localhost  
		define('username', 'Jez'); //your username assigned to your database  
		define('password', 'Sicarius147'); //your password assigned to your user & database
		define('sb_database', 'ShopHelper'); //your database name
	}
	else{
		define('host', 'mysql.cba.pl'); //usually localhost  
		define('username', 'jezmarcin'); //your username assigned to your database  
		define('password', 'ZYwavx3dh48tUI'); //your password assigned to your user & database
		define('sb_database', 'jezmarcin_cba_pl'); //your database name
	}
	function connect_MySQL(){
		try{
			$pdo = new PDO('mysql:host='.host.';dbname='.sb_database.';encoding=utf8',username,password);
			return $pdo;
		}
		catch(PDOException $e){
			echo('Brak połączenia z serwerem');
			return false;
		}
	}
?>

