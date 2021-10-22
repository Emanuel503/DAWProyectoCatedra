//JSON con los datos generales de cada departamento
var elsalvador = {
  "departamento":[
      {
          "nombre" : "Santa Ana",
          "capital" : "(Santa Ana)",
          "superficie" : "408.01 km²",
          "alcalde" : "Gustavo Acevedo",
          "partido" :"Nuevas Ideas",
          "poblacion" : "272.554 habitantes",
          "numMunicipios" : "13 municipios"
      },
      {
          "nombre" : "Ahuachapán",
          "capital" : "(Ahuachapán)",
          "superficie" : "244,8 km²",
          "alcalde" : "Juan Carlos Zepeda Marroquín",
          "partido" :"Nuevas Ideas",
          "poblacion" : "129.750 habitantes",
          "numMunicipios" : "12 municipios"
      },
      {
          "nombre" : "Sonsonate",
          "capital" : "(Sonsonate)",
          "superficie" : "232,5 km²",
          "alcalde" : "Rafael Arévalo",
          "partido" :"Nuevas Ideas",
          "poblacion" : "72.951 habitantes",
          "numMunicipios" : "16 municipios"
      },
      {   
         "nombre" : "Chalatenango",
         "capital" : "(Chalatenango)",
         "superficie" : "131,8 km²",
         "alcalde" : "Alfredo Hernández",
         "partido" :"Nuevas Ideas",
         "Área" : "0,75 km²", 
         "poblacion" : "21.102 habitantes",
         "numMunicipios": "33 municipios"
      },
      { 
        "nombre" : "La Libertad", 
        "capital" : "(Santa Tecla)",
        "superficie" : "1.653 km²",
        "alcalde" : "Adelio Ortiz Hernández", 
        "partido" :"Nuevas Ideas",
        "poblacion" : "843 500 habitantes",
        "numMunicipios" : "22 municipios"
      },
      { 
        "nombre" : "San Salvador",
        "capital" : "(San Salvador)",
        "superficie" : "72,25 km²",
        "alcalde" : "Mario Duran",
        "partido" :"Nuevas Ideas",
        "Área" : "886,15 kilómetros cuadrados",
        "poblacion": "2,750,600 habitantes",
        "numMunicipios": "19 municipios"
      },
      { 
        "nombre" : "Cuscatlán",
        "capital" : "(Cojutepeque)",
        "superficie": "756 km²",
        "alcalde": "Milagro Navas",
        "partido" :"Arena", 
        "poblacion" : "232,238 habitantes",
        "numMunicipios" : "22 municipios"
      },
      { 
        "nombre" : "La Paz",
        "capital" : "(Zacatecoluca)",
        "superficie" : "472 km²",
        "alcalde" : "Osy Swadhy Moreno López",
        "partido" :"Nuevas Ideas",
        "poblacion": "764,617 habitantes",
        "numMunicipios": "22 municipios"           
      },
      { 
        "nombre": "Cabañas",
        "capital" : "(Sensuntepeque)",
        "superficie": "1.104 km²",
        "alcalde" : "José Santos Alfaro Echeverría",
        "partido" :"Gana",
        "poblacion" : "215,400 habitantes",
        "numMunicipios": "9 municipios"
      },
      {
        "nombre" : "San Vicente",
        "capital" : "(San Vicente)",
        "superficie" : "1.184 km²",
        "alcalde" : "Roberto Barrientos",
        "partido" :"Nuevas Ideas",
        "poblacion" : "223,205 habitantes",
        "numMunicipios" : "13 municipios" 
      },
      {
        "nombre" : "Usuluán",
        "capital" : "(Usuluán)",
        "superficie" : "2.130 km²",
        "alcalde" : "Luis Ernesto Ayala Benítez",
        "partido" :"Nuevas Ideas",
        "poblacion" : "465,383 habitantes",
        "numMunicipios" : "23 municipios" 
      },
      {
        "nombre" : "San Miguel",
        "capital" : "(San Miguel)",
        "superficie" : "594 km²",
        "alcalde" : "José Wilfredo Salgado García",
        "partido" :"Gana",
        "poblacion" : "247,126 habitantes",
        "numMunicipios" : "20 municipios"             
      },
      { 
        "nombre" : "Morazán",
        "capital" : "(San Francisco Gotera)",
        "superficie" : "1.447 km²",
        "alcalde" : "Alfredo Gonzales",
        "partido" :"Nuevas Ideas",
        "poblacion" : "251,447 habitantes",
        "numMunicipios" : "26 municipios"
      },
      { 
        "nombre" : "La Unión",
        "capital" : "(La Unión)",
        "superficie" : "144,4 km²",
        "alcalde" : "Óscar Parada",
        "partido" :"Nuevas Ideas", 
        "poblacion" : "372,271 habitantes",
        "numMunicipios" : "18 municipios"
      }
  ]
};
//Arreglo donde se guardara el objetoComentario
var Arraycomentarios = [];
//Objeto Comentario el cual tendra las propiedades de los compos del fomulario de contacto
var objComentario = new Object();

//Obtencion del los elementos del html, guardandoles en su respectiva variable
var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var pais = document.getElementById('pais');
var comentario = document.getElementById('comentario');
var btnEnviar = document.getElementById('btnEnviar');
var errorNombre = document.getElementById('errorNombre');
var errorEmail = document.getElementById('errorEmail');
var errorPais = document.getElementById('errorPais');
var errorComentario= document.getElementById('errorComentario');

//Depden del nevegador, se agregara el evento correcpodiente
if(window.addEventListener){
  window.addEventListener("load", AgregarEventos, false);
}else if(window.attachEvent){
  window.attachEvent("onload", AgregarEventos);
}

//Funcion para agregar los eventos a lo elementos del html utilizando DOOM
function AgregarEventos(){

  btnEnviar.addEventListener('click', comprobarDatos, false);

}

//Funcion para comprobar y validar los datos introducidos en el fomulario
function comprobarDatos(){

  //Variable que guarda un valor booleano
  var guardar = false;

  //Expreciones regulares
  var expText = "";
  var expEmail = "";
  var expComen = "";

  //Comprobacion de datos utilizando expresiones regulares

  if(!nombre.value){
    nombre.className = "form-control is-invalid";
    errorNombre.innerHTML = "Ingrese el nombre";
    guardar=false;
  }else if(!expText.test(nombre.value)){
    nombre.className = "form-control is-invalid";
    errorNombre.innerHTML = "Nombre no valido";
    guardar=false;
  }else{
    nombre.className = "form-control";
    guardar=true;
  }

  if(!email.value){
    email.className = "form-control is-invalid";
    errorEmail.innerHTML = "Ingrese el email";
    guardar=false;
  }else if(!expEmail.test(email.value)){
    email.className = "form-control is-invalid";
    errorEmail.innerHTML = "Email no valido";
    guardar=false;
  }else{
    email.className = "form-control";
    guardar=true;
  }

  if(!pais.value){
    pais.className = "form-control is-invalid";
    errorPais.innerHTML = "Ingrese el país";
    guardar=false;
  }else if(!expText.test(pais.value)){
    nombre.className = "form-control is-invalid";
    errorNombre.innerHTML = "Pais no valido";
    guardar=false;
  }else{
    nombre.className = "form-control";
    guardar=true;
  }

  if(!comentario.value){
    comentario.className = "form-control is-invalid";
    errorComentario.innerHTML = "Ingrese el comentario";
    guardar=false;
  }else if(!expComen.test(comentario.value)){
    comentario.className = "form-control is-invalid";
    errorComentario.innerHTML = "Comentario no valido";
    guardar=false;
  }else{
    comentario.className = "form-control";
    guardar=true;
  }

  //Si la varaible guardar es verdadera se llamara la funcion 
  if(guardar){
    guardarDatos();
  }
}

//Funcion que guarda los datos en el objeto y luego lo guarda en un arreglo para almaceralo en un sessionStorage
function guardarDatos(){

  //Guarda los datos en su propiedad correspondiente del objeto
  objComentario.nombre = nombre.value;
  objComentario.email = email.value;
  objComentario.pais = pais.value;
  objComentario.comentario = comentario.value;

  //Guarda el objeto en el arreglo de datos
  Arraycomentarios.push(objComentario);
  
  //limpia el localStorage
  localStorage.clear();

  //Guarda el arreglo en el SessionStorage
  localStorage[Arraycomentarios];

}

//Funcion que muesta los comentarios que han sido registrados, que estan almacenados en el sessionStorage
function mostrarComentarios(){

}

//Funcion que permite editar el comenatario 
function editarComentario(){

}

//Funcion que elmina el comentario
function eliminarComentario(){

}