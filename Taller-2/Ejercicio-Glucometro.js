var glucometria = 11;

const resultado = "Las unidades de la insulina son: ";

if (glucometria >= 7.7 && glucometria <= 10){
    console.log(resultado + " " + 4)
}else{
    if (glucometria >= 10 && glucometria <= 12.2){
        console.log(resultado + " " + 6)
    }else{
        if (glucometria >= 12.3 && glucometria <= 14.4){
            console.log(resultado + " " + 8)
        }else{
            if (glucometria >= 14.5 && glucometria <= 16.6){
                console.log(resultado + " " + 10)
            }else{
                if (glucometria >= 16.7 && glucometria <= 18.8){
                    console.log(resultado + " " + 12)
                }else {
                    if (glucometria >= 18.9 && glucometria <= 22.1){
                        console.log(resultado + " " + 14)
                    }else{
                        if(glucometria >= 22.2){
                            console.log(resultado + " " + 16)
                        }else{
                            console.log("Ingresa una unidad Valida")
                        }
                    }
                }
            }
        }
    }
}
