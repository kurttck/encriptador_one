
let text='';
let newSentence='';


/* ---------------------- boton encriptar ------------------------------- */

document.getElementById("btn_encriptar").addEventListener('click', function(event){
    event.preventDefault(); 
    text = document.getElementById("text").value;
    if(/[^a-z\s]/.test(text)){
        alert("Ingresa solo letras minúsculas sin acento.");
    }else{
        encriptarText();
    }
    
});

//Encripta el Texto
function encriptarText(){
    newSentence='';
    for(i=0;i<text.length;i++){
        let letra=text[i];
        switch(letra){
            case 'a':newSentence+='ai';break;
            case 'e':newSentence+='enter';break;
            case 'i':newSentence+='imes';break;
            case 'o':newSentence+='ober';break;
            case 'u':newSentence+='ufat';break;
            default: newSentence+=letra;break;
        }   
    }

    modificarAreaDeSalida();
}

/* ------------------------------ BOTON DESENCRIPTAR ------------------------------------ */

//Desencriptar el Texto
document.getElementById("btn_desencriptar").addEventListener('click', function(event){
    event.preventDefault(); 
    text = document.getElementById("text").value;
    if(/[^a-z\s]/.test(text)){
        alert("Ingresa solo letras minúsculas sin acento.");
    }else{
       newSentence=desencriptarText(text);
       modificarAreaDeSalida();
    }
    
});

function desencriptarText(sentence){

    const rules={
        "ai" : "a",
        "enter":"e",
        "imes":"i",
        "ober":"o",
        "ufat":"u"
    };

    for(let [clave, valor] of Object.entries(rules)){
        let regex = new RegExp(clave,"g");
        sentence=sentence.replace(regex, valor);
    }

    return sentence;
}


/* ------------------------------- BOTON COPIAR ----------------------------------------- */


document.getElementById('buttonCopy').addEventListener('click', function(event){
    event.preventDefault();
    copyText();
});

function copyText(){
    let text = document.getElementById('mensaje_salida').innerText;
    navigator.clipboard.writeText(text)
    .then(()=>{
        alert('Texto copiado al portapapeles');
    })
    .catch(err =>{
        console.error('Error al copiar el texto: ', err);
    });
}


function modificarAreaDeSalida(){
    ocultarElemento('mensaje__centro__contenido');

    let mensajeSalida=document.getElementById('mensaje_salida');
    mensajeSalida.style.display='block';
    mensajeSalida.textContent=newSentence;

    document.getElementById('buttonCopy').style.display='block';

    let mensajeCentro=document.getElementById('mensaje_centro');
    mensajeCentro.style.flexDirection='column';
    mensajeCentro.style.justifyContent='space-between';
};


function ocultarElemento(elemento){
    let element=document.getElementById(elemento);
    element.style.display='none';
    
}
