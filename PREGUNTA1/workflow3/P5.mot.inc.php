<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
$sql_c="UPDATE inscripcion SET ci='".$_GET["ci"]."', fecha_nac='".$_GET["fecha_nac"]."', titulo_Academico='".$_GET["titulo"]."', ";
$sql_c.="nacionalidad='".$_GET["nacionalidad"]."', departamento='".$_GET["depto"]."', correo= '".$_GET["correo"]."', celular= '".$_GET["celular"]."', ";
$sql_c.="direccion='".$_GET["direccion"]."', grupo_sanguineo='".$_GET["sanguineo"]."' ";
$sql_c.="WHERE notramite like '$notramite'";
echo '<br>';
echo $sql_c;
mysqli_query($conn, $sql_c);

?>


