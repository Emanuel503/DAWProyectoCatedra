window.onload = cargarDepartamentos();

function cargarDepartamentos(){
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        
        if(this.readyState == 4 && this.readyState == 200){

            let departamento = JSON.parse(xhttp.responseText);

            mostrarDatos(departamento.nombre);

        }
    };
    xhttp.open('GET', '../js/departamentos.json', 'true');
    xhttp.send();
}

function mostrarDatos(nombre){

    var nombreDepartamento = document.getElementById('nombreDepartamento');

    nombreDepartamento.innerHTML=nombre;


}