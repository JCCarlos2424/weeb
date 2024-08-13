
function calcular()
{
    let nombre=document.getElementById('name1').value;
    let edad=parseInt(document.getElementById('edad1').value);
    var genero=document.querySelector('input="sexo":checked').value;
    let aumento;
    aumento=edad+10;
    alert("Su edad aumentada es "+aumento)

    //imprimiendo la edad de acuerdo al genero
    if(genero=="masculino")
    {
        alert("excelente caballero, su edad aumentada es"+aumento);

    }
else 
alert ("excelente señorita, su edad aumentada es"+aumento)
}//fin calcular
