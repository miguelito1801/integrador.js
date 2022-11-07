


let Resumen = document.querySelector("#botonResumen");
let cantidad = document.querySelector("#cantidad")
let categoria=document.querySelector("#seleccion");
Resumen.addEventListener("click", function(e){
    e.preventDefault();   
    let precio = 200 * parseInt(cantidad.value) ;
    let precioFinal=0;
  
    if (categoria.value=="estudiante") {
        precioFinal = precio - (precio * 0.8);        
    }
    else if ( categoria.value == "trainee") {
        precioFinal = precio - ( precio * 0.5);
        
    }
    else{
        precioFinal = precio -( precio * 0.15);
    }
  
    document.querySelector("#total").textContent =   precioFinal;

    })