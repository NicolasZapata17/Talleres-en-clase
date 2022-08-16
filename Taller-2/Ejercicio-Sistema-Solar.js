var planeta = "Tierra";


const respuesta = "El planeta es ";


if(planeta=="Mercurio"){
    console.log(respuesta + planeta + " " + "esta en la posición: 1")
}else{
    if(planeta=="Venus"){
        console.log(respuesta + planeta + " " + "esta en la posición: 2")
    }else{
        if(planeta=="Tierra"){
            console.log(respuesta + planeta + " " + "esta en la posición: 3")
        }else{
            if(planeta=="Marte"){
                console.log(respuesta + planeta + " " + "esta en la posición: 4")
            }else {
                if(planeta=="Jupiter"){
                    console.log(respuesta + planeta + " " + "esta en la posición: 5")
                }else{
                    if(planeta=="Saturno"){
                        console.log(respuesta + planeta + " " + "esta en la posición: 6")
                    }else{
                        if(planeta=="Urano"){
                            console.log(respuesta + planeta + " " + "esta en la posición: 7")
                        }else{
                            if(planeta=="Neptuno"){
                                console.log(respuesta + planeta + " " + "esta en la posición: 8")
                            }else{
                                if(planeta=="Pluton"){
                                    console.log(respuesta + planeta + " " + "esta en la posición: 9")
                                }else{
                                    console.log("Ingresa un planeta de nuestro sistema solar")
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
