console.log("Logica conectada.");

const user = "Admin";
const password = "123";

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