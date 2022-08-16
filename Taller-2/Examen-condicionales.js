var masa = 50;
var planeta = "Tierra";
var grav_marte = 3.711;
var grav_tierra = 9.81;
var peso1 = masa * grav_marte;
var peso2 = masa * grav_tierra;

if(planeta == "Marte"){
    console.log("Su peso en marte es: " + peso1.toFixed(4))
}else{
    if(planeta == "Tierra"){
        console.log("Su peso en la tierra es: " + peso2.toFixed(4))
    }else{
        console.log("Ingrese un valor adecuado")
    }
}
