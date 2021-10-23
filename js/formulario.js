//Arreglo donde se guardara el objetoComentario
var Arraycomentarios = [];
//Objeto Comentario el cual tendra las propiedades de los compos del fomulario de contacto
var objComentario = new Object();

//Variable que guardara los comentarios para ser mostrados
var tabla="";

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
var comentariosRegistrados = document.getElementById('comentariosRegistrados');

//Depden del nevegador, se agregara el evento correcpodiente
if(window.addEventListener){
  window.addEventListener("load", AgregarEventos, false);
  mostrarComentarios();
}else if(window.attachEvent){
  window.attachEvent("onload", AgregarEventos);
  mostrarComentarios();
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
  var expText = "/[#$%&/{´+0-8{}()=]/gi";
  var expEmail = "/^[a-zA-Z0-9._`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i";
  var expComen = "/[#$%&/{+{}()=]/gi";

  //Comprobacion de datos utilizando expresiones regulares

  if(!nombre.value){
    nombre.className = "form-control is-invalid";
    errorNombre.innerHTML = "Ingrese el nombre";
    guardar=false;
  }else if(expText.test(nombre.value)){
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
  }else if(expText.test(pais.value)){
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
  }else if(expComen.test(comentario.value)){
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

  //Crea la tabla donde se mostaran los comentarios que se han gurdado en el localstorage
  tabla='<center><h2>Comentarios registrados</h2><center>';
  tabla+='<table class="table table-bordered table-striped" id="tableDatos">';
  tabla+='<thead>';
  tabla+='<tr>';
  tabla+='<th>Datos personales</th>';
  tabla+='<th>Comentario</th>';
  tabla+='<th>Editar</th>';
  tabla+='<th>Eliminar</th>';
  tabla+='</tr>';
  tabla+='</thead>';
  tabla+='<tbody>';

  tabla+='</tbody>';
  tabla+='</table>';
  
  //Inserta la taba en html
  comentariosRegistrados.innerHTML = tabla;
}

//Funcion que permite editar el comenatario 
function editarComentario(){

}

//Funcion que elmina el comentario
function eliminarComentario(){

}