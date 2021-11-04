window.onload = cargarDepartamentos();

function cargarDepartamentos(){
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        
        if(this.readyState == 4 && this.readyState == 200){
            console.log(this.responseText)
        }
    };

    xhttp.open('GET', '../js/departamentos.json', 'true');
    xhttp.send();
}