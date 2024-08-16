function registrarDatos() {
  const cedula = document.getElementById("dni").value;
  const nombre = document.getElementById("nombres").value;
  const apellido = document.getElementById("apellidos").value;
  const telefono = document.getElementById("tel").value;
  const tipoCliente = document.getElementById("tipoCliente").value;

  const dataUsuario = {
    cedula: cedula,
    nombres: nombre,
    apellidos: apellido,
    telefono: telefono,
    tipoCliente: tipoCliente,
  };
//let
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  usuarios.push(dataUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  alert("Datos registrados");
}
