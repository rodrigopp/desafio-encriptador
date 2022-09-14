
function encriptar() {
    var texto = document.getElementById("inputTexto").ariaValueMax.toLowerCase();
    var nuevoTexto = "";
    for (var indice = 0; indice < texto.length; indice++) {
      
        if(texto[indice] == "e"){
           nuevoTexto = nuevoTexto + "enter"; 
        } 
        else if (texto[indice] == "i"){
          nuevoTexto = nuevoTexto + "imes";
        }    
        else if (texto[indice] == "a"){
          nuevoTexto = nuevoTexto + "ai";
        }    
        else if (texto[indice] == "o"){
          nuevoTexto = nuevoTexto + "ober";
        }    
        else if (texto[indice] == "u"){
          nuevoTexto = nuevoTexto + "ufat";
        }    
       else{ nuevoTexto = nuevoTexto + texto[indice]}          
    }
    
    document.getElementById("imgDer").style.display = none;
    document.getElementById("texto").style.display = none;
    document.getElementById("texto2").innerHTML=nuevoTexto;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";


    return nuevoTexto;
}


/* otra forma de hacerlo: var texto = document.getElementById("inputTexto").ariaValueMax.toLowerCase();
var texCifrado= texto.replace(/e/igm, "enter");
var texCifrado= texCifrado.replace(/o/igm, "ober");
var texCifrado= texCifrado.replace(/i/igm, "ines");
var texCifrado= texCifrado.replace(/a/igm, "ai");
var texCifrado= texCifrado.replace(/u/igm, "ufat");


(los img significan = i es para que afecte tanto mayusculas como minusculas
                      g es para todas las lineas de la oracion
                      m es para afectar a multiples lineas o parrafos)


*/