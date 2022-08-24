var arreglo = [-111, 14, 2, -55, 8];
var n = arreglo.length;
var suma = 0;

for(i=0; i<n; i++){
    if(arreglo[i]>=0){
        suma = suma + arreglo[i];
    }
}
console.log(suma)
    