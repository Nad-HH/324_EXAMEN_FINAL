<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
$sql_sc="select * from inscripcion where notramite='$notramite'";
$resultado_sc=mysqli_query($conn, $sql_sc);
$fila_sc=mysqli_fetch_array($resultado_sc);
?>