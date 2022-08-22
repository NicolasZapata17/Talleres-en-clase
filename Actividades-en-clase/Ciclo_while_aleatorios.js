var num = parseInt(Math.random()*7);
console.log("El primer valor generado es: "+num);
var iteraciones = 0;
while(num!=5){
    console.log("El número no es igual a 5: "+num);
    num = parseInt(Math.random()*7);
    iteraciones = iteraciones + 1 ;
}
console.log("El número generado es: "+num);
console.log("En total se ejecutaron "+iteraciones+ " iteraciones");

