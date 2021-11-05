//Arreglo donde se guardara el objetoComentario
var Arraycomentarios = new Array();
var id=localStorage.getItem("id");

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

  $( "#santa-ana" ).on( "click", function() {
      localStorage.setItem("id", "0");
  });

  $( "#ahuachapan" ).on( "click", function() {
      localStorage.setItem("id", "1");
  });

  $( "#sonsonate" ).on( "click", function() {
      localStorage.setItem("id", "2");
  });

  $( "#chalatenango" ).on( "click", function() {
      localStorage.setItem("id", "3");
  });

  $( "#la-libertad" ).on( "click", function() {
      localStorage.setItem("id", "4");
  });

  $( "#san-salvador" ).on( "click", function() {
      localStorage.setItem("id", "5");
  });

  $( "#cuscatlan" ).on( "click", function() {
      localStorage.setItem("id", "6");
  });

  $( "#la-paz" ).on( "click", function() {
      localStorage.setItem("id", "7");
  });

  $( "#cabanas" ).on( "click", function() {
      localStorage.setItem("id", "8");
  });

  $( "#san-vicente" ).on( "click", function() {
      localStorage.setItem("id", "9");
  });

  $( "#usulutan" ).on( "click", function() {
      localStorage.setItem("id", "10");
  });

  $( "#san-miguel" ).on( "click", function() {
      localStorage.setItem("id", "11");
  });

  $( "#morazan" ).on( "click", function() {
      localStorage.setItem("id", "12");
  });

  $( "#la-union" ).on( "click", function() {
      localStorage.setItem("id", "13");
  });
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
  for (var i=0; i<Arraycomentarios.length;i++){
    tabla+='<tr>';
      tabla+='<td>'
      tabla+='Nombre: '+Arraycomentarios[i].nombre+'<br>';
      tabla+='Email: '+Arraycomentarios[i].email+'<br>';
      tabla+='País: '+Arraycomentarios[i].pais;
      tabla+='</td>';
      tabla+='<td>'
      tabla+=Arraycomentarios[i].comentario;
      tabla+='</td>';
      tabla+='<td>'
      tabla+='<img class="botones" id="'+i+'" src="../img/arrow-clockwise.svg" alt="Editar">';
      tabla+='</td>';
      tabla+='<td>'
      tabla+='<img class="botones" id="0'+i+'" src="../img/x-square-fill.svg" alt="Eliminar">';
      tabla+='</td>';
    tabla+='<tr>';
  }
  tabla+='</tbody>';
  tabla+='</table>';

  //Inserta la taba en html
  comentariosRegistrados.innerHTML = tabla;

   //Obtiene el elemento del html
  for (var i=0; i<Arraycomentarios.length;i++){
    var editar = document.getElementById(i);
    var eliminar = document.getElementById("0"+i);

    //agrega un evento click a las imagenes
    editar.addEventListener('click', editarComentario, false);
    eliminar.addEventListener('click', eliminarComentario, false);
  }
}

//Funcion que permite editar el comenatario 
function editarComentario(){

  nombre.value = Arraycomentarios[0].nombre;
  email.value = Arraycomentarios[0].email;
  pais.value = Arraycomentarios[0].pais;
  comentario.value = Arraycomentarios[0].comentario;

}

//Funcion que elmina el comentario
function eliminarComentario(){
  localStorage.clear();
  mostrarComentarios();
}