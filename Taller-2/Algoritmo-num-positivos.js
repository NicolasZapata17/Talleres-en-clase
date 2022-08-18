//Desarrolar un ejercicio que revice numeros positivos
//entre 0 y 100, determinar y escribir ¿Cuantos son menores
//de 15?¿cuantos estan entre 25 y 45?cuantos son mayores de 50?

//var  num = 100;
//for(i=0; i<=num; i++){
//   if(i<=15){ 
//            console.log("Hay 14 numeros antes de 15 ")
//    }else{
//        if(i>=25 && i<=45){
//            console.log("Hay 20 numeros entres 25 y 45 ")
//        }else{
//           console.log("Hay 50 numeros superiores a 50 ")
//        }
//    }
//}



var n = 100;
var men_15 = 0;
var Entre_25_a_45 = 0;
var Mayor_a_50 = 0;
for(i=1; i<n; i++){
    if(i<=15){
        men_15 = men_15 + 1;
    }else{
        if(i>25 && i<=45){
            Entre_25_a_45=Entre_25_a_45 + 1;
        }else{
            if(i>=50){
                Mayor_a_50 = Mayor_a_50 + 1;   
            }
        }
    }
}
console.log("Hay: " + men_15 + " " + "menores a 15")
console.log("Hay: " + Entre_25_a_45 + " " + "Entre 25 a 45")
console.log("Hay: " + Mayor_a_50 + " " + "Mayores a 50")

