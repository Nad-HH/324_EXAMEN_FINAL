<?php
	include "conexion.inc.php";
	session_start();
	$flujo=$_GET["flujo"];
	$proceso_a=$_GET["proceso"];
	$formulario=$_GET["formulario"];
	$notramite=$_GET["notramite"];
	if(isset($_GET["si"])){
        $si=$_GET["si"];
    }
    if(isset($_GET["no"])){
        $no=$_GET["no"];
    }


	echo $notramite;
	echo $proceso_a;
	echo $formulario;
	include "date.inc.php";
	$usuario="";
	if($_SESSION["rol"]=="Estudiante"){
		$usuario=$_SESSION["ci"];
	}else{
		$usuario=$_SESSION["rol"];
	}
	
	# ACTUALIZAMOS LA FECHA FIN 
	$sql="UPDATE seguimiento SET fechafin = '".$Date."' WHERE proceso like '".$proceso_a."' and usuario like '".$usuario."'" ;
	echo '<br>';
	echo $sql;
	mysqli_query($conn, $sql);
	
	$sql_2="select s.*, f.procesosiguiente from seguimiento s, flujoproceso f where s.usuario like '".$usuario."' ";
	$sql_2.="and s.proceso like '".$proceso_a."' and s.proceso like f.proceso and s.flujo='".$flujo."' and notramite like '$notramite'";
	echo '<br>';
	echo $sql_2;
	$resultado_2=mysqli_query($conn, $sql_2);
	$fila_2=mysqli_fetch_array($resultado_2);
	$procesosiguiente=$fila_2["procesosiguiente"];
	$fechainicio=$fila_2["fechafin"];
	$notramite=$fila_2["notramite"];

	echo '<br> proceso SIGUIENTE:';
	echo $procesosiguiente;
	echo '<br>';
	echo $fechainicio;
	echo '<br>';
	echo $notramite;
	echo '<br>';
	if (!isset($procesosiguiente)) {
		echo ' no esta instanciado';
		if(isset($si)||isset($no)){
			if(isset($si)){
				$procesosiguiente=$_GET["psi"];
				echo ' existe si';
			}
			if(isset($no)){
				$procesosiguiente=$_GET["pno"];
				echo ' existe no';
			}

			
		}else{
			if ($procesosiguiente==NULL) {
				echo ' no hay proceso siguiente';
				echo  $formulario.".mot.inc.php";
				include $formulario.".mot.inc.php";
				header("Location: bandeja.php");
			}
			echo $procesosiguiente;
		}
	}
	echo '<br> ANTES';
	echo  $formulario.".mot.inc.php";
	include $formulario.".mot.inc.php";
	echo '<br> DESPUES';
	echo  $formulario.".mot.inc.php";
	echo '<br> DESPUES2';
	echo  $formulario.".mot.inc.php";
	echo '<br> DESPUES3';
	if (!$procesosiguiente==NULL) {
		echo ' no hay proceso siguiente 2';
		$sql="select * from flujoproceso where proceso='".$procesosiguiente."'";
		$resultado=mysqli_query($conn, $sql);
		$fila_f=mysqli_fetch_array($resultado);
		$flujo=$fila_f["flujo"];
		$rol=$fila_f["rol"];
		echo '<br>';
		echo $sql;
		echo '<br>';
		echo $flujo;
		echo '<br>';
		echo $rol;
		echo $rol;
		$usuario='';
		if($rol=='Estudiante'){
			echo 'gggggggggggggg';
			$sql="select s.* from seguimiento s, flujoproceso f where f.tipo='I' and s.notramite like '$notramite' and f.proceso like s.proceso";
			$resultado=mysqli_query($conn, $sql);
			$fila_f=mysqli_fetch_array($resultado);
			$usuario=$fila_f["usuario"];
			#usuario=$_SESSION["nombre"];
			echo $usuario;
		}else{
			echo 'no we';
			$usuario=$rol;
			echo $usuario;
		}
		$sql="insert into seguimiento (notramite,usuario,flujo,proceso,fechainicio) values('".$notramite."','".$usuario."','".$flujo."','".$procesosiguiente."','".$fechainicio."')";
		echo '<br>';
		echo $sql;
		mysqli_query($conn, $sql);
		header("Location: desflujo.php?flujo=".$flujo."&proceso=".$procesosiguiente."&notramite=$notramite");
	}else{
		if($formulario!='P7'){
			include("rechazar.php");
		}
			header("Location: bandeja.php");
	}

	#header("Location: desflujo.php?flujo=".$flujo."&proceso=".$procesosiguiente);
?>