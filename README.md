# Useless Machine
![useless machine](http://2.1m.yt/FNWRzdH.png "Cri Game")


###CRI descripción
* Existen 3 colores, al darle click al primer botón "Cri" debe aparecer un borde del mismo color del círculo y el nombre del primer color en el placeholder.

###CRI pseudocódigo

1. Inicio
2. Click en botón "cri".
3. Aparece borde de primer círculo. 
4. Aparece nombre de color del 1er círculo en el placeholder.

###Solución
* Inicializar un evento y declarar un contador para que al incrementar, la acción de cambio de círculo avance y se ejecute cada 
vez que hacemos click.
* El primer if es para cuando se haga el primer click y el contador se encuentre en 1 realice la acción en el 1er elemento, añadir 
el borde que se encuentra en una clase(classList.add) y el nombre del elemento en el placeholder.
* Luego al hacer el segundo click se remueve la clase borde del 1er elemento, se añade la clase borde del segundo elemento y se
imprime el nmbre del 2do elemento en el placeholder y así también para el tercer click.
* El contador vuelve a cero para que pueda repetir las acciones.

```javascript
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
```

###SUPER CRI descripción
* Existen 3 colores, al escribir el nombre de uno de estos colores y darle click al segundo botón "Super Cri" debe aparecer un borde del mismo color del seleccionado.

###SUPER CRI pseudocódigo

1. Inicio
2. Escribir el nombre de un color en el placeholder.
3. Click en el botón "Super Cri"
4. Aparece borde de en el círculo seleccionado. 
5. Aparece nombre de color del círculo seleccionado en el placeholder.

###Solución
* Se usan tres if, uno para cada nombre del color. Así si escribimos el nombre de cierto color se añadirá su clase borde y se
eliminarán las clases borde de los otros elementos.


```javascript
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
´´´
