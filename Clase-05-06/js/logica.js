console.log("Logica inicio sesion.");
let contador=0;

const usuario = "admin";
const contraseña = "123";

let usuarios=[
    {"usuario":"Oscar", "clave":"1234", "edad":"15"},
    {"usuario":"admin", "clave":"4567", "edad":"20"},
    {"usuario":"otro", "clave":"1111", "edad":"18"}
]

const frutas = [`Manzana`, `Pera`, `Sandia`];

function pruebaBoton(){

    let usuariosEdad=usuarios.map(usuario=>{

        return{
            ...usuario,
            "edad":usuario.edad>=18 ? "Mayor de edad" : "Menor de edad"
        }
    });



    console.log(usuariosEdad);

     //let frutasMayus=frutas.map(fruta=>fruta.toUpperCase());
   // console.log(frutasMayus);
    
}

/*function pruebaBoton(){

    let user = document.getElementById("inputUser").value;
    let password = document.getElementById("inputPassword").value;

    let buscarUsuario=usuarios.find(usuario=>usuario.usuario==user && usuario.clave==password );

    console.log(buscarUsuario);
}*/

/*function pruebaBoton(){

    let user = document.getElementById("inputUser").value.toLocaleUpperCase();
    let password = document.getElementById("inputPassword").value;

    let usuarioLogeado=usuarios.some(usuario=> usuario.usuario.toLocaleUpperCase()==user && usuario.clave==password);

    if(usuarioLogeado){

        setUser();
        window.open('localStorage.html');

    }else {
        bloquearIntentos();
        console.log(`Error de credenciales.`);
    }


}*/

/*function buttonTest() {

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
} */

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
