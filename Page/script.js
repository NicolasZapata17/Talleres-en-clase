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
    var Precio = document.getElementById("Precio")
    

    if (cocaCola.checked) {
        Calorias.innerHTML = `<label>¿CocaCola Zero?</label>
        <br>
        <label><input type='radio' name='cocaColaName' id="CocaColaZero" class='form-check-input'>si</label>
        <label><input type='radio' name='cocaColaName' id="CocaColaTradicional" class='form-check-input'>no</label>`;
        
        // Precio.innerHTML = `<p>El precio de la tradicional es: 5000</p> `
        // <input type='radio' name='a' class='form-check-input'
        // <label class="form-check-label" >Tradicional</label>
        // <h5>El precio de la tradicional es: 5000<h5>

        // <input type='radio' name='a' class='form-check-input'
        // <label class="form-check-label" >Cero</label>
        // <h5>El precio de la cero es: 4000<h5></h5>
    }else{
        if (pepsi.checked) {
            Calorias.innerHTML = "Las calorias de la Pepsi son: 300"
    }else{
        Calorias.innerHTML = "Las calorias de la Postobon son: 200"
    }
    }
}

    // Uso de alerts
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