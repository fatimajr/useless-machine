window.addEventListener("load", function() {
    var boton = document.getElementById("cri");
    var contador = 1;
    boton.addEventListener("click", function() {
    	if(contador == 1) {
		document.getElementById("inputcolor").value = "Azul";
		document.getElementById("azul").classList.add("border-blue");
		document.getElementById("amarillo").classList.remove("border-yellow");
		}
		if(contador == 2) {
		document.getElementById("inputcolor").value = "Rojo";
		document.getElementById("rojo").classList.add("border-red");
		document.getElementById("azul").classList.remove("border-blue");
		}
        if(contador == 3) {
		document.getElementById("inputcolor").value = "Amarillo";
		document.getElementById("amarillo").classList.add("border-yellow");
		document.getElementById("rojo").classList.remove("border-red");
		}
		contador ++;
	});
});
window.addEventListener("load", function() {
	var boton = document.getElementById("supercri");
	boton.addEventListener("click", function() {
		var color = document.getElementById("inputcolor").value;
		if (color == "azul") {
			document.getElementById("azul").classList.add("border-blue");
			document.getElementById("rojo").classList.remove("border-red");
			document.getElementById("amarillo").classList.remove("border-yellow");
		} else if (color == "rojo") {
			document.getElementById("rojo").classList.add("border-red");
			document.getElementById("azul").classList.remove("border-blue");
			document.getElementById("amarillo").classList.remove("border-yellow");
		} else if (color == "amarillo") {
			document.getElementById("amarillo").classList.add("border-yellow");
			document.getElementById("rojo").classList.remove("border-red");
			document.getElementById("azul").classList.remove("border-blue");
		}
	});
});