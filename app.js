const inputAmigo = document.getElementById ("amigo");
const listaAmigos = []; // let es igual a let listaAmigos [];
const ulListaAmigos = document.getElementById ("listaAmigos");
const ulResultado = document.getElementById("resultado");


// Agregar amigos 
function agregarAmigo() {

    // Valida que es campo no se encuentre vacio 
    if (!inputAmigo.value){
        alert("Debe ingresar un nombre.!")
        return;
    }

    //Agrega la lista de amigos
    listaAmigos.push(inputAmigo.value);
   // ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + inputAmigo.value;
   ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
   
};


for (let i = 0; i < listaAmigos.length; i++) {
    let item = document.createElement("li");
    item.innerHTML = listaAmigos[i];
    listaElementos.appendChild(item);
}


    // Sortea al ganador 
function sortearAmigo(){
    const random = Math.floor((Math.random() * listaAmigos.length));
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es : ${amigoSecreto}</li>`;


};




