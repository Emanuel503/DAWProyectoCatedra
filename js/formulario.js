//Arreglo donde se guardara el objetoComentario
var Arraycomentarios = new Array();

//Variable que guarda del localstorage el id del departamento al que se le dio click
var id=localStorage.getItem("id");

//Varible que guarda el numero de fila para editar o borrar el registro
var fila;

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

  btnEnviar.addEventListener('click', guardarDatos, false);

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

//Funcion que guarda los datos en el objeto y luego lo guarda en un arreglo para almaceralo en un localStorage
function guardarDatos(){

  if(comprobarDatos()==true){

    //Objeto Comentario el cual tendra las propiedades de los compos del fomulario de contacto
    var objComentario = new Object();
    //Guarda los datos en su propiedad correspondiente del objeto
    objComentario.nombre = nombre.value;
    objComentario.email = email.value;
    objComentario.pais = pais.value;
    objComentario.comentario = comentario.value;

    nombre.value="";
    email.value="";
    pais.value="";
    comentario.value="";

    //Guarda el objeto en el arreglo de datos
    Arraycomentarios.push(objComentario);

    //Guarda el arreglo en el localstorage
    localStorage.setItem('localComentarios', JSON.stringify(Arraycomentarios));

    mostrarComentarios();
  }
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
    return(false);
  }else if(expText.test(nombre.value)){
    nombre.className = "form-control is-invalid";
    errorNombre.innerHTML = "Nombre no valido";
    return(false);
  }else{
    nombre.className = "form-control";
  }

  if(!email.value){
    email.className = "form-control is-invalid";
    errorEmail.innerHTML = "Ingrese el email";
    return(false);
  }else if(!expEmail.test(email.value)){
    email.className = "form-control is-invalid";
    errorEmail.innerHTML = "Email no valido";
    return(false);
  }else{
    email.className = "form-control";
  }

  if(!pais.value){
    pais.className = "form-control is-invalid";
    errorPais.innerHTML = "Ingrese el país";
    return(false);
  }else if(expText.test(pais.value)){
    pais.className = "form-control is-invalid";
    errorPais.innerHTML = "Pais no valido";
    return(false);
  }else{
    pais.className = "form-control";
  }

  if(!comentario.value){
    comentario.className = "form-control is-invalid";
    errorComentario.innerHTML = "Ingrese el comentario";
    return(false);
  }else if(expComen.test(comentario.textContent)){
    comentario.className = "form-control is-invalid";
    errorComentario.innerHTML = "Comentario no valido";
    return(false);
  }else{
    comentario.className = "form-control";
  }

  return(true);

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
  tabla+='<th>ID</th>';
  tabla+='<th>Datos personales</th>';
  tabla+='<th>Comentario</th>';
  tabla+='<th>Opciones</th>';
  tabla+='</tr>';
  tabla+='</thead>';
  tabla+='<tbody>';
  for (var i=0; i<Arraycomentarios.length;i++){
    tabla+='<tr>';
      tabla+='<td>'
      tabla+=(i+1);
      tabla+='</td>'
      tabla+='<td>'
      tabla+='Nombre: '+Arraycomentarios[i].nombre+'<br>';
      tabla+='Email: '+Arraycomentarios[i].email+'<br>';
      tabla+='País: '+Arraycomentarios[i].pais;
      tabla+='</td>';
      tabla+='<td>'
      tabla+=Arraycomentarios[i].comentario;
      tabla+='</td>';
      tabla+='<td>'
      tabla+='<center><button type="button" data-toggle="modal" data-target="#exampleModal" class="btn btn-success" id="editar">Editar</button>   ';
      tabla+='<button class="btn btn-danger" id="eliminar">Eliminar</button></center>';
      tabla+='</td>';
    tabla+='<tr>';
  }
  tabla+='</tbody>';
  tabla+='</table>';

  //Inserta la taba en html
  comentariosRegistrados.innerHTML = tabla;

}

//Editar comentario
$(document).on("click", ".btn-success", function(){

  fila = $(this).closest("tr");
  id = (parseInt(fila.find('td:eq(0)').text()));
  
  id=id-1;

  nombre.value=Arraycomentarios[id].nombre;
  email.value=Arraycomentarios[id].email;
  pais.value=Arraycomentarios[id].pais;
  comentario.value=Arraycomentarios[id].comentario;

  comprobarDatos();

  $("#btnEnviar").css('display', 'none');
  $("#btnGuardar").css('display', 'inline-block');
  $("#btnCancelar").css('display', 'inline-block');

  localStorage.setItem('idComentarioEditar', id);

});

$( "#btnGuardar" ).on( "click", function(){

  idComentarioEditar = localStorage.getItem("idComentarioEditar");
  Arraycomentarios[idComentarioEditar].nombre = nombre.value;
  Arraycomentarios[idComentarioEditar].email = email.value;
  Arraycomentarios[idComentarioEditar].pais = pais.value;
  Arraycomentarios[idComentarioEditar].comentario = comentario.value;

  localStorage.setItem('localComentarios', JSON.stringify(Arraycomentarios));

  mostrarComentarios();

  $("#btnEnviar").css('display', 'inline-block');
  $("#btnGuardar").css('display', 'none');
  $("#btnCancelar").css('display', 'none');

  nombre.value="";
  email.value="";
  pais.value="";
  comentario.value="";

});

//Eliminar comentario
$(document).on("click", ".btn-danger", function(){

  fila = $(this).closest("tr");
  id = (parseInt(fila.find('td:eq(0)').text()));
  
  id=id-1;

  Arraycomentarios.splice(id);

  localStorage.setItem('localComentarios', JSON.stringify(Arraycomentarios));
  
  mostrarComentarios();
});