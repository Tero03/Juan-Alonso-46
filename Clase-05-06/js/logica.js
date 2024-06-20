console.log("Logica conectada.");

const user = "Admin";
const password = "123";

const frutas= [`Manzana`, `Pera`, `Sandia`];

function buttonTest() {

let usu = document.getElementById("inputUser").value;
let pass = document.getElementById("inputPassword").value;

    if (usu == "" || pass == "") {
        alert("Rellene las casillas por favor.");
    } else {
        if (user == usu && password == pass) {
            window.open(`calculadora.html`);
            console.log(`Sesion iniciada.`);
            document.getElementById("wc").innerHTML(`Bienvenido ${user}`);
        } else {
            console.log(`Error de credenciales.`);
        }
    }

}


function imprimirArray(){
    
    let posicion=document.getElementById(`array`).value;
    console.log(localStorage.getItem(`arregloFrutas`));
    
    if(posicion>=frutas.length){
        console.log("Error.")
    }else{
    console.log(frutas[posicion]);
    limpiar();
}

}


function limpiar(){
    document.getElementById(`array`).value=" ";  
    document.getElementById(`array`).focus();
}


function agregarFruta(){

    let fruitName=document.getElementById(`nombreFruta`).value.toLocaleUpperCase();
    fruitName=fruitName.trim();

    if(fruitName.trim()!==""){
        frutas.push(fruitName);

        saveStorage(frutas);

        console.log(`${fruitName}`);
        document.getElementById(`nombreFruta`).focus;
    }else{
        console.log("Nombre invalido.");
    }
}


function eliminarFruta(){
    let posicion=document.getElementById('array').value;
    frutas.splice(posicion,1);
    console.log(frutas);
}


function saveStorage(arreglo){
    localStorage.setItem(`arregloFrutas`, arreglo);
    console.log("Guardado en storage");
}
