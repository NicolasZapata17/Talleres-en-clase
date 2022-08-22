function generate(){
    let num = parseInt(Math.random()*100);
    let num_2 = parseInt(Math.random()*100);
    let suma=num+num_2;
    let resta=num-num_2;
    let multiplicar = num*num_2;
    let divicion = num/num_2;

    console.log("Numero aleatorio: " + num + "-"+ num_2)

    console.log("Esta es la suma: " + suma)
    console.log("Esta es la resta: " + resta)
    console.log("Esta es la multilicacion: " + multiplicar)
    console.log("Esta es la divicion: " + divicion)
}
generate()