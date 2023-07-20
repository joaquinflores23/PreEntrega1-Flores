// Pregunta email usuario

const telUsuario = Number(prompt('Hola, ingresa telefono celular'));

let acc = 0;


for (i = 0; i < telUsuario.toString().length; i++){
    acc = acc + 1
}

if(Boolean(telUsuario) == true){

    console.log(acc)

    if (acc == 10){
        alert('Su teléfono ingresado es válido');
        
    }else if(acc != 10){
        alert('Su teléfono ingresado es inválido');
    
    }
}else if (isNaN(telUsuario)){
    alert('Ingresar solo numeros');

}else if (telUsuario == '' ){
    alert('Por favor ingresar un telefono celular');
}