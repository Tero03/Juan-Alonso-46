console.log("Logica storage.");

const usuarioGuardado=localStorage.getItem(`usuario`);

document.getElementById(`titulo`).innerHTML=`Bienvenido ${usuarioGuardado}`;