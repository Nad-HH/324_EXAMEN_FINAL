<?php
$sql_c=" INSERT INTO `inscripcion`(`ci`, `fecha_nac`, `titulo_Academico`, `nacionalidad`, `departamento`, `correo`, `celular`, `direccion`, `grupo_sanguineo`,`notramite`,`estado`)  ";
$sql_c.="VALUES('".$_GET["ci"]."','".$_GET["fecha_naci"]."','".$_GET["titulo"]."','".$_GET["nacionalidad"]."','".$_GET["depto"]."','";
$sql_c.=$_GET["correo"]."','".$_GET["celular"]."','".$_GET["direccion"]."','".$_GET["sanguineo"]."','";
$sql_c.=$notramite."','postulante')";
echo '<br>';
echo $sql_c;
mysqli_query($conn, $sql_c);
?>
