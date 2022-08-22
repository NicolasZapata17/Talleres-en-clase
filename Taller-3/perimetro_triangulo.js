var lado_izquierdo = 20;
var lado_Derecho = 30;
var base = 10;

var total = lado_izquierdo+lado_Derecho+base;

if(lado_Derecho===lado_izquierdo===base){
    console.log("El perimetro es " + total + " y su triangulo es equilatero.")
}else{
    if(lado_Derecho===lado_izquierdo && base<lado_Derecho){
        console.log("El perimetro es " + total + " y su triangulo es isosceles.")
    }else{
        console.log("El perimetro es " + total + " y su triangulo es Escaleno.")
    }
}


