// primer ejercicio con three.js
// crear una geometria teniendo en cuenta el orden de los vértices
var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;


function init() {
	var canvasWidth = window.innerWidth * 0.9;
	var canvasHeight = window.innerHeight * 0.9;

	// CAMERA

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 80000 );
	camera.position.set(-1,1,3);
	camera.lookAt(0,0,0);

	// LIGHTS

	light = new THREE.DirectionalLight( 0xFFFFFF, 0.7 );
	light.position.set( 1, 1, 1 );
	light.target.position.set(0, 0, 0);
	light.target.updateMatrixWorld()

	var ambientLight = new THREE.AmbientLight( 0x111111 );

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0xAAAAAA, 1.0 );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	// CONTROLS
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);

	// OBJECT
	
    //0,1,2 0,2,5 3,5,4 3,0,5 0,3,6 0,6,1 3,4,6 6,4,7 1,6,7 1,7,2 5,2,7 5,7,4

	//				base								x	y	z
        var migeometria = new THREE.Geometry();
	migeometria.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.0 ) );
	migeometria.vertices.push( new THREE.Vector3( 1.3, 0.0, 0.0 ) );
	migeometria.vertices.push( new THREE.Vector3( 1.3, 0.05, 0.0 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.0, 0.0, -1.8 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.0, 0.05, -1.8 ) );
	migeometria.vertices.push( new THREE.Vector3( 0.0, 0.05, 0.0 ) );
	migeometria.vertices.push( new THREE.Vector3( 1.3, 0.0, -1.8 ) );
	migeometria.vertices.push( new THREE.Vector3( 1.3, 0.05, -1.8 ) );


	migeometria.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometria.faces.push( new THREE.Face3( 0, 2, 5 ) );
	migeometria.faces.push( new THREE.Face3( 3, 5, 4 ) );
	migeometria.faces.push( new THREE.Face3( 3, 0, 5 ) );
	migeometria.faces.push( new THREE.Face3( 0, 3, 6 ) );
	migeometria.faces.push( new THREE.Face3( 0, 6, 1 ) );
	migeometria.faces.push( new THREE.Face3( 3, 4, 6 ) );
	migeometria.faces.push( new THREE.Face3( 6, 4, 7 ) );
	migeometria.faces.push( new THREE.Face3( 1, 6, 7 ) );
	migeometria.faces.push( new THREE.Face3( 1, 7, 2 ) );
	migeometria.faces.push( new THREE.Face3( 5, 2, 7 ) );
	migeometria.faces.push( new THREE.Face3( 5, 7, 4 ) );
	
	
	


    
    var material = new THREE.MeshBasicMaterial( { color: 0x0E0F0E} ); // Material color
    var miobjeto = new THREE.Mesh (migeometria, material); // Crea el objeto
	
	//modifico    pantalla

	var migeometria2 = new THREE.Geometry();
	migeometria2.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.02, 0.0, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.02, 1.3, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.0, 0.0, -1.8 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.0, 1.3, -1.8 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.0, 1.3, 0.0 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.02, 0.0, -1.8 ) );
	migeometria2.vertices.push( new THREE.Vector3( 0.02, 1.3, -1.8 ) );

	migeometria2.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometria2.faces.push( new THREE.Face3( 0, 2, 5 ) );
	migeometria2.faces.push( new THREE.Face3( 3, 5, 4 ) );
	migeometria2.faces.push( new THREE.Face3( 3, 0, 5 ) );
	migeometria2.faces.push( new THREE.Face3( 0, 3, 6 ) );
	migeometria2.faces.push( new THREE.Face3( 0, 6, 1 ) );
	migeometria2.faces.push( new THREE.Face3( 3, 4, 6 ) );
	migeometria2.faces.push( new THREE.Face3( 6, 4, 7 ) );
	migeometria2.faces.push( new THREE.Face3( 1, 6, 7 ) );
	migeometria2.faces.push( new THREE.Face3( 1, 7, 2 ) );
	migeometria2.faces.push( new THREE.Face3( 5, 2, 7 ) );
	migeometria2.faces.push( new THREE.Face3( 5, 7, 4 ) );

	var material2 = new THREE.MeshBasicMaterial( { color: 0x0E0F0E } ); // Material de color 
    var miobjeto2 = new THREE.Mesh (migeometria2, material2); // Crea el objeto

	// pantalla 2
	var migeometria3 = new THREE.Geometry();
	migeometria3.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.0 ) );
	migeometria3.vertices.push( new THREE.Vector3( 0.02, 0.0, 0.0 ) );
	migeometria3.vertices.push( new THREE.Vector3( 0.02, 1.15, 0.0 ) );
	migeometria3.vertices.push( new THREE.Vector3( 0.0, 0.0, -1.7 ) );
	migeometria3.vertices.push( new THREE.Vector3( 0.0, 1.15, -1.7 ) );
	migeometria3.vertices.push( new THREE.Vector3( 0.0, 1.15, 0.0 ) );
	migeometria3.vertices.push( new THREE.Vector3( 0.02, 0.0, -1.7 ) );
	migeometria3.vertices.push( new THREE.Vector3( 0.02, 1.15, -1.7 ) );

	migeometria3.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometria3.faces.push( new THREE.Face3( 0, 2, 5 ) );
	migeometria3.faces.push( new THREE.Face3( 3, 5, 4 ) );
	migeometria3.faces.push( new THREE.Face3( 3, 0, 5 ) );
	migeometria3.faces.push( new THREE.Face3( 0, 3, 6 ) );
	migeometria3.faces.push( new THREE.Face3( 0, 6, 1 ) );
	migeometria3.faces.push( new THREE.Face3( 3, 4, 6 ) );
	migeometria3.faces.push( new THREE.Face3( 6, 4, 7 ) );
	migeometria3.faces.push( new THREE.Face3( 1, 6, 7 ) );
	migeometria3.faces.push( new THREE.Face3( 1, 7, 2 ) );
	migeometria3.faces.push( new THREE.Face3( 5, 2, 7 ) );
	migeometria3.faces.push( new THREE.Face3( 5, 7, 4 ) );

	var material3 = new THREE.MeshBasicMaterial( { color: 0x585A58 } ); // Material de color rojo
    var miobjeto3 = new THREE.Mesh (migeometria3, material3); // Crea el objeto


	// teclado arriba primera linea

	var migeometria4 = new THREE.Geometry();
	migeometria4.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.0 ) );
	migeometria4.vertices.push( new THREE.Vector3( 0.06, 0.0, 0.0 ) );
	migeometria4.vertices.push( new THREE.Vector3( 0.06, 0.05, 0.0 ) );
	migeometria4.vertices.push( new THREE.Vector3( 0.0, 0.0, -0.1 ) );
	migeometria4.vertices.push( new THREE.Vector3( 0.0, 0.05, -0.1 ) );
	migeometria4.vertices.push( new THREE.Vector3( 0.0, 0.05, 0.0 ) );
	migeometria4.vertices.push( new THREE.Vector3( 0.06, 0.0, -0.1 ) );
	migeometria4.vertices.push( new THREE.Vector3( 0.06, 0.05, -0.1 ) );

	migeometria4.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometria4.faces.push( new THREE.Face3( 0, 2, 5 ) );
	migeometria4.faces.push( new THREE.Face3( 3, 5, 4 ) );
	migeometria4.faces.push( new THREE.Face3( 3, 0, 5 ) );
	migeometria4.faces.push( new THREE.Face3( 0, 3, 6 ) );
	migeometria4.faces.push( new THREE.Face3( 0, 6, 1 ) );
	migeometria4.faces.push( new THREE.Face3( 3, 4, 6 ) );
	migeometria4.faces.push( new THREE.Face3( 6, 4, 7 ) );
	migeometria4.faces.push( new THREE.Face3( 1, 6, 7 ) );
	migeometria4.faces.push( new THREE.Face3( 1, 7, 2 ) );
	migeometria4.faces.push( new THREE.Face3( 5, 2, 7 ) );
	migeometria4.faces.push( new THREE.Face3( 5, 7, 4 ) );

	var material4 = new THREE.MeshBasicMaterial( { color: 0x313331 } ); // Material de color rojo
    var miobjeto4 = new THREE.Mesh (migeometria4, material4); // Crea el objeto
	var t1 = new THREE.Mesh (migeometria4, material4);
	var t2 = new THREE.Mesh (migeometria4, material4);
	var t3 = new THREE.Mesh (migeometria4, material4);
	var t4 = new THREE.Mesh (migeometria4, material4);
	var t5 = new THREE.Mesh (migeometria4, material4);
	var t6 = new THREE.Mesh (migeometria4, material4);
	var t7 = new THREE.Mesh (migeometria4, material4);
	var t8 = new THREE.Mesh (migeometria4, material4);
	var t9 = new THREE.Mesh (migeometria4, material4);
	var t10 = new THREE.Mesh (migeometria4, material4);
	var t11 = new THREE.Mesh (migeometria4, material4);
	var t12 = new THREE.Mesh (migeometria4, material4);

	var t13 = new THREE.Geometry();
	t13.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.0 ) );
	t13.vertices.push( new THREE.Vector3( 0.06, 0.0, 0.0 ) );
	t13.vertices.push( new THREE.Vector3( 0.06, 0.05, 0.0 ) );
	t13.vertices.push( new THREE.Vector3( 0.0, 0.0, -0.06 ) );
	t13.vertices.push( new THREE.Vector3( 0.0, 0.05, -0.06 ) );
	t13.vertices.push( new THREE.Vector3( 0.0, 0.05, 0.0 ) );
	t13.vertices.push( new THREE.Vector3( 0.06, 0.0, -0.06 ) );
	t13.vertices.push( new THREE.Vector3( 0.06, 0.05, -0.06 ) );

	t13.faces.push( new THREE.Face3( 0, 1, 2 ) );
	t13.faces.push( new THREE.Face3( 0, 2, 5 ) );
	t13.faces.push( new THREE.Face3( 3, 5, 4 ) );
	t13.faces.push( new THREE.Face3( 3, 0, 5 ) );
	t13.faces.push( new THREE.Face3( 0, 3, 6 ) );
	t13.faces.push( new THREE.Face3( 0, 6, 1 ) );
	t13.faces.push( new THREE.Face3( 3, 4, 6 ) );
	t13.faces.push( new THREE.Face3( 6, 4, 7 ) );
	t13.faces.push( new THREE.Face3( 1, 6, 7 ) );
	t13.faces.push( new THREE.Face3( 1, 7, 2 ) );
	t13.faces.push( new THREE.Face3( 5, 2, 7 ) );
	t13.faces.push( new THREE.Face3( 5, 7, 4 ) );

	
    var t13 = new THREE.Mesh (t13, material4); // Crea el objeto

	// teclado segunda linea

	var migeometria5 = new THREE.Geometry();
	migeometria5.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.0 ) );
	migeometria5.vertices.push( new THREE.Vector3( 0.09, 0.0, 0.0 ) );
	migeometria5.vertices.push( new THREE.Vector3( 0.09, 0.05, 0.0 ) );
	migeometria5.vertices.push( new THREE.Vector3( 0.0, 0.0, -0.09 ) );
	migeometria5.vertices.push( new THREE.Vector3( 0.0, 0.05, -0.09 ) );
	migeometria5.vertices.push( new THREE.Vector3( 0.0, 0.05, 0.0 ) );
	migeometria5.vertices.push( new THREE.Vector3( 0.09, 0.0, -0.09 ) );
	migeometria5.vertices.push( new THREE.Vector3( 0.09, 0.05, -0.09 ) );

	migeometria5.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometria5.faces.push( new THREE.Face3( 0, 2, 5 ) );
	migeometria5.faces.push( new THREE.Face3( 3, 5, 4 ) );
	migeometria5.faces.push( new THREE.Face3( 3, 0, 5 ) );
	migeometria5.faces.push( new THREE.Face3( 0, 3, 6 ) );
	migeometria5.faces.push( new THREE.Face3( 0, 6, 1 ) );
	migeometria5.faces.push( new THREE.Face3( 3, 4, 6 ) );
	migeometria5.faces.push( new THREE.Face3( 6, 4, 7 ) );
	migeometria5.faces.push( new THREE.Face3( 1, 6, 7 ) );
	migeometria5.faces.push( new THREE.Face3( 1, 7, 2 ) );
	migeometria5.faces.push( new THREE.Face3( 5, 2, 7 ) );
	migeometria5.faces.push( new THREE.Face3( 5, 7, 4 ) );

	var material5 = new THREE.MeshBasicMaterial( { color: 0x313331 } ); // Material de color rojo
    // segunda linea
	var miobjeto5 = new THREE.Mesh (migeometria5, material5); // Crea el objeto
	var s1 = new THREE.Mesh (migeometria5, material5);	
	var s2 = new THREE.Mesh (migeometria5, material5);	
	var s3 = new THREE.Mesh (migeometria5, material5);	
	var s4 = new THREE.Mesh (migeometria5, material5);	
	var s5 = new THREE.Mesh (migeometria5, material5);	
	var s6 = new THREE.Mesh (migeometria5, material5);	
	var s7 = new THREE.Mesh (migeometria5, material5);	
	var s8 = new THREE.Mesh (migeometria5, material5);	
	var s9 = new THREE.Mesh (migeometria5, material5);	
	var s10 = new THREE.Mesh (migeometria5, material5);
	var s11 = new THREE.Mesh (migeometria5, material5);	
	var s12 = new THREE.Mesh (migeometria5, material5);	

	var migeometrias1 = new THREE.Geometry();
	migeometrias1.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.0 ) );
	migeometrias1.vertices.push( new THREE.Vector3( 0.09, 0.0, 0.0 ) );
	migeometrias1.vertices.push( new THREE.Vector3( 0.09, 0.05, 0.0 ) );
	migeometrias1.vertices.push( new THREE.Vector3( 0.0, 0.0, -0.19 ) );
	migeometrias1.vertices.push( new THREE.Vector3( 0.0, 0.05, -0.19 ) );
	migeometrias1.vertices.push( new THREE.Vector3( 0.0, 0.05, 0.0 ) );
	migeometrias1.vertices.push( new THREE.Vector3( 0.09, 0.0, -0.19 ) );
	migeometrias1.vertices.push( new THREE.Vector3( 0.09, 0.05, -0.19 ) );

	migeometrias1.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometrias1.faces.push( new THREE.Face3( 0, 2, 5 ) );
	migeometrias1.faces.push( new THREE.Face3( 3, 5, 4 ) );
	migeometrias1.faces.push( new THREE.Face3( 3, 0, 5 ) );
	migeometrias1.faces.push( new THREE.Face3( 0, 3, 6 ) );
	migeometrias1.faces.push( new THREE.Face3( 0, 6, 1 ) );
	migeometrias1.faces.push( new THREE.Face3( 3, 4, 6 ) );
	migeometrias1.faces.push( new THREE.Face3( 6, 4, 7 ) );
	migeometrias1.faces.push( new THREE.Face3( 1, 6, 7 ) );
	migeometrias1.faces.push( new THREE.Face3( 1, 7, 2 ) );
	migeometrias1.faces.push( new THREE.Face3( 5, 2, 7 ) );
	migeometrias1.faces.push( new THREE.Face3( 5, 7, 4 ) );

    // segunda linea
	var s13 = new THREE.Mesh (migeometrias1, material5); // Crea el objeto


	//tercera linea
	var tecla_3 = new THREE.Mesh (migeometrias1, material5); // Crea el objeto
	var a1 = new THREE.Mesh (migeometria5, material5);	
	var a2 = new THREE.Mesh (migeometria5, material5);	
	var a3 = new THREE.Mesh (migeometria5, material5);	
	var a4 = new THREE.Mesh (migeometria5, material5);	
	var a5 = new THREE.Mesh (migeometria5, material5);	
	var a6 = new THREE.Mesh (migeometria5, material5);	
	var a7 = new THREE.Mesh (migeometria5, material5);	
	var a8 = new THREE.Mesh (migeometria5, material5);	
	var a9 = new THREE.Mesh (migeometria5, material5);	
	var a10 = new THREE.Mesh (migeometria5, material5);
	var a11 = new THREE.Mesh (migeometria5, material5);	
	var a12 = new THREE.Mesh (migeometria5, material5);	
	var a13 = new THREE.Mesh (migeometria5, material5);	
	var a14 = new THREE.Mesh (migeometria5, material5);	


	// cuarta linea
	var migeometrias2 = new THREE.Geometry();
	migeometrias2.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.0 ) );
	migeometrias2.vertices.push( new THREE.Vector3( 0.09, 0.0, 0.0 ) );
	migeometrias2.vertices.push( new THREE.Vector3( 0.09, 0.05, 0.0 ) );
	migeometrias2.vertices.push( new THREE.Vector3( 0.0, 0.0, -0.24 ) );
	migeometrias2.vertices.push( new THREE.Vector3( 0.0, 0.05, -0.24 ) );
	migeometrias2.vertices.push( new THREE.Vector3( 0.0, 0.05, 0.0 ) );
	migeometrias2.vertices.push( new THREE.Vector3( 0.09, 0.0, -0.24 ) );
	migeometrias2.vertices.push( new THREE.Vector3( 0.09, 0.05, -0.24 ) );

	migeometrias2.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometrias2.faces.push( new THREE.Face3( 0, 2, 5 ) );
	migeometrias2.faces.push( new THREE.Face3( 3, 5, 4 ) );
	migeometrias2.faces.push( new THREE.Face3( 3, 0, 5 ) );
	migeometrias2.faces.push( new THREE.Face3( 0, 3, 6 ) );
	migeometrias2.faces.push( new THREE.Face3( 0, 6, 1 ) );
	migeometrias2.faces.push( new THREE.Face3( 3, 4, 6 ) );
	migeometrias2.faces.push( new THREE.Face3( 6, 4, 7 ) );
	migeometrias2.faces.push( new THREE.Face3( 1, 6, 7 ) );
	migeometrias2.faces.push( new THREE.Face3( 1, 7, 2 ) );
	migeometrias2.faces.push( new THREE.Face3( 5, 2, 7 ) );
	migeometrias2.faces.push( new THREE.Face3( 5, 7, 4 ) );



	var tecla_4 = new THREE.Mesh (migeometrias2, material5); // Crea el objeto

	var b1 = new THREE.Mesh (migeometria5, material5);	
	var b2 = new THREE.Mesh (migeometria5, material5);	
	var b3 = new THREE.Mesh (migeometria5, material5);	
	var b4 = new THREE.Mesh (migeometria5, material5);	
	var b5 = new THREE.Mesh (migeometria5, material5);	
	var b6 = new THREE.Mesh (migeometria5, material5);	
	var b7 = new THREE.Mesh (migeometria5, material5);	
	var b8 = new THREE.Mesh (migeometria5, material5);	
	var b9 = new THREE.Mesh (migeometria5, material5);	
	var b10 = new THREE.Mesh (migeometria5, material5);
	var b11 = new THREE.Mesh (migeometria5, material5);	


	var migeometrias22 = new THREE.Geometry();
	migeometrias22.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.0 ) );
	migeometrias22.vertices.push( new THREE.Vector3( 0.09, 0.0, 0.0 ) );
	migeometrias22.vertices.push( new THREE.Vector3( 0.09, 0.05, 0.0 ) );
	migeometrias22.vertices.push( new THREE.Vector3( 0.0, 0.0, -0.26 ) );
	migeometrias22.vertices.push( new THREE.Vector3( 0.0, 0.05, -0.26 ) );
	migeometrias22.vertices.push( new THREE.Vector3( 0.0, 0.05, 0.0 ) );
	migeometrias22.vertices.push( new THREE.Vector3( 0.09, 0.0, -0.26 ) );
	migeometrias22.vertices.push( new THREE.Vector3( 0.09, 0.05, -0.26 ) );

	migeometrias22.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometrias22.faces.push( new THREE.Face3( 0, 2, 5 ) );
	migeometrias22.faces.push( new THREE.Face3( 3, 5, 4 ) );
	migeometrias22.faces.push( new THREE.Face3( 3, 0, 5 ) );
	migeometrias22.faces.push( new THREE.Face3( 0, 3, 6 ) );
	migeometrias22.faces.push( new THREE.Face3( 0, 6, 1 ) );
	migeometrias22.faces.push( new THREE.Face3( 3, 4, 6 ) );
	migeometrias22.faces.push( new THREE.Face3( 6, 4, 7 ) );
	migeometrias22.faces.push( new THREE.Face3( 1, 6, 7 ) );
	migeometrias22.faces.push( new THREE.Face3( 1, 7, 2 ) );
	migeometrias22.faces.push( new THREE.Face3( 5, 2, 7 ) );
	migeometrias22.faces.push( new THREE.Face3( 5, 7, 4 ) );


	var b12 = new THREE.Mesh (migeometrias22, material5);

	// quinta linea
	var migeometrias3 = new THREE.Geometry();
	migeometrias3.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.0 ) );
	migeometrias3.vertices.push( new THREE.Vector3( 0.09, 0.0, 0.0 ) );
	migeometrias3.vertices.push( new THREE.Vector3( 0.09, 0.05, 0.0 ) );
	migeometrias3.vertices.push( new THREE.Vector3( 0.0, 0.0, -0.26 ) );
	migeometrias3.vertices.push( new THREE.Vector3( 0.0, 0.05, -0.26 ) );
	migeometrias3.vertices.push( new THREE.Vector3( 0.0, 0.05, 0.0 ) );
	migeometrias3.vertices.push( new THREE.Vector3( 0.09, 0.0, -0.26 ) );
	migeometrias3.vertices.push( new THREE.Vector3( 0.09, 0.05, -0.26 ) );

	migeometrias3.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometrias3.faces.push( new THREE.Face3( 0, 2, 5 ) );
	migeometrias3.faces.push( new THREE.Face3( 3, 5, 4 ) );
	migeometrias3.faces.push( new THREE.Face3( 3, 0, 5 ) );
	migeometrias3.faces.push( new THREE.Face3( 0, 3, 6 ) );
	migeometrias3.faces.push( new THREE.Face3( 0, 6, 1 ) );
	migeometrias3.faces.push( new THREE.Face3( 3, 4, 6 ) );
	migeometrias3.faces.push( new THREE.Face3( 6, 4, 7 ) );
	migeometrias3.faces.push( new THREE.Face3( 1, 6, 7 ) );
	migeometrias3.faces.push( new THREE.Face3( 1, 7, 2 ) );
	migeometrias3.faces.push( new THREE.Face3( 5, 2, 7 ) );
	migeometrias3.faces.push( new THREE.Face3( 5, 7, 4 ) );
	var tecla_5 = new THREE.Mesh (migeometrias3, material5); // Crea el objeto

	var c1 = new THREE.Mesh (migeometria5, material5);	
	var c2 = new THREE.Mesh (migeometria5, material5);	
	var c3 = new THREE.Mesh (migeometria5, material5);	
	var c4 = new THREE.Mesh (migeometria5, material5);	
	var c5 = new THREE.Mesh (migeometria5, material5);	
	var c6 = new THREE.Mesh (migeometria5, material5);	
	var c7 = new THREE.Mesh (migeometria5, material5);	
	var c8 = new THREE.Mesh (migeometria5, material5);	
	var c9 = new THREE.Mesh (migeometria5, material5);
	var c10 = new THREE.Mesh (migeometria5, material5);	

	var migeometrias33 = new THREE.Geometry();
	migeometrias33.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.0 ) );
	migeometrias33.vertices.push( new THREE.Vector3( 0.09, 0.0, 0.0 ) );
	migeometrias33.vertices.push( new THREE.Vector3( 0.09, 0.05, 0.0 ) );
	migeometrias33.vertices.push( new THREE.Vector3( 0.0, 0.0, -0.24 ) );
	migeometrias33.vertices.push( new THREE.Vector3( 0.0, 0.05, -0.24 ) );
	migeometrias33.vertices.push( new THREE.Vector3( 0.0, 0.05, 0.0 ) );
	migeometrias33.vertices.push( new THREE.Vector3( 0.09, 0.0, -0.24 ) );
	migeometrias33.vertices.push( new THREE.Vector3( 0.09, 0.05, -0.24 ) );

	migeometrias33.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometrias33.faces.push( new THREE.Face3( 0, 2, 5 ) );
	migeometrias33.faces.push( new THREE.Face3( 3, 5, 4 ) );
	migeometrias33.faces.push( new THREE.Face3( 3, 0, 5 ) );
	migeometrias33.faces.push( new THREE.Face3( 0, 3, 6 ) );
	migeometrias33.faces.push( new THREE.Face3( 0, 6, 1 ) );
	migeometrias33.faces.push( new THREE.Face3( 3, 4, 6 ) );
	migeometrias33.faces.push( new THREE.Face3( 6, 4, 7 ) );
	migeometrias33.faces.push( new THREE.Face3( 1, 6, 7 ) );
	migeometrias33.faces.push( new THREE.Face3( 1, 7, 2 ) );
	migeometrias33.faces.push( new THREE.Face3( 5, 2, 7 ) );
	migeometrias33.faces.push( new THREE.Face3( 5, 7, 4 ) );

	var c11 = new THREE.Mesh (migeometrias33, material5);

	// sexta linea 
	var tecla_6 = new THREE.Mesh (migeometria5, material5); // Crea el objeto
	var d1 = new THREE.Mesh (migeometria5, material5);
	var d2 = new THREE.Mesh (migeometria5, material5);
	var d3 = new THREE.Mesh (migeometria5, material5);

	var migeometrias4 = new THREE.Geometry();
	migeometrias4.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.0 ) );
	migeometrias4.vertices.push( new THREE.Vector3( 0.09, 0.0, 0.0 ) );
	migeometrias4.vertices.push( new THREE.Vector3( 0.09, 0.05, 0.0 ) );
	migeometrias4.vertices.push( new THREE.Vector3( 0.0, 0.0, -0.13 ) );
	migeometrias4.vertices.push( new THREE.Vector3( 0.0, 0.05, -0.13 ) );
	migeometrias4.vertices.push( new THREE.Vector3( 0.0, 0.05, 0.0 ) );
	migeometrias4.vertices.push( new THREE.Vector3( 0.09, 0.0, -0.13 ) );
	migeometrias4.vertices.push( new THREE.Vector3( 0.09, 0.05, -0.13 ) );

	migeometrias4.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometrias4.faces.push( new THREE.Face3( 0, 2, 5 ) );
	migeometrias4.faces.push( new THREE.Face3( 3, 5, 4 ) );
	migeometrias4.faces.push( new THREE.Face3( 3, 0, 5 ) );
	migeometrias4.faces.push( new THREE.Face3( 0, 3, 6 ) );
	migeometrias4.faces.push( new THREE.Face3( 0, 6, 1 ) );
	migeometrias4.faces.push( new THREE.Face3( 3, 4, 6 ) );
	migeometrias4.faces.push( new THREE.Face3( 6, 4, 7 ) );
	migeometrias4.faces.push( new THREE.Face3( 1, 6, 7 ) );
	migeometrias4.faces.push( new THREE.Face3( 1, 7, 2 ) );
	migeometrias4.faces.push( new THREE.Face3( 5, 2, 7 ) );
	migeometrias4.faces.push( new THREE.Face3( 5, 7, 4 ) );

	var d4 = new THREE.Mesh (migeometrias4, material5);
	//spacio
	var migeometrias44 = new THREE.Geometry();
	migeometrias44.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.0 ) );
	migeometrias44.vertices.push( new THREE.Vector3( 0.09, 0.0, 0.0 ) );
	migeometrias44.vertices.push( new THREE.Vector3( 0.09, 0.05, 0.0 ) );
	migeometrias44.vertices.push( new THREE.Vector3( 0.0, 0.0, -0.55 ) );
	migeometrias44.vertices.push( new THREE.Vector3( 0.0, 0.05, -0.55 ) );
	migeometrias44.vertices.push( new THREE.Vector3( 0.0, 0.05, 0.0 ) );
	migeometrias44.vertices.push( new THREE.Vector3( 0.09, 0.0, -0.55 ) );
	migeometrias44.vertices.push( new THREE.Vector3( 0.09, 0.05, -0.55 ) );

	migeometrias44.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometrias44.faces.push( new THREE.Face3( 0, 2, 5 ) );
	migeometrias44.faces.push( new THREE.Face3( 3, 5, 4 ) );
	migeometrias44.faces.push( new THREE.Face3( 3, 0, 5 ) );
	migeometrias44.faces.push( new THREE.Face3( 0, 3, 6 ) );
	migeometrias44.faces.push( new THREE.Face3( 0, 6, 1 ) );
	migeometrias44.faces.push( new THREE.Face3( 3, 4, 6 ) );
	migeometrias44.faces.push( new THREE.Face3( 6, 4, 7 ) );
	migeometrias44.faces.push( new THREE.Face3( 1, 6, 7 ) );
	migeometrias44.faces.push( new THREE.Face3( 1, 7, 2 ) );
	migeometrias44.faces.push( new THREE.Face3( 5, 2, 7 ) );
	migeometrias44.faces.push( new THREE.Face3( 5, 7, 4 ) );

	var d5 = new THREE.Mesh (migeometrias44, material5);

	var d6 = new THREE.Mesh (migeometrias4, material5);

	var d7 = new THREE.Mesh (migeometria5, material5);
	var d8 = new THREE.Mesh (migeometria5, material5);

	var migeometrias444 = new THREE.Geometry();
	migeometrias444.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.0 ) );
	migeometrias444.vertices.push( new THREE.Vector3( 0.04, 0.0, 0.0 ) );
	migeometrias444.vertices.push( new THREE.Vector3( 0.04, 0.05, 0.0 ) );
	migeometrias444.vertices.push( new THREE.Vector3( 0.0, 0.0, -0.09 ) );
	migeometrias444.vertices.push( new THREE.Vector3( 0.0, 0.05, -0.09 ) );
	migeometrias444.vertices.push( new THREE.Vector3( 0.0, 0.05, 0.0 ) );
	migeometrias444.vertices.push( new THREE.Vector3( 0.04, 0.0, -0.09 ) );
	migeometrias444.vertices.push( new THREE.Vector3( 0.04, 0.05, -0.09 ) );

	migeometrias444.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometrias444.faces.push( new THREE.Face3( 0, 2, 5 ) );
	migeometrias444.faces.push( new THREE.Face3( 3, 5, 4 ) );
	migeometrias444.faces.push( new THREE.Face3( 3, 0, 5 ) );
	migeometrias444.faces.push( new THREE.Face3( 0, 3, 6 ) );
	migeometrias444.faces.push( new THREE.Face3( 0, 6, 1 ) );
	migeometrias444.faces.push( new THREE.Face3( 3, 4, 6 ) );
	migeometrias444.faces.push( new THREE.Face3( 6, 4, 7 ) );
	migeometrias444.faces.push( new THREE.Face3( 1, 6, 7 ) );
	migeometrias444.faces.push( new THREE.Face3( 1, 7, 2 ) );
	migeometrias444.faces.push( new THREE.Face3( 5, 2, 7 ) );
	migeometrias444.faces.push( new THREE.Face3( 5, 7, 4 ) );

	var d9 = new THREE.Mesh (migeometrias444, material5);
	var d10 = new THREE.Mesh (migeometrias444, material5);


	// tactil 

	var migeometrias5 = new THREE.Geometry();
	migeometrias5.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.0 ) );
	migeometrias5.vertices.push( new THREE.Vector3( 0.3, 0.0, 0.0 ) );
	migeometrias5.vertices.push( new THREE.Vector3( 0.3, 0.05, 0.0 ) );
	migeometrias5.vertices.push( new THREE.Vector3( 0.3, 0.0, -0.5 ) );
	migeometrias5.vertices.push( new THREE.Vector3( 0.0, 0.05, -0.5 ) );
	migeometrias5.vertices.push( new THREE.Vector3( 0.0, 0.05, 0.0 ) );
	migeometrias5.vertices.push( new THREE.Vector3( 0.3, 0.0, -0.5 ) );
	migeometrias5.vertices.push( new THREE.Vector3( 0.3, 0.05, -0.5 ) );

	migeometrias5.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometrias5.faces.push( new THREE.Face3( 0, 2, 5 ) );
	migeometrias5.faces.push( new THREE.Face3( 3, 5, 4 ) );
	migeometrias5.faces.push( new THREE.Face3( 3, 0, 5 ) );
	migeometrias5.faces.push( new THREE.Face3( 0, 3, 6 ) );
	migeometrias5.faces.push( new THREE.Face3( 0, 6, 1 ) );
	migeometrias5.faces.push( new THREE.Face3( 3, 4, 6 ) );
	migeometrias5.faces.push( new THREE.Face3( 6, 4, 7 ) );
	migeometrias5.faces.push( new THREE.Face3( 1, 6, 7 ) );
	migeometrias5.faces.push( new THREE.Face3( 1, 7, 2 ) );
	migeometrias5.faces.push( new THREE.Face3( 5, 2, 7 ) );
	migeometrias5.faces.push( new THREE.Face3( 5, 7, 4 ) );
	var material6 = new THREE.MeshBasicMaterial( { color: 0x3D3E3D } ); // Material de color rojo
    var tactil = new THREE.Mesh (migeometrias5, material6); // Crea el objeto

	//				lateral
    var migeometriaa = new THREE.Geometry();
	migeometriaa.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.0 ) );
	migeometriaa.vertices.push( new THREE.Vector3( 0.08, 0.0, 0.0 ) );
	migeometriaa.vertices.push( new THREE.Vector3( 0.08, 0.03, 0.0 ) );
	migeometriaa.vertices.push( new THREE.Vector3( 0.0, 0.0, -0.13 ) );
	migeometriaa.vertices.push( new THREE.Vector3( 0.0, 0.03, -0.13 ) );
	migeometriaa.vertices.push( new THREE.Vector3( 0.0, 0.03, 0.0 ) );
	migeometriaa.vertices.push( new THREE.Vector3( 0.08, 0.0, -0.13 ) );
	migeometriaa.vertices.push( new THREE.Vector3( 0.08, 0.03, -0.13 ) );


	migeometriaa.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometriaa.faces.push( new THREE.Face3( 0, 2, 5 ) );
	migeometriaa.faces.push( new THREE.Face3( 3, 5, 4 ) );
	migeometriaa.faces.push( new THREE.Face3( 3, 0, 5 ) );
	migeometriaa.faces.push( new THREE.Face3( 0, 3, 6 ) );
	migeometriaa.faces.push( new THREE.Face3( 0, 6, 1 ) );
	migeometriaa.faces.push( new THREE.Face3( 3, 4, 6 ) );
	migeometriaa.faces.push( new THREE.Face3( 6, 4, 7 ) );
	migeometriaa.faces.push( new THREE.Face3( 1, 6, 7 ) );
	migeometriaa.faces.push( new THREE.Face3( 1, 7, 2 ) );
	migeometriaa.faces.push( new THREE.Face3( 5, 2, 7 ) );
	migeometriaa.faces.push( new THREE.Face3( 5, 7, 4 ) );
	
	
	


    
    var materiala = new THREE.MeshBasicMaterial( { color: 0x000000} ); // Material color
    var flash1 = new THREE.Mesh (migeometriaa, materiala); // Crea el objeto
	var flash2 = new THREE.Mesh (migeometriaa, materiala);

	var flash3 = new THREE.Mesh (migeometriaa, materiala); // Crea el objeto
	var flash4 = new THREE.Mesh (migeometriaa, materiala);
	// lateral 2
	var migeometriaaa = new THREE.Geometry();
	migeometriaaa.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.0 ) );
	migeometriaaa.vertices.push( new THREE.Vector3( 0.03, 0.0, 0.0 ) );
	migeometriaaa.vertices.push( new THREE.Vector3( 0.03, 0.03, 0.0 ) );
	migeometriaaa.vertices.push( new THREE.Vector3( 0.0, 0.0, -0.1 ) );
	migeometriaaa.vertices.push( new THREE.Vector3( 0.0, 0.03, -0.1 ) );
	migeometriaaa.vertices.push( new THREE.Vector3( 0.0, 0.03, 0.0 ) );
	migeometriaaa.vertices.push( new THREE.Vector3( 0.03, 0.0, -0.1 ) );
	migeometriaaa.vertices.push( new THREE.Vector3( 0.03, 0.03, -0.1 ) );


	migeometriaaa.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometriaaa.faces.push( new THREE.Face3( 0, 2, 5 ) );
	migeometriaaa.faces.push( new THREE.Face3( 3, 5, 4 ) );
	migeometriaaa.faces.push( new THREE.Face3( 3, 0, 5 ) );
	migeometriaaa.faces.push( new THREE.Face3( 0, 3, 6 ) );
	migeometriaaa.faces.push( new THREE.Face3( 0, 6, 1 ) );
	migeometriaaa.faces.push( new THREE.Face3( 3, 4, 6 ) );
	migeometriaaa.faces.push( new THREE.Face3( 6, 4, 7 ) );
	migeometriaaa.faces.push( new THREE.Face3( 1, 6, 7 ) );
	migeometriaaa.faces.push( new THREE.Face3( 1, 7, 2 ) );
	migeometriaaa.faces.push( new THREE.Face3( 5, 2, 7 ) );
	migeometriaaa.faces.push( new THREE.Face3( 5, 7, 4 ) );

	var carg = new THREE.Mesh (migeometriaaa, materiala);

	var migeometriaaaa = new THREE.Geometry();
	migeometriaaaa.vertices.push( new THREE.Vector3( 0.0, 0.0, 0.0 ) );
	migeometriaaaa.vertices.push( new THREE.Vector3( 0.15, 0.0, 0.0 ) );
	migeometriaaaa.vertices.push( new THREE.Vector3( 0.15, 0.02, 0.0 ) );
	migeometriaaaa.vertices.push( new THREE.Vector3( 0.0, 0.0, -0.1 ) );
	migeometriaaaa.vertices.push( new THREE.Vector3( 0.0, 0.02, -0.1 ) );
	migeometriaaaa.vertices.push( new THREE.Vector3( 0.0, 0.02, 0.0 ) );
	migeometriaaaa.vertices.push( new THREE.Vector3( 0.15, 0.0, -0.1 ) );
	migeometriaaaa.vertices.push( new THREE.Vector3( 0.15, 0.02, -0.1 ) );


	migeometriaaaa.faces.push( new THREE.Face3( 0, 1, 2 ) );
	migeometriaaaa.faces.push( new THREE.Face3( 0, 2, 5 ) );
	migeometriaaaa.faces.push( new THREE.Face3( 3, 5, 4 ) );
	migeometriaaaa.faces.push( new THREE.Face3( 3, 0, 5 ) );
	migeometriaaaa.faces.push( new THREE.Face3( 0, 3, 6 ) );
	migeometriaaaa.faces.push( new THREE.Face3( 0, 6, 1 ) );
	migeometriaaaa.faces.push( new THREE.Face3( 3, 4, 6 ) );
	migeometriaaaa.faces.push( new THREE.Face3( 6, 4, 7 ) );
	migeometriaaaa.faces.push( new THREE.Face3( 1, 6, 7 ) );
	migeometriaaaa.faces.push( new THREE.Face3( 1, 7, 2 ) );
	migeometriaaaa.faces.push( new THREE.Face3( 5, 2, 7 ) );
	migeometriaaaa.faces.push( new THREE.Face3( 5, 7, 4 ) );

	var flash5 = new THREE.Mesh (migeometriaaaa, materiala);


	// SCENE

	scene = new THREE.Scene();
	scene.add( light );
	scene.add( ambientLight );
	

	scene.add( miobjeto );
	scene.add( miobjeto2 );
	scene.add( miobjeto3 );
	miobjeto3.position.set(0.001, 0.1, -0.05);

	// lateral
	scene.add( flash1 );
	flash1.position.set(0.1, 0.01, 0.001);
	scene.add( flash2 );
	flash2.position.set(0.23, 0.01, 0.001);
	scene.add( carg );
	carg.position.set(0.08, 0.01, -1.701);

	scene.add( flash3 );
	flash3.position.set(0.18, 0.01, -1.671);
	scene.add( flash4 );
	flash4.position.set(0.28, 0.01, -1.671);

	scene.add( flash5 );
	flash5.position.set(0.36, 0.02, 0.001);

	//modifico teclado:

	scene.add( miobjeto4 );
	miobjeto4.position.set(0.15, 0.01, -0.1);
	
	scene.add( t1 );
	t1.position.set(0.15, 0.01, -0.22);

	scene.add( t2 );
	t2.position.set(0.15, 0.01, -0.34);

	scene.add( t3 );
	t3.position.set(0.15, 0.01, -0.46);

	scene.add( t4 );
	t4.position.set(0.15, 0.01, -0.58);

	scene.add( t5 );
	t5.position.set(0.15, 0.01, -0.70);

	scene.add( t6 );
	t6.position.set(0.15, 0.01, -0.82);

	scene.add( t7 );
	t7.position.set(0.15, 0.01, -0.94);

	scene.add( t8 );
	t8.position.set(0.15, 0.01, -1.06);

	scene.add( t9 );
	t9.position.set(0.15, 0.01, -1.18);

	scene.add( t10 );
	t10.position.set(0.15, 0.01, -1.30);

	scene.add( t11 );
	t11.position.set(0.15, 0.01, -1.42);

	scene.add( t12 );
	t12.position.set(0.15, 0.01, -1.54);

	scene.add( t13 );
	t13.position.set(0.15, 0.01, -1.66);

	//segunda linea
	scene.add( miobjeto5 );
	miobjeto5.position.set(0.23, 0.01, -0.1);
	
	scene.add( s1 );
	s1.position.set(0.23, 0.01, -0.21);
	scene.add( s2 );
	s2.position.set(0.23, 0.01, -0.32);
	scene.add( s3 );
	s3.position.set(0.23, 0.01, -0.43);
	scene.add( s4 );
	s4.position.set(0.23, 0.01, -0.54);
	scene.add( s5 );
	s5.position.set(0.23, 0.01, -0.65);
	scene.add( s6 );
	s6.position.set(0.23, 0.01, -0.76);
	scene.add( s7 );
	s7.position.set(0.23, 0.01, -0.87);
	scene.add( s8 );
	s8.position.set(0.23, 0.01, -0.98);
	scene.add( s9 );
	s9.position.set(0.23, 0.01, -1.09);
	scene.add( s10 );
	s10.position.set(0.23, 0.01, -1.2);
	scene.add( s11 );
	s11.position.set(0.23, 0.01, -1.31);
	scene.add( s12 );
	s12.position.set(0.23, 0.01, -1.42);
	scene.add( s13 );
	s13.position.set(0.23, 0.01, -1.53);

	// tercera linea 
	scene.add( tecla_3 );
	tecla_3.position.set(0.35, 0.01, -0.1);

	scene.add( a1 );
	a1.position.set(0.35, 0.01, -0.1);
	scene.add( a2 );
	a2.position.set(0.35, 0.01, -0.31);
	scene.add( a3 );
	a3.position.set(0.35, 0.01, -0.42);
	scene.add( a4 );
	a4.position.set(0.35, 0.01, -0.53);
	scene.add( a5 );
	a5.position.set(0.35, 0.01, -0.64);
	scene.add( a6 );
	a6.position.set(0.35, 0.01, -0.75);
	scene.add( a7 );
	a7.position.set(0.35, 0.01, -0.86);
	scene.add( a8 );
	a8.position.set(0.35, 0.01, -0.97);
	scene.add( a9 );
	a9.position.set(0.35, 0.01, -1.08);
	scene.add( a10 );
	a10.position.set(0.35, 0.01, -1.19);
	scene.add( a11 );
	a11.position.set(0.35, 0.01, -1.3);
	scene.add( a12 );
	a12.position.set(0.35, 0.01, -1.41);
	scene.add( a13 );
	a13.position.set(0.35, 0.01, -1.52);
	scene.add( a14 );
	a14.position.set(0.35, 0.01, -1.63);


	// cuarta linea
	scene.add( tecla_4 );
	tecla_4.position.set(0.47, 0.01, -0.1);

	scene.add( b1 );
	b1.position.set(0.47, 0.01, -0.36);
	scene.add( b2 );
	b2.position.set(0.47, 0.01, -0.47);
	scene.add( b3 );
	b3.position.set(0.47, 0.01, -0.58);
	scene.add( b4 );
	b4.position.set(0.47, 0.01, -0.69);
	scene.add( b5 );
	b5.position.set(0.47, 0.01, -0.8);
	scene.add( b6 );
	b6.position.set(0.47, 0.01, -0.91);
	scene.add( b7 );
	b7.position.set(0.47, 0.01, -1.02);
	scene.add( b8 );
	b8.position.set(0.47, 0.01, -1.13);
	scene.add( b9 );
	b9.position.set(0.47, 0.01, -1.24);
	scene.add( b10 );
	b10.position.set(0.47, 0.01, -1.35);
	scene.add( b12 );
	b12.position.set(0.47, 0.01, -1.46);



	//quinta linea

	scene.add( tecla_5 );
	tecla_5.position.set(0.59, 0.01, -0.1);

	scene.add( c1 );
	c1.position.set(0.59, 0.01, -0.38);
	scene.add( c2 );
	c2.position.set(0.59, 0.01, -0.49);
	scene.add( c3 );
	c3.position.set(0.59, 0.01, -0.6);
	scene.add( c4 );
	c4.position.set(0.59, 0.01, -0.71);
	scene.add( c5 );
	c5.position.set(0.59, 0.01, -0.82);
	scene.add( c6 );
	c6.position.set(0.59, 0.01, -0.93);
	scene.add( c7 );
	c7.position.set(0.59, 0.01, -1.04);
	scene.add( c8 );
	c8.position.set(0.59, 0.01, -1.15);
	scene.add( c9 );
	c9.position.set(0.59, 0.01, -1.26);
	scene.add( c10 );
	c10.position.set(0.59, 0.01, -1.37);
	scene.add( c11 );
	c11.position.set(0.59, 0.01, -1.48);


	//sexta linea
	scene.add( tecla_6 );
	tecla_6.position.set(0.71, 0.01, -0.1);

	scene.add( d1 );
	d1.position.set(0.71, 0.01, -0.21);
	scene.add( d2 );
	d2.position.set(0.71, 0.01, -0.32);
	
	scene.add( d4 );
	d4.position.set(0.71, 0.01, -0.43);
	scene.add( d5 );
	d5.position.set(0.71, 0.01, -0.58);
	scene.add( d6 );
	d6.position.set(0.71, 0.01, -1.15);

	scene.add( d7 );
	d7.position.set(0.71, 0.01, -1.3);
	scene.add( d8 );
	d8.position.set(0.71, 0.01, -1.41);

	scene.add( d9 );
	d9.position.set(0.71, 0.01, -1.52);
	scene.add( d10 );
	d10.position.set(0.76, 0.01, -1.52);

	scene.add( d3 );
	d3.position.set(0.71, 0.01, -1.63);



	// parte tactil

	scene.add( tactil );
	tactil.position.set(0.9, 0.01, -0.65);


}

function animate() {
	window.requestAnimationFrame( animate );
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render( scene, camera );
}

try {
	init();
	animate();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}
