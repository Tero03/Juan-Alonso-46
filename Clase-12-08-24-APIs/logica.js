document.getElementById('cargando').innerHTML=('cargando...')
const imagen=document.getElementById('imagen-usuario')

console.log("Logica conectada");
fetch('https://randomuser.me/api/?results=2') 
.then(response=>response.json())
.then(data=>{

    const usuario=data.results[0]
    console.log(usuario)

    document.getElementById('cargando').innerHTML=("")

    document.getElementById("cedula").value=usuario.id.value || 'Sin valor'
    document.getElementById("nombres").value=`${usuario.name.first } ${usuario.name.last}` || 'Sin valor'
    document.getElementById("correo").value=usuario.email || 'Sin valor'
    document.getElementById("username").value=usuario.login.username || 'Sin valor'

    const imagenUsuario=document.createElement('img')
    imagenUsuario.src=usuario.picture.medium
    imagen.appendChild(imagenUsuario)

})


.catch(error =>{
    console.log('error'.error);
})