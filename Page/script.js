// function validar (){
//     var elementouno = document.getElementById("firtsname");
//     var elementodos = document.getElementById("lastname");
//     alert(elementouno, elementodos);
// }


function bebida(){
    var cocaCola = document.getElementById("radio1")
    var pepsi = document.getElementById("radio2")
    var postobon = document.getElementById("radio3")
    var Calorias = document.getElementById("Calorias")

    if (cocaCola.checked) {
        Calorias.innerHTML = "Las calorias de la CocaCola son: 100"
    }else{
        if (pepsi.checked) {
            Calorias.innerHTML = "Las calorias de la Pepsi son: 300"
    }else{
        Calorias.innerHTML = "Las calorias de la Postobon son: 200"
    }
    }
}
    // if (cocaCola.checked) {
    //     alert("Usted selecciono Coca-Cola")
    // }else{
    //     if(pepsi.checked){
    //         alert("Usted selecciono Pepsi")
    //     }else{
    //         alert("Usted selecciono Postobon")
    //     }
    // }
    // const cocaCola = radio1.innerHTML;
    // radio.innerHTML = <div><p>"Las calorias de la cocacola son: 100"</p></div>;