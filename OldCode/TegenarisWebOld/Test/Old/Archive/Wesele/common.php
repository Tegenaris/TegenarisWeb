<?php $self=$_SERVER['PHP_SELF']; ?>
<?php
function checkDB()
{
	if(file_exists('../db.php'))
	{
		include('../db.php');
		echo("I'm home <br />");
	}
	else if(file_exists('../db_cba.php'))
	{
		include('../db_cba.php');
	}
	else
	{
		echo("Error!");
	}
}
checkDB();
?>
