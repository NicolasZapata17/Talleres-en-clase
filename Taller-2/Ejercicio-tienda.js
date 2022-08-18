//var ValorCompra = 249.000;
//var desc1 = ValorCompra*0.05;
//var desc2 = ValorCompra*0.10;
//var total1 = ValorCompra-desc1;
//var total2 = ValorCompra-desc2;
//if (ValorCompra>=80.000 ){
//    console.log("Su Valor total de la compra es: " + total1.toFixed(3))
//}else{
//    if(ValorCompra>=250.000){
//        console.log("Su Valor total de la compra es: " + total2.toFixed(3))
//    }else{
//        console.log("No aplica ningún descuento")
//    }
//}


//En la tienda ABC se genera un descuento del 5% si las compras superan el valor
//de $80.000 y se otorga el 10% cuando las ventas superan $250.000



var Valor_total = 250001;
if(Valor_total<80000){
    console.log("No tiene descuento")
}else{
    if(Valor_total >=80000 && Valor_total<=250000){
        var subtotal = Valor_total*0.05;
        var total = Valor_total-subtotal;
        console.log("El valor de su compra es: " + total)
    }else{
        if(Valor_total>=250000){
            var subtotal = Valor_total*0.10;
            var total = Valor_total-subtotal;
            console.log("El valor de su compra es: " + total)
        }
    }
}