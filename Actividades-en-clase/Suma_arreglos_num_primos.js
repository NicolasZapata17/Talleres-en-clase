let arreglo = [4, 11, 9, 7, 12];
let arreglo_2 = [1, 2, 5, 8, 11];
let n = arreglo.length;
let suma = 0;

for(i=0; i<n; i++){
    suma=arreglo[i]+arreglo_2[i];
    if(suma % i == 0){
        console.log("No es numero primo " + suma)
    }else{
        console.log("Es numero primo " + suma)
    }
}

