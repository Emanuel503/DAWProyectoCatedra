window.onload = cargarDepartamentos();

function cargarDepartamentos(){
    
    $.ajax({
        url: '../js/departamentos.json ',
        method: 'GET'
    }).then(function(data) {

        data.forEach(function(item) {
            

            alert(item.nombre);

        });
        
    });
    
}
