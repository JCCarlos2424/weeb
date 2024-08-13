
			var si,i,d,sf,n, Descuento,rol,rol1;
			var cgerente=0;
			var cOtro=0;
			var TotalSalarios=0;
			var TotalDescuento=0;
			var TotalDescuentoUniformes=0;

			document.write('<b>PLANILLA DE EMPLEADOS</b><br><br>');
			document.write('<table border=1>');
			document.write('<tr><td>Número obrero</td><td>Nombre Obrero</td><td>rol</td><td>Salario inicial</td><td>Descuento</td><td>Descuento uniforme</td><td>Salario final</td></tr>');
			for (i=1;i<=3;i++)
				{
					n=prompt('Digite el nombre del obrero número '+i+'');
					si=parseFloat(prompt("Digite el salario inicial del empleado"));
             while(si<=365)
                        { 
                            si=parseFloat(prompt("ingresa la cantidad de dolares arriba de 365"));
                        }
						rol=parseInt(prompt('digite el rol del empleado(1 para gerente, 2 para otro'));

					d=si*0.05;

					if(rol===1){
						Descuento=50;
						rol1='gerente';
						cgerente++;

					}else{
						Descuento=25;
						rol1='otro';
						cOtro++;

					}
					sf = si - d -  Descuento;
					TotalSalarios +=si;
					TotalDescuento +=d;
					TotalDescuentoUniformes +=Descuento





					
					document.write('<tr><td>'+i+'</td><td>'+n+'</td><td>$'+rol+'</td><td>$'+si+'</td><td>$'+d+'</td><td>$'+sf+'</td></tr>');



				}  


			document.write('</table>');
			document.write('<br><br>Monto total pagado en concepto de salarios:<br> $'+TotalSalarios.toFixed(2));
			document.write('<br><br>Monto total pagado en concepto de descuento:<br> $'+TotalDescuento.toFixed(2));
			document.write('<br><br>Monto total pagado en concepto de descuentos por uniforme:<br> $'+TotalDescuentoUniformes.toFixed(2));
			document.write('<br><br>Cantidad de gerentes que tiene la empresa:<br> $'+cgerente);
			document.write('<br><br>CANTIDAD DE OTRO TIPO DE EMPLEADOS:</b>'+cOtro);

			
