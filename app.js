//Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

let nombreAmigos = [];



function agregarAmigo(){

    //Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

    document.getElementById('amigo').value == '' ? alert('Digite un nombre Valido') : nombreAmigos.push(document.getElementById('amigo').value);

    listaDeAmigos(nombreAmigos);
} 