// Las "llaves" de encriptación que utilizaremos son las siguientes:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Requisitos:

// - Debe funcionar solo con letras minúsculas
// - No deben ser utilizados letras con acentos ni caracteres especiales
// - Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original. 
// 1 Link a HTML page with our JS script
console.log("We´re on line")
// 2 Create functions a listen an onclik event 
// 3 Capture the text on the text area input 

function encriptar(){
    console.log("Listen an event with encriptar button")
    let capture = document.getElementById("textInput").value.toLocaleLowerCase()
    console.log(capture)
    let translate = "";
       for (let i = 0; i < capture.length; i++) {
      if(capture[i] === "a"){
        translate = translate +"ai"
        }
       else if(capture[i] === "e"){
        translate = translate +"enter"
       }
       else if(capture[i] === "i"){
        translate = translate +"imes"
        }
       else if(capture[i] === "o"){
        translate = translate +"ober"
       }
       else if(capture[i] === "u"){
        translate = translate +"ufat"
       }
       else {
        translate = translate + capture[i]
       }
    
    }
    document.getElementById("resultText").innerText=translate
    document.getElementById("textInput").value=""
    document.getElementById("textInput").reset()
    
    
    
}


function desencriptar(){
    console.log("Listen an event with desencriptar button")
    let captureDesencriptado = document.getElementById("resultText").value
    console.log(captureDesencriptado)
    
    let retranslate = "";
    for (let i = 0; i < captureDesencriptado.length; i++) {
   if(captureDesencriptado[i] === "a"){
     retranslate = retranslate +"a"
     i = i + 1
     }
    else if(captureDesencriptado[i] === "e"){
     retranslate = retranslate +"e"
     i = i +4
    }
    else if(captureDesencriptado[i] === "i"){
     retranslate = retranslate +"i"
     i = i +3
     }
    else if(captureDesencriptado[i] === "o"){
     retranslate = retranslate +"o"
     i = i +3
    }
    else if(captureDesencriptado[i] === "u"){
     retranslate = retranslate +"u"
     i = i +3
    }
    else {
     retranslate = retranslate + captureDesencriptado[i]
    }

 }
 document.getElementById("textInput").innerText=retranslate
 document.getElementById("resultText").value=""
 document.getElementById("resultText").reset()

 
//  document.getElementById("textInput").innerText=retranslate
}

function copiar(){
    console.log("Listen an event with copy button")
    let copyText = document.getElementById("resultText").value
    navigator.clipboard.writeText(copyText)
    // Metodo antiguo
    // copyText.select()
    // document.execCommand("copy")
}