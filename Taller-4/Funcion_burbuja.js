var array = [03,07,11,02,09,01,08,05,10,06,04];
var n = array.length;
var k = 0;
var bur = 0;
for (k = 1; k < n; k++) {
    for (i = 0; i < (n - k); i++) {
    if (array[i] > array[i + 1]) {
        bur = array[i];
        array[i] = array[i + 1];
        array[i + 1] = bur;
    }
}
console.log(array); 
}









// function burbuja (array){
//     var array = [03,07,11,02,09,01,08,05,10,06,04];
//     // var k = 0;
//     // var bur = 0;
//         for (i = 0; i < (array.length-1); i++){
//             for (j = 0; j < (array.length-i); j++) {
//                 if (array[j] > array[j + 1]) {
//                     aux=array[j];
//                     array[j]=array[j+1];
//                     array[j+1]=aux;
//                     // bur = array[i];
//                     // array[i] = array[i + 1];
//                     // array[i + 1] = bur;
//                 }
//             }
//         }
//         return(array)
//     }
//     var array = [03,07,11,02,09,01,08,05,10,06,04];
//     array = burbuja(array)
//     console.log(array)