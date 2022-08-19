//Ejercicio Nicolas Zapata sobre el promedio de un numero
var n=50;
var impar = 0;
for(i=0; i<=n; i++){
    impar=impar+1*50
}
console.log("El promedio del numero es: " + impar/100)

//El ejercicio de arriba es mio


//Esta es la solucion del profesor Albeiro Montes
var n = 100;
var suma = 0;
cuantos_impares = 0;
for(i=0; i<=n; i++){
    if(i%2==0){
    }else{
        suma = suma + i;
        cuantos_impares = cuantos_impares + 1;
    }
}
var promedio = suma / cuantos_impares;
console.log("El promedio de impares es: " + promedio)

