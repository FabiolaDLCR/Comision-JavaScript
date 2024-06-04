let carrera=['Domingo 12 de febrero', 'Parque La Mexicana', '8:00AM',]

function registro() {
let participantes = prompt ('Bienvenido al registo de corredores. Cuántas personas deseas registrar?');

for(let i=0; i<participantes; i++){ 
    let corredor = prompt ('ingrese nombre completo del participante')
    let edad= prompt('ingrese edad del participante')
    let talla= prompt ('ingresa talla de remera XS, S, M, L, XL')
    if(edad<18){
        alert('Este participante es menor de edad, para poder presentarse a la carrera debera asistir con la Carta Responsiva Para Menores de Edad que se encuentra descargable en nuestra pagina')   
    }
    console.log('Tu registro ya esta listo! verifica que los datos sean correctos ' + 'nombre: '+corredor+' edad= '+edad+' talla: '+talla)
}
}
registro()

let confirmacion= confirm ('¿Los datos de los participantes son correctos?');
if(confirmacion== false){
    registro()
}
else{
    let correo = prompt("Ingresa un correo electronico para recibir tus boletos para la carrera")
    console.log( 'Gracias por inscribirte a la carrera anual de la Ciudad de Mexico, tus boletos llegaran al correo: '+ correo)
}





