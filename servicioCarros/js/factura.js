let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let dataServicios=[
    {"id":"1", "nombre":"Lavado General", "precio":"20000"},
    {"id":"2", "nombre":"Polichada", "precio":"50000"},
    {"id":"3", "nombre":"Encerada", "precio":"40000"},
    {"id":"4", "nombre":"Lavado a presión", "precio":"70000"},
    {"id":"5", "nombre":"Cambio de Aceite", "precio":"25000"}
]

const selectTipoCliente=document.getElementById('tipoCliente');

//añade los clientes ingresados en usuarios.html

usuarios.forEach(element => {
    const option=document.createElement('option')
    option.value=element.tipoCliente
    option.text=`${element.nombres} ${element.apellidos}`
    selectTipoCliente.appendChild(option)
    
});


const selectServicios=document.getElementById('servicios');
dataServicios.forEach(element => {
    const option=document.createElement('option')
    option.value=element.precio
    option.text=element.nombre
    selectServicios.appendChild(option)
    
});

function calcularTotal(){
    let servicioMecanico=0;
    let repuestos=0;

    const valorServicio=parseInt(document.getElementById('servicios').value);
    const tipoCliente=document.getElementById('tipoCliente').value;
    servicioMecanico=parseInt(document.getElementById('mecanico').value);
    repuestos=parseInt(document.getElementById('repuestos').value);
    //let total=0;
    //console.log(`${tipoCliente}`);
    
    const total=tipoCliente==='n'?valorServicio+servicioMecanico+repuestos:(valorServicio+servicioMecanico+repuestos)*0.9;

    // const mecanicoValor=document.getElementById('mecanico').value;
    // const repuestosValor=document.getElementById('repuestos').value;

    // const dataFactura = {
    //     nombreCliente: usuarios.nombres,
    //     apellidoCliente: usuarios.apellidos,
    //     cedula:usuarios.cedula,
    //     clientePreferencial: usuarios.tipoCliente,
    //     servicios:[{
    //         servicio:dataServicios.nombre,
    //         precioServicio:dataServicios.precio
    //     }],
    //     mecanico:mecanicoValor,
    //     repuestos:repuestosValor,
    //     total:total

    //   };

    //   let factura=JSON.parse(localStorage.getItem("factura")) || [];
    //   factura.push(dataFactura);
    //   localStorage.setItem("factura", JSON.stringify(factura));

    // console.log(factura);
}