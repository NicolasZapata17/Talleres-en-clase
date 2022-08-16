var pocision = 3;


const respuesta = "El planeta es ";


if(pocision==1){
    console.log(respuesta + "Mercurio")
}else{
    if(pocision==2){
        console.log(respuesta + "Venus")
    }else{
        if(pocision==3){
            console.log(respuesta + "Tierra")
        }else{
            if(pocision==4){
                console.log(respuesta + "Marte")
            }else {
                if(pocision==5){
                    console.log(respuesta + "Jupiter")
                }else{
                    if(pocision==6){
                        console.log(respuesta + "Saturno")
                    }else{
                        if(pocision==7){
                            console.log(respuesta + "Urano")
                        }else{
                            if(pocision==8){
                                console.log(respuesta + "Neptuno")
                            }else{
                                if(pocision==9){
                                    console.log(respuesta + "Pluton")
                                }else{
                                    console.log("Ingresa un valor valido")
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
