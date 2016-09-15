window.addEventListener("load", function() {
    var boton = document.getElementById("boton1");
    boton.addEventListener("click", function() {
        document.getElementById("inputcolor").value = "Blue";
		document.getElementById("color1").classList.toggle("border-blue");
	});
});
