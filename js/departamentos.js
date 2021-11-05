window.onload = cargarDepartamentos();

var id=localStorage.getItem("id");

function cargarDepartamentos(){

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

    $.ajax({
        url: '../js/departamentos.json',
        method: 'GET'
    }).then(function(departamento){

        var nombre = document.getElementById('nombreDepartamento');
        var mapa = document.getElementById('imagenMapa');
        var datosGenerales = document.getElementById('datosGenerales');
        var historia = document.getElementById('historia');
        var municipios = document.getElementById('municipios');
        var cultura = document.getElementById('cultura');
        var turismo = document.getElementById('turismo');
        var tradiciones = document.getElementById('tradiciones');

        //Nombre del departamento y mapa
        nombre.innerHTML=departamento[id].nombre;
        mapa.innerHTML='<img src="../img/'+departamento[id].mapa+'">';

        //Datos Generales
        datosGenerales.innerHTML+='<b>Nombre: </b>'+departamento[id].nombre+'<br>';
        datosGenerales.innerHTML+='<b>Capital: </b>'+departamento[id].capital+'<br>';
        datosGenerales.innerHTML+='<b>Superficie: </b>'+departamento[id].superficie+'<br>';
        datosGenerales.innerHTML+='<b>Alcalde: </b>'+departamento[id].alcalde+'<br>';
        datosGenerales.innerHTML+='<b>Poblacion: </b>'+departamento[id].poblacion+'<br>';
        datosGenerales.innerHTML+='<b>N° municipios: </b>'+departamento[id].municipios.numMunicipios;

        //Datos historicos e imagen
        historia.innerHTML+='<p>'+departamento[id].historia.infoHistoria+'</p>';
        historia.innerHTML+='<img class="img-fluid" src="../img/'+departamento[id].historia.imagenesHistoria+'">';

        //Municipios
        municipios.innerHTML+='<p>'+departamento[id].municipios.infoMunicipios+'</p>';
        municipios.innerHTML+='<ul>';
        for(var i=0; i<departamento[0].municipios.nombreMunicipios.length; i++){
            municipios.innerHTML+='<li>'+departamento[id].municipios.nombreMunicipios[i]+'</li>';
        }
        municipios.innerHTML+='</ul>';

        //Datos cultura e imagen
        cultura.innerHTML+='<p>'+departamento[id].cultura.infoCultura+'</p>';
        cultura.innerHTML+='<img class="img-fluid" src="../img/'+departamento[id].cultura.imagenesCultura+'">';

        //Datos turismo e imagen
        turismo.innerHTML+='<p>'+departamento[id].turismo.infoTurismo+'</p>';
        turismo.innerHTML+='<img class="img-fluid" src="../img/'+departamento[id].turismo.imgTurismo+'">';

        //Tradiciones info
        for(var i=0; i<departamento[id].tradiciones.infoTradiciones.length; i++){
            tradiciones.innerHTML+='<p>'+departamento[id].tradiciones.infoTradiciones[i]+'</p>';
            tradiciones.innerHTML+='<p>'+departamento[id].tradiciones.infoTradiciones[i]+'</p>';
        }
        //Tradiciones imagenes
        for(var i=0; i<departamento[id].tradiciones.imgTradiciones.length; i++){
            tradiciones.innerHTML+='<img class="img-fluid" src="../img/'+departamento[id].tradiciones.imgTradiciones[i]+'"><br>';
        }
    });
}