const listaDeAmigos = [];
const rifaRealizada = false;  // Para evitar que se repita la rifa.

function agregarAmigo() {
    if (listaDeAmigos.length >= 10) {
        alert("Ya se han agregado 10 participantes. No puedes agregar más.");
        return;
    }

    const friendInput = document.getElementById("amigo"); // Toma el elemento HTML.
    if (friendInput.value === "") { // Solo si la variable está vacía.
        alert("Debes ingresar un nombre");
        return; // Salir de la función si está vacía.
    } 
    listaDeAmigos.push(friendInput.value); // Agregar el nombre a la lista.
    
    const ulFriendsList = document.getElementById("listaAmigos");
    const newLiElement = document.createElement("li"); // Crear un nuevo elemento HTML.
    newLiElement.textContent = friendInput.value;
    ulFriendsList.appendChild(newLiElement);
    
    friendInput.value = ""; // Limpiar el campo de entrada.
}

function sortearAmigo() {
    if (rifaRealizada) {
        alert("La rifa ya se realizó. No puedes repetirla.");
        return;
    }

    if (listaDeAmigos.length < 2) {
        alert("Debe haber al menos 2 participantes para realizar la rifa.");
        return;
    }

    const amigoGanador = Math.floor(Math.random() * listaDeAmigos.length); 
    const nombreAmigoGanador = listaDeAmigos[amigoGanador];

    document.getElementById("resultado").textContent = "🎉 ¡El ganador es: " + nombreAmigoGanador + "! 🎉";
    
    rifaRealizada = true; 
    document.querySelector("button-draw").disabled = true; 
}

