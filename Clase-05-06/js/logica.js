console.log("Logica inicio sesion.");
let contador=0;

const usuario = "admin";
const contraseña = "123";

const frutas = [`Manzana`, `Pera`, `Sandia`];

function buttonTest() {

    let user = document.getElementById("inputUser").value.toLocaleUpperCase();
    let password = document.getElementById("inputPassword").value;


    if (user == "" || password == "") {
        alert("Rellene las casillas por favor.");
    } else {
            if (usuario.toLocaleUpperCase() == user && contraseña == password) {
                //Logeado 
                setUser();
                window.open(`localStorage.html`);
                console.log(`Sesion iniciada.`);
                //document.getElementById("wc").innerHTML(`Bienvenido ${user}`);
            } else {
                bloquearIntentos();
                console.log(`Error de credenciales.`);
            }
    }
}

//bloquear el acceso
function bloquearIntentos(){
    let contadorStorage=localStorage.getItem(`contador`)||0;

    if(contadorStorage==3){
        alert("Numero de intentos alcanzado, pruebe mas tarde.");
    }else{
        contarIntentos();
    }
}

//contar los fallos al iniciar sesion
function contarIntentos(){
    let contadorStorage=localStorage.getItem(`contador`)||0;
    contadorStorage++
    setContador(contadorStorage);
}

function setContador(contador) {
    localStorage.setItem(`contador`, contador);
}

function unlock(){
    localStorage.removeItem(`contador`);
}

function setUser() {
    localStorage.setItem(`usuario`, usuario);
}

function imprimirArray() {

    let posicion = document.getElementById(`array`).value;
    console.log(localStorage.getItem(`arregloFrutas`));

    if (posicion >= frutas.length) {
        console.log("Error.")
    } else {
        console.log(frutas[posicion]);
        limpiar();
    }

}


function limpiar() {
    document.getElementById(`array`).value = " ";
    document.getElementById(`array`).focus();
}


function agregarFruta() {

    let fruitName = document.getElementById(`nombreFruta`).value.toLocaleUpperCase();
    fruitName = fruitName.trim();

    if (fruitName.trim() !== "") {
        frutas.push(fruitName);

        saveStorage(frutas);

        console.log(`${fruitName}`);
        document.getElementById(`nombreFruta`).focus;
    } else {
        console.log("Nombre invalido.");
    }
}


function eliminarFruta() {
    let posicion = document.getElementById('array').value;
    frutas.splice(posicion, 1);
    console.log(frutas);
}


function saveStorage(arreglo) {
    localStorage.setItem(`arregloFrutas`, arreglo);
    console.log("Guardado en storage");
}
