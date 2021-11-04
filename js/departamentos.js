window.onload = cargarDepartamentos();

function cargarDepartamentos(){
    
    $.ajax({
        url: '../js/departamentos.json',
        method: 'GET'
    }).then(function(departamento) {

        var nombre = document.getElementById('nombreDepartamento');
        var mapa = document.getElementById('imagenMapa');
        var datosHistoricos = document.getElementById('datosHistoricos');
        var datosGenerales = document.getElementById('datosGenerales');
        var historia = document.getElementById('historia');
        var municipios = document.getElementById('municipios');
        var cultura = document.getElementById('cultura');
        var turismo = document.getElementById('turismo');
        var tradiciones = document.getElementById('tradiciones');

        nombre.innerHTML=departamento[0].nombre;
        mapa.innerHTML='<img src="../img/'+departamento[0].mapa+'">';
        datosHistoricos.innerHTML=departamento[0].historia.infoHistoria;
        datosHistoricos.innerHTML+='<img class="img-fluid" src="../img/'+departamento[0].historia.imagenesHistoria+'">';
    });  
}