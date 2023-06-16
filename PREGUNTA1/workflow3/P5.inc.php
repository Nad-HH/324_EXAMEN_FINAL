<div class="fecha">
			<div > <a class="boton2" href="salir.php">SALIR</a></div> 
</div> <br>
<div class="alineacion2">
        
        <div class="centro">
            <div class ="formulario"><br>
                <b>Corrige los datos</b> <br><br>
                <hr>
                <div class="fondosc"> <br>
                    Datos Generales<br><br>
                    <div class="alineacion">
                        <div style="width: 150;">
                               Carnet de identidad:
                        </div>:
                        <div style="height: 34;" class="borde">
                            <input style="height: 34;" type="text" name="ci" value="<?php echo $fila_c["ci"] ?>" required>
                        </div>
                    </div> <br>
                    
                    <div class="alineacion">
                        <div style="width: 150;">
                        Fecha de Nacimiento:
                        </div>:
                        <div style="height: 34;" class="borde">
                            <input style="height: 34;" type="date" name="fecha_nac" value="<?php echo $fila_c["fecha_nac"] ?>" required>
                        </div>
                    </div> <br>
                   
                    <div class="alineacion">
                        <div style="width: 150;">
                        Titulo académico:
                        </div>:
                        <div style="height: 34;" class="borde">
                            <input style="height: 34;" type="text" name="titulo" value="<?php echo $fila_c["titulo_Academico"] ?>" required>
                        </div>
                    </div> <br>
                    <div class="alineacion">
                        <div style="width: 150;">
                        Nacionalidad:
                        </div>:
                        <div style="height: 34;" class="borde">
                            <input style="height: 34;" type="text" name="nacionalidad" value="<?php echo $fila_c["nacionalidad"] ?>" required>
                        </div>
                    </div> <br>
                    <div class="alineacion">
                        <div style="width: 150;">
                        Departamento:
                        </div>:
                        <div style="height: 34;" class="borde">
                            <input style="height: 34;" type="text" name="depto" value="<?php echo $fila_c["departamento"] ?>" required>
                        </div>
                    </div> <br>

                    <div class="alineacion">
                        <div style="width: 150;">
                        Correo:
                        </div>:
                        <div style="height: 34;" class="borde">
                            <input style="height: 34;" type="text" name="correo" value="<?php echo $fila_c["correo"] ?>" required>
                        </div>
                    </div> <br>

                    <div class="alineacion">
                        <div style="width: 150;">
                        Celular:
                        </div>:
                        <div style="height: 34;" class="borde">
                            <input style="height: 34;" type="text" name="celular" value="<?php echo $fila_c["celular"] ?>" required>
                        </div>
                    </div> <br>

                    <div class="alineacion">
                        <div style="width: 150;">
                        Dirección:
                        </div>:
                        <div style="height: 34;" class="borde">
                            <input style="height: 34;" type="text" name="direccion" value="<?php echo $fila_c["direccion"] ?>" required>
                        </div>
                    </div> <br>

                    <div class="alineacion">
                        <div style="width: 150;">
                        Grupo Sanguineo:
                        </div>:
                        <div style="height: 34;" class="borde">
                            <input style="height: 34;" type="text" name="sanguineo" value="<?php echo $fila_c["grupo_sanguineo"] ?>" required>
                        </div>
                    </div> <br>
                   
                </div>
            </div>
        </div> <br>
    <div class="centro">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNXOA_ku3EICLEICmtv8XUtUqzF1vOVKwVWA&usqp=CAU"/> <br> <br>
            <div class="formulario">
            <br>Observación de Kardex: 
                    <?php
                    echo $observacion;
                    ?><br><hr>
                
            </div>
    </div>
</div>