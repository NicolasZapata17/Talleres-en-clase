//Se calcula el numero mayor dentro del array
let arreglo = [111, 14, 2, 555, 8];
let n = arreglo.length;
var mayor = arreglo[0];

for(i=0; i<n; i++){
    if(arreglo[i]>mayor){
        mayor = arreglo[i];
    }
}
console.log("El numero mayor es: " + mayor)


//Se calcula el numero menor dentro del array
let arreglo_2 = [-111, 14, 2, 555, 8];
let n_2 = arreglo.length;
var menor = arreglo[0];

for(i=0; i<n_2; i++){
    if(arreglo_2[i]<menor){
        menor = arreglo_2[i];
    }
}
console.log("El numero menor es: " + menor)

