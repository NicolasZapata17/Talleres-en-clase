var num = parseInt(Math.random()*10);
var num_2 = parseInt(Math.random()*10);
var suma=num+num_2;
var resta=num-num_2;
var multiplicar = num*num_2;
if(num_2==0){
    console.log("no puede dividir sobre cero");
}else{
    var division = num/num_2;
    console.log("Esta es la division: " + division)
}

console.log("Numero aleatorio: " + num + "-"+ num_2)
console.log("Esta es la suma: " + suma)
console.log("Esta es la resta: " + resta)
console.log("Esta es la multilicacion: " + multiplicar)



