window.onload = cargarDepartamentos();

function cargarDepartamentos(){
    
    $.ajax({
        url: '../js/departamentos.json',
        method: 'GET'
    }).then(function(departamento) {

        var nombre = document.getElementById('nombreDepartamento');
        var mapa = document.getElementById('imagenMapa');

        nombre.innerHTML=departamento[0].nombre;
        mapa.innerHTML='<img src="../img/'+departamento[0].mapa+'">';

    });  
}