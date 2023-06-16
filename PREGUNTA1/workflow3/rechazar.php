<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
$sql_r="UPDATE inscripcion SET estado = 'rechazado' WHERE notramite like $notramite";
echo $sql_r;
mysqli_query($conn, $sql_r);
?>