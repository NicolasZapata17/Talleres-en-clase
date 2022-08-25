var arreglo = [20, 21, 23, 25, 23];
var n = arreglo.length;
var suma = 0;
var promedio;
var resta = 0;
var potencia = 0;
var sumaPotencia = 0;
var raiz = 0;
for (i = 0; i < n; i++) {
    suma += arreglo[i];
}
promedio = suma / 5;
for (i = 0; i < n; i++) {
    resta = arreglo[i] - promedio;
    potencia = Math.pow(resta, 2);
    var sumaPotencia =sumaPotencia  + potencia;    
}
var sumaPotencia = sumaPotencia / (n-1);
raiz = Math.sqrt(sumaPotencia);
console.log(raiz);