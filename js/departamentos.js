window.onload = cargarDepartamentos();

function cargarDepartamentos(){
    
    $.ajax({
        url: '../js/departamentos.json ',
        method: 'GET'
    }).then(function(data) {

        document.getElementById('nombreDepartamento').innerHTML=data[0].nombre;
        document.getElementById('imagenMapa').innerHTML='<img src="../img/"'+data[0].mapa+'">';

    });
    
}
