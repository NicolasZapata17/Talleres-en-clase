var num = 157;
var SiEsPrimo = true;

for(i=2; i<num/2; i++){
    if(num % i === 0){
        SiEsPrimo = false;
    }
}
if(SiEsPrimo){
    console.log("Si es numero primo: " + num)
}else{
    console.log("No es numero primo: " + num)
}
