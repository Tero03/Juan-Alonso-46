let productos=[
    {"nombre":"Manzana", "precio":"800"},
    {"nombre":"Pera", "precio":"900"},
    {"nombre":"Piña", "precio":"1700"}
]

console.log(productos);

const selectProductos=document.getElementById(`productos`);
productos.forEach(element => {
    const option=document.createElement(`option`)
    option.value=element.precio
    option.text=element.nombre
    selectProductos.appendChild(option)
    
});

const tablaProductos=document.getElementById('tablaProducto');
const totalPagar=document.getElementById('total');

function agregarProducto(){
    
    const datosProducto=selectProductos.value;
    const cantidad=document.getElementById('cantidad').value;
    const subTotal=datosProducto*cantidad;
    //const nombreProducto=productos.find(p=>p.nombre===producto)

    const nombreProducto=selectProductos.options[selectProductos.selectedIndex].text;

    const fila=document.createElement('tr');

    const nomProduct=document.createElement('td');
    nomProduct.textContent=nombreProducto;
    fila.appendChild(nomProduct);

    const priceProduct=document.createElement('td');
    priceProduct.textContent=datosProducto
    fila.appendChild(priceProduct);

    const quantityProduct=document.createElement('td');
    quantityProduct.textContent=cantidad
    fila.appendChild(quantityProduct);

    const total=document.createElement('td');
    total.textContent=subTotal
    fila.appendChild(total);
    
    // const botonProduct=document.createElement('button');
    // botonProduct.textContent="boton"
    // fila.appendChild(botonProduct);

    const botonProduct=document.createElement('td');
    const botonBorrar=document.createElement('button')
    botonBorrar.textContent="borrar"
    botonBorrar.type="button"
    botonBorrar.className='btn btn-danger'
    botonBorrar.addEventListener('click',()=>{
        fila.remove();
        calcularTotal();
    });
    botonProduct.appendChild(botonBorrar);
    fila.appendChild(botonProduct);
    

    tablaProductos.appendChild(fila);

    calcularTotal();
}

function calcularTotal(){

    let total=0;

    // const filas=tablaProductos.getElementsByTagName('tr');

    // for (let i = 0; i < filas.length; i++) {
    //     const valorColumna = filas[i].getElementsByTagName('td');
        
    //     total+=parseInt(valorColumna[3].textContent);
        
    // }

    const filas=Array.from(tablaProductos.getElementsByTagName('tr'));

    filas.forEach(fila => {

        const valorColumna = fila.getElementsByTagName('td');
        total+=parseInt(valorColumna[3].textContent);
        
    });

    totalPagar.textContent=total;
}

