firstAdd=true;
starterTable=document.querySelector("table tbody").innerHTML;

function addInfo(){

    product=document.getElementById(`product`).value.trim();
    cost=document.getElementById(`cost`).value;
    amount=document.getElementById(`amount`).value;

    


    if(product!=="" && cost!=="" && amount!=="" ){
        if(isNaN(product)){
            if(cost<=200){
                alert("Ingrese un precio valido (minimo 500 pesos o mas)");
            }else{
                if(amount<=0 || amount>200){
                    alert("Ingrese una cantidad razonable por favor")
                }else{
    
    table=document.querySelector("table tbody");
    
    if(firstAdd){
        table.innerHTML="";
        firstAdd=false;
    }
    //console.log(product)
    row=table.insertRow();

    boxProduct=row.insertCell(0);
    boxCost=row.insertCell(1);
    boxAmount=row.insertCell(2);
    boxTotal=row.insertCell(3).textContent=cost*amount;

   

    boxProduct.textContent=product;
    boxCost.innerHTML=cost;
    boxAmount.innerHTML=amount;
    

    document.getElementById("product").value=""
    document.getElementById("cost").value=""
    document.getElementById("amount").value="" 
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