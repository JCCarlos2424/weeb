

        var  servicio,forma,frecuente,costo;
        alert=("servicios disponibles");

        servicio=parseInt(prompt("ingrese\n 1 para alisado\n 2- uñas\n 3-tintes \n 4-Depilado \n 5-facial")+"<br>");
        while(servicio<1|| servicio>5)
        {
       servicio=parseInt(prompt("ingrese correctamente\n 1 para alisado\n 1- uñas \n 2- tintes\n 4-Depilado \n 5-facial")+"<br>");

        }
        forma=parseInt(prompt("ingrese la forma de pago correctamente \n 1- credito \n 2_ efectivo")+"<br>");
        while(forma<1 || forma>2)
        {

forma=parseInt(prompt("Ingrese la forma de pago correctamente<br>")+"<br>");

        }


        {

frecuente=parseInt(prompt("es cliente frecuente\n 1-si\ 2-no")+"<br>")

        }

//procesos
switch(servicio)
{
    case 1:
        {
        costo=50;
        break;
        }


    case 2:
     {   
        costo=25;
        break;
      }
      case 3:
     {   
        costo=60;
        break;
      }
      case 4:
     {   
        costo=40;
        break;
      }


    default:
    {
        costo=35;
        break
         }
}//fin sw

    //impresion
    if(forma==1 &&  servicio==1)
{

    document.write("usted se hizo alisado"+"<br>");

    document.write("el costo inicial del servicio es de"+costo+"<br>");
    document.write("se le hara un recargo del 10%"+(costo*0.10).toFixed(2)+"<br>");
    document.write("el pago total sera de "+(costo*1.10)+"<br>");

}


else if(forma==1 && servicio==2)
{

document.write("usted se hizo las uñas "+"<br>");

document.write("el costo inicial del servicio es de"+costo+"<br>");
document.write("se le hara un recargo del 10%"+(costo*0.10)+"<br>");
document.write("el pago total sera de "+(costo*1.10)+"<br>");

}
else if(forma==1 && servicio==3)
{

    document.write("usted se hizo tinte<br>"+"<br>");

document.write("el costo inicial del servicio es de"+costo+"<br>");
document.write("se le hara un recargo del 10%"+(costo*0.10)+"<br>");
document.write("el pago total sera de "+(costo*1.10)+"<br>");

}
else if(forma==1 && servicio==4)

{

    document.write("usted se hizo Depilado "+"<br>");

document.write("el costo inicial del servicio es de"+costo+"<br>");
document.write("se le hara un recargo del 10%"+(costo*0.10)+"<br>");
document.write("el pago total sera de "+(costo*1.10)+"<br>");

}

else if(forma==1 && servicio==5)

{

    document.write("usted se hizo Facial<br>"+"<br>");

document.write("el costo inicial del servicio es de"+costo+"<br>");
document.write("se le hara un recargo del 10%"+(costo*0.10)+"<br>");
document.write("el pago total sera de "+(costo*1.10)+"<br>");




}
//Descuento





if(forma==1 &&  servicio==1 && frecuente==1)
    {
    
        document.write("usted se hizo un alisado"+"<br>");
        document.write("Usted ha cancelado con tarjeta de credito "+"<br>");
        document.write("se le hara un recargo del 10%"+(costo*0.10)+"<br>");
        document.write("Gracias por ser un cliente frecuente se le hara un descuento del 25% "+"<br>");
        document.write("el pago total sera de "+(costo*1.10)+"<br>"+"Pero con el descuento seria de " +(costo-0.25)+"<br>" );
    
    }
    
    
    else if(forma==1 && servicio==2  && frecuente==1)
    {
    
        document.write("usted se hizo las uñas "+"<br>");
        document.write("Usted ha cancelado con tarjeta de credito <br>");
        document.write("se le hara un recargo del 10%"+(costo*0.10)+"<br>");
        document.write("Gracias por ser un cliente frecuente se le hara un descuento del 25%")+"<br>";
        document.write("el pago total sera de "+(costo*1.10)+"<br>"+"Pero con el descuento seria de " +(costo-0.25)+"<br>");
    
    }
    
    
    else if(forma==1 && servicio==3 && frecuente==1)
    {
    
        document.write("usted se hizo las tinte"+"<br>");
        document.write("Usted ha cancelado con tarjeta de credito <br>"+"<br>");
        document.write("se le hara un recargo del 10%"+(costo*0.10)+"<br>");
        document.write("Gracias por ser un cliente frecuente se le hara un descuento del 25%<br>");
        document.write("el pago total sera de "+(costo*1.10)+"<br>"+"Pero con el descuento seria de " +(costo-0.25)+"<br>");
    
    
    }

    else if(forma==1 && servicio==4  && frecuente==1)
    
    {
    
        document.write("usted se hizo un Depilado"+"<br>");
        document.write("Usted ha cancelado con tarjeta de credito"+"<br>");
        document.write("se le hara un recargo del 10%"+(costo*0.10)+"<br>");
        document.write("Gracias por ser un cliente frecuente se le hara un descuento del 25% <br>");
        document.write("el pago total sera de "+(costo*1.10)+"<br>"+"Pero con el descuento seria de" +(costo-0.25)+"<br>");
    
    }
    
    else if(forma==1 && servicio==5  && frecuente==1)

    {
    
        document.write("usted se hizo un Facial"+"<br>");
        document.write("Usted ha cancelado con tarjeta de credito"+"<br>");
        document.write("se le hara un recargo del 10%"+(costo*1.10)+"<br>");
        document.write("Gracias por ser un cliente frecuente se le hara un descuento del 25%"+"<br>");
        document.write("el pago total sera de "+(costo*1.10)+"<br>"+"Pero con el descuento seria de " +(costo-0.25)+"<br>");
    
  
    
    }
    







