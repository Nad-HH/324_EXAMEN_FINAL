<div class="fecha">
	<div > <a class="boton2" href="salir.php">SALIR</a></div> 
</div> <br>
<div class="alineacion2">
        
        <div class="centro">
            <div class ="formulario"><br>
                <b>Presione "siguiente" para terminar la inscripcion</b> <br><br>
                <hr>
                <div class="fondosc"> <br>
                Datos del Estudiante<br><br>
                    
                    
                    <div class="alineacion">
                        <div style="width: 150;">
                        Carnet de Identidad
                        </div><?php echo ': '.$fila_sc["ci"] ?>
                    </div> <br>

                    <div class="alineacion">
                        <div style="width: 150;">
                        Fecha de Nacimiento
                        </div><?php echo ': '.$fila_sc["fecha_nac"] ?>
                    </div> <br>
                    
                    <div class="alineacion">
                        <div style="width: 150;">
                        Titulo académico
                        </div><?php echo ': '.$fila_sc["titulo_Academico"] ?>
                    </div> <br>
                    
                    <div class="alineacion">
                        <div style="width: 150;">
                        Nacionalidad
                        </div><?php echo ': '.$fila_sc["nacionalidad"] ?>
                    </div> <br>

                    <div class="alineacion">
                        <div style="width: 150;">
                        Departamento
                        </div><?php echo ': '.$fila_sc["departamento"] ?>
                    </div> <br>

                    <div class="alineacion">
                        <div style="width: 150;">
                        Correo
                        </div><?php echo ': '.$fila_sc["correo"] ?>
                    </div> <br>

                    <div class="alineacion">
                        <div style="width: 150;">
                        Celular
                        </div><?php echo ': '.$fila_sc["celular"] ?>
                    </div> <br>

                    <div class="alineacion">
                        <div style="width: 150;">
                        Dirección
                        </div><?php echo ': '.$fila_sc["direccion"] ?>
                    </div> <br>

                    <div class="alineacion">
                        <div style="width: 150;">
                        Grupo Sanguineo
                        </div><?php echo ': '.$fila_sc["grupo_sanguineo"] ?>
                    </div> <br>
                </div>
            </div>
        </div> <br>
    <div class="centro">
        <img src="https://seeklogo.com/images/S/simons-cat-logo-10C182DF2C-seeklogo.com.png"/> <br> <br>
            <div class="formulario">
                Nro de Trámite: <?php echo $notramite ?> <br>
                Proceso: <?php echo $proceso ?> <br>
            </div>
    </div>
</div>