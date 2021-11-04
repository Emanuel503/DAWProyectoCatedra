window.onload = cargarDepartamentos();

function cargarDepartamentos(){
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        
        if(this.readyState == 4 && this.status == 200){

            let departamento = JSON.parse(xhttp.responseText);

            document.getElementById('nombreDepartamento').innerHTML=departamento[0].nombre;
            document.getElementById('imagenMapa').innerHTML='<img src="../img/"'+departamento[0].mapa+'">';

        }
    };
    xhttp.open('GET', '../js/departamentos.json', 'true');
    xhttp.send();
}
