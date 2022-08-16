var ValorCompra = 255.000;
var desc1 = ValorCompra*0.05;
var desc2 = ValorCompra*0.10;
var total1 = ValorCompra-desc1;
var total2 = ValorCompra-desc2;

if (ValorCompra>=80.000 ){
    console.log("Su Valor total de la compra es: " + total1.toFixed(3))
}else{
    if(ValorCompra>=250.000){
        console.log("Su Valor total de la compra es: " + total2.toFixed(3))
    }else{
        console.log("No aplica ningún descuento")
    }
}


//En la tienda ABC se genera un descuento del 5% si las compras superan el valor
//de $80.000 y se otorga el 10% cuando las ventas superan $250.000

