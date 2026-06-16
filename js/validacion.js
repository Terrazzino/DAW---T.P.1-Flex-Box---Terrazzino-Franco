//Formulario
const formulario = document.querySelector(".formulario")
const mensajeExitoso = document.querySelector(".mensaje-exitoso")
const datosUsuario = document.querySelector(".datos-usuario")
const mensajeBienvenida = document.querySelector(".mensaje-bienvenida")

//Inputs
const inputNombre = document.getElementById("nombre");
const inputEmail = document.getElementById("email");
const inputContraseña = document.getElementById("contraseña");
const inputContraseñaDos = document.getElementById("contraseña-dos");
const inputEdad = document.getElementById("edad");
const inputTelefono = document.getElementById("telefono");
const inputDireccion = document.getElementById("direccion");
const inputCiudad = document.getElementById("ciudad");
const inputCp = document.getElementById("cp");
const inputDni = document.getElementById("dni");

//Leyendas de validación
const pNombre = document.querySelector(".leyenda-nombre");
const pEmail =document.querySelector(".leyenda-email");
const pContraseña =document.querySelector(".leyenda-contraseña");
const pContraseñaDos =document.querySelector(".leyenda-contraseña-dos");
const pEdad =document.querySelector(".leyenda-edad");
const pTelefono =document.querySelector(".leyenda-telefono");
const pDireccion =document.querySelector(".leyenda-direccion");
const pCiudad =document.querySelector(".leyenda-ciudad");
const pCp =document.querySelector(".leyenda-cp");
const pDni =document.querySelector(".leyenda-dni");

//Validacion de contraseña
const validacionAlfanumerica = /^[a-zA-Z09]+$/;

//Estados de los campos
let estadoNombre = false;
let estadoEmail = false;
let estadoContraseña = false;
let estadoContraseñaDos = false;
let estadoEdad = false;
let estadoTelefono = false;
let estadoDireccion = false;
let estadoCiudad = false;
let estadoCp = false;
let estadoDni = false;


//Funciones BLUR
inputNombre.addEventListener("blur", () => {
    const nombre = inputNombre.value.trim();
    if(nombre === ""){
        console.log("El campo nombre debe estar completo.");
        pNombre.textContent="El campo debe estar completo.";
        pNombre.style.color="red";
        estadoNombre=false;
    }
    else if(!nombre.includes(" ")){
        console.log("Debes escribir tu nombre completo.");
        pNombre.textContent="Debes escribir el nombre completo.";
        pNombre.style.color="red";
        estadoNombre=false;
    }
    else if(nombre.length<6){
        console.log("Debe tener más de 6 caracteres");
        pNombre.textContent="Debe tener más de 6 caracteres.";
        pNombre.style.color="red";
        estadoNombre=false;
    }
    else{
        console.log("El nombre es correcto.");
        pNombre.textContent="El nombre es correcto";
        pNombre.style.color="green";
        pNombre.style.fontWeight="bold";
        estadoNombre=true;
    }
});

inputEmail.addEventListener("blur",()=>{
    const email = inputEmail.value.trim();
    if(!email.includes("@")){
        console.log("El formato de email no es correcto")
        pEmail.textContent="El formato de email no es correcto";
        pEmail.style.color="red";
        estadoEmail=false;
    }
    else{
        console.log("Email correcto");
        pEmail.textContent="El formato de email es correcto";
        pEmail.style.color="green";
        pEmail.style.fontWeight="bold";
        estadoEmail=true;
    }
})

inputContraseña.addEventListener("blur",()=>{
    const contraseña = inputContraseña.value.trim();
    if(contraseña.length<8){
        console.log("La contraseña debe tener minimo 8 caracteres");
        pContraseña.textContent="La contraseña debe tener minimo 8 caracteres";
        pContraseña.style.color="red";
        estadoContraseña=false;
    }
    if(validacionAlfanumerica.test(contraseña)){
        console.log("La contraseña debe incluir caracteres y numeros.");
        pContraseña.textContent="La contraseña debe incluir caracteres y numeros";
        pContraseña.style.color="red"
        estadoContraseña=false;
    }
    else{
        console.log("La contraseña es correcta");
        pContraseña.textContent="La contraseña es correcta";
        pContraseña.style.color="green";
        pContraseña.style.fontWeight="bold";
        estadoContraseña=true;
    }
});

inputContraseñaDos.addEventListener("blur",()=>{
    const contraseña = inputContraseña.value.trim();
    const contraseñaDos = inputContraseñaDos.value.trim();
    if(contraseña!=contraseñaDos){
        console.log("La contraseña no coincide");
        pContraseñaDos.textContent="La contraseña no coincide";
        pContraseñaDos.style.color="red";
        estadoContraseñaDos=false;
    }
    else{
        console.log("La contraseña coincide");
        pContraseñaDos.textContent="Las contraseñas coinciden";
        pContraseñaDos.style.color="green";
        pContraseñaDos.style.fontWeight="bold";
        estadoContraseñaDos=true;
    }
});

inputEdad.addEventListener("blur",()=>{
    const edad = +inputEdad.value.trim();
    if(edad<18){
        console.log("La edad debe ser mayor a 18");
        pEdad.textContent="La edad debe ser mayor a 18";
        pEdad.style.color="red";
        estadoEdad=false;
    }
    else{
        console.log("La edad es correcta");
        pEdad.textContent="La edad es correcta";
        pEdad.style.color="green";
        pEdad.style.fontWeight="bold";
        estadoEdad=true;
    }
});

inputTelefono.addEventListener("blur",()=>{
    const telefono = inputTelefono.value.trim();
    if(telefono.includes(" ") || telefono.includes("-")){
        console.log("No se aceptan espacios ni guiones.");
        pTelefono.textContent="No se aceptan espacios ni guiones";
        pTelefono.style.color="red";
        estadoTelefono=false;
    }
    else if(telefono.length<7){
        console.log("No puede contener menos de 7 caracteres.");
        pTelefono.textContent="No puede contener menos de 7 caracteres";
        pTelefono.style.color="red";
        estadoTelefono=false;
    }
    else{
        console.log("El número es correcto.");
        pTelefono.textContent="El numero es correcto";
        pTelefono.style.color="green";
        pTelefono.style.fontWeight="bold";
        estadoTelefono=true;
    }
});

inputDireccion.addEventListener("blur",()=>{
    const direccion = inputDireccion.value.trim();
    if(!direccion.includes(" ") || validacionAlfanumerica.test(direccion)){
        console.log("El formato de la dirección es incorrecta.");
        pDireccion.textContent="El formato de la direccion es incorrecto.";
        pDireccion.style.color="red";
        estadoDireccion=false;
    }
    else{
        console.log("Dirección correcta");
        pDireccion.textContent="Dirección correcta";
        pDireccion.style.color="green";
        pDireccion.style.fontWeight="bold";
        estadoDireccion=true;
    }
});

inputCiudad.addEventListener("blur",()=>{
    const ciudad = inputCiudad.value.trim();
    if(ciudad.length<3){
        console.log("La ciudad debe tener minimo 3 caracteres");
        pCiudad.textContent="La ciudad debe tener minimo 3 caracteres";
        pCiudad.style.color="red";
        estadoCiudad=false;
    }
    else{
        console.log("La ciudad es correcta");
        pCiudad.textContent="La ciudad es correcta";
        pCiudad.style.color="green";
        pCiudad.style.fontWeight="bold";
        estadoCiudad=true;
    }
});

inputCp.addEventListener("blur",()=>{
    const cp = inputCp.value.trim();
    if(cp.length<3){
        console.log("El codigo postal debe contener 3 caracteres");
        pCp.textContent="El codigo postal debe contener minimo 3 caracteres";
        pCp.style.color="red";
        estadoCp=false;
    }
    else{
        console.log("El codigo postal es correcto");
        pCp.textContent="El codigo postal es correcto";
        pCp.style.color="green";
        pCp.style.fontWeight="bold";
        estadoCp=true;
    }
});

inputDni.addEventListener("blur",()=>{
    const dni = inputDni.value.trim();
    if(dni.length<7 || dni.length>8){
        console.log("El DNI es incorrecto");
        pDni.textContent="El DNI es incorrecto";
        pDni.style.color="red";
        estadoDni=false;
    }
    else{
        console.log("El DNI es correcto");
        pDni.textContent="El DNI es correcto";
        pDni.style.color="green";
        pDni.style.fontWeight="bold";
        estadoDni=true;
    }
});

//Funcion FOCUS
inputNombre.addEventListener("focus",()=>{
    pNombre.textContent="";
});

inputEmail.addEventListener("focus",()=>{
    pEmail.textContent="";
});

inputContraseña.addEventListener("focus",()=>{
    pContraseña.textContent="";
})

inputContraseñaDos.addEventListener("focus",()=>{
    pContraseñaDos.textContent="";
});

inputEdad.addEventListener("focus",()=>{
    pEdad.textContent="";
});

inputTelefono.addEventListener("focus",()=>{
    pTelefono.textContent="";
});

inputDireccion.addEventListener("focus",()=>{
    pDireccion.textContent="";
});

inputCiudad.addEventListener("focus",()=>{
    pCiudad.textContent="";
});

inputCp.addEventListener("focus",()=>{
    pCp.textContent="";
});

inputDni.addEventListener("focus",()=>{
    pDni.textContent="";
});

//BOTON ENVIAR
formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    var validacion = true;
    mensajeExitoso.style.display = "none";
    if(estadoNombre && 
        estadoEmail && 
        estadoContraseña && 
        estadoContraseñaDos && 
        estadoEdad && 
        estadoTelefono &&
        estadoDireccion && 
        estadoCiudad && 
        estadoCp && 
        estadoDni){
            mensajeExitoso.style.display="block";
            datosUsuario.innerHTML="<b>Nombre</b>: <p>"+inputNombre.value +"</p><br>"+
            "<b>Email</b>: <p>"+inputEmail.value +"</p><br>"+
            "<b>Edad</b>: <p>"+inputEdad.value +"</p><br>"+
            "<b>Telefono</b>: <p>"+inputTelefono.value +"</p><br>"+
            "<b>Direccion</b>: <p>"+inputDireccion.value +"</p><br>"+
            "<b>Ciudad</b>: <p>"+inputCiudad.value +"</p><br>"+
            "<b>Codigo Postal</b>: <p>"+inputCp.value +"</p><br>"+
            "<b>DNI</b>: <p>"+inputDni.value +"</p><br>";
            formulario.reset();
    }
    else{
        validacion=false
    }
});

inputNombre.addEventListener("keyup",()=>{
        let nombre = inputNombre.value;
        mensajeBienvenida.innerHTML='<p><b>Bievenido:</b> '+nombre+"</p>";    
});