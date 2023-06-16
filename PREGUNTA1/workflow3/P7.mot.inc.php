<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
$sql_c="UPDATE inscripcion SET estado = 'inscrito' WHERE notramite like $notramite";
echo $sql_c;
mysqli_query($conn, $sql_c);
?>
