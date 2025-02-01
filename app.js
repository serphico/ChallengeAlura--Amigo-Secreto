//Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

let nombreAmigos = [];



function agregarAmigo(){

    //Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

    document.getElementById('amigo').value == '' ? alert('Digite un nombre Valido') : nombreAmigos.push(document.getElementById('amigo').value);

    listaDeAmigos(nombreAmigos);
} 

function listaDeAmigos(amigos){

    //Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

    let listaDeAmigos = document.getElementById('listaAmigos');

    listaDeAmigos.innerHTML = `<li> ${amigos} </li>`;
    
    return;
}

//Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

function sortearAmigo() {
    let numeroAleatorio = Math.floor(Math.random()*nombreAmigos.length)

    nombreAmigos.length <= 1 || nombreAmigos == undefined  ? alert('Introduzca más nombres') :listaDeAmigos(` El ganador/a es: ${nombreAmigos[numeroAleatorio]}`);
    console.log(numeroAleatorio);
}