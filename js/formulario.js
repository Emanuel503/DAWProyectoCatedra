//Arreglo donde se guardara el objetoComentario
var Arraycomentarios = new Array();

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


//Depende del nevegador, se agregara el evento correspodiente
if(window.addEventListener){
  window.addEventListener("load", AgregarEventos, false);
  mostrarComentarios();
}else if(window.attachEvent){
  window.attachEvent("onload", AgregarEventos);
  mostrarComentarios();
}

//Funcion para agregar los evento al boton
function AgregarEventos(){
  btnEnviar.addEventListener('click', comprobarDatos, false);
}

//Funcion para comprobar y validar los datos introducidos en el fomulario
function comprobarDatos(){

  //Expreciones regulares
  expText = /[#$%&/{+0-8{}()=]/gi;
  expEmail = /^[a-zA-Z0-9._`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;
  expComen = /[#$%&/{+{}()=]/gi;

  //Comprobacion de datos utilizando expresiones regulares

  if(!nombre.value){
    nombre.className = "form-control is-invalid";
    errorNombre.innerHTML = "Ingrese el nombre";
    return;
  }else if(expText.test(nombre.value)){
    nombre.className = "form-control is-invalid";
    errorNombre.innerHTML = "Nombre no valido";
    return;
  }else{
    nombre.className = "form-control";
  }

  if(!email.value){
    email.className = "form-control is-invalid";
    errorEmail.innerHTML = "Ingrese el email";
    return;
  }else if(!expEmail.test(email.value)){
    email.className = "form-control is-invalid";
    errorEmail.innerHTML = "Email no valido";
    return;
  }else{
    email.className = "form-control";
  }

  if(!pais.value){
    pais.className = "form-control is-invalid";
    errorPais.innerHTML = "Ingrese el país";
    return;
  }else if(expText.test(pais.value)){
    pais.className = "form-control is-invalid";
    errorPais.innerHTML = "Pais no valido";
    return;
  }else{
    pais.className = "form-control";
  }

  if(!comentario.value){
    comentario.className = "form-control is-invalid";
    errorComentario.innerHTML = "Ingrese el comentario";
    return;
  }else if(expComen.test(comentario.textContent)){
    comentario.className = "form-control is-invalid";
    errorComentario.innerHTML = "Comentario no valido";
    return;
  }else{
    comentario.className = "form-control";
  }

  //Si los datos son validos se gurdaran los datos
  guardarDatos();

  nombre.value="";
  email.value="";
  pais.value="";
  comentario.value="";

}

//Funcion que guarda los datos en el objeto y luego lo guarda en un arreglo para almaceralo en un localStorage
function guardarDatos(){

  //Objeto Comentario el cual tendra las propiedades de los compos del fomulario de contacto
  var objComentario = new Object();
  //Guarda los datos en su propiedad correspondiente del objeto
  objComentario.nombre = nombre.value;
  objComentario.email = email.value;
  objComentario.pais = pais.value;
  objComentario.comentario = comentario.value;

  //Guarda el objeto en el arreglo de datos
  Arraycomentarios.push(objComentario);

  //Guarda el arreglo en el localstorage
  localStorage.setItem('localComentarios', JSON.stringify(Arraycomentarios));

  mostrarComentarios();
}

//Funcion que muesta los comentarios que han sido registrados, que estan almacenados en el localStorage
function mostrarComentarios(){

  //obtiene los datos del localStorage
  var ComentariosAlmacenados = localStorage.getItem('localComentarios');
  if(ComentariosAlmacenados==null){
    Arraycomentarios=[];
  }else{
    Arraycomentarios = JSON.parse(ComentariosAlmacenados)
  }

  //Variable que guardara los comentarios para ser mostrados
  var tabla="";

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
  for (var dato in Arraycomentarios){
    tabla+='<tr>';
      tabla+='<td>'
      tabla+='Nombre: '+Arraycomentarios[dato].nombre+'<br>';
      tabla+='Email: '+Arraycomentarios[dato].email+'<br>';
      tabla+='País: '+Arraycomentarios[dato].pais;
      tabla+='</td>';
      tabla+='<td>'
      tabla+=Arraycomentarios[dato].comentario;
      tabla+='</td>';
      tabla+='<td>'
      tabla+='<img class="botones" id="editar" src="../img/arrow-clockwise.svg" alt="Editar">';
      tabla+='</td>';
      tabla+='<td>'
      tabla+='<img class="botones" id="eliminar" src="../img/x-square-fill.svg" alt="Eliminar">';
      tabla+='</td>';
    tabla+='<tr>';
  }
  tabla+='</tbody>';
  tabla+='</table>';

  //Inserta la taba en html
  comentariosRegistrados.innerHTML = tabla;

  //Obtiene el elemento del html
  var editar = document.getElementById('editar');
  var eliminar = document.getElementById('eliminar');

  //agrega un evento click a las imagenes
  editar.addEventListener('click', editarComentario, false);
  eliminar.addEventListener('click', eliminarComentario, false);
}

//Funcion que permite editar el comenatario 
function editarComentario(){

  alert("Me toco");

}

//Funcion que elmina el comentario
function eliminarComentario(){
  alert("Me toco");
}