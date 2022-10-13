function matrizDinamica(matriz, fil, col){
    for(var i=0; i<fil; i++){
        matriz[i] = [];
        for(var j=0; j<col; j++){
            matriz[i][j] = Math.floor(Math.random() * 100000);
        }
    }
    return matriz;
}
var filas = 2;
var columnas = 2;
var matrizVentasAnioUno = [];
var matrizVentasAnioDos = [];
var matrizMatPrimaAnioUno = [];
var matrizMatPrimaAnioDos = [];

console.log(matrizDinamica(matrizVentasAnioUno, filas, columnas));
console.log(matrizDinamica(matrizVentasAnioDos, filas, columnas));
console.log(matrizDinamica(matrizMatPrimaAnioUno,filas, columnas));
console.log(matrizDinamica(matrizMatPrimaAnioDos,filas, columnas));
