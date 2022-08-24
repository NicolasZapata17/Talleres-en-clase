var arreglo = [1, "true", true, 5, 8];
console.log (arreglo[3])

var fruta = "manzana";
arreglo.push(fruta);
console.log(arreglo);

arreglo.splice(3);
console.log(arreglo);


var n = arreglo.length;
for (i=0; i<n; i++){
    console.log(arreglo[i]);
}