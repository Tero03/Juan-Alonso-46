firstAdd=true;
starterTable=document.querySelector("table tbody").innerHTML;

function addInfo(){

    product=document.getElementById(`product`).value.trim();
    cost=document.getElementById(`cost`).value;
    discount=document.getElementById(`discount`).value;

    


    if(product!=="" && cost!=="" && discount!=="" ){
        if(isNaN(product)){
            if(cost<=9999){
                alert("Ingrese un precio valido (minimo 10000 pesos o mas.)");
            }else{
                if(discount>100 || discount<0){
                    alert("Ingrese un descuento valido por favor.")
                }else{
    
    table=document.querySelector("table tbody");
    
    if(firstAdd){
        table.innerHTML="";
        firstAdd=false;
    }
    discountPrice=cost*(discount/100);
    totalPrice=cost-discountPrice;
    row=table.insertRow();

    boxProduct=row.insertCell(0);
    boxCost=row.insertCell(1);
    boxDiscount=row.insertCell(2);
    boxTotal=row.insertCell(3);

   

    boxProduct.textContent=product;
    boxCost.innerHTML=cost;
    boxDiscount.innerHTML=discount;
    boxTotal.innerHTML=totalPrice;
    

    document.getElementById("product").value=""
    document.getElementById("cost").value=""
    document.getElementById("discount").value="" 
                }
            }
        }else{
            alert("No ingrese numeros en la casilla de productos")
        }
    }
    
    else{
    alert("Rellene las casillas.")
    }
}

function eraseInfo(){
    tbody=document.querySelector("table tbody");
    tbody.innerHTML=starterTable;
    firstAdd=true;
}