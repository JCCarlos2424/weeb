var inicio=parseInt(prompt("ingrese el valor inicial de la tabla"));
var fin=parseInt(prompt("ingrese el valor final de la tabla"));




function tablita(inicio,fin)
{
    var valor=parseInt(prompt("ingrese que tabla de multipliocar quiere obtener"))
    if (inicio<=fin)

        {
            document.write("mostrando el contenido en forma ascendente <br>")
    for (let f=inicio; f<= fin; f++){
        var tabla=f*valor;
        document.write(f+ "*"+valor+"="+tabla+'<br>')


        
    }

}
else {
    document.write("mostrando el contenidon de forma descendente  <br>")
    for (let f=inicio; f>= fin; f--){
        var tabla=f*valor;
        document.write(f+ "*"+valor+"="+tabla+'<br>')

}
}
}