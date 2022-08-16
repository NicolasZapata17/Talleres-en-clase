var Nombre = "Laura";
var Apellido = "Celis";
var Documento = 123456789;
var Nota = 5;

const respuesta = " Su nota es de: " 

if (Nombre && Apellido && Documento && Nota >= 3.5 && Nota<=5){
    console.log( Nombre + " " + Apellido + respuesta + Nota + " " + "Aprobo")
}else {
    if (Nombre && Apellido && Documento && Nota < 3.4 && Nota>=0){
        console.log (Nombre + " " + Apellido + respuesta + Nota + " " + "Reprobo")
    }else {
        console.log ("Error ingrese los valores")
    }
}