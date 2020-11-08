<!doctype html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="">
	<meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
	<meta name="generator" content="Jekyll v4.1.1">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
		integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<title>Santi Solution</title>

	<!-- Bootstrap core CSS 
<link href="css/bootstrap.min.css" rel="stylesheet" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
-->
	<!-- Favicons -->
	<link rel="apple-touch-icon-precomposed" sizes="57x57" href="/favicon/apple-touch-icon-57x57.png" />
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="/favicon/apple-touch-icon-114x114.png" />
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="/favicon/apple-touch-icon-72x72.png" />
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="/favicon/apple-touch-icon-144x144.png" />
	<link rel="apple-touch-icon-precomposed" sizes="60x60" href="/favicon/apple-touch-icon-60x60.png" />
	<link rel="apple-touch-icon-precomposed" sizes="120x120" href="/favicon/apple-touch-icon-120x120.png" />
	<link rel="apple-touch-icon-precomposed" sizes="76x76" href="/favicon/apple-touch-icon-76x76.png" />
	<link rel="apple-touch-icon-precomposed" sizes="152x152" href="/favicon/apple-touch-icon-152x152.png" />
	<link rel="icon" type="image/png" href="/favicon/favicon-196x196.png" sizes="196x196" />
	<link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/png" href="/favicon/favicon-32x32.png" sizes="32x32" />
	<link rel="icon" type="image/png" href="/favicon/favicon-16x16.png" sizes="16x16" />
	<link rel="icon" type="image/png" href="/favicon/favicon-128.png" sizes="128x128" />

	<meta name="theme-color" content="#563d7c">


	<style>
		.bd-placeholder-img {
			font-size: 1.125rem;
			text-anchor: middle;
			-webkit-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
		}

		@media (min-width: 768px) {
			.bd-placeholder-img-lg {
				font-size: 3.5rem;
			}
		}
	</style>
	<!-- Custom styles for this template -->
	<link href="css/signin.css" rel="stylesheet">
</head>

<body class="text-center">
	<div class="form-signin">
		<img class="mb-4" src="https://www.santisoluciones.com/images/logo.png" alt="" width="200" height="72">
		<h1 class="h3 mb-3 font-weight-normal">Bienvenido</h1>

		<input type="text" id="user" class="form-control" placeholder="Usuario" required autofocus>

		<input type="password" id="inputPassword" class="form-control" placeholder="Contraseña" required>
		<div class="checkbox mb-3">
			<label>
				<input type="checkbox" value="remember-me"> Recordar contraseña
			</label>
		</div>
		<button class="btn-lg btn-primary btn-block" onclick="acceder()">Ingresar</button>
		<p class="mt-5 mb-3 text-muted">&copy; 2020</p>
	</div>

	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
		integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
		crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
		integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s"
		crossorigin="anonymous"></script>
	<script>
		function acceder() {
			console.log("entre a la funcion");
			let nombre = document.getElementById('user').value;
			let pass = document.getElementById('inputPassword').value;

			data = { "nombre": nombre, "pass": pass };
			console.log(data);
			$.ajax({
			  type:"POST",
			  //dataType: "json",
			  url: "acceso.php",
			  data: data,
			  success: function(e){
				console.log(e);
				if(e==1){
				  window.location = "admingestionServicios.php";
				}
			  }
			}) 
		}

	</script>
</body>

</html>